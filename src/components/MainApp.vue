<script>
import {store} from '../data/store';
import WindowPage from './WindowPage.vue';
import LoaderApp from './LoaderApp.vue';
import SwiperCards from './SwiperCards.vue';
import ListGenres from './ListGenres.vue';
export default {
    name:'MainApp',
    components: {
        LoaderApp,
        WindowPage,
        SwiperCards,
        ListGenres
    },
    data(){
        return {
            store
        }
    }
}
</script>


<template>
    <!-- ERROR -->
    <div  v-if="store.error" class="error margin-top">
        ATTENZIONE !!!! <br>
        {{store.error}} <br>
        RICARICARE LA PAGINA!!
    </div>
    <!-- /ERROR -->

    <main v-else class="margin-top" >
        <!-- LOADER -->
        <div id="loader" v-if="!store.isLoad">
            <LoaderApp />
        </div>
        <!-- /LOADER -->

        <div class="content-main" v-else>
            <!-- PAGE POPULAR -->
            <div id="window-page" v-if="store.isPopular">
                <WindowPage />
            </div>
            <!-- PAGE POPULAR -->

            <!-- FILMS -->
            <div class="px-5 py-2" v-else>
                <div v-if="store.isSearch && store.arrayFilms.length">
                    <div class="genres">
                        <ListGenres :array="store.arrayGenereFilm"/>
                    </div>
                    <h2>
                        film
                    </h2>
                    <div class="row ">
                        <SwiperCards :array="store.arrayFilms" />
                    </div>
                </div>
            </div>
            <!-- FILMS -->
            
            <!-- SERIE TV -->
            <div v-if="!store.isPopular">
                <div v-if="store.isSearch && store.arraySerieTv.length" class="px-5 py-5">
                    <div class="genres">
                        <ListGenres :array="store.arrayGenereTv"/>
                    </div>
                    <h2>
                        serie tv
                    </h2>
                    <div class="row ">
                        <SwiperCards  :array="store.arraySerieTv"/>
                    </div>
                </div> 
            </div>
            <!-- SERIE TV -->

        </div>
        <!-- NO FOUND -->
        <div id="no-results" v-if="store.arraySerieTv.length === 0 && store.arrayFilms.length === 0">
            <p>
                no matches found for <span>{{store.query}}</span> <br>
                SEARCH OTHER
            </p>
        </div>   
        <!-- NO FOUND -->

   </main>
</template>



<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
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
    h2 {
        text-transform: uppercase;
        color: $primary-color;
    }
    .row {
        display: flex;
        margin-bottom: 150px;
    }
    #no-results {
        text-align: center;
        font-size: 5rem;
        text-transform: uppercase;
        span {
            color: $primary-color;
        }
    }

   
</style>