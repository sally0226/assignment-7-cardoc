import { HttpException, HttpStatus } from "@nestjs/common";

export class DuplicatedUserException extends HttpException {
	constructor() {
		super("중복된 아이디입니다.", HttpStatus.CONFLICT);
	}
}
