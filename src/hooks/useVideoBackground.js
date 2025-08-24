import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/Constant"
import { addtrailersVideos } from "../utils/moviesListSlice"
import axios from "axios"
import { useEffect } from "react"

const useVideoBackground = (movieId) => {
    const dispatch = useDispatch()
    const getMoviesVideo = async () => {
        const data = await axios(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const getTrailer = data?.data?.results?.filter(item => item.type === 'Trailer')
        console.log(getTrailer)
        dispatch(addtrailersVideos(getTrailer[0]))
    }
    useEffect(() => {
        getMoviesVideo()
    },[])
}
export default useVideoBackground;