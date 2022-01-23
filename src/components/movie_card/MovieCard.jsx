import React from 'react';

import './MovieCard.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/theMovieApi';
import configApi from '../../api/configApi';

export const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = configApi.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie_card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play">Play</i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;