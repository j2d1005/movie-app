import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "6f26edc26d6ed9d164d9bc332258be3f",
        language: "en-US"
    }
});

export const moviesApi = {
    callList:(path, page) => api.get(`movie${path}`,{
        params: {       // api의 movie/~ 기능을 사용할 때 params로 page, languge등을 받을 수 있다. 
            page: page  // page를 받아서 가져온 해당 데이터의 page를 설정할 수 있다.
        }
    }),
    search: (keyWord, page) => api.get("search/movie",{
        params: {
            query: encodeURI(keyWord),
            // page: page
        }
    }),
    getDetail: (id) => api.get(`movie/${id}&append_to_response=videos`, {
        params: {
            append_to_response: "videos"
        }
    }),
};