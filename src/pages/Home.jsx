import React from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';

import HeroSlide from '../components/hero_slide/heroSlide';
import MovieList from '../components/movie_list/MovieList';
import { category, movieType, tvType } from '../api/theMovieApi';
 

const Home = () => { 
  const newLocal = <MovieList category={category.movie} type={movieType.popular} />;
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section_header mb2">
            <h2>Filmes tendências</h2>
            <Link to="/movie">
              <OutlineButton className="small">Ver Mais</OutlineButton>
            </Link>
            
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>

        <div className="section mb-3">
          <div className="section_header mb2">
            <h2>Filmes mais bem avaliados</h2>
            <Link to="/movie">
              <OutlineButton className="small">Ver Mais</OutlineButton>
            </Link>
            
          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>
        </div>

        <div className="section mb-3">
          <div className="section_header mb2">
            <h2>Series Tendências</h2>
            <Link to="/tv">
              <OutlineButton className="small">Ver Mais</OutlineButton>
            </Link>
            
          </div>
          <MovieList category={category.tv} type={tvType.popular}/>
        </div>

        <div className="section mb-3">
          <div className="section_header mb2">
            <h2>Series mais bem avavliadas</h2>
            <Link to="/tv">
              <OutlineButton className="small">Ver Mais</OutlineButton>
            </Link>
            
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>
        </div>
      </div>
    </>
    
  );

}
export default Home;
