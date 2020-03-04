<template>
  <div id="app">
    <header>
      <router-link class="link" to="/shark">Shark</router-link>
      <router-link class="link" to="/batoid">Batoid</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

header {
  background: black;
  margin: 0;
}

$font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

.title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 80px;
  font-family: $font-family;
  color: #48c849;
}

.link {
  font-family: $font-family;
  display: inline-block;
  padding: 20px;
  color: white;
  font-size: 20px;

  &:hover,
  &:active,
  &:focus {
    color: #5dffad;
  }
}

.router-link-active {
  color: #5dff5d;
}

#app {
  perspective: none;
  perspective-origin: center;
  height: 100%;
}

.page {
  width: 100%;
  height: 100%;
  transform-origin: 50% 50% -50vw;
  background: linear-gradient(
    -10deg,
    rgba(47, 5, 136, 1) 0%,
    rgba(10, 140, 159, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>