import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

export default new Vuex.Store({
  modules: {
    user
  },
  getters
})
