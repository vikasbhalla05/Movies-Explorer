import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieCard = (props) => {

    const navigate = useNavigate();

    const { data } = props

    const redirect = () => {
        navigate(`/movie/${data.imdbID}`)
    }
    return (
        <div className='flex flex-col p-5 align-center justify-between' onClick={() => redirect()}>
            <h2 className='text-center text-blue-950'>{data.Title}</h2>
            <img src={data.Poster} alt={data.Title} />
        </div>

    )
}

export default MovieCard