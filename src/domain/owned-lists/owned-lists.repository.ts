import { BadRequestException } from "@nestjs/common";
import { EntityRepository, QueryFailedError, Repository } from "typeorm";
import { Cars } from "../../entity/cars.entity";
import { Users } from "../../entity/users.entity";
import { OwnedLists } from "../../entity/owned-lists.entity";

@EntityRepository(OwnedLists)
export class OwnedListsRepository extends Repository<OwnedLists> {
	async createOne(user: Users, car: Cars) {
		const list = new OwnedLists();
		list.car = car;
		list.user = user;
		try {
			return await this.save(list);
		} catch (err) {
			if (err instanceof QueryFailedError) {
				throw new BadRequestException("중복된 정보입니다.");
			}
		}
	}

	async findUsersList(id: string) {
		const query = await this.createQueryBuilder("lists")
			.innerJoinAndSelect("lists.user", "users")
			.innerJoinAndSelect("lists.car", "cars")
			.where("lists.id = :id", { id })
			.getMany();
		return query;
	}
}
