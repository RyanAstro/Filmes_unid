import axios from "axios";
import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    _getMovieList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);

    },
    get getMovieList_1() {
        return this._getMovieList;
    },
    set getMovieList_1(value) {
        this._getMovieList = value;
    },
    get getMovieList() {
        return this._getMovieList;
    },
    set getMovieList(value) {
        this._getMovieList = value;
    },
        getTvList: (type, params) => {
            const url = 'tv/' + tvType[type];
            return axiosClient.get(url, params);
    
        },
        getVideos: (cate, id) => {
            const url = category[cate] + '/' + id + '/videos';
            return axiosClient.get(url, {params: {}});
        },
        search: (cate, params) => {
            const url = 'search/' + category[cate];
            return axiosClient.get(url, params);
        },
        detail: (cate, id, params) => {
            const url = category[cate] + '/' + id;
            return axiosClient.get(url, params);
        },
        credits: (cate, id) => {
            const url = category[cate] + '/' + id + '/credits';
            return axiosClient.set(url, {params: {}});
        },
        similar: (cate, id) => {
            const url = category[cate] + '/' + id + '/similar';
            return axiosClient.get(url, {params: {}});
        },
}

export default tmdbApi

