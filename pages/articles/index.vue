<template>
  <div class="article_box">
    <div class="title">記事一覧</div>
    <div class="button_wrap">
      <button @click="onClickButton">新規投稿</button>
    </div>
    <div v-if="articles.length">
      <div v-for="article in articles" :key="article.id" class="article_card">
        <nuxt-link :to="'articles/' + article.id">{{
          article.title
        }}</nuxt-link>
      </div>
    </div>
    <div v-else>記事がありません</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ArticlesPndexPage',
  computed: {
    ...mapGetters(['articles']),
  },
  methods: {
    onClickButton(e) {
      e.preventDefault()
      this.$router.push('/articles/new')
    },
  },
}
</script>

<style scoped>
.article_card {
  margin: 20px;
}
.title {
  font-size: 28px;
  margin-bottom: 30px;
}

.button_wrap {
  margin-bottom: 20px;
}
</style>
