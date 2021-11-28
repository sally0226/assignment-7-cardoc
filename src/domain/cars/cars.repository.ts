import { EntityRepository, Repository } from "typeorm";
import { Cars } from "../../entity/cars.entity";

@EntityRepository(Cars)
export class CarsRepository extends Repository<Cars> {
	async findCar(trimId: number): Promise<Cars> {
		return await this.findOne({ trimId });
	}
	async createOne(trimId: number, frontInfo: Array<string>, rearInfo: Array<string>) {
		const car = new Cars();
		car.trimId = trimId;
		if (frontInfo) {
			car.frontWidth = Number(frontInfo[0]);
			car.frontAspectRatio = Number(frontInfo[1]);
			car.frontRimDiameter = Number(frontInfo[2]);
		}
		if (rearInfo) {
			car.rearWidth = Number(rearInfo[0]);
			car.rearAspectRatio = Number(rearInfo[1]);
			car.rearRimDiameter = Number(rearInfo[2]);
		}
		const result = await this.save(car);
		return result;
	}
}
