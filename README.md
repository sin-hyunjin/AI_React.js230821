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
