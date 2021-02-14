<template>
    <div @click="getEBE ? boardClickHandler($event) : null" v-if="getMatrix" class="board" v-bind:style="{width: getSize + 'px', height: getSize + 'px'}">
        <div v-for="i in 8" :key="i" class="board_row">
            <div :class="{ black: (j%2 !== 0 && i%2 !== 1) || (j%2 === 0 && i%2 === 1) }" :data-square="j + '-' + (9 - i)" class="square" v-for="j in 8" :key="j">
                <p class="n_numbers" v-if="j==8">
                    {{9-i}}
                </p>
                <p class="n_characters" v-if="i==8">
                    {{String.fromCharCode(96 + j)}}
                </p>    
                <div v-if="getMatrix[i-1][j-1] != '#'" class="piece">
                    <div class="piece_svg" :class="`p_${getMatrix[i-1][j-1]}`"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    
    import Icons from './Icons'
    import axios from 'axios'
        
    export default {
        components: {
            Icons
        },
        computed: {
            ...mapGetters("board", {
                getSize: 'getSize'
            }),
            
            ...mapGetters("modes", {
                getMatrix: 'getMatrix',
                getEBE: 'getEnableBoardEvents'
            }),

            ...mapGetters("toolpanel", {
                getSelectedPiece: 'getSelectedPiece'
            }),

        },
        methods: {
            resize(){
                this.$store.dispatch('board/SET_SIZE', Math.min(this.$parent.$el.clientHeight, this.$parent.$el.clientWidth))
            },
            boardClickHandler($event){
                this.$store.dispatch('modes/ADD_PIECE', {square:$event.target.dataset.square, piece: this.getSelectedPiece})
            },
            setBoard(){
                this.$store.dispatch('modes/SET_MATRIX')
            }
        },
        mounted(){
            this.setBoard()
            this.$nextTick(() => {
                this.resize()
            })
            window.addEventListener('resize', () => this.resize());
        }
    }
</script>

<style scoped>
    .board {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        user-select: none;
    }

    .piece {
        pointer-events:none;
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
</style>