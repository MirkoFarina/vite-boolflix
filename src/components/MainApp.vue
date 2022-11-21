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
   <main>
  <div v-if="store.isSearch">
    <h3>
        films
    </h3>
    <ul>
        <DynamicLi 
        v-for="(films, index) in store.arrayFilms" :key="index" 
        :titolo="films.title" 
        :titoloOriginal="films.original_title"
        :lingua="films.original_language"
        :voto="films.vote_average"
        :pathImg="films.poster_path"/>
    </ul>
  </div>
    <div v-if="store.isSearch">
        <h3>
        serie tv
    </h3>
    <ul>
        <DynamicLi 
        v-for="(serieTv, index) in store.arraySerieTv" :key="index" 
        :titolo="serieTv.name" 
        :titoloOriginal="serieTv.original_name"
        :lingua="serieTv.original_language"
        :voto="serieTv.vote_average"
        :pathImg="serieTv.poster_path"/>
    </ul>
    </div>
   </main>
</template>



<style lang="scss" scoped>
    main {
        color: white;
        display: flex;
        justify-content: space-evenly;
    }
</style>