import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersRepository } from "../users/users.repository";
import * as bcrypt from "bcrypt";
@Injectable()
export class AuthService {
	constructor(
		private usersRepository: UsersRepository,
		private jwtService: JwtService
	) {}

	async validateUser(user_id: string, pass: string): Promise<any> {
		const user = await this.usersRepository.findUser(user_id);
		if (user && bcrypt.compare(user.password, pass)) {
			const { password, ...result } = user;
			return result;
		}
		return null;
	}

	async issueToken(user: any) {
		const payload = { user_id: user.user_id };
		return {
			access_token: this.jwtService.sign(payload)
		};
	}
}
