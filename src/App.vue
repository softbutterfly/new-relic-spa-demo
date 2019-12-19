<template>
  <a-locale-provider :locale="locale">
    <router-view id="app" class="nr-page"/>
  </a-locale-provider>
</template>

<script>
// eslint-disable-next-line camelcase
import es_ES from 'ant-design-vue/lib/locale-provider/es_ES'
import moment from 'moment'
import 'moment/locale/fr'

moment.locale('es')

export default {
  name: 'App',
  data () {
    return {
      locale: es_ES
    }
  },
  mounted () {
    let interaction = this.$newrelic.interaction()
    interaction.setName('preloader-vanishing')
    let loader = document.getElementById('app-preloader')
    if (loader) {
      loader.classList.remove('active')
      setTimeout(() => {
        loader.remove()
        interaction.save()
        interaction.end()
      }, 850)
    }
  }
}
</script>
