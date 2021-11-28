import { IsString, IsNotEmpty } from "class-validator";

export class CreateUserDTO {
	@IsString()
	@IsNotEmpty()
	id!: string;

	@IsString()
	@IsNotEmpty()
	password!: string;
}
