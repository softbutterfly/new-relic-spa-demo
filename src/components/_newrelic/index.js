export default {
  install: (Vue, options) => {
    let NewRelic = new Vue({
      mixins: [
        {
          computed: {
            newrelic () {
              /* eslint-disable no-undef */
              if (typeof newrelic === 'object') {
                return newrelic
              }
              /* eslint-enable no-undef */
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
