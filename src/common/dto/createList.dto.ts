import { Type } from "class-transformer";
import {
	ArrayMaxSize,
	ArrayMinSize,
	IsArray,
	ValidateNested
} from "class-validator";
import { ListElementDTO } from "./ListElement.dto";

export class CreateListDTO {
	@IsArray()
	@ValidateNested()
	@Type(() => ListElementDTO)
	@ArrayMinSize(1)
	@ArrayMaxSize(5)
	list: ListElementDTO[];
}