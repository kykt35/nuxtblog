<template>
  <div class="article_box">
    <div class="title">記事一覧</div>

    <div class="article_card" v-for="article in articles" :key="article.id">
      <nuxt-link to="articles/1">{{ article.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { articles } from '../../lib/articles_data'

export default {
  name: 'articles_index_page',
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
