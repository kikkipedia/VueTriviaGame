<template>
  <div id="app">
    <Start/>
    <Questions/>
    </div>
</template>

<script>
import Start from './components/Start.vue'
import Questions from './components/Questions.vue'

export default {
  name: 'App',
  components: {
    Start,
    Questions
  }
}
</script>

<style>

</style>
