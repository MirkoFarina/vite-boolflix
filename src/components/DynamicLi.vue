<script>
export default {
    name:'DynamicLi',
    props: {
        titolo: String,
        titoloOriginal: String,
        lingua: String,
        voto: Number
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
            <h3>
                lingua: {{lingua}}
            </h3>
            <h3>
                voto: {{voto}}
            </h3>
        </li>
</template>

<style lang="scss" scoped>

</style>