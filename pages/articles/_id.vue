<template>
  <div>
    <div v-if="article" class="article_box">
      <div class="title">{{ article.title }}</div>
      <div class="text">
        {{ article.text }}
      </div>
    </div>
    <div v-else class="article_box">記事が見つかりません</div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  computed: {
    article() {
      return this.$store.state.articles.find(
        (article) => article.id === Number(this.$route.params.id)
      )
    },
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
.text {
  font-size: 12px;
}
</style>
