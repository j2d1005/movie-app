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
    //api 불러오기
    const searchList = async (page) => {
        const res = await moviesApi.search(keyWord, page);
        setMovies(res.data.results);
        setPageLength(res.data.total_pages);
        setIsLoading(false);
        setSearching(false);
    };

    // submit 외에도 페이지네이션 클릭했을때도 list갱신해야됨
    useEffect(()=>{
        if(keyWord!==''){ // uesEffect를 사용하면 로딩과 동시에 무조건 한번 실행을 하기 때문에 조건을 줘서 실행이 안되게 막음
            searchList(currentPage);
            setCategory(`Search By ${searched}`);  
        } 
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