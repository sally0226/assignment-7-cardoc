import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Cars } from "./cars.entity";
import { CarsRepository } from "./cars.repository";

@Injectable()
export class CarsService {
	constructor(
		private readonly carsRepository: CarsRepository,
		private httpService: HttpService
	) {}

	async findCar(trim_id: number): Promise<Cars> {
		const existedInfo = await this.carsRepository.findCar(trim_id);
		if (existedInfo) return existedInfo;

		const newInfo = await this.getCarInfo(trim_id);
		if (newInfo) return newInfo;

		return null;
	}

	async getCarInfo(trim_id: number) {
		const url = `https://dev.mycar.cardoc.co.kr/v1/trim/${trim_id}`;

		const responseData = await lastValueFrom(
			this.httpService
				.get(url)
				.pipe(map((response) => response.data?.spec?.driving))
		);

		const frontTire = responseData.frontTire?.value;
		if (frontTire) {
			const values = frontTire.split(/R|\//); // [폭, 편평비, 휠사이즈]
			return await this.carsRepository.createOne(trim_id, values);
		}

		return null;
	}
}
