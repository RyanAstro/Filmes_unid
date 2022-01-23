import React, { useEffect, useState } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import theMovieApi, { category, movieType } from '../../api/theMovieApi'
import configApi from '../../api/configApi';
import { cleanup } from '@testing-library/react';
import tmdbApi from '../../api/theMovieApi';
import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';

import './heroSlide.scss';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react/cjs/react.development';

const HeroSlide = () => { 

    SwiperCore.use([Autoplay])

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1, language: 'pt-br'}
            try {
                const response = await tmdbApi.getMovieList(movieType.popular, {params});
                setMovieItems(response.results.slice(1, 4));
                console.log(response);
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);


  return (
    <div className='hero-slide'>
        <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            
        >
            {
                 movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                        )}
                    </SwiperSlide>
                ))
            }
        </Swiper>
            {
        movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)       
            }
    </div>
  );
}

const HeroSlideItem = props => {

    let hisrory = useHistory();

    const item = props.item;

    const background = configApi.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);

        const videos = await tmdbApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal_content > iframe').setAttribute('src', videSrc);
        } else {
            modal.querySelector('.modal_content').innerHTML = 'trailer não disponivel';
        }

        modal.classList.toggle('active');
    }

    return(
        <div
            className={`hero-slide_item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide_item_content container">
                <div className="hero-slide_item_content_info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => hisrory.push('/movie/' + item.id)}>
                            Assistir agora
                        </Button>
                        <OutlineButton onClick={setModalActive}>
                            Assistir trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide_item_content_poster">
                    <img src={configApi.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )

}


const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}

export default HeroSlide;