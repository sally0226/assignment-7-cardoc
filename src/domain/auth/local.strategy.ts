import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({ usernameField: "user_id" });
	}

	async validate(user_id: string, password: string): Promise<any> {
		const user = await this.authService.validateUser(user_id, password);
		if (!user) {
			return null;
		}
		return user;
	}
}
