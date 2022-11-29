<script>
export default {
    name: 'ListGenres',
   props: {
    array: Array
   }
}
</script>

<template>
    <h4>
        FILTRI
    </h4>
<ul class="d-flex">
    <li  v-for="(genere, index) in array" :key="index">
        <a href="#">
            {{genere.name}}
        </a>
    </li>
</ul>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
h4 {
    color: $primary-color;
    margin-bottom: 20px;
}
ul {
    list-style: none;
    flex-wrap: wrap;
    li{
        margin-left: 10px;
        margin-bottom: 20px;
        a {
            padding: 10px;
            background-color: $primary-color;
            border-radius: 20px;
            text-decoration: none;
            color: white;
        }
    }
}
</style>