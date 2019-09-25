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
        params: {
            page: page
        }
    }),
    search: () => api.get("search/movie",{
        params: {
            // api_key: "6f26edc26d6ed9d164d9bc332258be3f",
            query: encodeURI(keyWord),
            page: page
        }
    }),
    getDetail: (id) => api.get(`movie/${id}&append_to_response=videos`, {
        params: {
            append_to_response: "videos"
        }
    }),
};