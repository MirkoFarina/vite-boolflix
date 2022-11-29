<script>
import {store} from '../data/store';
import dataNav from '../data/navHeader';
export default {
    name:'HeaderApp',
    data(){
        return {
            store,
            dataNav
        }
    },
    methods: {
        showNoSHow(booleano){
            store.query = '';
            store.isPopular = true;
            if (booleano) {
                store.showFilm = true;
            } else {
                store.showFilm = false;
            }
        }
    }
}
</script>


<template>
    <header>
        <div class="container-md mf-header">
            <h1>
                BOOLFLIX
            </h1>
            <nav>
                <ul class="d-flex">
                    <li v-for="(item, index) in dataNav" :key="index">
                        <a @click="$emit('show'), showNoSHow(item.isFilm) " :href="item.href">
                            {{item.name}}
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <input  v-model.trim="store.query" type="text" placeholder="Search ...">
                <button @click="$emit('search')" class="btn mf-button btn-lg">
                    SEARCH
                </button>
            </nav>
        </div>
    </header>
</template>



<style lang="scss" scoped>
    @use '../scss/partials/variables' as *;
    @use '../scss/partials/mixins' as *;
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background-color: #0f0f0f;
        height: 80px;
        @include centerFlex('vertical');
    }
    .mf-header {
        @include centerFlex('vertical');
        @include justifyContents('between');
        nav {
            ul {
                list-style: none;
                li {
                    margin-left: 10px;
                   a {
                        color: $primary-color;
                        text-decoration: none;
                        text-transform: uppercase;
                        &:hover {
                            text-decoration: underline;
                        }
                        &:active {
                            color: white;
                        }
                   }
                }
            }
        }
    }

    h1 {
        color: $primary-color;
        font-weight: 700;
    }

    .mf-button {
        padding: 5px 15px;
        margin-left: 20px;
    }
</style>