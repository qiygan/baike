import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      user
    },
    getters
  })
}
export default createStore
