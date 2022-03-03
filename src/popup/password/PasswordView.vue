<template>
  <div>
      <password-summary v-on:close="$emit('close')"/>
      <password-input />
  </div>
</template>

<script>

import PasswordSummary from './PasswordSummary.vue';
import PasswordInput from './PasswordInput.vue';

export default {
  components: { PasswordSummary, PasswordInput },
  data() {
    return {

    };
  },
}
</script>

<style scoped lang="scss">

</style>
