
import React, {useState, useEffect} from 'react';
import genreids from '../assets/genre';

  const Watchlist = () => {
   const [watchlist, setWatchlist] = useState([]);
   const[search, setSearch] = useState("");
   const [genreList, setGenreList] = useState([]);
   const[currGenre, setCurrGenre] = useState("All");

   const handleSearch = (e) => {
    setSearch(e.target.value);
   }

   const handleFilter = (genre) => {
    setCurrGenre(genre);
   };

  const handleascendingratings = () =>{
    let sortedAscending = watchlist.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWatchlist([...sortedAscending]);

  }

  const handledescedingratings = () =>{
    let sorteddescending = watchlist.sort((a,b) => {
      return b.vote_average - a.vote_average;
    });
      setWatchlist([...sorteddescending]);
  }
   
   useEffect(() => {
      let moviesfromlocalstorage = localStorage.getItem("watchList");

       if ( !moviesfromlocalstorage) {
          return
       }

       const parsedWatchList = JSON.parse(moviesfromlocalstorage);

       setWatchlist(parsedWatchList);
       console.log(parsedWatchList);
      
      }, []);

   
   // let genres = parsedWatchList.map((movie) => {
  //    return genreids[movie.genre_ids[0]]
  //  })

  //  genres = new Set(genres);
  //  setGenreList([...genres]);
    
  // }, []);
  useEffect(() => {
    console.log(watchlist);
    let genres = watchlist.map((movie) => {
      return genreids[movie.genre_ids[0]];
    
  })

  genres = new Set(genres);
  setGenreList(["All", ...genres]);
  console.log(genres);
}, [watchlist])

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      {/* Search filed */}
      <div className = "flex justify-center my-10">
        <input type = "text" placeholder = "Search movies" value = {search} onChange={handleSearch} className='border border-gray-500 h-[3rem] 
         w-[18rem] px-3' ></input>
      </div>
       {/* Genre */}
       <div className="flex justify-center flex-wrap gap-4 my-4">
        {genreList && genreList.map((genre) => {
          return (
            <div key = {genre} onClick={() => handleFilter(genre)} className ={currGenre == genre ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl cursor-pointer": 
              "mx-4 flex justify-center items-center bg-gray-400 h-[3rem] w-[9rem] text-white border rounded-xl cursor-pointer" }
            >
              {genre}
            </div>
          )
        })}
       </div>

      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex items-center gap-2">
                <i
              onClick={handleascendingratings}
              className="fa-solid fa-arrow-up"
              ></i>
                <div>Ratings</div>
               <i
              onClick={handledescedingratings}
              className="fa-solid fa-arrow-down"
              ></i>
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

          {watchlist
          .filter((movie) => {
              if(currGenre === "All"){
                return true;
              }

              return genreids[movie.genre_ids[0]] === currGenre;
          })
          .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((movieObj)  => (
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

  }


export default Watchlist;