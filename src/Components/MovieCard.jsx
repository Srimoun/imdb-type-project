import React from 'react'


const MovieCard = ({movieObj}) => {
  return (
     <div className="h-52 rounded-lg w-36 bg-center bg-cover flex items-end hover:scale-110 duration-300" style={{ backgroundImage: `url(${movieObj.url})` }}>
            <div className ="text-white w-full text-center text-xl p-2 rounded-lg bg-gray-900"> 
                {movieObj.title}
             </div>
    </div>
  )
}

export default MovieCard;