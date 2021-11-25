import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../users/users.entity";
import { UsersRepository } from "../users/users.repository";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		TypeOrmModule.forFeature([UsersRepository]),
		PassportModule,
		JwtModule.register({
			secret: process.env.JWT_SECRET_KEY,
			signOptions: { expiresIn: "60s" }
		})
	],
	providers: [AuthService, LocalStrategy],
	exports: [AuthService]
})
export class AuthModule {}
