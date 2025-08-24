import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import './MainContainer.scss'
const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovies = movies[0];
    const {original_title, overview, id} = mainMovies;
return  (
    <div className="mainContainerVideoSection">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
)
}
export default MainContainer