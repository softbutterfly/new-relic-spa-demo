<template>
  <a-layout-content v-scrollbar class="nr-page__content">
    <slot />
  </a-layout-content>
</template>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default';

.nr-page__content {
  overflow: auto;

  .nr-page__content-inner-wrapper {
    display: block;
    padding: 3 * @padding-lg 0 @padding-lg;
  }

  .nr-page__content-section {
    display: block;
    margin: 0 auto @padding-lg;
    max-width: 90%;
    @media (min-width: @screen-md-min) {
      max-width: 80%;
    }
    @media (min-width: @screen-lg-min) {
      max-width: 70%;
    }
    @media (min-width: @screen-xl-min) {
      max-width: 60%;
    }
  }
}
</style>

<script>
export default {
  name: 'nr-content'
}
</script>
