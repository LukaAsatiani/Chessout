<template>
    <img :src="`/pieces/set1/${pieces[uri]}.svg`" />    
</template>

<script>
export default {
    props: ['name'],
    data(){
        return {
            uri: this.$props.name,
            pieces: {
                "p": "bP",
                "b": "bB",
                "n": "bN",
                "r": "bR",
                "q": "bQ",
                "k": "bK",
                "P": "wP",
                "B": "wB",
                "N": "wN",
                "R": "wR",
                "Q": "wQ",
                "K": "wK",
            }
        }
    },
    mounted(){
        
    }
}
</script>