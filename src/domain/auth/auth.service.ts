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

	async validateUser(id: string, pass: string): Promise<any> {
		const user = await this.usersRepository.findUser(id);
		if (user) {
			const isCorrectPw = await bcrypt.compare(pass, user.password);
			if (isCorrectPw) {
				const { password, ...result } = user;
				return result;
			}
		}
		return null;
	}

	async issueToken(user: any) {
		const payload = { id: user.id };
		return {
			access_token: this.jwtService.sign(payload)
		};
	}
}
