import { useSelector } from "react-redux";
import MoveList from "./MovieList";

const MovieSuggestionResult = () => {
    const {suggestedMovies, movieName} = useSelector(state => state.suggestionSearch)
    if(!movieName) return null;

    return (
        <div className="p-4 m-4 text-white searchSuggestedList">
            {movieName.map((movie,index) => {
                return <MoveList key={movie} title={movie} movies={suggestedMovies[index]} />
            })}
            
        </div>
    )
}
export default MovieSuggestionResult;