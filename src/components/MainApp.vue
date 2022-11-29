<script>
import {store} from '../data/store';
import WindowPage from './WindowPage.vue';
import LoaderApp from './LoaderApp.vue';
import SwiperCards from './SwiperCards.vue';

export default {
    name:'MainApp',
    components: {
        LoaderApp,
        WindowPage,
        SwiperCards
    },
    data(){
        return {
            store
        }
    }
}
</script>


<template>
    <div  v-if="store.error" class="error margin-top">
        ATTENZIONE !!!! <br>
        {{store.error}} <br>
        RICARICARE LA PAGINA!!
    </div>
    <main v-else class="margin-top" >
        <div id="loader" v-if="!store.isLoad">
            <LoaderApp />
        </div>
        <div class="content-main" v-else>
            <div id="window-page" v-if="store.isPopular">
                <WindowPage />
            </div>
            <div class="px-5 py-5" v-else>
                <h2>
                    film
                </h2>
                <div class="row " v-if="store.isSearch && store.arrayFilms.length">
                    <SwiperCards :array="store.arrayFilms" />
                </div>
            </div>
            
            <div v-if="!store.isPopular">
                <div class="px-5 py-5">
                    <h2>
                        serie tv
                    </h2>
                    <div class="row " v-if="store.isSearch && store.arraySerieTv.length">
                        <SwiperCards  :array="store.arraySerieTv"/>
                    </div>
                </div> 
            </div>
        </div>            
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
</style>