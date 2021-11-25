import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Cars } from "../cars/cars.entity";
import { Users } from "../users/users.entity";

@Entity("ownedLists")
export class OwnedLists {
	@PrimaryGeneratedColumn()
	list_id!: number;

	@ManyToOne(() => Users, (user) => user.lists)
	@JoinColumn([{ name: "user_id", referencedColumnName: "user_id" }])
	user!: Users;

	@ManyToOne(() => Cars,(car) => car.lists)
	@JoinColumn([{ name: "trim_id", referencedColumnName: "trim_id" }])
	car!: Cars;
}
