<template>
  <a-layout>
    <nr-sider
      :collapsed="collapsed"
      :collapse="onCollapse"/>
    <a-layout>
      <nr-header
        :showSider="collapsed"
        @toggleSider="(value)=> collapsed = value" />
      <router-view class="nr-page__content"/>
      <nr-footer />
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'DocsIndex',
  components: {
    'nr-header': () => import('@/components/Header'),
    'nr-footer': () => import('@/components/Footer'),
    'nr-sider': () => import('@/components/Sider')
  },
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    onCollapse (collapsed, type) {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
