import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { OwnedLists } from "../owned-lists/owned-lists.entity";

@Entity("users")
export class Users {
	@PrimaryColumn("varchar", { length: 20 })
	user_id: string;

	@Column("varchar", { length: 200, nullable: false })
	password!: string;

	@OneToMany(() => OwnedLists, (list) => list.user)
	lists?: OwnedLists[];
}
