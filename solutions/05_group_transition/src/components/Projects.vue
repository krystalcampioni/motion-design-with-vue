<template>
  <div class="container container--narrow">
    <h1>Projects</h1>
    <button @click="shuffleList" class="shuffleButton">Shuffle</button>
    <transition-group tag="div" class="projectCard__gallery">
      <div
        v-for="n in projects"
        :key="n"
        class="projectCard"
        :class="{
          'projectCard--selected': n === selectedProject
        }"
      >
        <button
          class="projectCard__button"
          @click="selectedProject = n"
          v-if="n !== selectedProject"
        >{{n}}</button>
        
        <button class="projectCard__button" @click="selectedProject = null" v-else>close</button>
      </div>
    </transition-group>

    <transition name="fade">
      <div class="projectView__overlay" v-if="selectedProject"></div>
    </transition>
  </div>
</template>

<script>
import { shuffle } from "lodash";
export default {
  data() {
    return {
      projects: [...Array(10).keys()],
      selectedProject: null
    };
  },
  methods: {
    shuffleList() {
      this.projects = shuffle(this.projects);
    }
  }
};
</script>

<style lang="scss">
.shuffleButton {
  transition: all 0.2s ease;
  background: #084a25;
  width: auto;
  border-radius: 4px;
  font-size: 25px;
  padding: 10px 20px;
  box-shadow: 0px 4px 0 4px #06332e, inset 1px 5px 23px 11px #00b8ff4f,
    0 8px 17px 8px #43e5ff87, 0 -3px 26px 10px #07247787;
  margin-bottom: 17px;
}
</style>
