import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Unique } from "typeorm";
import { Cars } from "./cars.entity";
import { Users } from "./users.entity";

@Entity("ownedLists")
@Unique(["user", "car"])
export class OwnedLists {
	@PrimaryGeneratedColumn()
	listId!: number;

	@ManyToOne(() => Users, (user) => user.lists)
	@JoinColumn([{ name: "id", referencedColumnName: "id" }])
	user!: Users;

	@ManyToOne(() => Cars, (car) => car.lists)
	@JoinColumn([{ name: "trimId", referencedColumnName: "trimId" }])
	car!: Cars;
}
