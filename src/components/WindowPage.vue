<script>
import {store} from '../data/store';
import SwiperWindow from './SwiperWindow.vue';
export default {
    name:'WindowPage',
    components: {
        SwiperWindow
    },
    data (){
        return {
            store
        }
    }
}
</script>


<template>
    <div v-if="store.showFilm" class="content-film position-relative">
        <h3>
            most Popular Film
        </h3>
        <SwiperWindow :array="store.arrayFilms" />
    </div>
    <div v-else class="content-serieTv position-relative">
        <h3>
            most Popular serietv
        </h3>
        <SwiperWindow :array="store.arraySerieTv" />
    </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
h3 {
    text-transform: uppercase;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    color: $primary-color;
    font-size: 2rem;
}
</style>