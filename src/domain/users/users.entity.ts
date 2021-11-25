import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("users")
export class Users {
	@PrimaryColumn("varchar", { length: 20 })
	user_id: string;

	@Column("varchar", { length: 200, nullable: false })
	password!: string;
}
