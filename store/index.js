export const state = () => ({
  articles: [],
})

export const getters = {
  articles: (state) => state.articles,
}

export const mutations = {
  addArticle(state, article) {
    state.articles.push(article)
  },
}

export const actions = {
  addArticle({ commit }, article) {
    commit('addArticle', article)
  },
}
