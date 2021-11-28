import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";
import { Cars } from "../../entity/cars.entity";
import { CarsRepository } from "./cars.repository";

@Injectable()
export class CarsService {
	constructor(
		private readonly carsRepository: CarsRepository,
		private httpService: HttpService
	) {}

	async findCar(trimId: number): Promise<Cars> {
		const existedInfo = await this.carsRepository.findCar(trimId);
		if (existedInfo) return existedInfo;
		const newInfo = await this.getCarInfo(trimId);
		if (newInfo) return newInfo;

		return null;
	}

	async getCarInfo(trimId: number) {
		const url = `https://dev.mycar.cardoc.co.kr/v1/trim/${trimId}`;
		try {
			const responseData = await lastValueFrom(
				this.httpService
					.get(url)
					.pipe(map((response) => response.data?.spec?.driving))
			);
			const frontTire = responseData.frontTire?.value;
			const rearTire = responseData.rearTire?.value;
			if (!frontTire && !rearTire) return null;
			const frontInfo = frontTire ? frontTire.split(/R|\//) : null; // [폭, 편평비, 휠사이즈]
			const rearInfo = rearTire ? rearTire.split(/R|\//) : null;
			const result = await this.carsRepository.createOne(trimId, frontInfo, rearInfo);
			return result;
		} catch (error) {
			return null;
		}
	}
}
