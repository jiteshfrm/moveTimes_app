import { useSelector } from "react-redux";
import MoveList from "./MovieList";
import './SecondaryContainer.scss';
const SecondaryContainer = () => {
    const movies = useSelector(state => state.movies)
    console.log(movies)
    return (
        <div className="secondaryMainContainer">
            <div className="innerSecondaryContainer">
            <MoveList title={"Now Playing"} movies={movies.nowPlayingMovies} /> 
            <MoveList title={"Popular"} movies={movies.PopularMovies} /> 
            <MoveList title={"Top Rated"} movies={movies.topRated} /> 
            <MoveList title={"Upcoming"} movies={movies.upComing} /> 
            </div>
        </div>
    )
}
export default SecondaryContainer;