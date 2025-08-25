import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/moviesListSlice"
import { API_OPTIONS } from "../utils/Constant"
import { useEffect } from "react"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const getUpcomingMovies = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
            const json =  await data.json()
            dispatch(addUpcomingMovies(json.results))
        } catch(err) {
            throw  err; 
        }
       
    }
    useEffect(()=> {
        getUpcomingMovies()
    }, [])
}
export default useUpcomingMovies;