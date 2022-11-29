<script>
import {store} from '../data/store';
import WindowPage from './WindowPage.vue';
import DynamicCard from './DynamicCard.vue';
import LoaderApp from './LoaderApp.vue';

export default {
    name:'MainApp',
    components: {
        DynamicCard,
        LoaderApp,
        WindowPage
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
        <div class="content-main" v-else>
            <div id="window-page" v-if="store.isPopular">
                <WindowPage />
            </div>
            <div v-else>
                <h3>
                    film
                </h3>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5" v-if="store.isSearch && store.arrayFilms.length">
                
                    <DynamicCard 
                    v-for="(films, index) in store.arrayFilms" :key="index" 
                    :titolo="films.title" 
                    :titoloOriginal="films.original_title"
                    :lingua="films.original_language"
                    :voto="films.vote_average"
                    :pathImg="films.poster_path"
                    :description="films.overview"/>
                </div>
            </div>
            
            <div v-if="!store.isPopular">
                <h3>
                    serietv
                </h3>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5" v-if="store.isSearch && store.arraySerieTv.length">
                
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
        margin-bottom: 150px;
    }
</style>