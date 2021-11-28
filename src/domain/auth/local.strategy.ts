import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({ usernameField: "id" });
	}

	async validate(id: string, password: string): Promise<any> {
		const user = await this.authService.validateUser(id, password);
		if (!user) {
			throw new UnauthorizedException("로그인 정보를 확인해주세요");
		}
		return user;
	}
}
