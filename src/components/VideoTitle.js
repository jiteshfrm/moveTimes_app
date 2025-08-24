import './VideoTitle.scss'
const VideoTitle = (props) => {
    const {title, overview} = props
    return (
        <div className='trainerDetailContainer'>
           <h1 className='titleMianVideo'>{title}</h1>
           <p className='paraVideoTitle w-1/2'>{overview}</p>
           <div className='btnContainer_videoMain'>
            <div className='btn playBtn'> &#x25B6; Play</div>
            <div className='btn moreInfoBtn'>&#9432; More info</div>
            </div> 
        </div>
    )
}
export default VideoTitle;