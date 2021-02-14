import { matrixFromFen, fenFromMatrix, getEmptyMatrix, replaceAt } from '../../helpers'


const modes = {
    m:"memorization", 
    s: "solving"
}

export default {
    namespaced: true,
    actions: {
        SET_MATRIX(ctx){
            ctx.commit("setMatrix")
        },
        ADD_PIECE(ctx, {square, piece}){
            ctx.commit("addPiece", {square, piece})
        }
    },
    mutations: {
        setMatrix(state){
            if(state.current_mode === modes.m){
                axios.get('/api/positions').then(res => {
                    state.modes_data.memorization.board.matrix = matrixFromFen(res.data.fen) 
                    state.modes_data.memorization.board.fen = res.data.fen
                })
            } else if(state.current_mode === modes.s) {
                state.modes_data.solving.board.matrix = getEmptyMatrix()
                console.log(state.modes_data.memorization.board.matrix, state.modes_data.solving.board.matrix)
            }
        },
        addPiece(state, {square, piece}){
            let [x, y] = square.split('-')
            let matrix = state.modes_data[state.current_mode].board.matrix
            matrix[(9 - y)-1] = replaceAt(matrix[(9 - y)-1], x-1, piece)
            
            state.modes_data[state.current_mode].board.matrix = []
            state.modes_data[state.current_mode].board.matrix = matrix
        }
    },
    state: {
        current_mode: modes.s,
        modes_data: {
            memorization: {
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
        }
    },
}
