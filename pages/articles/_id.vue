<template>
  <div class="article_box">
    <div class="title">{{ title }}</div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'article_page',

  props: {},
  data() {
    return {
      title: 'タイトル',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    }
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
