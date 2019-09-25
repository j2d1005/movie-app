import React, {useState, UseEffect } from "react"
import Search from "../components/Search"
import { connect } from "react-redux";
import { moviesApi } from "../api"

const SearchContainer = ({ current, start, end, match }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isSearching, setSearching ] = useState(true);
    const [ keyWord, setKeyWord ] = useState('');
    const [ movies, setMovies ] = useState('');
    const [ searched, setSearched ] = useState('');
    const [ pageLength, setPageLength ] = useState(); 
    const [ currentPage, setCurrentPage] = useState(current);

    const onChange = (e) => {
        setKeyWord(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if( keyWord !== "" ){
            searchList();
        } else{
            alert('keyWord를 입력해주세요!');
        }
        setSearched(keyWord);       
    };
    const searchList = async () => {
        // setIsLoading(true);
        setSearched('');  // 다른 키워드로 검색하기 위해 초기화
        const res = await moviesApi.search(keyWord);
        setMovies(res.data.results);
        setPageLength(res.data.total_page);
        setIsLoading(false);
        setSearching(false);
    };

    const currentPageSetting = (page) => {
        setCurrentPage(page);
    };

    return (
        <Search 
            keyWord={keyWord}
            searched={searched}
            onChange={onChange}
            onSubmit={onSubmit}
            isSearching={isSearching}
            isLoading = {isLoading}
            movies = {movies}
            path = {match.path}
            //페이지네이션관련
            currentPage = {currentPage}
            pageLength = {pageLength}
            currentPageSetting = {currentPageSetting}
        />
    )
}

const mapStateToProps = ({movie}) => ({
    current: movie.current,
});


export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(SearchContainer);