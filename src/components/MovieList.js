import MovieCard from "./MovieCard";

const MoveList = ({title, movies}) => {
    return (
        <div className="allMovieContainer_top">
            <h3>{title}</h3>
            <div className="topListContiner">  
            <div className="mainMovieContainer_forScroll">
                {movies && movies?.map(item => {
                    return <MovieCard key={item.id} posterPath={item.poster_path}/>
                })}
                {/* <MovieCard posterPath={movies[0].poster_path}/> */}
            </div>
            </div>
        </div>
        
    )
}
export default MoveList;