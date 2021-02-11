<template>
    <div class="h-100 mx-4 card bg-dark mb-4 shadow-sm">
        <div class="card-body">
            <button type="button" class="mb-3 btn btn-lg btn-block btn-primary">Start</button>
            <div class="row">
                <div class="col-md">
                    <div v-for="(value, name) in this.tool_pieces" :key="(value, name)" class="piece_container">
                        <div class="piece_svg" :class="`p_${name.toUpperCase()}`"></div>
                        <div class="piece_count">{{value}}</div>
                    </div>
                </div>
                <div class="col-md">
                    <div v-for="(value, name) in this.tool_pieces" :key="(value, name)" class="piece_container">
                        <div class="piece_svg" :class="`p_${name}`"></div>
                        <div class="piece_count">{{value}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tool_pieces: {
                    "p": 8,
                    "b": 2,
                    "n": 2,
                    "r": 2,
                    "q": 1,
                    "k": 1
                }
            }        
        }
    }
</script>

<style scoped>
    .piece_container {
        position: relative;
        width: 40px;
        height: 40px;
    }

    .piece_count {
        position: absolute;
        background-color: white;
        color: mediumslateblue;
        width: 15px;
        height: 15px;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        font-weight: bold;
    }

    .piece_svg {
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: none;
    }

    .p_p {
        background-image: url("/pieces/set1/bP.svg");
    }
    
    .p_P {
        background-image: url("/pieces/set1/wP.svg")
    }
    .p_b{
        background-image: url("/pieces/set1/bB.svg")
    }
    .p_B {
        background-image: url("/pieces/set1/wB.svg")
    }
    .p_n {
        background-image: url("/pieces/set1/bN.svg")
    }
    .p_N {
        background-image: url("/pieces/set1/wN.svg")
    }
    .p_r {
        background-image: url("/pieces/set1/bR.svg")
    }
    .p_R {
        background-image: url("/pieces/set1/wR.svg")
    }
    .p_q{
        background-image: url("/pieces/set1/bQ.svg")
    }
    .p_Q {
        background-image: url("/pieces/set1/wQ.svg")
    }
    .p_k {
        background-image: url("/pieces/set1/bK.svg")
    }
    .p_K {
        background-image: url("/pieces/set1/wK.svg")
    } 

</style>