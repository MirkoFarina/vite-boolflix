<script>
import {store} from '../data/store';
import DynamicLi from './DynamicLi.vue';
export default {
    name:'MainApp',
    components: {
        DynamicLi
    },
    data(){
        return {
            store
        }
    }
}
</script>


<template>
    <main v-if="store.isLoad">
        <div class="container">
            <div class="row" v-if="store.isSearch && store.arrayFilms.length">
                <h3>
                    films
                </h3>
                <DynamicLi 
                    v-for="(films, index) in store.arrayFilms" :key="index" 
                    :titolo="films.title" 
                    :titoloOriginal="films.original_title"
                    :lingua="films.original_language"
                    :voto="films.vote_average"
                    :pathImg="films.poster_path"
                    :description="films.overview"/>
            </div>
            
            <div class="row" v-if="store.isSearch && store.arraySerieTv.length">
                <h3>
                    serie tv
                </h3>
                <DynamicLi 
                    v-for="(serieTv, index) in store.arraySerieTv" :key="index" 
                    :titolo="serieTv.name" 
                    :titoloOriginal="serieTv.original_name"
                    :lingua="serieTv.original_language"
                    :voto="serieTv.vote_average"
                    :pathImg="serieTv.poster_path"
                    :description="serieTv.overview"/>
            </div>
        </div>            
   </main>
</template>



<style lang="scss" scoped>
    main {
        color: white;
    }
    h3 {
        text-transform: uppercase;
    }
    .row {
        display: flex;
    }
</style>