import {reactive} from 'vue';

export const store= reactive({
    getApiPopularFilms: 'https://api.themoviedb.org/3/movie/popular?api_key=c97c2cdd0865f2d6f7af8f6643f2eec3',
    getApiPopularTv: 'https://api.themoviedb.org/3/tv/popular?api_key=c97c2cdd0865f2d6f7af8f6643f2eec3',
    getApiMovie: 'https://api.themoviedb.org/3/search/movie?api_key=c97c2cdd0865f2d6f7af8f6643f2eec3',
    getApiSerieTv: 'https://api.themoviedb.org/3/search/tv?api_key=c97c2cdd0865f2d6f7af8f6643f2eec3',
    getGenereFilms: 'https://api.themoviedb.org/3/genre/movie/list?api_key=c97c2cdd0865f2d6f7af8f6643f2eec3',
    getGenereTv: 'https://api.themoviedb.org/3/genre/movie/list?api_key=c97c2cdd0865f2d6f7af8f6643f2eec3',
    query: '',
    language: 'it-IT',
    error: '',
    arrayFilms: [],
    arraySerieTv: [],
    arrayGenereFilm: [],
    arrayGenereTv: [],
    isSearch: false,
    isLoad: false,
    isPopular: true,
    showFilm: true
})