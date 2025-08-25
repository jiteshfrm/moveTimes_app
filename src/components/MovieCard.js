import { img_cdn_url } from "../utils/Constant";

const MovieCard = ({posterPath}) => {
    return (
        <img src={img_cdn_url + posterPath} alt="movieCard" />
    )
}
export default MovieCard;