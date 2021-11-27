import { EntityRepository, Repository } from "typeorm";
import { Cars } from "../cars/cars.entity";
import { Users } from "../users/users.entity";
import { OwnedLists } from "./owned-lists.entity";

@EntityRepository(OwnedLists)
export class OwnedListsRepository extends Repository<OwnedLists> {
	async createOne(user: Users, car: Cars) {
		const list = new OwnedLists();
		list.car = car;
		list.user = user;
		return await this.save(list);
	}

	async findUsersList(user_id: string) {
		const query = await this.createQueryBuilder("lists")
			.innerJoinAndSelect("lists.user", "users")
			.innerJoinAndSelect("lists.car", "cars")
			.where("lists.user_id = :user_id", { user_id })
			.getMany();
		return query;
	}
}
