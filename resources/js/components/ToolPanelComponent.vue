<template>
    <div class="h-100 mx-4 card bg-dark shadow-sm">
        <div class="card-body">
            <button type="button" class="mb-3 btn btn-lg btn-block btn-primary">Start</button>
            <div class="row">
                <div class="col-md">
                    <div 
                        v-bind:style="{width: (getSize/8) + 'px', height: (getSize/8) + 'px'}" 
                        v-bind:class="{piece_selected: piece == getSelectedPiece}" 
                        class="piece_container" 
                        @mousedown="selectPiece(piece)" 
                        v-for="piece in getTemplate.toUpperCase()" 
                        :key="(piece)"
                    >
                        <div class="piece_svg" :class="`p_${piece}`"></div>
                        <div class="piece_count">{{getPRC(piece)}}</div>
                    </div>
                </div>
                <div class="col-md">
                    <div 
                        v-bind:style="{width: (getSize/8) + 'px', height: (getSize/8) + 'px'}" 
                        v-bind:class="{piece_selected: piece == getSelectedPiece}" 
                        class="piece_container" @mousedown="selectPiece(piece)" 
                        v-for="piece in getTemplate" 
                        :key="(piece)"
                    >
                        <div class="piece_svg" :class="`p_${piece}`"></div>
                        <div class="piece_count">{{getPRC(piece)}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    
    export default {
        computed: {
            ...mapGetters("toolpanel", {
                getPRC: 'getPieceRemainingCount',
                getTemplate: 'getTemplate',
                getSelectedPiece: 'getSelectedPiece',
            }),
            ...mapGetters("board", {
                getSize: 'getSize'
            })
        },
        methods: {
            pieceCountdown(piece){
                this.$store.dispatch('toolpanel/PIECE_COUNTDOWN', piece)
            },
            selectPiece(piece){
                this.$store.dispatch('toolpanel/SELECT_PIECE', piece)
            }
        }
    }
</script>

<style scoped>
    .piece_container {
        position: relative;
        padding: 3px;
    }

    .piece_container:hover {
        cursor: pointer
    }

    .piece_selected {
        border: 2px dashed lightseagreen;
        cursor: unset;
    }

    .piece_selected:hover {
        cursor: unset;
    }

    .piece_count {
        position: absolute;
        background-color: white;
        color: mediumslateblue;
        width: 15px;
        height: 15px;
        bottom: 3px;
        right: 3px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        font-weight: bold;
    }

</style>