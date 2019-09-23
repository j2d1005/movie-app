import { createAction, handleActions } from "redux-actions"; // redux-actions 호출


// action의 type을 상수로 선언
// const ON_CHANEGE_MODE = "crud/ON_CHANEGE_MODE";  // 앞의 접두사를 붙여서 다른 리듀서에서의 중복된 액션타입과 충돌방지

// action 생성자 만들기
// 만든 type을 가진 액션 객체를 만들어 주는 액션 생성자
// export const onChangeMode = createAction(ON_CHANEGE_MODE, mode => mode);

// 초기 state 정의 
const initialState = {
    page = 1;
};