import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesListSlice"
import { API_OPTIONS } from "../utils/Constant"
import { useEffect } from "react"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const getaddTopRatedMovies = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
            const json =  await data.json()
            dispatch(addTopRatedMovies(json.results))
        } catch(err) {
            throw  err; 
        }
       
    }
    useEffect(()=> {
        getaddTopRatedMovies()
    }, [])
}
export default useTopRatedMovies;