import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/moviesListSlice"
import { API_OPTIONS } from "../utils/Constant"
import { useEffect } from "react"

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const getaddPopularMovies = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
            const json =  await data.json()
            dispatch(addPopularMovies(json.results))
        } catch(err) {
            throw  err; 
        }
       
    }
    useEffect(()=> {
        getaddPopularMovies()
    }, [])
}
export default usePopularMovies;