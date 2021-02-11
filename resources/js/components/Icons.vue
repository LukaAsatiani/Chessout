<template>
    <div class="piece p_B">p_B</div>    
</template>

<script>
export default {
    props: ['name', 'loadFunction', 'allLoaded'],
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

<style scoped>
    .hidden {
        background-color: red;
    }

    .p_p {
        background-image: "pieces/set1/bP.svg"
    }
    .p_P {
        background-image: "pieces/set1/wP.svg"
    }
    .p_b{
        background-image: "pieces/set1/bB.svg"
    }
    .p_B {
        background-image: "pieces/set1/wB.svg"
    }
    .p_n {
        background-image: "pieces/set1/bN.svg"
    }
    .p_N {
        background-image: "pieces/set1/wN.svg"
    }
    .p_r {
        background-image: "pieces/set1/bP.svg"
    }
    .p_R {
        background-image: "pieces/set1/wP.svg"
    }
    .p_q{
        background-image: "pieces/set1/bQ.svg"
    }
    .p_Q {
        background-image: "pieces/set1/wQ.svg"
    }
    .p_k {
        background-image: "pieces/set1/bK.svg"
    }
    .p_K {
        background-image: "pieces/set1/wK.svg"
    }
    
</style>