import {
	Body,
	Controller,
	HttpCode,
	Post,
	Req,
	UseGuards
} from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { LocalAuthGuard } from "../auth/guards/local-auth.guard";
import { CreateUserDTO } from "../../common/dto/createUser.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
	constructor(
		private readonly userService: UsersService,
		private readonly authService: AuthService
	) {}

	@Post("signup")
	@HttpCode(200)
	async signUp(@Body() body: CreateUserDTO) {
		return await this.userService.create(body);
	}

	@UseGuards(LocalAuthGuard)
	@Post("signin")
	@HttpCode(200)
	async signIn(@Req() req) {
		return this.authService.issueToken(req.user);
	}
}
