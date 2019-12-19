<template>
  <a-layout-header
    class="nr-page__header">
    <a-icon
      class="nr-page__sider-trigger"
      :type="showSider ? 'menu-unfold' : 'menu-fold'"
      @click="toggleSider"/>

    <div class="nr-page__header-brand" v-if="showSider">
      <img :src="assets.logoLarge" alt="New Relic">
    </div>
  </a-layout-header>
</template>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default';

.nr-page__header {
  box-shadow: @shadow-1-down;
  padding: 0 @padding-md;
  background-color: @white;
  display: flex;
  flex-direction: row;
}

.nr-page__sider-trigger {
  height: @layout-header-height;
  font-size: 18px;
  line-height: 64px;
  // padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: @blue-6;
  }
}

.nr-page__header-brand {
  padding: @padding-md;
  height: @layout-header-height;
  display: inline-block;

  img {
    max-width: 100%;
    height: 24px;
    margin: 0 auto;
    display: block;
  }
}
</style>

<script>
import NRLogoLarge from '@/assets/nr-logo-l.png'
import NRLogoSmall from '@/assets/nr-logo-s.png'

export default {
  name: 'nr-header',
  props: [
    'showSider'
  ],
  data () {
    return {
      assets: {
        logoLarge: NRLogoLarge,
        logoSmall: NRLogoSmall
      }
    }
  },
  methods: {
    toggleSider () {
      let interaction = this.$newrelic.interaction()
      interaction.setName('toggle-menu')
      if (this.showSider) {
        interaction.setAttribute('type', 'open')
      } else {
        interaction.setAttribute('type', 'close')
      }
      this.$emit('toggleSider', !this.showSider)
      interaction.save()
      interaction.end()
    }
  }
}
</script>
