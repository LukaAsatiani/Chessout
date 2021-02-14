<template>
    <div class="h-100 my-auto">
        <div class="mx-2 row h-100">
            <v-tool-panel ></v-tool-panel>
            <board-component ></board-component>
        </div>
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