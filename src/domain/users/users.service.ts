import { Injectable } from "@nestjs/common";
import { DuplicatedUserException } from "src/global/exceptions/DuplicatedUser.exception";
import { AuthService } from "../auth/auth.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
	constructor(
		private readonly usersRepository: UsersRepository,
		private readonly authService: AuthService
	) {}

	async create(body: CreateUserDto) {
		const existed = await this.usersRepository.findUser(body.user_id);
		if (existed) {
			throw new DuplicatedUserException();
		}
		const user = await this.usersRepository.createUser(body);
		return this.authService.issueToken(user);
	}
}
