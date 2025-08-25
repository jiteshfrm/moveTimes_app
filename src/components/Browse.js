import { useState } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SearchMovies from "./SearchMovies";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies()
    const showSearch = useSelector(state => state?.search?.showSearch)
    return (
        <div>
            <Header  />
            <MainContainer />
            <SecondaryContainer />
            {showSearch && <SearchMovies /> }
        </div>
    )
}
export default Browse;