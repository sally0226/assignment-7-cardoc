import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarsModule } from "../cars/cars.module";
import { UsersRepository } from "../users/users.repository";
import { OwnedListsController } from "./owned-lists.controller";
import { OwnedListsRepository } from "./owned-lists.repository";
import { OwnedListsService } from "./owned-lists.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([OwnedListsRepository, UsersRepository]),
		CarsModule
	],
	providers: [OwnedListsService],
	controllers: [OwnedListsController]
})
export class OwnedListsModule {}
