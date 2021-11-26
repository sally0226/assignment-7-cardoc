import { IsString, IsNotEmpty } from "class-validator";

export class CreateUserDTO {
	@IsString()
	@IsNotEmpty()
	user_id!: string;

	@IsString()
	@IsNotEmpty()
	password!: string;
}
