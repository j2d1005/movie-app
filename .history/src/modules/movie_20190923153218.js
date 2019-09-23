import { createAction, handleActions } from "redux-actions"; // redux-actions 호출


// action의 type을 상수로 선언
// const ON_CHANEGE_MODE = "crud/ON_CHANEGE_MODE";  // 앞의 접두사를 붙여서 다른 리듀서에서의 중복된 액션타입과 충돌방지

// action 생성자 만들기
// 만든 type을 가진 액션 객체를 만들어 주는 액션 생성자
// export const onChangeMode = createAction(ON_CHANEGE_MODE, mode => mode);

// 초기 state 정의 
const initialState = {
    page = 1,
};

// 리듀서 정의
export default handleActions({
    // 액션타입에 접두사가 있으면 [], 없으면 생략가능
    // redux-actions를 사용하면서 switch문을 사용하지 않아도 된다.
    // [ON_CHANEGE_MODE]: (state, action) => ({
    //     ...state,
    //     mode: action.payload 
    // }),
}, initialState); // initialState를 리듀서의 state로 사용한다.