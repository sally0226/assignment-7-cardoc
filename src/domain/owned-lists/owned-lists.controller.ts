import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	Req,
	UseGuards
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CreateListDTO } from "./dto/CreateList.dto";
import { OwnedListsService } from "./owned-lists.service";

@Controller("owned-lists")
export class OwnedListsController {
	constructor(private readonly ownedListsService: OwnedListsService) {}

	@UseGuards(JwtAuthGuard)
	@Post()
	@HttpCode(200)
	async createOwnedLists(@Body() body: CreateListDTO) {
		return await this.ownedListsService.createOwnedLists(body.list);
	}

	@UseGuards(JwtAuthGuard)
	@Get()
	async getUsersList(@Req() req) {
		return await this.ownedListsService.getUsersList(req.user.user_id);
	}
}
