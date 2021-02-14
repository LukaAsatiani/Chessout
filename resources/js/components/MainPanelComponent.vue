<template>
    <div class="container h-100 my-auto row px-5">
        <v-tool-panel></v-tool-panel>
        <board-component></board-component>
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
        }
    }
</script>

<style scoped>

</style>