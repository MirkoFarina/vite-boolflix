<script>
import {store} from '../data/store';
export default {
    name:'HeaderApp',
    data(){
        return {
            store
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
                <input v-model.trim="store.query" type="text">
                <button @click="$emit('search')" class="btn btn-primary">
                    SEARCH
                </button>
            </nav>
        </div>
    </header>
</template>



<style lang="scss" scoped>
    @use '../scss/partials/variables' as *;
    @use '../scss/partials/mixins' as *;
    .mf-header {
        @include centerFlex('vertical');
        @include justifyContents('between');
    }

    h1 {
        color: $primary-color;
        font-weight: 700;
    }
</style>