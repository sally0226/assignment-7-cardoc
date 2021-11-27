import { OwnedLists } from "../owned-lists.entity";

export class ResponseListDTO {
	list_id: number;
	user_id: string;
	trim_id: number;
	width: number;
	aspect_ratio: number;
	rim_diameter: number;
	constructor(entity: OwnedLists) {
		this.list_id = entity.list_id;
		this.user_id = entity.user.user_id;
		this.trim_id = entity.car.trim_id;
		this.width = entity.car.width;
		this.aspect_ratio = entity.car.aspect_ratio;
		this.rim_diameter = entity.car.rim_diameter;
	}
}
