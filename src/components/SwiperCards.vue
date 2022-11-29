<script>
import {store} from '../data/store';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination} from 'swiper';
import DynamicCard from './DynamicCard.vue';
import 'swiper/css/bundle';
export default {
    name: 'SwiperCards',
    components: {
        Swiper,
        SwiperSlide,
        DynamicCard
    },
    props: {
        array: Array
    },
    setup () {
        return {
            modules:[Navigation, Pagination]
        }
    },
    data(){
        return {
            store
        }
    }
}
</script>


<template>
    <swiper 
    :modules="modules"
    :slidesPerView="7"
    :navigation="true"
    :space-between="10">
        <SwiperSlide  v-for="(item, index) in array" :key="index">
            <DynamicCard 
                    :titolo="item.title || item.name" 
                    :titoloOriginal="item.original_title || item.original_name" 
                    :lingua="item.original_language"
                    :voto="item.vote_average"
                    :pathImg="item.poster_path"
                    :description="item.overview"/>
        </SwiperSlide>
    </swiper>
</template>

<style lang="scss" scoped>
.swiper {
    overflow: visible;
}
</style>