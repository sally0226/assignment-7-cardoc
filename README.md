# Assignment_7_Cardoc 🚗

**wanted x wecode 프리온보딩 백엔드 코스 - [Assignment 7] 카닥**

- 일정: 2021년 11월 22일(월) 오후 4시 ~ 11월 29일(월) 오후 2시

</br>

## Contributor 💻

|            [김바다](https://github.com/sally0226)            |
| :----------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/43634786?v=4" alt="profile_image" width="150px" /> |
|                             TIL                              |
| [resume](https://befitting-tapir-064.notion.site/Resume-8a9cf8a92ef64f79a04be5d98ce9719c) |

</br>

## 배포 주소 🌏

주소 : http://101.101.211.247:3000

</br>

## 프로젝트 실행 방법 (in local) 🏃

* node, npm이 이미 설치되어 있다는 가정하에 작성된 가이드입니다.

> 이 프로젝트에 사용된 버전
>
> node : v14.18.0
>
> npm : 6.14.15

1. git clone을 통해 코드를 내려받습니다.

   ```shell
   $ git clone https://github.com/sally0226/assignment-7-cardoc.git
   ```

2. nest가 설치되어 있지 않은 경우, nest를 설치합니다.

   ```shell
   $ npm i -g @nestjs/cli
   ```

3. 패키지를 설치합니다.

   ```shell
   $ npm install
   ```

4. `.env`를 작성해줍니다.

   [.env 내용](https://befitting-tapir-064.notion.site/env-fa0933485cd94a9baeb5432a9dfe3d0b)

5. 서버를 실행합니다.

   ```shell
   $ npm start
   ```

   해당 명령어가 성공적으로 실행되면, http://localhost:3000가 열립니다.

5. 원하는 API에 접근하여 서비스를 이용합니다. 

</br>

## 과제 요구사항 📝

**✔️ 사용자 생성 API** 

**✔️ 로그인 API** 

**✔️ 사용자가 소유한 타이어 정보를 저장하는 API**

**✔️ 사용자가 소유한 타이어 정보 조회 API**

</br>

📌 RDB중 Mysql 사용

> local DB가 아닌 docker로 배포한 Mysql 서버 이용

📌 TypeORM 이용

📌 Docker를 이용한 배포

</br>

## ERD 🧬

![image](https://user-images.githubusercontent.com/43634786/143771397-f7101d47-69ec-4482-80ed-878a1af2ade4.png)

</br>

## 사용 기술 🌠

- Backend : [![img](https://camo.githubusercontent.com/cb0c26ab83b212946400b29c325debd89d07f0c36e3568c840dc6ae07127ca1b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6573744a532d4530323334453f7374796c653d666c6174266c6f676f3d4e6573744a53266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/cb0c26ab83b212946400b29c325debd89d07f0c36e3568c840dc6ae07127ca1b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6573744a532d4530323334453f7374796c653d666c6174266c6f676f3d4e6573744a53266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/17131306fc490286432e1148ea92ac1754363621a9d185bf613ad6e0f4d33a96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666c6174266c6f676f3d54797065536372697074266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/17131306fc490286432e1148ea92ac1754363621a9d185bf613ad6e0f4d33a96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666c6174266c6f676f3d54797065536372697074266c6f676f436f6c6f723d7768697465)
- DataBase : [![img](https://camo.githubusercontent.com/779f9a01c244fb737d351d3256288537428012c3cc755e70e7c5663afc1b7c01/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3434373941313f7374796c653d666c6174266c6f676f3d4d7953514c266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/779f9a01c244fb737d351d3256288537428012c3cc755e70e7c5663afc1b7c01/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3434373941313f7374796c653d666c6174266c6f676f3d4d7953514c266c6f676f436f6c6f723d7768697465)
- Collaboration : [![img](https://camo.githubusercontent.com/493683d1e69c600dc04bb375ab588466c554471ea28f7326b390b5103c401058/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666c6174266c6f676f3d476974266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/493683d1e69c600dc04bb375ab588466c554471ea28f7326b390b5103c401058/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666c6174266c6f676f3d476974266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/779ecf5e6059fd906fca2099015186945f91679f22da6bf05f37f52e69e86e8a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666c6174266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/779ecf5e6059fd906fca2099015186945f91679f22da6bf05f37f52e69e86e8a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666c6174266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/1b756736e374960a174cb6f65083804b2052cd6f6e997af84206794e2ca77f71/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666c6174266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/1b756736e374960a174cb6f65083804b2052cd6f6e997af84206794e2ca77f71/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666c6174266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465)
- Deploy: [![img](https://camo.githubusercontent.com/b59f4ce8eeb9bdf7a12c2008d3ebf470c640935689650f6f4a864d1c8bda1564/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6176657220436c6f75642d3033433735413f7374796c653d666c6174266c6f676f3d4e61766572266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/b59f4ce8eeb9bdf7a12c2008d3ebf470c640935689650f6f4a864d1c8bda1564/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6176657220436c6f75642d3033433735413f7374796c653d666c6174266c6f676f3d4e61766572266c6f676f436f6c6f723d7768697465) <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white"/>

</br>

## 구현 방법 & 이유 🏭

### 1) DB 모델링 🤔

처음에는 테이블을 두개만 두어 `User`와, `User가 가진 자동차와 그에 따른 타이어 정보`를 한 테이블에 저장하려고 했으나, trimId가 동일한 자동차는 타이어 정보가 같으므로, Cars 테이블로 만들어 동일한 컬럼들의 중복 저장을 줄이고자 했습니다. 

- Users

  - password를 bcrypt로 암호화한 후 저장하기 때문에 길이를 200으로 넉넉하게 주었습니다.

- OwnedLists

  - 한 user가 동일한 trimId의 차량을 여러개 등록할 수 없도록,  `id` + `trimId` 컬럼을 묶어 Unique속성을 부여하였습니다.

    ```typescript
    @Unique(["user", "car"])
    ```

  - 만약, 한 user가 동일한 trimId의 차량을 중복으로 등록할 수 있게 하려면 이 Unique속성을 제거해주면 됩니다. 

- Cars

  - 처음에는 `폭` , `편평비`, `휠 사이즈` 컬럼을 두어 
    - frontTire정보가 있으면 저장, 없으면 rearTire정보로 저장하려고 했습니다.
  - 하지만, frontTire와 rearTire의 규격이 다른 경우가 있을 것으로 판단되어 frontTire와 rearTire의 정보를 따로 저장할 수 있도록 컬럼의 수를 늘렸습니다. 
  - 하지만 아래와 같이 rearTire의 정보가 없는 case를 발견하게 되어, rearTire관련 컬럼에 nullable 속성을 주었습니다.

  <img src="https://user-images.githubusercontent.com/43634786/143772000-6c72eb6b-1a7d-49ca-919a-615860eaca3a.png" alt="image" style="zoom: 80%;" />

</br>

### 2) 인증 🤝

JWT를 이용한 로그인을 구현했습니다. 

[Nestjs 공식 문서](https://docs.nestjs.com/security/authentication)를 따라 구현했으며, 관련 파일은 `src/domain/auth`안에 있습니다.

guard를 만들고, 해당 guard가 필요한 곳에서 `@UseGuard()`데코레이터를 사용했습니다.

그리고, 회원가입 API에서 회원가입 성공시에 바로 access_token을 발급해주어 회원가입 직후 따로 로그인을 하지 않아도 되도록 했습니다. 

</br>

### 3) 사용자가 소유한 타이어 정보를 저장하는 API 🚓

- 여러 사용자에 대해 한 번에 요청할 수 있는 API이지만, 과제 안내 페이지에 `이후의 API는 인증된 사용자만 호출할 수 있다.`라는 문구가 있었기에 이 API는 누가 로그인되어있는지는 신경쓰지 않지만, 로그인이 되어있어야 호출할 수 있도록 구현했습니다.

- 이 API는 Request body로 `사용자 정보` + `trimId` 쌍을 최대 5개 까지 받을 수 있습니다.

  그래서 일부는 성공하고, 일부는 실패한 경우에 어떻게 Response를 보내줄지에 대해 고민했습니다.

  1개라도 실패했을 때 Error를 보내는 것은 비효율적이라는 생각이 들었습니다. 따라서 1개라도 성공하면 200으로 Response를 보내되 메세지로 실패한 경우를 나타내주었습니다.

#### [예시]

- **한 개라도 성공**한 경우

  200과 함께 배열이 Response된다.

  성공한 경우는 생성된 id와 trimId쌍이,

  실패한 경우에는 해당 case에 대한 error message가 들어있다.

  ```json
  [
      {
          "id": "bada1",
          "trimId": 5
      },
      "중복된 정보입니다.",
      "존재하지 않는 user입니다."
  ]
  ```

  

- 전부 실패한 경우 

  400과 함께 메세지가 배열형태로 Response된다.

  ```json
  {
      "statusCode": 400,
      "message": [
          "중복된 정보입니다.",
          "존재하지 않는 user입니다."
      ],
      "path": "/owned-lists"
  }
  ```

  

다만, **DTO가 한 개라도 어긋났을 때**에는 바로 400이 Response됩니다.

```json
{
    "statusCode": 400,
    "message": [
        "list.1.id should not be empty",
        "list.1.id must be a string"
    ],
    "path": "/owned-lists"
}
```



### 4) 자동차 정보 조회 API의 사용 🏎️

#### [API 호출]

자동자 정보 조회 API를 호출하기 위해 axios의 HttpService를 이용했습니다.

비동기로 처리되는 API호출이 완료될 때 까지 기다릴 필요가 있었는데, return type이 Promise가 아니라 Observable이었기 때문에 바로 await를 사용할 수 없었습니다.

이를 해결하기 위해 rjax의 [lastValueFrom](https://rxjs.dev/api/index/function/lastValueFrom) 함수를 사용했습니다. 이 함수는 Observable를 Promise로 바꿔주며 함수 이름이 뜻하는 바와 같게 마지막 value를 return해줍니다. 

</br>

또한 중복된 trimId의 API를 여러번 호출하지 않도록, `Cars`테이블에 해당 trimId가 저장되어있을 때에는, API를 새로 호출하지 않고 `ownedLists`를 바로 insert해주었습니다. 

![image](https://user-images.githubusercontent.com/43634786/143802880-7e6044c2-b2d9-4415-b2d3-4042281d0911.png)

</br>

#### [정규식 이용]

또한, frontTire/rearTire.value의 형태가 `205/75R18`와 같이 하나의 string안에 폭, 편평비, 휠 사이즈가 모두 포함되어 있었습니다.

주어진 string을 `/`와 `R`로 split해주어야 했는데, 정규식을 작성하여 한 번의 split함수로 [폭, 편평비, 휠 사이즈]를 구할 수 있도록 했습니다.

</br>

#### [nullable]

Cars 엔티티 모델링에서도 설명한 내용이지만, 

frontTire와 rearTire의 정보를 각각 저장하는데, rearTire가 정보가 없는 경우가 있기 때문에, 그런 경우에는 null이 들어갈 수 있도록 해주었습니다.

frontTire, rearTire 모두 null → error

둘 중에 하나만 null → 통과 후 해당 컬럼값이 null로 저장되도록 처리

carService내의 자동차 정보 조회 API를 호출하는 함수  [링크](https://github.com/sally0226/assignment-7-cardoc/blob/d1e051150234d02ceef58eee1db71cf05a7b9cac/src/domain/cars/cars.service.ts#L24)

```typescript
async getCarInfo(trimId: number) {
    const url = `https://dev.mycar.cardoc.co.kr/v1/trim/${trimId}`;
    try {
        const responseData = await lastValueFrom(
            this.httpService
            .get(url)
            .pipe(map((response) => response.data?.spec?.driving))
        );
        const frontTire = responseData.frontTire?.value;
        const rearTire  = responseData.rearTire?.value;
        if (!frontTire && !rearTire) return null;
        const frontInfo = frontTire ? frontTire.split(/R|\//) : null;
        const rearInfo  = rearTire  ? rearTire.split(/R|\//)  : null;
        const result = await this.carsRepository.createOne(
            trimId, 
            frontInfo, 
            rearInfo
        );
        return result;
    } catch (error) {
        return null;
    }
}
```

</br>

### 5) HTTP Status Code ⛳

각 API의 status code는 과제 안내 페이지에 따라 

200, 400, 401, 500으로 구성했습니다. 

400의 경우, error의 이유가 다양하므로 error message를 다르게 넣어주었습니다. 

ex) 회원가입 시 중복 가입의 경우, DTO가 안 맞는 경우 등..

```json
// 중복 가입시
{
    "statusCode": 400,
    "message": "중복된 id입니다.",
    "path": "/users/signup"
}
```

```json
// DTO와 맞지 않을 때
{
    "statusCode": 400,
    "message": [
        "id should not be empty",
        "id must be a string"
    ],
    "path": "/users/signup"
}
```

</br>

### 6) Exception 처리 🚫

전역으로 exception을 처리해주기 위해 [Nestjs 공식문서](https://docs.nestjs.com/exception-filters#exception-filters-1)를 참고했습니다. 

아래와 같이 `http-exception.filter.ts`를 작성했습니다.

```typescript
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();
		const status = exception.getStatus();
		const message = exception.getResponse()["message"] || exception.message;
		response.status(status).json({
			statusCode: status,
			message,
			path: request.url
		});
	}
}
```

특히 `message`에 값을 넣어주는 부분을 수정했습니다.

보통의 경우에는 `exception.message`에 string 형태의 message가 들어있는데, 

DTO관련 error와 같이 **message가 1개 이상으로 배열 형태로 존재할때**,

 `exception.message` 에는 BadRequest Exception이라는 메세지만 들어있고, 

자세한 메세지들은 `exception.getResponse()["message"]`에 존재했기 때문입니다. 

</br>

### 7) Docker를 이용한 배포 🐳

![image](https://user-images.githubusercontent.com/43634786/143778527-322aa184-4456-4b48-9fe7-089509384080.png)

#### [MySQL]

docker hub에서 latest버전의 image를 다운받아 컨테이너를 생성 및 실행했습니다. 

</br>

#### [Nestjs 서버]

- v12의 node image를 이용하였습니다.. 

- 안정적인 백그라운드 실행을 위해 pm2를 이용했습니다
  - 그냥 pm2가 아닌 도커에 적합한 pm2-runtime 명령어를 이용했습니다.
- `--output` option을 이용해, 특정 위치에 log파일이 생길 수 있도록 했습니다. 

최종적으로, 아래와 같은 `Dockerfile`을 작성하여 이용했습니다.

```dockerfile
From node:12

# 앱 디렉토리 생성
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install
RUN npm install -g pm2
COPY . /usr/src/app/

RUN npm run build

EXPOSE 3000

CMD ["pm2-runtime", "start", "dist/main.js", "-i", "max", "--output", "/home/contents/log/main_out.log"]

# 환경변수 설정

# DATABASE
ENV MYSQL_HOST ...
ENV MYSQL_USERNAME ...
ENV MYSQL_PASSWORD ...
ENV MYSQL_DATABASE ...

# JWT
ENV JWT_SECRET_KEY ...
```


docker를 직접 build해서 이용해 본 것은 처음이었습니다. 그래서 많은 시행착오를 겪었지만, 다양한 자료를 찾아보며 성공할 수 있었습니다.

1. `COPY . .`안되는 문제

   `WORKDIR` 명령어로 폴더를 지정해준 후, `COPY . .`를 해주면 해당 폴더에 카피가 되는 줄 알았는데, 되지 않아서 . 대신에 절대경로를 적어주었습니다.

2. pm2 실행 후 log를 확인할 수 없던 문제

   `pm2-runtime`으로 실행하니 defalut로 clustor가 2개 생성되어서 그런지 `pm2 logs [이름]`으로 log를 확인할 수가 없었습니다. 

   `pm2 monit`을 이용해 실시간으로 생기는 log를 확인할 수는 있었지만, 이전에 생성된 log들을 확인할 수 없었습니다. 

   따라서, `pm2-rumtime` 명령어를 실행할 때 `--output`명령어로 log경로를 지정했습니다. 이렇게 하니 해당 경로에 log파일이 생겨서 지난 log들을 정상적으로 확인할 수 있었습니다. 

</br>

## 폴더 구조 📂

```
📚 src
├── 📗 common
│  ├── 📂 dto
│  │  ├── 📄 createList.dto.ts
│  │  ├── 📄 createUser.dto.ts
│  │  ├── 📄 ListElement.dto.ts
│  │  ├── 📄 loginUser.dto.ts
│  │  ├── 📄 responseList.dto.ts
│  ├── 📂 filter
│  │  ├── 📄 http-exception.filter.ts
├── 📘 domain 
│  ├── 📂 auth
│  │  ├── 📂 guards
│  │  │  ├── 📄 jwt-auth.guard.ts
│  │  │  ├── 📄 local-auth.guard.ts
│  │  ├── 📄 auth.module.ts
│  │  ├── 📄 auth.service.ts
│  │  ├── 📄 jwt.strategy.ts
│  │  ├── 📄 local.strategy.ts
│  ├── 📂 cars
│  │  ├── 📄 cars.module.ts
│  │  ├── 📄 cars.service.ts
│  │  ├── 📄 cars.repository.ts
│  ├── 📂 owned-lists
│  │  ├── 📄 owned-lists.controller.ts
│  │  ├── 📄 owned-lists.module.ts
│  │  ├── 📄 owned-lists.service.ts
│  │  ├── 📄 owned-lists.repository.ts
│  ├── 📂 users
│  │  ├── 📄 users.controller.ts
│  │  ├── 📄 users.module.ts
│  │  ├── 📄 users.service.ts
│  │  ├── 📄 users.repository.ts
├── 📕 entities
│  ├── 📄 cars.entity.ts
│  ├── 📄 owned-lists.entity.ts
│  ├── 📄 users.entity.ts
├── 📄 app.module.ts
├── 📄 main.ts
📚 test
├── 📄 app.e2e-spec.ts
└── 📄 jest-e2e.json
📄 .env
📄 nest-cli.json
📄 package.json
📄 package-lock.json
📄 tsconfig.json
📄 tsconfig.build.json
📄 README.md
🐳 .dockerigonre
🐳 Dockerfile
```

</br>

## API Test (with Postman) 🐾

#### [주소]

[Postman 링크](https://documenter.getpostman.com/view/15410333/UVJcjvyn)

</br>

#### [방법]

1. **위의 링크를 클릭하여 Postman으로 들어갑니다.** 
2. **회원가입, 로그인 API를 이용하여 회원가입 or 로그인을 진행합니다.**

![image-20211129023517455](https://user-images.githubusercontent.com/43634786/143779430-70793e28-849e-40a3-96dc-838eed22289c.png)

![image-20211129023539912](https://user-images.githubusercontent.com/43634786/143779429-808ae732-8015-41dd-8f43-bb8cbdd3a546.png)

3. **다음 API들을 테스트하기 전에, 2번에서 얻은 `access_token`을 `Authorization`에 등록해줍니다.**

![image-20211129023832428](https://user-images.githubusercontent.com/43634786/143779428-dbd4ac0c-85db-48db-97b4-4967a9f64bae.png)

4. **`Authorization`에 token등록 후 사용자의 자동차 목록 추가 API를 테스트해봅니다.**

![image-20211129023932715](https://user-images.githubusercontent.com/43634786/143779425-546f713c-1528-46ed-acfb-e616913f45f4.png)

5. **`Authorization`에 token등록 후 사용자의 자동차 목록 조회 API를 테스트해봅니다.** 

![image-20211129024017155](https://user-images.githubusercontent.com/43634786/143779423-78c82347-f22d-43ee-b5ad-14c85ae15ca0.png)

