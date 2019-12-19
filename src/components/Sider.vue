<template>
  <a-layout-sider
    :collapsed="collapsed"
    :trigger="null"
    collapsible
    class="nr-page__sider"
    breakpoint="md"
    collapsedWidth="0"
    width="300"
    theme="light"
    @collapse="collapse"
    @breakpoint="breakpoint">
    <a-row>
      <a-col :span="24" class="nr-page__sider-brand">
        <img :src="assets.logoLarge" alt="New Relic">
      </a-col>
      <a-col :span="24">
        <a-menu
          theme="light"
          mode="inline"
          :selectedKeys="selectedKeys">
          <a-menu-item key="1">
            <router-link :to="{name: links.plugin}">
              <a-icon type="appstore" />
              <span>Plugin</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link :to="{name: links.events}">
              <a-icon type="select" />
              <span>Eventos</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link :to="{name: links.forms}">
              <a-icon type="form" />
              <span>Formularios</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
  </a-layout-sider>
</template>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default';

.nr-page__sider {
  box-shadow: @shadow-1-right;
}

.nr-page__sider-brand {
  padding: @padding-md;
  height: @layout-header-height;

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

import { PLUGIN, EVENTS, FORMS } from '@/router/names'

export default {
  name: 'nr-sider',
  props: [
    'collapsed',
    'collapse',
    'breakpoint'
  ],
  data () {
    return {
      assets: {
        logoLarge: NRLogoLarge,
        logoSmall: NRLogoSmall
      },
      links: {
        plugin: PLUGIN,
        events: EVENTS,
        forms: FORMS
      }
    }
  },
  computed: {
    selectedKeys () {
      let { $route, links } = this

      if ($route.name === links.plugin) {
        return ['1']
      }
      if ($route.name === links.events) {
        return ['2']
      }
      if ($route.name === links.forms) {
        return ['3']
      }

      return null
    }
  }
}
</script>
