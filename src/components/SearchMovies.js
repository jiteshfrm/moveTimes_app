import { useDispatch } from 'react-redux'
import { updateSearchModel } from '../utils/searchSlice'
import './SearchMovies.scss'
import { ai, suggestedMovies } from '../utils/geminaiSearchApi'
import { useRef } from 'react'
import axios from 'axios'
import { API_OPTIONS } from '../utils/Constant'
import { addSuggestedMovies } from '../utils/suggestionSlice'
import MovieSuggestionResult from './MovieSuggestionResult'

const SearchMovies = (props) => {
    const dispatch = useDispatch()
    const movieRef = useRef()
    const closeMoviePopover = () => {
        //document.querySelector("body").style.overflow = 'auto'
        dispatch(updateSearchModel())
    }
    
    // const suggestedMovies = async() => {
    //     const inputRef = movieRef.current.value;
    //     const querySearch = `Act as a Movie Recommendation System and suggest some movies for the query ${inputRef}. Only give me names of 5 movies, comma seperated Like the example result given ahead. Example Result: Gadar, sholay, Don, Goalmaal, Koi Mil Gaya`
    //     const response = await ai.models.generateContent({
    //         model: "gemini-2.5-flash",
    //         contents: querySearch,
    //     })
    //     console.log(response.text);
    // }
    const getSuggestionMovies = async(movieName) => {
        console.log(movieName, movieName)
            try{
                const data = await axios(`https://api.themoviedb.org/3/search/movie?query=${movieName}&page=1`, API_OPTIONS)
                console.log(data, "data")
                return data.data.results
                //dispatch(addSuggestedMovies(json.results))
            } catch(err) {
                return  err; 
            }
    }
    const searchMoviesClick = async() => {
        const inputRef = movieRef.current.value;
        const Recommendation = await suggestedMovies(inputRef);
        console.log(Recommendation, "reco")
        const RecommendationLength = Recommendation ? Recommendation.split(",") : null;
        let tmdbResult;
        if(RecommendationLength.length > 0) {
            const promiseArray = RecommendationLength.map((movie) => getSuggestionMovies(movie));
            tmdbResult = await Promise.all(promiseArray)
            console.log(tmdbResult, "tmdbResulrt")
            dispatch(addSuggestedMovies({movieName:  RecommendationLength, movieResult: tmdbResult}))
        }
    }
    return (
        <div className="SearchMoviesContainer">
            <div className='closeBtn' onClick={() => closeMoviePopover()}>&times;</div>
            <div className='movieSearchMainContainer flex'>
                <input placeholder='Search Movies...' className='searchMovies' ref={movieRef} />
                <button className='btn movieSearchBtn' onClick={() => searchMoviesClick()}>Search</button>
                
            </div>
            <MovieSuggestionResult />
        </div>
    )
}
export default SearchMovies;