import React from 'react'

const MovieCard = (props) => {

    const { data } = props
    return (
        <div className='flex flex-col p-5 align-center justify-between'>
            <h2 className='text-center text-blue-950'>{data.Title}</h2>
            <img src={data.Poster} />
        </div>

    )
}

export default MovieCard