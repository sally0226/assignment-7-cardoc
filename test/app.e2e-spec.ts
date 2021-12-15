import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

describe("E2E test", () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	const user = { id: "bada", password: "0000" };
	let token: string;
	describe("/users", () => {
		it("POST /users/signup (성공)", () => {
			return request(app.getHttpServer())
				.post("/users/signup")
				.send(user)
				.expect(201);
		});
		it("POST /users/signup (실패/ 중복된id)", () => {
			return request(app.getHttpServer())
				.post("/users/signup")
				.send(user)
				.expect(409);
		});
		it("POST /users/signin (성공)", () => {
			return request(app.getHttpServer())
				.post("/users/signin")
				.send(user)
				.expect(201)
				.expect((res) => {
					token = res.body.access_token;
				});
		});
	});

	const ownedList = {
		list: [
			{ id: "bada", trimId: 10 },
			{ id: "test1", trimId: 200 },
			{ id: "non", trimId: 100 },
			{ id: "bada", trimId: 0 }
		]
	};
	describe("/owned-lists", () => {
		it("POST /owned-lists (성공)", () => {
			return request(app.getHttpServer())
				.post("owned/lists")
				.set("Authorization", `Bearer ${token}`)
				.send(ownedList)
				.expect(200)
				.expect((res) => {
					console.log(res);
				});
		});

		// 전부다 실패일 때 404오는지 확인

		// 길이 5 넘어갈 때

		// DTO 틀렸을 때
	})

});
