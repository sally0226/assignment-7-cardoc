import { BadRequestException, Injectable } from "@nestjs/common";
import { CarsService } from "../cars/cars.service";
import { UsersRepository } from "../users/users.repository";
import { ResponseListDTO } from "./dto/responseList.dto";
import { OwnedListsRepository } from "./owned-lists.repository";

@Injectable()
export class OwnedListsService {
	constructor(
		private readonly ownedListsRepository: OwnedListsRepository,
		private readonly usersRepository: UsersRepository,
		private readonly carsService: CarsService
	) {}
	async createOwnedLists(list) {
		let flag = false;
		const result = await Promise.all(
			list.map(async (elem) => {
				const user = await this.usersRepository.findUser(elem.id);
				if (!user) {
					return "존재하지 않는 사용자입니다.";
				}
				const car = await this.carsService.findCar(elem.trimId);
				if (!car) {
					return "존재하지 않는 자동차입니다.";
				}
				flag = true;
				const newOne = await this.ownedListsRepository.createOne(user, car);
				return { id: newOne.user.user_id, trimId: newOne.car.trim_id };
			})
		);
		if (!flag) {
			throw new BadRequestException(result);
		}
		return result;
	}

	async getUsersList(user_id: string) {
		const result = await this.ownedListsRepository.findUsersList(user_id);
		return result.map((elem) => new ResponseListDTO(elem));
	}
}
