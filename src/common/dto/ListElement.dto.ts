import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class ListElementDTO {
	@IsString()
	@IsNotEmpty()
	id: string;

	@IsNumber()
	@IsNotEmpty()
	trimId: number;
}
