<script>

export default {
    name:'DynamicLi',
    props: {
        titolo: String,
        titoloOriginal: String,
        lingua: String,
        voto: Number
    },
    data(){
        return {
            lenguageNotPresents: [
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
                voto: {{voto}}
            </h3>
        </li>
</template>

<style lang="scss" scoped>
</style>