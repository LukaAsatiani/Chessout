import axios from 'axios'

export default {
    namespaced: true,
    actions: {
        SELECT_PIECE({commit, state}, piece){
            if(state.pieces_count[piece] !== 0)
            commit('selectPiece', piece)
        },
        PIECE_COUNT_INCREMENT({commit}, piece){
            commit('pieceCountIncrement', piece)
        },
        PIECE_COUNT_DECREMENT({state, commit}, piece){
            commit('pieceCountDecrement', piece)
            if(state.pieces_count[piece] === 0)
                commit("selectPiece", null)
        },
        
    },
    mutations: {
        pieceCountIncrement(state, piece){
            state.pieces_count[piece] += 1
        },
        pieceCountDecrement(state, piece){
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
            "p": 8, "b": 2, "n": 2, "r": 2, "q": 1, "k": 1, 
            "P": 8, "B": 2, "N": 2, "R": 2, "Q": 1, "K": 1,
        },
        template: "pbnrqk",
        selected: null,
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
        }
    },
}
