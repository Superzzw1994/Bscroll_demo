<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import tab from './components/tab/tab'
export default {
  name: 'App',
  components: {
    tab:tab
  }
}
</script>

<style>

</style>
