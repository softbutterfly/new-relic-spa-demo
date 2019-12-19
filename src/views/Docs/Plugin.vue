<template>
  <nr-content>
    <div class="nr-page__content-inner-wrapper">
      <div class="nr-page__content-section">
        <h1>
          Plugin de <code>newrelic</code>
        </h1>

        <p>
          El siguiene <em>script</em> muestra la forma de hacer que el objeto
          <code class="language-javascript inline">newrelic</code> que proporciona
          el <em>script</em> obtenido de la web de New Relic Browser luego de
          copiarlo en el <code class="language-javascript inline">head</code> de
          nuestra página.
        </p>
      </div>

      <nr-code-snippet :number="1">
        <template slot="default">{{ examples.newRelicPlugin }}</template>
        <template slot="legend"><code>src/components/_newrelic/index.js</code></template>
      </nr-code-snippet>

      <div class="nr-page__content-section">
        <p>
          Si emplea la arquitectura de plugins, puede registrar el componente que
          hemos creado con el <em>Script 1</em> de la manera que se muestra en el
          <em>Script 2</em>.
        </p>
      </div>

      <nr-code-snippet :number="2">
        <template slot="default">{{ examples.newRelicPluginUsage }}</template>
        <template slot="legend"><code>src/plugins/newrelic.js</code></template>
      </nr-code-snippet>
    </div>
  </nr-content>
</template>

<script>
export default {
  name: 'nr-plugin',
  components: {
    'nr-content': () => import('@/components/Content'),
    'nr-code-snippet': () => import('@/components/CodeSnippet.vue')
  },
  data () {
    return {
      examples: {
        newRelicPlugin: `
          export default {
              install: (Vue, options) => {
                  let NewRelic = new Vue({
                      mixins: [
                          {
                              computed: {
                                  newrelic () {
                                      if (typeof newrelic === 'object') {
                                          return newrelic
                                      }
                                      return undefined
                                  }
                              }
                          }
                      ]
                  })
                  Vue.mixin({
                      computed: {
                          $newrelic () {
                              return NewRelic.newrelic
                          }
                        }
                  })
              }
          }
        `.trim().replace(/^ {10}/gm, ''),
        newRelicPluginUsage: `
          import Vue from 'vue'
          import NewRelic from '@/components/_newrelic'

          Vue.use(NewRelic)
        `.trim().replace(/^ {10}/gm, '')
      }
    }
  }
}
</script>
