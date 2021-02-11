<template>
    <div v-if="board && matrix" class="board" v-bind:style="{width: `${board.width}px`, height: `${board.height}px` }">
        <div v-for="i in 8" :key="i" class="board_row">
            <div :class="{ black: (j%2 !== 0 && i%2 !== 1) || (j%2 === 0 && i%2 === 1) }" class="square" v-for="j in 8" :key="j">
                <p class="n_numbers" v-if="j==8">
                    {{9-i}}
                </p>
                <p class="n_characters" v-if="i==8">
                    {{String.fromCharCode(96 + j)}}
                </p>
                <div v-if="matrix[i-1][j-1] != '.'" class="piece">
                    <div v-if="!destroyComponent" class="piece_svg" :class="`p_${matrix[i-1][j-1]}`"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icons from './Icons'
    import axios from 'axios'
    
    export default {
        components: {
            Icons
        },
        props: [
            "boardData"
        ],
        data(){
            return {
                allLoaded: false,
                imagesCount: 0,
                board: null,
                matrix: null,
                destroyComponent: false,
                fenList: [
                    
                ]
            }
        },
        methods: {
            destroyComponentF(){
                this.destroyComponent = !this.destroyComponent
            },
            handleLoad: function(todo){
                this.imagesCount--;
                console.log("handleLoad")
                if(this.imagesCount === 0) {
                    this.allLoaded = true
                    console.log(this.allLoaded)
                }
            },
            setBoardSize(){    
                this.board = {
                    height: this.$parent.$el.clientHeight,
                    width: this.$parent.$el.clientHeight
                }
            },
            setMatrix(){
                axios.get('/api/positions').then(res => {
                    let fenstr = res.data.fen
                    this.imagesCount = res.data.pieces_count
                    console.log(fenstr)
                    fenstr = fenstr.split(' ')[0]
                    fenstr = fenstr.replaceAll(/([0-9])/ig, (match, offset) => '.'.repeat(offset))
                    this.matrix = fenstr.split('/')
                    this.destroyComponentF()       
                })
            }
        },
        mounted () {
            this.setBoardSize()
            this.destroyComponentF()
            this.setMatrix()
            window.addEventListener('resize', this.setBoardSize)
            window.addEventListener('keypress', event => {
                if(event.code === "Space"){
                    this.destroyComponentF()
                    this.setMatrix()
                }
            })
        }
    }
</script>

<style scoped>
    #board {
        display: inline-block;
        padding: 0;
        margin: 0;
        user-select: none;
    }

    .piece {
        position: absolute;
        width: 100%;
        height: 100%;
        user-select: none;
        padding: 3px;
    }

    .board_row {
        height: 12.5%;
        width: 100%;
        position: relative;
    }

    .square {
        position: inherit;
        height: 100%;
        width: 12.5%;
    }

    .piece_svg {
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: none;
    }

    .v-cloak {
        display: none;
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