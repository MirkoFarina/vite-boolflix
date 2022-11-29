<script>
import {store } from '../data/store';
import StarRating from 'vue-star-rating';
import axios from 'axios';
export default {
    name:'DynamicCard',
    props: {
        titolo: String,
        titoloOriginal: String,
        lingua: String,
        voto: Number,
        pathImg: String,
        description: String,
        cardId: Number,
        isFilm: String
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
            ],
            acthors: []
        }
    },
    methods: {
       getActor(isFilm) {
        if(isFilm) {
            axios.get(
                `https://api.themoviedb.org/3/movie/${this.cardId}/credits?api_key=c97c2cdd0865f2d6f7af8f6643f2eec3&language=${store.language}`
            )
            .then(result => {
                this.acthors = result.data.cast;
            })
            .catch(error => {
                store.error = error;
            })
        } 
        else {
            axios.get (
                `https://api.themoviedb.org/3/tv/${this.cardId}/credits?api_key=c97c2cdd0865f2d6f7af8f6643f2eec3&language=${store.language}`
            )
            .then(result => {
                this.acthors = result.data.cast;
            })
            .catch(error => {
                store.error = error;
            })
        }
       }
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
        <div class="col">
            <div class="mf-card" @mouseover="getActor(isFilm)">
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
                <div class="acthors">
                    <ul>
                        <li v-for="(acthor, index) in acthors.splice(0,4)" :key="index" >
                            {{acthor.name}}
                        </li>
                    </ul>
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
        width: 100%;
        height: 400px;
        color: white;
        margin-bottom: 40px;
        &:hover .description{
                opacity: 1;
                width: 100%;
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
            height: 0;
            opacity: 0;
            width:0;
            padding: 10px;
            padding-bottom: 0;
            box-shadow: 2px 3px 13px 14px #000000;
            transition: height .6s, opacity .7s;
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