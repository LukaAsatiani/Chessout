import { 
    matrixFromFen, 
    fenFromMatrix, 
    getEmptyMatrix, 
    getPieceFromSquare, 
    addPieceToSquare,
    isPiece
} from '../../helpers'
import Vue from 'vue'

const modes = {
    m:"memorization", 
    s: "solving"
}

export default {
    namespaced: true,
    actions: {
        INIT_MATRIX({state, commit}){
            if(state.current_mode === modes.m){
                axios.get('/api/positions').then(res => { 
                    state.modes_data.memorization.board.fen = res.data.fen
                    commit("setMatrix", matrixFromFen(res.data.fen))
                })
            } else if(state.current_mode === modes.s) {
                commit("setMatrix", getEmptyMatrix())
            }
        },
        ADD_PIECE({rootGetters, commit, getters, dispatch}, {square}){
            let piece = rootGetters["toolpanel/getSelectedPiece"]
            let matrix = getters["getMatrix"]
            if(piece && rootGetters["toolpanel/getPieceRemainingCount"](piece) > 0 && rootGetters["toolpanel/getPieceRemainingCount"](piece) <= 8){
                let current_piece = getPieceFromSquare(matrix, square)

                if(current_piece !== square){
                    if(isPiece(current_piece)){
                        dispatch("toolpanel/PIECE_COUNT_INCREMENT", current_piece, { root: true })
                    }
                    dispatch("toolpanel/PIECE_COUNT_DECREMENT", piece, { root: true })
                    commit("setMatrix", addPieceToSquare(matrix, square, piece))
                }
            }
        },
        START_SOLVING({commit, dispatch}){
            commit("setMode", modes.s)
            dispatch("INIT_MATRIX")
        },
        CHECK_POSITION(){}
    },
    mutations: {
        setMatrix(state, matrix){
            state.modes_data[state.current_mode].board.matrix = []
            state.modes_data[state.current_mode].board.matrix = matrix
        },
        setMode(state, mode){
            state.current_mode = mode
        }
    },
    state: {
        current_mode: modes.m,
        modes_data: {
            memorization: {
                title: "Memorization",
                msg: "Try to memorize position",
                btn: {
                    text: "Start",
                    class: "btn-primary"
                },
                board: {
                    enableBoardEvents: false,
                    matrix: null,
                    fen: null
                }
            },
            solving: {
                title: "Solving",
                msg: "Try to remeber and set position",
                btn: {
                    text: "Check",
                    class: "btn-warning"
                },
                board: {
                    enableBoardEvents: true,
                    matrix: null
                }
            }
        }
    },
    getters: {
        getMatrix(state){
            return state.modes_data[state.current_mode].board.matrix
        },
        
        getEnableBoardEvents(state){
            return state.modes_data[state.current_mode].board.enableBoardEvents
        },

        getTitle(state){
            return state.modes_data[state.current_mode].title
        },

        getMSG(state){
            return state.modes_data[state.current_mode].msg
        },

        getBtnData(state){
            return state.modes_data[state.current_mode].btn
        }
    },
}
