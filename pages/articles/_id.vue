<template>
  <div>
    <div class="article_box" v-if="article">
      <div class="title">{{ article.title }}</div>
      <div class="description">
        {{ article.description }}
      </div>
    </div>
    <div class="article_box" v-else>記事が見つかりません</div>
  </div>
</template>

<script>
import { articles } from '../../lib/articles_data'

export default {
  name: 'article_page',
  asyncData({ params }) {
    const article = articles.find((article) => article.id === Number(params.id))

    return { article }
  },
}
</script>

<style scoped>
.article_box {
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
