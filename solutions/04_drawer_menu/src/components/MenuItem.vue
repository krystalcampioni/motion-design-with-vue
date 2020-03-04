<template>
  <li :aria-hidden="!isOpen" class="menu__listItem" @click="click">
    <a
      v-if="item.externalUrl"
      class="menu__listItem--external"
      :href="item.externalUrl"
      target="_blank"
    >
      {{ item.label }}
      <slot/>
      <svg
        v-if="showExternalIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"></path>
      </svg>
    </a>
    <a v-else href="#">{{ item.label }}</a>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    click: {
      type: Function,
      default: () => {}
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    showExternalIcon: {
      type: Boolean,
      default: false
    }
  }
};
</script>
