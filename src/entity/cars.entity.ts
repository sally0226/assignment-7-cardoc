import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { OwnedLists } from "./owned-lists.entity";

@Entity("cars")
export class Cars {
	@PrimaryColumn("int")
	trimId: number;

	@Column("int")
	frontWidth!: number;

	@Column("int")
	frontAspectRatio!: number;

	@Column("int")
	frontRimDiameter!: number;

	@Column("int", { nullable: true })
	rearWidth!: number;

	@Column("int", { nullable: true })
	rearAspectRatio!: number;

	@Column("int", { nullable: true })
	rearRimDiameter!: number;

	@OneToMany(() => OwnedLists, (list) => list.car)
	lists?: OwnedLists[];
}
