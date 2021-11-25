import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { OwnedLists } from "../ownedLists/ownedLists.entity";

@Entity("cars")
export class Cars {
	@PrimaryColumn("int")
	trim_id: number;

	@Column("int")
	width!: number;

	@Column("int")
	aspect_ratio!: number;

	@Column("int")
	rim_diameter!: number;

	@OneToMany(() => OwnedLists, (list) => list.car)
	lists?: [OwnedLists];
}
