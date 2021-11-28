import { OwnedLists } from "../../entity/owned-lists.entity";

export class ResponseListDTO {
	listId: number;
	id: string;
	trimId: number;
	frontWidth: number;
	frontAspectRatio: number;
	frontRimDiameter: number;
	rearWidth: number;
	rearAspectRatio: number;
	rearRimDiameter: number;
	constructor(entity: OwnedLists) {
		this.listId = entity.listId;
		this.id = entity.user.id;
		this.trimId = entity.car.trimId;
		this.frontWidth = entity.car.frontWidth;
		this.frontAspectRatio = entity.car.frontAspectRatio;
		this.frontRimDiameter = entity.car.frontRimDiameter;
		this.rearWidth = entity.car.rearWidth;
		this.rearAspectRatio = entity.car.rearAspectRatio;
		this.rearRimDiameter = entity.car.rearRimDiameter;
	}
}
