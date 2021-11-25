import { EntityRepository, Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { Users } from "./users.entity";
import { CreateUserDto } from "./dto/createUser.dto";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
	async findUser(user_id: string) {
		return await this.findOne({ user_id });
	}

	async createUser(createUserDto: CreateUserDto) {
		const newUser = new Users();
		newUser.user_id = createUserDto.user_id;
		newUser.password = await bcrypt.hash(createUserDto.password, 10);

		return await this.save(newUser);
	}
}
