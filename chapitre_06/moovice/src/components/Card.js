const Card = (props) => {
    return (
        <div>
            <ul>
                <img src={`https://image.tmdb.org/t/p/w300/${props.backdrop_path}`} alt={`Poster movie`}></img>
                <li>{props.title}</li>
                <li>{props.release_date}</li>
                <li>{props.overview}</li>
            </ul>
        </div>
    )
}

export default Card