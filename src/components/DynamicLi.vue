<script>
import StarRating from 'vue-star-rating';
export default {
    name:'DynamicLi',
    props: {
        titolo: String,
        titoloOriginal: String,
        lingua: String,
        voto: Number,
        pathImg: String
    },
    components: {
        StarRating
    },  
    data(){
        return {
            lenguageNotPresents: [
                '',
                'ja',
                'ko',
                'zh'
            ]
        }
    },
    methods: {
       
    },
    computed: {
        getClassName(){
            if(this.lingua === 'en') {
                return 'fi fi-' + 'gb';
            }else {
                return 'fi fi-' + this.lingua;
            }
        },
        lenguageNotFound(){
            if(this.lenguageNotPresents.includes(this.lingua)){
                return this.lingua
            }
        },
        getImg(){
            if(this.pathImg == null) {
                return false;
            }
            return 'https://image.tmdb.org/t/p/w300/' + this.pathImg;
        },
        getStars(){
           return  Math.ceil(this.voto / 2);
       }
    }
}
</script>


<template>
        <li>
            <h3>
                titolo: {{titolo}}
            </h3>
            <h3>
                titolo-originale: {{titoloOriginal}}
            </h3>
            <h3 >
                lingua: 
                <span :class="getClassName">
                    {{lenguageNotFound}}
                </span> 
            </h3>
            <div>
                <star-rating :rating="getStars" read-only="true" :show-rating="false" star-size="30"></star-rating>
            </div>
            <img v-if="getImg" :src="getImg" :alt="titolo">
            <h3 v-else>
                IMAGE: IMG NOT FOUND
            </h3>
        </li>
</template>

<style lang="scss" scoped>
</style>