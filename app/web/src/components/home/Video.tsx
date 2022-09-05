const Video = () => {
    return(
        <div className="flex justify-center rounded-sm mt-7">
             <iframe className = "rounded-sm" width="560" height="315" src="https://www.youtube.com/embed/JS5w4rUbjQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video;