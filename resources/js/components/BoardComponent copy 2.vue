<template>
    <div v-if="board && matrix" id="board" v-bind:style="{width: `${board.width}px`, height: `${board.height}px` }">
        <div v-for="i in 8" :key="i" v-bind:style="{width: `${board.width}px`, height: `${board.height/8}px` }">
            <div :class="{ black: (j%2 !== 0 && i%2 !== 1) || (j%2 === 0 && i%2 === 1) }" class="square" v-for="j in 8" :key="j" v-bind:style="{width: `${board.width/8}px`, height: `${board.height/8}px` }">
                <p class="n_numbers" v-if="j==8">
                    {{9-i}}
                </p>
                <p class="n_characters" v-if="i==8">
                    {{String.fromCharCode(96 + j)}}
                </p>
                <div v-if="matrix[i-1][j-1] != '.'" class="piece">
                    <Icons class="piece_svg" :name="matrix[i-1][j-1]" :loadFunction="handleLoad" :allLoaded="allLoaded"/>
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
                fenList: [
                    
                ]
            }
        },
        methods: {
            handleLoad: function(todo){
                this.imagesCount--;
                console.log(this.imagesCount)
                if(this.imagesCount === 0) {
                    this.allLoaded = true
                    console.log('loaded')
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
                    console.log("imagesComunt: ", this.imagesCount)
                    fenstr = fenstr.split(' ')[0]
                    fenstr = fenstr.replaceAll(/([0-9])/ig, (match, offset) => '.'.repeat(offset))
                    this.matrix = fenstr.split('/')
                })
            }
        },
        mounted () {
            this.setBoardSize()
            this.setMatrix()
            window.addEventListener('resize', this.setBoardSize)
            window.addEventListener('keypress', event => {
                if(event.code === "Space" && this.imagesCount === 0){
                    this.setMatrix()
                }
            })
            console.log(this.$parent.$el.clientHeight)
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

    .square {
        position: relative;
    }

    .piece_svg {
        height: 100%;
        widows: 100%;
    }

    .v-cloak {
        display: none;
    }

</style>