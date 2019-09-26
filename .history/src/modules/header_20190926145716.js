import { createAction, handleActions } from "redux-actions"; // redux-actions 호출


// action의 type을 상수로 선언
const NAV_TOGGLE = "header/NAV_TOGGLE"; 
const NAV_CLOSE = "header/NAV_CLOSE"; 

// action 생성자 만들기
// 만든 type을 가진 액션 객체를 만들어 주는 액션 생성자
export const navToggle= createAction(NAV_TOGGLE);
export const navClose= createAction(NAV_CLOSE, value => value);

// 초기 state 정의 
const initialState = {
    isNavOpen : false
};

// 리듀서 정의
export default handleActions({
    // 액션타입에 접두사가 있으면 [], 없으면 생략가능
    // redux-actions를 사용하면서 switch문을 사용하지 않아도 된다.
    [NAV_TOGGLE]: (state, action) => ({
        ...state,
        isNavOpen: ! state.isNavOpen
    })
    [NAV_CLOSE]: (state, action) => ({
        ...state,
        isNavOpen: action.payload
    })

}, initialState); // initialState를 리듀서의 state로 사용한다.