import Vue from 'vue'
import Vuex from 'vuex'

import chessboard from "./modules/chessboard"
import toolpanel from './modules/toolpanel'
import positionSolveModes from './modules/positionSolveModes'

Vue.use(Vuex)

export default new Vuex.Store({ 
    namespaced: true,
    modules: {
        board: chessboard,
        toolpanel: toolpanel,
        modes: positionSolveModes
    }
})