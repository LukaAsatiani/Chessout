<template>
    <div class="container h-100 my-auto" ref="mainContainer">
        <BoardComponent v-cloak v-if="board" :key="re" :boardData="board"/>
    </div>
</template>

<script>
    import BoardComponent from './BoardComponent.vue'
    import Preloader from './Preloader.vue'
    
    export default {
        components: {
            Preloader,
            BoardComponent
        },
        data(){
            return {
                re: 0,
                is_mounted: false,
                board: null
            }
        },
        methods: {
            resize(){
                this.board = {
                    "height": this.$refs.mainContainer.clientHeight,
                    "width": this.$refs.mainContainer.clientHeight,
                },
                this.forceRerender()
            },
            forceRerender() {
                this.re += 1;
            }
        }, 
        mounted () {
            window.addEventListener('load', this.resize)
            window.addEventListener('resize', this.resize)
        }
    }
</script>

<style scoped>
    v-cloak {
        display: none;
    }
</style>