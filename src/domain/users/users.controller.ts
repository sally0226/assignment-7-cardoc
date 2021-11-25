import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { LocalAuthGuard } from "../auth/guards/locah-auth.guard";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
	constructor(
		private readonly userService: UsersService,
		private readonly authService: AuthService
	) {}

	@Post("signup")
	async signUp(@Body() body: CreateUserDto) {
		return await this.userService.create(body);
	}

	@UseGuards(LocalAuthGuard)
	@Post("signin")
	async signIn(@Req() req) {
		return this.authService.issueToken(req.user);
	}
}
