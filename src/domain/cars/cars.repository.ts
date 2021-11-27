import { EntityRepository, Repository } from "typeorm";
import { Cars } from "./cars.entity";

@EntityRepository(Cars)
export class CarsRepository extends Repository<Cars> {
	async findCar(trim_id: number): Promise<Cars> {
		return await this.findOne({ trim_id });
	}
	async createOne(trim_id: number, values: Array<string>) {
		const car = new Cars();
		car.trim_id = trim_id;
		car.width = Number(values[0]);
		car.aspect_ratio = Number(values[1]);
		car.rim_diameter = Number(values[2]);
		return await this.save(car);
	}
}
