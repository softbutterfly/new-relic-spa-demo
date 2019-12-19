// $breakpoint from vuetify
// https://gist.github.com/cb109/b074a65f7595cffc21cea59ce8d15f9b
// https://github.com/vuetifyjs/vuetify/blob/master/src/components/VApp/mixins/app-breakpoint.js
// https://github.com/vuetifyjs/vuetify/blob/master/src/components/VApp/mixins/app-breakpoint.spec.js
// Cross-browser support as described in:
// https://stackoverflow.com/questions/1248081
import Vue from 'vue'

const getClientWidth = () => {
  if (typeof document === 'undefined') return 0 // SSR
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
}

const getClientHeight = () => {
  if (typeof document === 'undefined') return 0 // SSR
  return Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  )
}

const dimensionMap = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
}

const Breakpoint = {
  install: (Vue, options) => {
    let Breakpoint = new Vue({
      mixins: [
        {
          data () {
            return {
              clientHeight: getClientHeight(),
              clientWidth: getClientWidth(),
              resizeTimeout: null
            }
          },
          computed: {
            breakpoint () {
              const xs = this.clientWidth < dimensionMap.sm
              const sm = this.clientWidth < dimensionMap.md && !xs
              const md = this.clientWidth < dimensionMap.lg && !(xs || sm)
              const lg = this.clientWidth < dimensionMap.xl && !(xs || sm || md)
              const xl =
                this.clientWidth < dimensionMap.xxl && !(xs || sm || md || lg)
              const xxl = this.clientWidth >= dimensionMap.xxl

              const xsOnly = xs
              const smOnly = sm
              const smAndDown = (xs || sm) && !(md || lg || xl || xxl)
              const smAndUp = !xs && (sm || md || lg || xl || xxl)
              const mdOnly = md
              const mdAndDown = (xs || sm || md) && !(lg || xl || xxl)
              const mdAndUp = !(xs || sm) && (md || lg || xl || xxl)
              const lgOnly = lg
              const lgAndDown = (xs || sm || md || lg) && !(xl || xxl)
              const lgAndUp = !(xs || sm || md) && (lg || xl || xxl)
              const xlOnly = xl
              const xlAndDown = (xs || sm || md || lg || xl) && !xxl
              const xlAndUp = !(xs || sm || md || lg) && (xl || xxl)
              const xxlOnly = xxl

              let name
              switch (true) {
                case xs:
                  name = 'xs'
                  break
                case sm:
                  name = 'sm'
                  break
                case md:
                  name = 'md'
                  break
                case lg:
                  name = 'lg'
                  break
                case xl:
                  name = 'xl'
                  break
                default:
                  name = 'xxl'
                  break
              }

              return {
                // Definite breakpoint.
                xs,
                sm,
                md,
                lg,
                xl,
                xxl,

                // Useful e.g. to construct CSS class names dynamically.
                name,

                // Breakpoint ranges.
                xsOnly,
                smOnly,
                smAndDown,
                smAndUp,
                mdOnly,
                mdAndDown,
                mdAndUp,
                lgOnly,
                lgAndDown,
                lgAndUp,
                xlOnly,
                xlAndDown,
                xlAndUp,
                xxlOnly,

                // For custom breakpoint logic.
                width: this.clientWidth,
                height: this.clientHeight
              }
            }
          },
          methods: {
            onResize () {
              clearTimeout(this.resizeTimeout)
              // Added debounce to match what
              // v-resize used to do but was
              // removed due to a memory leak
              // https://github.com/vuetifyjs/vuetify/pull/2997
              this.resizeTimeout = window.setTimeout(this.setDimensions, 100)
            },
            setDimensions () {
              this.clientHeight = getClientHeight()
              this.clientWidth = getClientWidth()
            }
          },
          created () {
            if (typeof window === 'undefined') return
            window.addEventListener('resize', this.onResize, {
              passive: true
            })
          },
          beforeDestroy () {
            if (typeof window === 'undefined') return
            window.removeEventListener('resize', this.onResize)
          },
          mounted () {
            this.$nextTick(() => {
              this.setDimensions()
            })
          }
        }
      ]
    })

    Vue.mixin({
      computed: {
        $breakpoint () {
          return Breakpoint.breakpoint
        }
      }
    })
  }
}

Vue.use(Breakpoint)
