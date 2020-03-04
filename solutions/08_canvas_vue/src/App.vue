<template>
  <div id="app">
    <div class="controls">
      <input type="color" v-model="mainColor">
      <input type="range" name="points" min="0" max="200" v-model="numberOfCircles">
    </div>
    <img width="25%" src="./assets/logo.png">
    <Bubbles
      :numberOfCircles="numberOfCircles"
      :key="`${numberOfCircles}=${mainColor}`"
      :mainColor="mainColor"
    />
  </div>
</template>

<script>
import Bubbles from "./components/Bubbles";

export default {
  name: "App",
  components: {
    Bubbles
  },
  data() {
    return {
      numberOfCircles: 10,
      mainColor: "blue"
    };
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

.controls {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  z-index: 300;
}
</style>
