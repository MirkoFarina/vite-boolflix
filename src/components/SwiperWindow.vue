<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination} from 'swiper';
import 'swiper/css/bundle';
export default {
    name: 'SwiperWindow',
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        array: Array
    },
    setup () {
        return {
            modules:[Navigation, Pagination]
        }
    },
    methods: {
        getImg(pathImg){
            if(pathImg == null) {
                return false;
            }
            return 'https://image.tmdb.org/t/p/w300/' + pathImg;
        }
    }
}
</script>


<template>
<swiper 
:modules="modules"
navigation
:slidesPerView="'3'"
:effect="'coverflow'"
:pagination="{clickable: true }"
:coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }">
    <SwiperSlide v-for="(popular, index) in array" :key="index">
        <img v-if="getImg(popular.poster_path)" :src="getImg(popular.poster_path)" :alt="popular.title">
                <div v-else>
                    <span>
                        IMG NOT FOUND
                    </span>
                    <h3>
                        Titolo: <small>{{titolo}}</small>
                    </h3>
                </div>
    </SwiperSlide>
</swiper>
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    height: calc(100vh - 80px);
    object-fit: cover;
    object-position: top;
}
</style>