<template>
  <div class="article_box">
    <div class="title">記事一覧</div>
    <nuxt-link to="articles/new">新規投稿</nuxt-link>
    <div v-for="article in articles" :key="article.id" class="article_card">
      <nuxt-link :to="'articles/' + article.id">{{ article.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { articles } from '../../lib/articles_data'

export default {
  name: 'ArticlesPndexPage',
  asyncData() {
    return { articles }
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
.description {
  font-size: 12px;
}
</style>
