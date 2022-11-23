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
        getApi(){
            store.isSearch = true;
            axios.get(store.getApiMovie, {
                params: {
                    query: store.query,
                    language: store.language
                }
            })
                .then(films => {
                    store.arrayFilms= [];
                    store.arrayFilms = films.data.results;
                    store.isLoad = true;
                })
                .catch(error => {
                    store.error = error;
                }) 
            axios.get(store.getApiSerieTv, {
                params: {
                    language: store.language,
                    query: store.query
                }
            })
                .then(serieTv => {
                    store.arraySerieTv = [];
                    store.arraySerieTv = serieTv.data.results;
                    store.isLoad = true;
                })
                .catch(error => {
                    store.error = error;
                }) 
        }
    }
}
</script>


<template>
    <HeaderApp @search="getApi()" />
    <MainApp />
</template>



<style lang="scss">
    @use './scss/general';
</style>