import React from 'react'
import { useParams } from 'react-router-dom'


const Movie = () => {
    let { id } = useParams()
    return (
        <div>Movie {id}</div>
    )
}

export default Movie