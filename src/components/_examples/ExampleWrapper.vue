<template>
  <div class="nr-example-wrapper">
    <slot />
  </div>
</template>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default';

.nr-example-wrapper {
  border-radius: @border-radius-base;
  border: @border-width-base dashed @border-color-base;
  padding: @padding-lg;
  background-color: @white;
}
</style>

<script>
export default {
  name: 'nr-example-wrapper'
}
</script>
