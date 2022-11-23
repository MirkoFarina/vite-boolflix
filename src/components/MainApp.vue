<script>
import {store} from '../data/store';
import DynamicCard from './DynamicCard.vue';
import LoaderApp from './LoaderApp.vue';
export default {
    name:'MainApp',
    components: {
        DynamicCard,
        LoaderApp
    },
    data(){
        return {
            store
        }
    }
}
</script>


<template>
    <div v-if="store.error" class="error">
        {{store.error}}
    </div>
    <main v-else >
        <div id="loader" v-if="!store.isLoad">
            <LoaderApp />
        </div>
        <div class="container" v-else>
            <div class="row" v-if="store.isSearch && store.arrayFilms.length">
                <h3 v-if="store.isPopular">
                   most Popular Film
                </h3>
                <h3 v-else>
                    film
                </h3>
                <DynamicCard 
                    v-for="(films, index) in store.arrayFilms" :key="index" 
                    :titolo="films.title" 
                    :titoloOriginal="films.original_title"
                    :lingua="films.original_language"
                    :voto="films.vote_average"
                    :pathImg="films.poster_path"
                    :description="films.overview"/>
            </div>
            
            <div class="row" v-if="store.isSearch && store.arraySerieTv.length">
                <h3 v-if="store.isPopular">
                   most Popular SerieTv
                </h3>
                <h3 v-else>
                    serietv
                </h3>
                <DynamicCard 
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
    .error {
        text-align: center;
        font-size: 4rem;
        color: red;
    }
    main {
        color: white;
        #loader {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    h3 {
        text-transform: uppercase;
    }
    .row {
        display: flex;
    }
</style>