<template>
  <div id="app">
    <header class="mainHeader">
      <button class="hamburger" :class="{ 'hamburger--isOpen': isOpen }" @click="toggleMenu">
        <div class="hamburger__lineWrapper">
          <span v-for="line in 3" :key="line" class="hamburger__line"/>
          <span class="visuallyHidden">Menu</span>
        </div>
      </button>
    </header>
    <!-- 
    Description:
      Extract the menu in a separate reusable component that
      - Use the isOpen variable to show and hide the menu
      - Uses a transition to slide the menu from the right side of the screen 

    Bonus points:
    - Make each item in the menu list transition in and out sequentially
    -->
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__listItem" style="transition-delay: 0s;">
          <a href="#">speaking</a>
        </li>
        <li class="menu__listItem" style="transition-delay: 0.1s;">
          <a href="#">projects</a>
        </li>
        <li class="menu__listItem" style="transition-delay: 0.2s;">
          <a href="#">resume</a>
        </li>
        <li class="menu__listItem" style="transition-delay: 0.3s;">
          <a
            href="https://medium.com/@krystalcampioni"
            target="_blank"
            class="menu__listItem--external"
          >
            blog
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Oswald:600&display=swap");

$buttonSize: 55px;
$easeInOut: cubic-bezier(0.68, -0.55, 0.27, 1.55);
$inCubic: cubic-bezier(0.55, 0.06, 0.68, 0.19);

$title: #d1ff53;
$activeLink: #E6FF65;
$selectedMenu: #d6ff00;
$paleLink: #c4ffc0;
$linkUnderline: #3b8272;
$dashedLine: $linkUnderline;
$darkDashedLine: #074435;
$black: #231f20;
$darkestBlack: #010919;
$white: #fff;

@import "./scss/menu.scss";

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

body {
  background-image: url("/background.png");
  background-size: cover;
}

html {
  font-family: "Oswald", sans-serif;
}

button {
  transition: all 0.2s ease;
  border: 2px dashed transparent;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
    border: 2px dashed $activeLink;
  }
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  color: $paleLink;
  transition: all 0.3s ease;
  text-decoration-color: $linkUnderline;
  outline: 2px dashed transparent;

  &:hover,
  &:focus {
    color: $activeLink;
    outline-offset: 5px;
    outline: 2px dashed $activeLink;
    text-decoration-color: $activeLink;
  }
}

.hamburger {
  appearance: none;
  background: black;
  border-radius: 50%;
  height: $buttonSize;
  position: relative;
  width: $buttonSize;
  float: right;
  z-index: 101;

  $root: &;

  &--isOpen {
    #{$root}__line {
      &:nth-child(2) {
        opacity: 0;
        transform: rotate(45deg);
      }
      &:nth-child(1) {
        transform: rotate(45deg) translate(7px, 7px);
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(-7px, 7px);
      }
    }
  }

  &__lineWrapper {
    transform: scale(0.8);
    transform-origin: center center;
    height: 41px;
    width: 41px;
    position: absolute;
    top: 11px;
  }

  &__line {
    background: white;
    width: 40px;
    height: 3px;
    position: absolute;
    transform-origin: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s $easeInOut;

    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        transform: translateY(12px * ($i - 1));
      }
    }
  }
}

.mainHeader {
  padding: 10px;
  background-repeat: repeat-x;
  background: url("../assets//header_bg.png");
  background-size: 980px;
  width: 100%;
  z-index: 90;
  position: fixed;
}
</style>
