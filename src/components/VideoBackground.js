import { useSelector } from "react-redux"
import useVideoBackground from "../hooks/useVideoBackground"

const VideoBackground = ({movieId}) => {
    const trailer = useSelector(state => state.movies.trailer)
    useVideoBackground(movieId)
    return <div className="videoBackgroundMaincontainer">
        <iframe 
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0`} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
}
export default VideoBackground