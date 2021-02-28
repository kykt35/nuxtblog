<template>
  <div class="layout-wrap">
    <div>
      <Header />
      <div class="container">
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.layout-wrap {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  margin: 30px auto 30px;
  width: 800px;
}
</style>
