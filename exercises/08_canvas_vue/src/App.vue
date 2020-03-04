<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <Bubbles :numberOfCircles="200"/>
  </div>
</template>

<script>
import Bubbles from "./components/Bubbles";

export default {
  name: "App",
  components: {
    Bubbles
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
