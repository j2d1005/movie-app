import { createAction, handleActions } from "redux-actions"; // redux-actions 호출


// action의 type을 상수로 선언
const UPDATE_CURRENT_PAGE = "movie/UPDATE_CURRENT_PAGE"; 
const UPDATE_START_END_PAGE = "movie/UPDATE_START_END_PAGE"; 

// action 생성자 만들기
// 만든 type을 가진 액션 객체를 만들어 주는 액션 생성자
export const updateCurrentPage= createAction(UPDATE_CURRENT_PAGE, page => page);
export const updateStartEndPage = createAction(UPDATE_START_END_PAGE, ( start, end ) => ({ start, end }) );

// 초기 state 정의 
const initialState = {
    current : 1,  // 현재 선택된 페이지
    start : 0, //  페이지네이션 시작
    end : 5 // 페이지네이션 끝나는 페이지 넘버 
};

// 리듀서 정의
export default handleActions({
    // 액션타입에 접두사가 있으면 [], 없으면 생략가능
    // redux-actions를 사용하면서 switch문을 사용하지 않아도 된다.
    [UPDATE_CURRENT_PAGE]: (state, action) => ({
        ...state,
        current: action.payload
    }),
    [UPDATE_START_END_PAGE]: (state, action) => ({
        ...state,
        start: action.payload.start,
        end: action.payload.end
    }),

}, initialState); // initialState를 리듀서의 state로 사용한다.