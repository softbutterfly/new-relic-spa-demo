<template>
  <a-layout-footer class="nr-page__footer">
    <a-row type="flex" justify="space-between">
      <a-col :span="24" :md="12" class="nr-page__footer-left">
        New Relic SPA Monitoring Demo
      </a-col>
      <a-col :span="24" :md="12" class="nr-page__footer-right">
        Made with <a-icon type="heart" theme="filled"/> by
        <a href="https://github.com/zodiacfireworks" target="_blank" rel="noopener noreferrer">
          zodiacfireworks
        </a>
      </a-col>
    </a-row>
  </a-layout-footer>
</template>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default';

.nr-page__footer {
  padding: @padding-md;
}

.nr-page__footer .anticon-heart {
  color: @red-6;
}

.nr-page__footer-left {
  text-align: left;
}
.nr-page__footer-right {
  text-align: right;
}

.nr-page__footer-left,
.nr-page__footer-right {
  @media (max-width: @screen-md - 1px) {
    text-align: center;
  }
}
</style>

<script>
export default {
  name: 'nr-footer'
}
</script>
