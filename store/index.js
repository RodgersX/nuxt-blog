import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
    },
    actions: {
      nuxtServerInit({ commit }, context) {
        return axios
          .get('https://nuxt-blog-c6984-default-rtdb.firebaseio.com/posts.json')
          .then((res) => {
            const postsArray = []
            for (let key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            commit('setPosts', postsArray)
          })
          .catch((e) => context.error(e))
      },
      setPosts({ commit }, posts) {
        commit('setPosts', posts)
      },
    },
    getters: {
      loadedPosts: (state) => state.loadedPosts,
    },
  })
}

export default createStore
