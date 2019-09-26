import { combineReducers } from "redux";
import movie from "./movie";
import header from "./header";

/*
 * combineReducers : 여러개의 리듀서를 하나로 합쳐주는 역할
 * 여러개의 나뉘어진 리듀서 : 서브리듀서, 하나로 합쳐진 리듀서 : 루트리듀서
 */

export default combineReducers({
    movie,
    header
})