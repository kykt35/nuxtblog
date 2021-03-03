<template>
  <header class="root">
    <div class="logo">
      <nuxt-link to="/" class="logo_text">NuxtBlog</nuxt-link>
    </div>
  </header>
</template>

<style scoped>
.root {
  height: 80px;
  background-color: #607d8b;
}

.logo {
  font-size: 32px;
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo_text {
  text-decoration: none;
  color: #fff;
}
</style>
