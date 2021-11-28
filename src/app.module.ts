import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./domain/auth/auth.module";
import { Cars } from "./entity/cars.entity";
import { OwnedLists } from "./entity/owned-lists.entity";
import { Users } from "./entity/users.entity";
import { UsersModule } from "./domain/users/users.module";
import { HttpExceptionFilter } from "./common/filter/http-exception.filter";
import { OwnedListsModule } from "./domain/owned-lists/owned-lists.module";

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
		UsersModule,
		OwnedListsModule
	],
	providers: [
		{
			provide: APP_FILTER,
			useClass: HttpExceptionFilter
		}
	]
})
export class AppModule {}
