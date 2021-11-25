import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./domain/auth/auth.module";
import { Cars } from "./domain/cars/cars.entity";
import { OwnedLists } from "./domain/ownedLists/ownedLists.entity";
import { Users } from "./domain/users/users.entity";
import { UsersModule } from "./domain/users/users.module";
import { HttpExceptionFilter } from "./global/common/http-exception.filter";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		TypeOrmModule.forRoot({
			type: "mysql",
			host: process.env.MYSQL_HOST,
			port: 3306,
			username: process.env.MYSQL_USERNAME,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DATABASE,
			entities: [Users, Cars, OwnedLists],
			synchronize: true
		}),
		AuthModule,
		UsersModule
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_FILTER,
			useClass: HttpExceptionFilter
		}
	]
})
export class AppModule {}
