<script>
import {store} from '../data/store';
export default {
    name:'MainApp',
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
        FILMS
    </h3>
    <ul>
        <li v-for="(films, index) in store.arrayFilms" :key="index">
            <h3>
                titolo: {{films.title}}
            </h3>
            <h3>
                titolo-originale: {{films.original_title}}
            </h3>
            <h3>
                lingua: {{films.original_language}}
            </h3>
            <h3>
                voto: {{films.vote_average}}
            </h3>
        </li>
    </ul>
  </div>
    <div v-if="store.isSearch">
        <h3>
            serie tv
        </h3>
        <ul>
        <li v-for="(serieTv, index) in store.arraySerieTv" :key="index">
            <h3>
                titolo: {{serieTv.name}}
            </h3>
            <h3>
                titolo-originale: {{serieTv.original_name}}
            </h3>
            <h3>
                lingua: {{serieTv.original_language}}
            </h3>
            <h3>
                voto: {{serieTv.vote_average}}
            </h3>
        </li>
    </ul>
    </div>
   </main>
</template>



<style lang="scss" scoped>
    main {
        color: white;
        display: flex;
        justify-content: space-between;
    }
</style>