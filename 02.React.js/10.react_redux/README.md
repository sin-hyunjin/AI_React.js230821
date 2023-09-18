# Redux 툴킷

    npm install @reduxjs/toolkit
    npm install react-redux

- 상태(state) 관리를 위해 사용하는 라이브러리

- 모듈 번들러 또는 노드 애플리케이션과 함께 사용하기 위해 NPM에서 패키지로 ㅈ공

- configureStore(): createStore단순화된 구성 옵션과 적절한 기본값을 제공하기 위해 래핑됩니다. 자동으로 슬라이스 리듀서를 결합하고, 제공하는 Redux 미들웨어를 추가하고, redux-thunk기본적으로 포함하며, Redux DevTools Extension을 사용할 수 있습니다.

- createReducer(): 스위치 문을 작성하는 대신 Case Reducer 함수에 작업 유형의 조회 테이블을 제공할 수 있습니다. 또한 자동으로 라이브러리 immer를 사용 하여 state.todos[3].completed = true.

- createAction(): 주어진 액션 유형 문자열에 대한 액션 생성기 함수를 생성합니다. 함수 자체가 toString()정의되어 있으므로 유형 상수 대신 사용할 수 있습니다.

- createSlice(): 리듀서 함수의 객체, 슬라이스 이름, 초기 상태 값을 받아들이고 해당 액션 생성자와 액션 유형을 사용하여 슬라이스 리듀서를 자동으로 생성합니다.

- createAsyncThunkpending/fulfilled/rejected: 작업 유형 문자열과 약속을 반환하는 함수를 받아들이고 해당 약속을 기반으로 작업 유형을 전달하는 썽크를 생성합니다.

- createEntityAdapter: 저장소에서 정규화된 데이터를 관리하기 위해 재사용 가능한 리듀서 및 선택기 세트를 생성합니다.
  사용하기 쉽도록 다시 내보낸 Reselect 라이브러리 의 유틸리티 createSelector입니다 .

## Redux logger

    npm install redux-logger

## Readux 상태 관리 흐름

![스크린샷 2023-09-13 오전 9 13 33](https://github.com/doyou1/web-front-clone-sinhj/assets/116487398/fdb8f45f-db00-46ff-8b26-5deec669c37f)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
