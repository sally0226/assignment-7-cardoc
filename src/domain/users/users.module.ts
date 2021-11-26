import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";

@Module({
	imports: [TypeOrmModule.forFeature([UsersRepository]), AuthModule],
	providers: [UsersService],
	controllers: [UsersController]
})
export class UsersModule {}
