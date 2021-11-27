import { Type } from "class-transformer";
import {
	ArrayMaxSize,
	ArrayMinSize,
	IsArray,
	IsNotEmpty,
	IsNumber,
	IsString,
	ValidateNested
} from "class-validator";

export class CreateListDTO {
	@IsArray()
	@ValidateNested()
	@Type(() => Element)
	@ArrayMinSize(1)
	@ArrayMaxSize(5)
	list: Element[];
}

class Element {
	@IsString()
	@IsNotEmpty()
	id: string;

	@IsNumber()
	@IsNotEmpty()
	trimId: number;
}
