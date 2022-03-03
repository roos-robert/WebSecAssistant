<template>
  <div class="popup-wrapper">
    <div ref="popup"></div>
  </div>
</template>

<script>
import init from '../popup/app.js';

export default {
  props: {
    initialView: {
      type: String,
      default: 'home',
    },
  },
  mounted() {
    this.vueInstance = init('contentScript', this.$refs['popup'], this.$root.$options.shadowRoot, this.$props.initialView);
    
    this.vueInstance.$on('fill-password', password => {
      document.querySelectorAll('input[type="password"]').forEach(input => {
        input.value = password;
      });
    });

    this.vueInstance.$on('close', () => {
      this.$emit('close');
    });
  },
  beforeDestroy() {
    this.vueInstance.$destroy();
    this.vueInstance = null;
  }
}

</script>

<style lang="scss" scoped>

.popup-wrapper {
  position: fixed;
  right: 10px;
  top: 10px;
  background: white;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  z-index: 99999;
  border-radius: 10px;
  overflow: hidden;
}

</style>
