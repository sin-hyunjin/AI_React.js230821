- [02.React](./02.React.js/)

- [03.ReactNodeLink](./03.ReactNodeLink/)

- [개발환경구축](#환경-구축)

- [애플리케이션\_폴더및파일구조\_설명](#react-애플리케이션-폴더-및-파일-구조)

- [React란?](#react-란)

- [jsx문법이란?](#jsx-문법이란)

- [Component란?](#component-란)

# React 개발시 편리한 도구들

- Prettier : Prettier 는 자동으로 코드의 스타일을 관리해주는 도구입니다

        $ npx create-react-app useful-tools

- ES7+ React/Redux/React-Native snip

- ESLint : ESLint 는 자바스크립트의 문법을 확인해주는 도구입니다

<br>

# react-scrips

# 환경 구축

<br>

> ## 폴더에 바로 파일설치하기

    npx create-react-app [파일이름] ex)01.basic

- **npx** : npx는 npm 패키지를 실행하고 사용할 수 있도록 도와주는 도구이다. 이를 사용하면 npm 패키지를 로컬로 설치하지 않고도 실행할 수 있다.

### 만약 실행이 안된다면

    npm install create-react

를 설치하고 다시 실행시켜보자.

<br>

> ## 1. Terminal 열기

우선, Mac OS에서 터미널을 열어 현재 React를 사용하기 위해 필요한 Node JS가 설치되어 있는지 확인해보도록 하자.

    단축키: Command + space바

터미널을 열었다면 명령어를 쳐보자.

    명령어: node -v

최초 위 명령어를 칠 경우, 다음과 같이 Command not found: node라는 문구가 보일 것이다.

React를 사용하기 위해선 Node JS가 필요한데 설치되어 있지 않기 때문이다.

> ## 2. Node JS 설치

<br>

그럼 이제 Node JS를 설치해보도록 하자.

    Node JS 설치를 위한 홈페이지 주소
    https://nodejs.org/en/

위 URL을 타고 들어가면 아래와 같은 화면을 볼 수 있을 것이다.

두가지 버전이 보일텐데 본인은 가장 최신버전(오른쪽)보다 많은 유저가 현재 사용 중인 버전(왼쪽)을 선택해서 설치해보도록 하겠다.

왼쪽 버전(14.17.5 LTS) 버튼을 누르면 설치파일이 다운로드 될 것이다.
그 후, 해당 설치파일을 실행시켜 기본값 그대로 쭉 설치 프로세스를 진행하도록 하자.

<br>

> ## 3. Terminal 확인

이제 Node JS를 설치했다면 다시 Terminal로 돌아가보도록 하자.

Terminal에서 다시 node -v를 입력해본다.

확인해본다면 위와 같이 앞서 설치한 버전의 Node JS버전이 출력된 화면을 볼 수 있을 것이다.

<br>

> ## 4. NPM 확인

    - NPM(Node Package Manager): Node.js에서 사용하는 여러 모듈을 간편하게 사용할 수 있도록 도와주는 도구

방금 열었던 Terminal에서 NPM이 설치되었는지 명령어를 통해 확인해보도록 하자.

    명령어: npm -v

다음과 같이 npm 버전이 출력되는 것을 확인할 수 있다.
별도에 설치파일을 설치하지 않았음에도 이미 설치되어져 있는 이유는 Node JS를 설치할 때, 이미 그 안에 npm 관련 부분도 함께 설치되었기 때문이다.

<br>

> ## 5. 최신버전 Node JS 패키지 설치

이번엔 Node JS를 사용하는데 필요한 최신버전 패키지를 설치해보도록 하겠다.
설치는 위에서 설치된 npm을 통해 Terminal 상에서 설치할 수 있다.

    명령어: npm install npx -g

명령어를 기입하고 나면 다음과 같이 ERR문구가 발생하는 것을 알 수 있다.
이는 설치 과정에 Permission문제로 인해 발생하는 것인데 이를 방지하기 위해 sudo라는 문구를 앞에 추가 기입해보도록 하자.

    sudo: 'SuperUserDO = 슈퍼유저 = 최고권한'으로 실행하겠다는 의미


    명령어: sudo npm install npx -g

위 명령어를 실행하고나면 다음과 같이 몇가지 오류가 여전히 존재하는 것을 볼 수 있다.
하지만 이미 파일이 존재한다는 에러이므로 무시하고 넘어가도 좋다.

<br>

> ## 6. npx 버전 확인

마지막으로 npx 버전을 Terminal에서 확인해보도록 하자.

    명령어: npx -v

명령어를 실행시켜보면 위와 같이 버전 정보가 출력되는 것을 확인할 수 있을 것이다.

여기까지 출력되었다면 위의 모든 과정이 정상적으로 실행되었다고 볼 수 있다.

<br>

# React 애플리케이션 폴더 및 파일 구조

React 애플리케이션을 설치하면 다음과 같은 폴더 및 파일 구조가 생성됩니다:

<br>

> - **node_modules:** 프로젝트에 필요한 모든 종속성(라이브러리, 패키지)이 저장된 폴더입니다. 이 폴더는 npm 또는 yarn을 사용하여 설치된 패키지들이 들어갑니다.

<br>

> - **public:** 정적 파일(HTML, 이미지 등)이 저장되는 폴더입니다. 특히, `public/index.html` 파일은 React 앱의 진입점(엔트리 포인트) HTML 파일로 사용됩니다.

<br>

> - **src:** React 앱의 소스 코드가 저장되는 폴더입니다. 주요 코드 파일들은 여기에 있습니다.

> > - `src/index.js`: React 앱의 진입점 JavaScript 파일로, DOM에 React 앱을 렌더링하는 역할을 합니다.

> > - `src/App.js`: 기본 앱 컴포넌트입니다. 이 컴포넌트에서 앱의 기본 레이아웃과 동작을 정의합니다.

<br>

> - **package.json:** 프로젝트 정보와 종속성 관리를 위한 설정 파일입니다. 프로젝트에 필요한 패키지 및 스크립트 명령을 정의합니다.

<br>

> - **package-lock.json 또는 yarn.lock:** 패키지 의존성의 정확한 버전을 관리하는 파일입니다. 이 파일을 통해 패키지의 버전 충돌을 방지하고 설치된 패키지의 일관성을 유지합니다.

<br>

> - **README.md:** 프로젝트에 대한 설명 및 문서를 작성하는 파일입니다. 주로 프로젝트의 사용법과 개요를 기록합니다.

<br>

> - **.gitignore:** Git으로 버전 관리를 할 때, 버전 관리에서 제외할 파일 및 폴더를 지정하는 설정 파일입니다.

<br>

> - **public/favicon.ico:** 웹 사이트의 파비콘(브라우저 탭에 표시되는 아이콘) 이미지 파일입니다.

<br>

> - **src/index.css:** 기본 CSS 스타일 파일입니다. React 앱의 스타일을 정의할 수 있습니다.

<br>

> - **src/App.css:** 앱 컴포넌트에 대한 추가 CSS 스타일 파일입니다. 필요에 따라 컴포넌트 별로 스타일을 분리하여 관리할 수 있습니다.

<br>

# React 란?

![스크린샷 2023-08-21 오후 2 06 52](https://github.com/sin-hyunjin/AI_Machine_Learning/assets/116487398/c30b57b0-1e11-4641-90fb-7592d7465e04)

    React는 사용자 인터페이스(UI)를 구축하기 위한 자바스크립트 라이브러리로,

    Facebook에서 개발한 도구입니다.

- **컴포넌트 기반:** React 애플리케이션은 작고 독립적인 "컴포넌트"로 구성됩니다. 이 컴포넌트는 UI 요소를 표현하고 관리하는데 사용됩니다.

- **가상 DOM(Virtual DOM):** React는 변경된 부분만 업데이트하기 위해 가상 DOM을 사용하여 효율적으로 화면을 렌더링합니다.

- **단방향 데이터 흐름:** React에서 데이터는 상위 컴포넌트에서 하위 컴포넌트로 단방향으로 흐릅니다. 이로써 데이터 관리가 쉬워집니다.

- **재사용 가능한 UI 구성:** 컴포넌트를 활용하여 UI 요소를 재사용하고 유지보수가 쉽습니다.

(SPA) Single Page Application : --> 새로고침이 되지 않아 사용자의 피로도를 줄여준다.

<br>

## React 기본구조

![스크린샷 2023-08-22 오후 2 11 50](https://github.com/sin-hyunjin/React.js230821/assets/116487398/f0c1042b-2da0-4dfa-be2d-b59df1e6308e)

<br>

## 라이브러리(Library) vs 프레임워크(Framework)

![스크린샷 2023-08-21 오후 2 11 46](https://github.com/sin-hyunjin/AI_Machine_Learning/assets/116487398/d729475c-708c-452d-b70d-31ab406a1886)

<br>

# JSX 문법이란 ?

![스크린샷 2023-08-21 오후 3 05 48](https://github.com/sin-hyunjin/AI_React.js230821/assets/116487398/a5263bb0-d15e-45da-9037-4c330f0b21a9)

![스크린샷 2023-08-21 오후 3 06 04](https://github.com/sin-hyunjin/AI_React.js230821/assets/116487398/57627086-f2da-423e-8c35-a8c3f94df29c)

JSX문법

- HTML과 JS를 하나의 파일에 작성할 수 있는 문법

JSX문법의 특징

1.  반드시 하나의 부모요소가 있어야 한다!

- 꼭 <div> 가 아니어도 된다!

2. 표현식 사용
   단, if문 사용할 수 없다.

   2-1. 조건식이 하나 일ㄷ 때 - %%연산자 활용

   2-2. 조건식이 두개 일 때 - 삼항영산자 활용

   2-3. 조건식이 세개일 떄 - return문 위에 조건식을 만든 후 결고값만 {}에 넣어준다.

3. 기존 HTML문법과 다른 점

   3-1. class속성 -> classname 속성

   3-2. HTML문법을 사용할 떄 반드시 소문자로 작성 - 대문자로 정의하는 것은 '컴포넌트' 로 인식

   3-3. HTML문법 내 내용이 없어도 끝태그는 반드시 작성

   3-4. onclick속성 -> onClick 속성

4. 스타일 적용

   4-1. css파일 내 스타일 정의 - import로 css파일 경로 설정

   4-2. 객체형태로 정의 - HTML문법 내 style 속성 정의 - style속성 내 객체형태의 스타일 정의 ( {key:value} )

<br>

# Component 란?

![스크린샷 2023-08-22 오후 2 18 53](https://github.com/sin-hyunjin/React.js230821/assets/116487398/c774e080-d5e3-4bc2-b278-a05f6f312a2e)

- 블록이라 생각하고 페이지를 한개씩 생각하고 쪼개는 작업

- 코드의 재사용성과 유지 보수성을 향상시킨다.

# AWS 배포하기

#### AWS 사이트

- https://eu-north-1.console.aws.amazon.com/console/home?region=eu-north-1

1. 검색창에 Ec2검색 (클라우드의 가상 서버)

2. 인스턴스 시작 클릭 (정보입력 )

- 이름 및태그
- 애플리케이션 및 OS 이미지(Amazon Machine Image)
- 키 페어(로그인)
- 네트워크 설정
- 인스턴스 시작 -> 모든 인스턴스 보기

# AWS EC2 인스턴스 생성하기

1. AWS 회원가입
   - 회원가입 시 결제 할 카드 필요
   - 프리티어(무료) 사용하지만 일정 사용량 이후로는 사용한만큼 결제되니 사용하지 않을 때는 꼭 ‘인스턴스 중지’ 해놓기
   - 탈퇴 한 아이디로는 재가입 불가능!
2. EC2 인스턴스 생성하기

   - Amazon Elastic Compute Cloud(Amazon EC2)

     - EC2는 AWS에서 제공하는 클라우드 컴퓨팅 서비스
       ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/a2255069-bbc1-4ff4-9831-4a06e712de08/Untitled.png)
     - 인스턴스 생성

       1. 인스턴스 시작
       2. 이름 및 태그 : 인스턴스를 구분할 이름 정보 작성
       3. AMI 선택
          - AMI는 인스턴스를 시작하는 데 필요한 소프트웨어 구성(운영 체제, 애플리케이션 서버 및 애플리케이션)이 포함된 템플릿
       4. 키 페어

          - 키는 사용자계정(SMHRD) 밑에 Key 폴더 생성 후 해당 위치에 저장

          ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/ac8b3546-ce09-4947-b4e2-8e1b82370653/Untitled.png)

          ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/8322cf72-a748-4a46-b967-2f3606ae310d/Untitled.png)

       5. 네트워크 설정
       6. 인스턴스 시작

3. 인스턴스 연결

   - SSH 클라이언트로 연결
   - PowerShell로 키(.pem)가 있는 경로로 이동

   ```powershell
   - SSH 클라이언트로 연결

       ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fbfaea74-8d40-40bc-9c61-8c34d3c9185c/bd69981d-4b45-453e-93a9-17de81695428/Untitled.png)

       ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fbfaea74-8d40-40bc-9c61-8c34d3c9185c/3da92f88-9479-4619-9461-eb49ef8a1d62/Untitled.png)

   - PowerShell로 키(.pem)가 있는 경로로 이동
   ```

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/386fda74-8541-4284-9f64-bd0c0f37fd5a/Untitled.png)

4. 인스턴스 환경설정

   - 인바운드 규칙 추가
     - 포트번호 : IP를 통해 접속한 컴퓨터에서 어떤 곳으로 연결할지 구분시키는 역할
       - port는 0번부터 65535 사용
       - Well-known port(0~1023) : 자주 사용되는 포트번호(http:80, ssh:22)
       - Registered port(1024~49151) : 특정 용도로 사용되는 포트번호(mysql:3306, oracle:1524)
       - Dynamic port(49152~65535) : 자유롭게 사용가능한 포트번호
     - 인바운드 : 외부 컴퓨터에서 AWS 내부 컴퓨터로 데이터가 들어올 수 있도록 규칙 정의
     - 아웃바운드 : AWS 내부 컴퓨터에서 데이터가 나갈 수 있도록 규칙 정의
   - Nodejs 서버 Port 3000번 추가

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/c054e67f-a510-4db3-aca1-cdc729710693/Untitled.png)

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/7b047066-bf17-46c4-aaeb-2ed8154879c3/Untitled.png)

5. 패키지 설치
   - apt-get update/upgrade
     ```powershell
     sudo apt-get update
     sudo apt-get upgrade
     ```
     - APT : Advanced Packaged Tool, 데비안의 패키징 시스팀을 관리하는 도구 모음
     - apt, apt-get 등등 : APT와 상호작용하여 패키지를 설치/업데이트/삭제 등의 기능 수행하는 명령어
     - apt, apt-get 차이점
       - 큰 내부동작 차이 X
       - apt는 진행바 등 출력 페이지가 좀 더 친절
       - apt-get는 더 많은 기능 제공하며, 오래전부터 사용해서 안정적/호환성↑
   - 필요한 기타 패키지 설치
     ```powershell
     sudo apt-get install nodejs npm
     sudo apt-get install git
     ```

# AWS RDS 생성 및 Node.js 연동

1. RDS 생성하기

   - Amazon Relational Database Service(RDS)
     - RDS는 AWS에서 제공하는 관계형 데이터베이스 서비스

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/2dc68e5d-7b2b-40c6-9dcf-6b3449ed5302/Untitled.png)

- 데이터베이스 생성 클릭

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/eb68e570-85f8-4175-932e-a43a594f7dac/Untitled.png)

- 표준 생성 → MySQL 체크

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/def24ee1-c7ee-493f-a1fe-45db6132d108/Untitled.png)

- 템플릿 프리티어 체크
  - DB 인스턴스 클래스는 db.t2.micro로 설정

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/2c76373f-dbe3-4e46-8294-e223b268032b/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/c5fa759d-965b-4cd0-96f4-3b0e2a16fd74/Untitled.png)

- 식별자 및 계정 설정
  - 마스터 사용자 이름과 암호는 향후 접속할 때 필요한 정보이니 꼭 기억해둘 것!

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/2506361a-5a0d-4ebc-8ad9-990dafef7442/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/1d72cf8e-2f22-4e7c-8250-1151abe61106/Untitled.png)

- 자동백업 해제 ( 해제하지 않으면 요금 폭탄될 수 있음 )

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/b3433f5a-6f53-4a7c-b468-e0a9cd3519e7/Untitled.png)

- 외부접근이 되도록 퍼블릭 액세스 체크
  - ‘예’로 체크해야 외부에서도 접속 가능

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/93ac3f8c-6277-49b3-87ff-c70869c66938/Untitled.png)

- 자동백업 해제
  - 초기 데이터베이스 이름 작성 필요
  - 미 작성 시, create database 명령어로 직접 생성해줘야 하는 번거로움 발생

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/bb34f6f8-dd24-463a-a597-2fc82e2ea779/Untitled.png)

1. 보안 그룹 설정

   - 생성된 데이터베이스 클릭 ( 생성되기까지 시간이 다소 걸릴 수 있음 )

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/b663a6a5-48cd-46b8-bd5d-00743029c0cc/Untitled.png)

   - 접속한 페이지 아래로 내려간 후, 보안그룹 클릭

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/7b9b488e-e746-4e71-978f-afdb1dbc15eb/Untitled.png)

   - 인바운드 규칙 추가(외부접속 포트 및 IP 설정)
     - IP를 0.0.0.0/0으로 설정해야 어디서든 접속 가능

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/5e495d0a-2697-4123-b37b-a05033924b31/Untitled.png)

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/e02587bb-5f8b-4451-91e6-5b87a286e7f4/Untitled.png)

2. Node.js에 AWS RDS 정보 입력 후 테스트

   - 생성된 데이터베이스의 접속 엔드포인트주소를 복사
   - 생성 전 설정한 username/password 입력
   - mysql workbench 에 정보 입력 후 접속 및 테이블 생성 테스트

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fc678259-6c41-4351-abdf-dd940085bbef/0e09fa30-7eb4-400f-803e-aad0d848fe5e/Untitled.png)

   - node.js에는 데이터베이스 연결정보를 입력하는 파일에 상세내용 작성
