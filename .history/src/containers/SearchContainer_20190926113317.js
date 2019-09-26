import React, {useState, useEffect } from "react"
import Search from "../components/Search"
import { connect } from "react-redux";
import { moviesApi } from "../api"

const SearchContainer = ({ current, match }) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isSearching, setSearching ] = useState(true);
    const [ keyWord, setKeyWord ] = useState('');
    const [ movies, setMovies ] = useState('');
    const [ searched, setSearched ] = useState('');
    const [ pageLength, setPageLength ] = useState(); 
    const [ currentPage, setCurrentPage] = useState(current);
    const [ category, setCategory ] = useState(''); 

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

    const searchList = async (page) => {
        const res = await moviesApi.search(keyWord, page);
        setMovies(res.data.results);
        setPageLength(res.data.total_pages);
        setIsLoading(false);
        setSearching(false);
    };

    // submit 외에도 페이지네이션 클릭했을때도 list갱신해야됨
    useEffect(()=>{
        searchList(currentPage);
        setCategory(`Search By ${searched}`);   
    }, [currentPage, searched]);

    //페이지네이션관련
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
            category = {category}
            urlpath = {match.path}
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