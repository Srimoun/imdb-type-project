import React from 'react'


const MovieCard = ({movieObj, watchlist, addtoWatchlist, removefromWatchlist}) => {

 function doesContain() {
    for(let i=0;i<watchlist.length;i++){
       if(watchlist[i].id === movieObj.id){
         return true;
       }
    }

    return false;
 }

  return (
     <div className="h-52 rounded-lg w-36 justify-between flex-col bg-center bg-cover bg-[url(${movieObj.url})] flex items-end hover:scale-110 duration-300" 
     style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})` }}>
   
     {doesContain() ===  false? (
        <div onClick = {() => addtoWatchlist(movieObj)} className = "justify-center m-2 text-xl bg-gray-700 items-center hover:cursor-pointer">
        🤍
        </div>
     ) : (
        <div onClick = {() => removefromWatchlist(movieObj)} className = "justify-center m-2 text-xl bg-gray-700 items-center hover:cursor-pointer">
        ❤️
        </div>
       
     )}
      


            <div className ="text-white w-full text-center text-xl p-2 rounded-lg bg-gray-900"> 
                {movieObj.title}
             </div>
    </div>
  )
}

export default MovieCard;