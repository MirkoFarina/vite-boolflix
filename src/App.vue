<script>
import axios from 'axios';
import {store} from './data/store';
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
export default {
    name:'App',
    components: {
        HeaderApp,
        MainApp
    },
    data(){
        return {
            store
        }
    },
    methods: {
        getApi(movie, serieTv, booleano){
            store.isSearch = true;
            axios.get(movie, {
                params: {
                    query: store.query,
                    language: store.language
                }
            })
                .then(films => {
                    store.isPopular = booleano;
                    store.arrayFilms= [];
                    store.arrayFilms = films.data.results;
                    store.isLoad = true;
                })
                .catch(error => {
                    store.error = error;
                }) 
            axios.get(serieTv, {
                params: {
                    language: store.language,
                    query: store.query
                }
            })
                .then(serieTv => {
                    store.isPopular = booleano;
                    store.arraySerieTv = [];
                    store.arraySerieTv = serieTv.data.results;
                    store.isLoad = true;
                })
                .catch(error => {
                    store.error = error;
                }) 
        },
        getGenere(movie, serieTv){
            axios.get(movie, {
                params: {
                    language: store.language
                }
            })
                .then(movies => {
                    store.arrayGenereFilm = movies.data.genres;
                })
                .catch(error => {
                    store.error = error
                })
            
                axios.get(serieTv, {
                    params: {
                        language: store.language
                    }
                })
                    .then(tv => {
                        store.arrayGenereTv = tv.data.genres;
                    })
                    .catch(error => {
                        store.error = error
                    })
        }
    },
    mounted(){
        this.getApi(store.getApiPopularFilms, store.getApiPopularTv, true);
        this.getGenere(store.getGenereFilms, store.getGenereTv);
    }
}
</script>


<template>
    <HeaderApp @search="getApi(store.getApiMovie, store.getApiSerieTv, false)" @show="getApi(store.getApiPopularFilms, store.getApiPopularTv, true)" />
    <MainApp />
</template>



<style lang="scss">
    @use './scss/general';
    .margin-top {
        margin-top: 80px;
    }
    .mf-button {
        background-color: #e50914;
        font-size: .9rem;
        color: white;
        &:hover {
            background-color: #a30911;
        }
    }
</style>