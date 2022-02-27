<template>
  <div id='app'>
    <PageHeader />
    <router-view />
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
:root {
  --dark-gray: #121213;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

html, body {
  background-color: var(--dark-gray);
  padding: 0;
  margin: 0;
}
</style>
