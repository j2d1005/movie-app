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
    nowPlaying: (page) => api.get("movie/now_playing",{
        params: {
            page: page
        }
    }),
    popular: (page) => api.get("movie/popular",{
        params: {
            page: page
        }
    }),
    topRated: (page) => api.get("movie/top_rated",{
        params: {
            page: page
        }
    }),
    upComing: (page) => api.get("movie/upcoming",{
        params: {
            page: page
        }
    }),
    // search: (term) => api.get("search/movie",{
    //     params: {
    //         // api_key: "6f26edc26d6ed9d164d9bc332258be3f",
    //         query: encodeURI(term)
    //     }
    // }),
    getDetail: (id) => api.get(`movie/${id}&append_to_response=videos`, {
        params: {
            append_to_response: "videos"
        }
    }),
};