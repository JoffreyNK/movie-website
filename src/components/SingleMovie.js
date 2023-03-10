import React from 'react';

const SingleMovie = ({ movie }) => (
  <li className="flex flex-col gap-4 p-5  bg-[#3f3f3f]">
    <div className="relative group z-10">
      <div>
        <img src={movie.imageurl[0]} alt={movie.title} className="w-full" />
      </div>
      {movie.synopsis.length > 1 ? <p className="absolute hidden group-hover:block text-lg bottom-0 bg-[#cac9c9] bg-opacity-90 text-[#1f1f1f] p-3 text-justify">{movie.synopsis}</p> : ''}
    </div>
    <h4 className="text-[#cac9c9]">
      {movie.title}
      {' '}
      {movie.released ? `(${movie.released})` : ''}
    </h4>
    <h4 />
    <ul className="flex justify-between gap-2">
      {movie.genre.map((genre) => <li className="text-[#cac9c9]">{genre}</li>)}
    </ul>

  </li>
);

export default SingleMovie;
