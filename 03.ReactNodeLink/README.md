# Node.js 서버 생성

    npm init -y
    npm i express

- 생겨난 결과물
  - package-json
  - package-lock.json
  - node_modules

### 1) 폴더구성

- config(폴더)

  - database.js

- router(폴더)
  - index.js
  - user.js
- server.js (파일)

### 2) sercer.js 구성

    npx create-react-app 폴더이름

현재 상태를 정적인 페이지로 만들어주는 일

    npm run build

### React Bootstrap

     npm install react-bootstrap bootstrap

![KakaoTalk_Photo_2023-09-18-10-53-02](https://github.com/sin-hyunjin/React.js230821/assets/116487398/b6787ce9-32f6-41e7-93e8-eb0ead35020f)

![KakaoTalk_Photo_2023-09-18-10-53-09](https://github.com/sin-hyunjin/React.js230821/assets/116487398/3dfd5a74-a4ce-4cd4-b1a6-67f17e8b312a)

### router 설치

    npm i react-router-dom
    npm start

- 세팅 <BrowserRouter>

### MY SQL

- ID , PW, NAME, EMAIL

workbaench -> localhost 서버

#### 해당 DB를 사용하겠다 라는 명령을 맨처음 실행 시켜줘야한다 .

    use nodejs_DB;

    create table porject_member(
        id varchar(50),
        pw varchar(100),
        user_name varchar(50),
        email varchar(100)
    );

ctrl + enter 실행

    host : 'localhost',
    user : 'root',
    password : ''
    port : 3306,
    database : 'nodejs_DB'
    tableName :"porject_member"

#### mysql2 설치

    npm install mysql2

#### axios 기능 - baseURL : 기본 URL을 설정해서 유지보수에 용이

##### 설치

    npm i axios

##### 사용법

    axios(url, {})
