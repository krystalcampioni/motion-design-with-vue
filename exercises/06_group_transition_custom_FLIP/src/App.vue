<template>
  <div id="app">
    <Projects/>
  </div>
</template>

<script>
import Projects from "./components/Projects.vue";

export default {
  name: "App",

  components: {
    Projects
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
