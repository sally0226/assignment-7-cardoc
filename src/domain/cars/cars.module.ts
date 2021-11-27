import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarsRepository } from "./cars.repository";
import { CarsService } from "./cars.service";
// import { CarsController } from "./cars.controller";

@Module({
	imports: [TypeOrmModule.forFeature([CarsRepository]), HttpModule],
	providers: [CarsService],
	// controllers: [CarsController],
	exports: [CarsService]
})
export class CarsModule {}
