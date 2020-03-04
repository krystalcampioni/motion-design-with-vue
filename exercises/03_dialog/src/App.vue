<template>
  <div id="app">
    <button type="button" class="btn" @click="openDialog">Open dialog</button>

    <modal v-if="isOpen" @close="closeDialog"/>
  </div>
</template>

<script>
import Modal from "./components/Dialog";

export default {
  name: "App",
  components: {
    modal: Modal
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openDialog() {
      this.isOpen = true;
    },
    closeDialog() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Bangers|Sintony");
@import "./scss/colors";

$primary-font-family: "Bangers", cursive;

*,
*::after,
*::before {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  background-image: url("/background.png");
  background-size: cover;
}

body,
button {
  font-family: $primary-font-family;
}
button {
  transition: all 0.2s ease-in-out;
  background: $green;
  color: #011e35;
  box-shadow: 0px 2px 0px 2px
    darken($green, 5%), 0 10px 10px 3px rgba(0, 0, 0, 0.5);
  appearance: none;
  border: 0;
  margin: 10px;
  padding: 10px 15px;
  font-size: 24px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
}
</style>
