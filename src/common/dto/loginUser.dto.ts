import { IsString, IsNotEmpty } from "class-validator";

export class LoginUserDTO {
	@IsString()
	@IsNotEmpty()
	id!: string;

	@IsString()
	@IsNotEmpty()
	password!: string;
}
