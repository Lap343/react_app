import { truncate } from './utils';

const MovieCard = (props) => {
    return(
        <div className='movie-card' onClick={props.onClick}>
            <img src={props.posterUrl} alt="" />
            <h2>{truncate(props.title, 15)}</h2>
            <p>{props.type}</p>
        </div>
    )
}

export default MovieCard;