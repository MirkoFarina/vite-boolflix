<script>
import StarRating from 'vue-star-rating';
export default {
    name:'DynamicLi',
    props: {
        titolo: String,
        titoloOriginal: String,
        lingua: String,
        voto: Number,
        pathImg: String,
        description: String
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
        <div class="mf-card">
            <div class="poster">
                <img v-if="getImg" :src="getImg" :alt="titolo">
                <div v-else>
                    <span>
                        IMG NOT FOUND
                    </span>
                    <h3>
                        Titolo: <small>{{titolo}}</small>
                    </h3>
                </div>
            </div>
            <div class="description">
                <div class="title">
                    <h3>
                        Titolo: <small>{{titolo}}</small>
                    </h3>
                    <h3 v-if="titolo !== titoloOriginal">
                        Original-Title: <small>{{titoloOriginal}}</small>
                    </h3>
                </div>
                <div class="language">
                    <h3>
                        Lingua: 
                    <span :class="getClassName">
                        {{lenguageNotFound}}
                    </span> 
                    </h3>
                </div>
                <div class="star">
                    <star-rating :rating="getStars" :read-only="true" :show-rating="false" :star-size=20></star-rating>
                </div>
                <div class="overview">
                    <h3>
                        DESCRIZIONE:
                    </h3>
                    <div class="content">
                        <span>{{description}}</span>
                        
                        <p v-if="description === '' ">
                            DESCRIZIONE NON DISPONIBILE!
                        </p>
                    </div>
                   
                </div>
            
            </div>
        </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
@use '../scss/partials/mixins' as *;
    h3 {
        font-weight: 700;
        font-size: $font-size;
    }
    .mf-card {
        position: relative;
        width: calc(100% / 6);
        height: 300px;
        color: white;
        margin: 10px 0;
        &:hover .description{
                opacity: 1;
                width: 150%;
                height: 100%;
            }
        .poster {
            height: 100%;
            width: 100%;
            @include centerFlex;
            img {
               object-fit: cover;
               width: 100%;
               height: 100%;
            }
        }
        .description {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%) ;
            z-index: 2;
            background-color: $background-color;
            height: 30%;
            opacity: 0;
            width:80%;
            padding: 10px;
            padding-bottom: 0;
            box-shadow: 2px 3px 13px 14px #000000;
            transition: all .4s;
            .title {
                small {
                    font-weight: 400;
                }
            }
            .star {
                margin-bottom: 10px;
            }
            .overview {
                width: 100%;
                font-size: .9rem;
                .content {
                    overflow: auto;
                    height: 100px;
                }
            }
        }
    }
</style>