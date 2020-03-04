<template>
  <div class="container container--narrow">
    <header>
      <h1>Projects</h1>
    </header>
    <button class="shuffleButton" @click="shuffleList">Shuffle</button>
    <transition-group tag="div" class="projectCard__gallery">
      <div v-for="n in projects" :key="n" class="projectCard__ghost">
        <div
          :id="`projectCard-${n}`"
          class="projectCard"
          :class="{
            'projectCard--selected': n === selectedProject
          }"
          :key="`projectCard-${n}`"
        >
          <button
            key="open"
            class="projectCard__button"
            @click="handleClick(n)"
            v-if="n !== selectedProject"
          >{{n}}</button>
          <button class="projectCard__button" key="close" @click="handleClose(n)" v-else>close</button>
        </div>
      </div>
    </transition-group>
    <transition name="fade">
      <div class="projectView__overlay" v-if="showOverlay"></div>
    </transition>
  </div>
</template>

<script>
import { shuffle } from "lodash";
import flipElement from "../utils/flipElement";
const DURATION = 500;

export default {
  data() {
    return {
      showOverlay: false,
      projects: [...Array(10).keys()],
      selectedProject: null
    };
  },
  methods: {
    shuffleList() {
      this.projects = shuffle(this.projects);
    },
    handleClick(n) {
      const element = document.querySelector(`#projectCard-${n}`);
      flipElement({
        element,
        triggerAction: () => {
          this.selectedProject = n;
          element.style = { zIndex: 200 };
        },
        duration: DURATION,
        initialZindex: 200,
        finalZindex: 200,
        finishedHandler: () => {
          this.showOverlay = true;
        }
      });
    },
    handleClose(n) {
      const element = document.querySelector(`#projectCard-${n}`);
      flipElement({
        element,
        triggerAction: () => {
          this.showOverlay = false;
          this.selectedProject = null;
        },
        duration: DURATION,
        initialZindex: 200,
        finalZindex: 200,
        finishedHandler: () => {}
      });
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