
import React, {useState, useEffect} from 'react';
import genreids from '../assets/genre';

  const Watchlist = () => {
   const [watchlist, setWatchlist] = useState([]);

   
   useEffect(() => {
      let moviesfromlocalstorage = localStorage.getItem("watchList");

       if ( !moviesfromlocalstorage) {
          return
       }

       setWatchlist(JSON.parse(moviesfromlocalstorage));
       console.log(watchlist);
      
   }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <div>Ratings</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          
          {/* Sample Movie Element */}

          {watchlist.map((movieObj)  => (
              <tr key = {movieObj.id} className="hover:bg-gray-50">
            <td className="flex items-center px-6 py-4 font-normal text-gray-900">
              <img
                
                className="h-[6rem] w-[10rem] object-cover mr-4"
                src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                alt="Movie Poster"
              />
              <div className="font-medium ml-3 text-gray-700 text-sm">
                {movieObj.title}
              </div>
            </td>
            <td className="px-6 py-4">{movieObj.vote_average}</td>
            <td className="px-6 py-4">{movieObj.popularity}</td>
            <td className="px-6 py-4">{genreids[movieObj.genre_ids[0]]}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default Watchlist;