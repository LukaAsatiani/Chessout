import axios from 'axios'

export default {
    namespaced: true,
    actions: {
        SELECT_PIECE(ctx, piece){
            ctx.commit('selectPiece', piece)
        },
        PIECE_COUNTDOWN(ctx, piece){
            ctx.commit('pieceCountdown', piece)
        }
    },
    mutations: {
        pieceCountdown(state, piece){
            state.pieces_count[piece] -= 1
        },
        selectPiece(state, piece){
            state.selected = piece
        },
        setFen(state, fen){
            state.fen = fen
        }
    },
    state: {
        pieces_count: {
            "p": 8,
            "b": 2,
            "n": 2,
            "r": 2,
            "q": 1,
            "k": 1,
            "P": 8,
            "B": 2,
            "N": 2,
            "R": 2,
            "Q": 1,
            "K": 1,
        },
        template: "pbnrqk",
        selected: null
    },
    getters: {
        getPieceRemainingCount(state){
            return (piece) => {
                return state.pieces_count[piece];
            }
        },
        getTemplate(state){
            return state.template
        },
        getSelectedPiece(state){
            return state.selected
        },
    },
}
