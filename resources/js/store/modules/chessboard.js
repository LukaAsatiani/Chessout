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
            console.log(state.matrix, state.fen)
        }
    },
    state: {
        size: 369,
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


// setMatrix(){
//     axios.get('/api/positions').then(res => {
//         let fenstr = res.data.fen
//         fenstr = fenstr.split(' ')[0]
//         fenstr = fenstr.replaceAll(/([0-9])/ig, (match, offset) => '.'.repeat(offset))
//         this.$store.dispatch('SET_MATRIX', fenstr.split('/'))
//     })
// },