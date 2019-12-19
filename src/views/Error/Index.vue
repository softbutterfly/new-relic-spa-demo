<template>
  <a-layout>
    <a-layout>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <nr-footer />
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'DocsIndex',
  components: {
    'nr-footer': () => import('@/components/Footer')
  }
}
</script>
