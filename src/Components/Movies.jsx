import React, {useState} from 'react'
import MovieCard from './MovieCard';
import Pagination from './Pagination';


const Movies = () => {
    const[movies, setMovies] = useState([
        {
           url:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
           title: "Movie 1"
        },
        {
            url:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            title: "Movie-2"
        },
        {
            url:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            title:"Movie-3"
        },
        {
              url:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            title:"Movie-4"
        },
        {
            url:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            title:"Movie-5"
        },
        {
            url:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            title:"Movie-6"
        },
        {
            url:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            title:"Movie-7"
        },
        {
            url:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            title:"Movie-8"
        },
        {
            url:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            title:"Movie-9"
        },    

    ]);
    const[pageNo, setPageNo] = useState(1);

    const handleNext = () =>{
        setPageNo(pageNo+1);
    }

    const handlePrevious = () =>{
        if(pageNo > 1 ){
        setPageNo(pageNo-1);
        }
    };

  return ( 
    <div className = "min-h-screen">
    <div className="text-4xl font-bold text-center m-5"> Trending Movies</div>
     
     <div className = "flex justify-evenly gap-8 flex-wrap">
     {movies.map((movie, i) =>{
    return (
       <MovieCard key = {i} movieObj = {movie}/>
    )
   })}
     </div>

     {/* Pagination */}
     <Pagination nextPagefn={handleNext} previouspagefn={handlePrevious}  pagenumber={pageNo} />

    </div>
    
  )
}

export default Movies