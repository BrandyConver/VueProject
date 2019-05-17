import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const user = {
  state: {
    userId: 'bv175',
    userName: 'brandy',
    status: 'normal'
  },
  mutations: {
    setId (state: any, newId: string) {
      state.userId = newId
    },
    signUp (state) {
      state.userName = 'unSigned'
      state.status = 'unSigned'
    }
  }
}
export default new Vuex.Store({
  modules: {
    user,
    cart: {
      state: {
        goodsLiset: []
      },
      mutations: {
        add (state, goodsId) {
          state.goodsLiset.push(goodsId)
        }
      }
    }
  }
})
