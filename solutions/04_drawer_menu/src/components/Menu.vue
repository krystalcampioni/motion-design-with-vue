<template>
  <transition name="menuToggle">
    <nav class="menu" v-if="isOpen">
      <ul class="menu__list">
        <MenuItem
          v-for="(item, index) in items"
          :key="item.label"
          :show-external-icon="item.showExternalIcon"
          :item="item"
          :is-open="isOpen"
          :style="{
            transitionDelay: `.${index}s`
          }"
        />
      </ul>
    </nav>
  </transition>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  components: {
    MenuItem
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

