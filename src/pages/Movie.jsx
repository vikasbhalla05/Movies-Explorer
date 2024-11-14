import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/AppContext'


const Movie = () => {
    let { id } = useParams()
    const { name, movie: { movies, isLoading, error } } = useGlobalContext();

    return (
        <div>Movie {id} {name}</div>
    )
}

export default Movie