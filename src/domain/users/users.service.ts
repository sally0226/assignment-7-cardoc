import { BadRequestException, Injectable } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { CreateUserDTO } from "../../common/dto/createUser.dto";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
	constructor(
		private readonly usersRepository: UsersRepository,
		private readonly authService: AuthService
	) {}

	async create(body: CreateUserDTO) {
		const existed = await this.usersRepository.findUser(body.id);
		if (existed) {
			throw new BadRequestException("중복된 id입니다.");
		}
		const user = await this.usersRepository.createUser(body);
		return this.authService.issueToken(user);
	}
}
