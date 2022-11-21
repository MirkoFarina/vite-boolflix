<script>

export default {
    name:'DynamicLi',
    props: {
        titolo: String,
        titoloOriginal: String,
        lingua: String,
        voto: Number,
        pathImg: String
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
                return 'NOT FOUND'
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
            <h3>
                voto: {{getStars}}
            </h3>
            <img :src="getImg" alt="">
            <h3 v-if="!getImg" >
                IMAGE: IMG NOT FOUND
            </h3>
        </li>
</template>

<style lang="scss" scoped>
</style>