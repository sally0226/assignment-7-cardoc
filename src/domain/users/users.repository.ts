import { EntityRepository, Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { Users } from "../../entity/users.entity";
import { CreateUserDTO } from "../../common/dto/createUser.dto";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
	async findUser(id: string) {
		return await this.findOne({ id });
	}

	async createUser(createUserDto: CreateUserDTO) {
		const newUser = new Users();
		newUser.id = createUserDto.id;
		newUser.password = await bcrypt.hash(createUserDto.password, 10);

		return await this.save(newUser);
	}
}
