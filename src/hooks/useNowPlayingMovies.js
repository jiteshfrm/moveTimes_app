import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesListSlice"
import { API_OPTIONS } from "../utils/Constant"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
            const json =  await data.json()
            dispatch(addNowPlayingMovies(json.results))
        } catch(err) {
            throw  err; 
        }
       
    }
    useEffect(()=> {
        getNowPlayingMovies()
    }, [])
}
export default useNowPlayingMovies;