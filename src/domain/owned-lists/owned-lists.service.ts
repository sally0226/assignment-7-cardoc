import { BadRequestException, Injectable } from "@nestjs/common";
import { CarsService } from "../cars/cars.service";
import { UsersRepository } from "../users/users.repository";
import { ResponseListDTO } from "../../common/dto/responseList.dto";
import { OwnedListsRepository } from "./owned-lists.repository";
import { ListElementDTO } from "src/common/dto/ListElement.dto";

@Injectable()
export class OwnedListsService {
	constructor(
		private readonly ownedListsRepository: OwnedListsRepository,
		private readonly usersRepository: UsersRepository,
		private readonly carsService: CarsService
	) {}
	async createOwnedLists(list: Array<ListElementDTO>) {
		let flag = false;
		const result = await Promise.all(
			list.map(async (elem) => {
				const user = await this.usersRepository.findUser(elem.id);
				if (!user) {
					return "존재하지 않는 user입니다.";
				}
				const car = await this.carsService.findCar(elem.trimId);
				if (!car) {
					return "존재하지 않는 trimId입니다.";
				}
				try {
					const newOne = await this.ownedListsRepository.createOne(user, car);
					if (typeof newOne === "string") return newOne;
					flag = true;
					return { id: newOne.user.id, trimId: newOne.car.trimId };
				} catch (err) {
					return "중복된 정보입니다.";
				}
			})
		);
		if (!flag) {
			throw new BadRequestException(result);
		}
		return result;
	}

	async getUsersList(id: string) {
		const result = await this.ownedListsRepository.findUsersList(id);
		return result.map((elem) => new ResponseListDTO(elem));
	}
}
