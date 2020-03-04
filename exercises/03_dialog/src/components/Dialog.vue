<template>
  <transition name="your-transition" appear>
    <div class="dialog__overlay" role="dialog">
      <div class="dialog__box" ref="modal">
        <h2>Game Over!</h2>
        <button class="controls__button.-startGame" @click="close" autofocus>START NEW GAME</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Dialog",
  methods: {
    close(event) {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss">
@import "../scss/colors";

.dialog {
  &__box {
    background: #f7f6ef;
    text-align: center;
    padding: 20px;
  }

  &__overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba($purple, 0.79);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
