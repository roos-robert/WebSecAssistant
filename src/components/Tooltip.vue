<template>
  <div class="tooltip" :style="{ top, left }">
    <button class="btn-close" v-if="$props.showCloseButton" @click="$emit('close')">
      <font-awesome-icon icon="times" />
      Stäng
    </button>
    <h2 class="title" v-if="$props.title">{{$props.title}}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    anchorElement: {
      type: HTMLElement,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    showCloseButton: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    const anchorRect = this.$props.anchorElement.getBoundingClientRect();
    return {
      left: anchorRect.left + window.scrollX + anchorRect.width / 2 + 'px',
      top: anchorRect.bottom + window.scrollY + 11 + 'px',
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes expand {
  from {
    transform: scale(0);
    opacity: 0;
  }
}

.tooltip {
  background-color: var(--color-gray);
  border-bottom: 6px solid var(--color-primary);
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  transform: translateX(-50%);
 
  position: absolute;
  z-index: 9999;
  
  animation: expand .4s cubic-bezier(0.19, 1, 0.22, 1);

  ::after {
    content: ' ';
    height: 0;
    position: absolute;
    width: 0;
    border: 6px solid transparent;
    border-bottom-color: var(--color-gray);
    z-index: 9999;
    left: 50%;
    transform: translateX(-50%);
    top: -11px;
  }

  .title {
    margin: 0;
    margin-bottom: 5px;
  }

  .btn-close {
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 11px;
    border: none;
    background: none;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

</style>