import { matrixFromFen, fenFromMatrix } from '../../helpers'

export default {
    namespaced: true,
    actions: {
        SET_SIZE(ctx, size){
            ctx.commit('updateSize', size)
        },
        SQUARE_LEFT_CLICK(ctx, square){

        },
        SET_FEN(ctx){
            axios.get('/api/positions').then(res => {
                ctx.commit('setFEN', res.data.fen)
                ctx.commit('setMatrixFromFen') 
            })
        }
    },
    mutations: {
        updateSize(state, size){
            state.size = size
        },
        setFEN(state, fen){
            state.fen = fen
        },
        setMatrixFromFen(state){
            state.matrix = matrixFromFen(state.fen)
        }
    },
    state: {
        size: 0,
        orientation: "white",
        fen: null,
        matrix: null,
    },
    getters: {
        getSize(state){
            return state.size  
        },
        getMatrix(state){
            return state.matrix
        }
    },
}
