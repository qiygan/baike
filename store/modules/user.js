/**
 * 用户模块
 */
const user = {
  state: {
    status: 0,
    name: '正在获取昵称...',
    avatar: ''
  },
  mutations: {
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },
  actions: {
    // 登录
    Login ({ commit }, param) {
      return Promise((resolve, reject) => {
        // TODO sed request
        let { name, avatar } = param
        commit('SET_STATUS', 1)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve()
      })
    },
    // 退出
    Logout ({ commit }) {
      return Promise((resolve, reject) => {
        // TODO sed request
        commit('SET_STATUS', 0)
        commit('SET_NAME', '')
        commit('SET_AVATAR', '')
        resolve()
      })
    }
  }
}

export default user
