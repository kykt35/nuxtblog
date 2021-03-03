<template>
  <div class="article_box">
    <div class="title">記事作成</div>

    <form class="form">
      <div class="field_wrap">
        <label for="title">タイトル</label>
        <input id="title" v-model="title" type="text" class="title_input" />
      </div>
      <div class="field_wrap">
        <label for="text">本文</label>
        <textarea id="text" v-model="text" class="text_input" />
      </div>
      <button @click="createArticle">投稿する</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ArticleNewPage',
  data() {
    return {
      title: '',
      text: '',
    }
  },
  computed: {
    ...mapGetters(['articles']),
  },
  methods: {
    newArticleId() {
      return Math.max(this.articles.map((article) => article.id)) + 1
    },
    createArticle(e) {
      e.preventDefault()
      this.$store.dispatch('addArticle', {
        id: this.newArticleId(),
        title: this.title,
        text: this.text,
      })
      this.$router.push('/articles')
    },
  },
}
</script>

<style scoped>
.form {
  padding: 20px;
}
.title_input {
  font-size: 1rem;
  display: block;
}
.text_input {
  display: block;
  font-size: 1rem;
  margin-bottom: 30px;
}
.field_wrap {
  margin-bottom: 20px;
}
</style>
