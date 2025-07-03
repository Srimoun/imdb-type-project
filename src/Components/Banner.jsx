import React, { useState,  useEffect } from 'react';
import axios from 'axios';

const Banner = () => {

  const [bannerimage, setBannerImage] = useState("https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg");
  const [title, setTitle] = useState("PlaceHolder Movie");

  useEffect(() => {
     axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=7f47f3dd03ccf3376d65900ffc9403b8&language=en-US"
    ).then(function  (res) {
      const movie = res.data.results[0];
      setBannerImage(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`);
      setTitle(movie.original_title);
    })
    .catch((err) => {
      console.log(err);
    })
  }); 

  return (
    <div className = {'h-[80vh] w-[100vw] bg-cover bg-center flex items-end justify-center'}
    style={{backgroundImage: `url(${bannerimage})`}}>

        <div className = 'text-white text-2xl w-full text-center pb-3'>
        {title}
        </div>
    </div>
  )
}

export default Banner