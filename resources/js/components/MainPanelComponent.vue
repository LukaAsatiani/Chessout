<template>
    <div class="container h-100 my-auto row px-4 h-100" ref="mainContainer">
        <Preloader/>
        <board-component></board-component>
        <v-tool-panel></v-tool-panel>
    </div>
</template>

<script>
    import BoardComponent from './BoardComponent.vue'
    import ToolPanelComponent from './ToolPanelComponent.vue'
    import Preloader from './Preloader.vue'
    
    export default {
        components: {
            Preloader,
            BoardComponent,
            ToolPanelComponent
        },
        data(){
            return {
                board: 0
            }
        },

        mounted () {
            
        }
    }
</script>

<style scoped>
    v-cloak {
        display: none;
    }
</style>