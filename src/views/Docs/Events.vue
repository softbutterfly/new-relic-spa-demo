<template>
  <nr-content>
    <div class="nr-page__content-inner-wrapper">
      <div class="nr-page__content-section">
        <h1>
          Eventos simples e interacciones de usuario
        </h1>

        <p>
          Luego de instalar el plugin de New Relic en nuestra aplicación de VueJS
          estamo listos para registrar eventos e interacciones de nuestra
          aplicación y enviarlos a New Relic.
        </p>
      </div>

      <div class="nr-page__content-section">
        <h2>
          Eventos simples
        </h2>

        <p>
          Vamos a considerar eventos simples a cualquier interacción que
          querramos registrar sin un análisis detallado del tiempo que tarde en
          ejecutarse.
        </p>

        <p>
          En esta página tenemos 2 ejemplos que se muestran en los
          <em>Scripts 1</em> y <em>2</em>. Estos son ejemplos de uso del método
          <a target="_blank" href="https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/interaction-browser-spa-api">
          <code class="language-javascript inline">interaction <a-icon type="link" /></code>
          </a>
          y de sus metodos relacionados
          <a target="_blank" href="https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-name">
          <code class="language-javascript inline">setName <a-icon type="link" /></code>
          </a>,
          <a target="_blank" href="https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-attribute">
          <code class="language-javascript inline">setAttribute <a-icon type="link" /></code>
          </a>,
          <a target="_blank" href="https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-save">
          <code class="language-javascript inline">save <a-icon type="link" /></code>
          </a> y
          <a target="_blank" href="https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-end">
          <code class="language-javascript inline">end <a-icon type="link" /></code>
          </a>.
        </p>
      </div>

      <div class="nr-page__content-section">
        <h3>
          <strong>Ejemplos</strong>
        </h3>
      </div>

      <div class="nr-page__content-section">
        <h4>
          1. <code>preloader-vanishing</code>
        </h4>

        <p>
          Este ejemplo muestra el registro de un evento personalizado llamado
          <code class="language-javascript inline">preloader-vanishing</code>
          que se registra cuando desaparece el prelaoder de esta página.
        </p>

        <p>
          Este evento no necesita interaccion del usuario para iniciarse.
        </p>
      </div>
      <nr-code-snippet :number="1">
        <template slot="default">{{ examples.preloaderVanishing }}</template>
        <template slot="legend">Registro del desvanecimiento del <em>preloader</em></template>
      </nr-code-snippet>

      <div class="nr-page__content-section">
        <h4>
          2. <code>toggle-menu</code>
        </h4>

        <p>
          Este ejemplo muestra el registro de un evento personalizado llamado
          <code class="language-javascript inline">toggle-menu</code>
          que se registra cuando se hace click en el botton ubicado en la barra
          superior para mostrar u ocultar el menu lateral.
        </p>

        <p>
          A diferencia del ejemplo anterior este evento necesita interacción del
          usuario para iniciarse. Además se registra información adicional de la
          interacción estableciendo el atributo
          <code class="language-javascript inline">type</code> en los valores
          <code class="language-javascript inline">open</code> o
          <code class="language-javascript inline">close</code> según si el menú
          lateral se muestra o se oculta, respectivamente.
        </p>
      </div>
      <nr-code-snippet :number="2">
        <template slot="default">{{ examples.toggleMenu }}</template>
        <template slot="legend">Alternancia del menú lateral</template>
      </nr-code-snippet>

      <div class="nr-page__content-section">
        <h4>
          3. <code>stepper-tracking</code>
        </h4>

        <p>
          Este ejemplo muestra el registro de un evento personalizado llamado
          <code class="language-javascript inline">stepper-tracking</code>
          que se registra cuando cada uno de los pasos que sigue el usuario en
          una vista giada por pasos sin cambios de página.
        </p>

        <nr-example-stepper />
      </div>
      <nr-code-snippet :number="3">
        <template slot="default">{{ examples.stepperTracking }}</template>
        <template slot="legend">Seguimiento de los pasos de un stepper</template>
      </nr-code-snippet>

      <div class="nr-page__content-section">
        <h2>
          Interacciones de usuario
        </h2>

        <p>
          Habitualmente cuando monitoreamos el rendimiento de nuestra aplicación
          es de mucha importancia el tiempo que tardan ciertas funciones internas
          que se ejecutan a raíz de una accion del usuario.
        </p>

        <p>
          Algunas de estas funciones como llamadas AJAX, cambios de ruta o
          temporizadores son rastreadas en detalle por New Relic. Sin embargo hay
          situaciones en las que el seguimiento debe implementarse manualmente.
        </p>

        <p>
          En el cript 4 veremos un ejemplo de uso del método
          <a target="_blank" href="https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/createtracer-browser-spa-api">
          <code class="language-javascript inline">createTracer <a-icon type="link" /></code>
          </a>
          y las caracteristicas del método
          <a target="_blank" href="https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/interaction-browser-spa-api">
          <code class="language-javascript inline">interaction <a-icon type="link" /></code>
          </a> para la creación y referenciación de interacciones.
        </p>
      </div>

      <div class="nr-page__content-section">
        <h3>
          <strong>Ejemplos</strong>
        </h3>
      </div>

      <div class="nr-page__content-section">
        <h4>
          1. <code>image-processing</code> y <code>image-reading</code>
        </h4>

        <p>
          Este ejemplo muestra el registro de un evento personalizado llamado
          <code class="language-javascript inline">image-processing</code> con
          un sub proceso interno llamado
          <code class="language-javascript inline">image-reading</code>
          que forma parte de un
          <code class="language-javascript inline">tracer</code>.
        </p>

        <p>
          Este evento necesita interaccion del usuario para iniciarse.
        </p>

        <nr-example-upload />
      </div>

      <nr-code-snippet :number="4">
        <template slot="default">{{ examples.imageProcessing }}</template>
        <template slot="legend">Seguimiento personalizado de la carga de imágenes</template>
      </nr-code-snippet>
    </div>
  </nr-content>
</template>

<script>
export default {
  name: 'nr-events',
  components: {
    'nr-content': () => import('@/components/Content'),
    'nr-code-snippet': () => import('@/components/CodeSnippet.vue'),
    'nr-example-upload': () => import('@/components/_examples/Upload.vue'),
    'nr-example-stepper': () => import('@/components/_examples/Stepper.vue')
  },
  data () {
    return {
      examples: {
        preloaderVanishing: `
          mounted () {
              let interaction = this.$newrelic.interaction()
              let loader = document.getElementById('app-preloader')

              interaction.setName('preloader-vanishing')

              if (loader) {
                  loader.classList.remove('active')

                  setTimeout(() => {
                      loader.remove()

                      interaction.save()
                      interaction.end()
                  }, 850)
              }
          }
        `.trim().replace(/^ {10}/gm, ''),
        toggleMenu: `
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
        `.trim().replace(/^ {10}/gm, ''),
        stepperTracking: `
          methods: {
            next () {
              let interaction = this.$newrelic.interaction()
              interaction.setName('stepper-tracking')
              interaction.setAttribute('currentStep', this.current)
              interaction.setAttribute('action', 'next')
              this.current++
              interaction.save()
              interaction.end()
            },
            prev () {
              let interaction = this.$newrelic.interaction()
              interaction.setName('stepper-tracking')
              interaction.setAttribute('currentStep', this.current)
              interaction.setAttribute('action', 'prev')
              this.current--
              interaction.save()
              interaction.end()
            },
            done () {
              let interaction = this.$newrelic.interaction()
              interaction.setName('stepper-tracking')
              interaction.setAttribute('currentStep', this.current)
              interaction.setAttribute('action', 'done')
              this.$message.success('Processing complete!')
              interaction.save()
              interaction.end()
            }
          }
        `.trim().replace(/^ {10}/gm, ''),
        imageProcessing: `
          methods: {
            imageProcessing (file) {
              let interaction = this.$newrelic.interaction()
              const reader = new FileReader()
              reader.onload = (event) => {
                let fileData = {
                  uid: this.fileList.length + 1,
                  name: \`sample\${this.fileList.length + 1}.png\`,
                  status: 'done',
                  thumbUrl: reader.result
                }
                this.fileList = [
                  ...this.fileList.slice(0, this.fileList.length - 1),
                  fileData
                ]
                this.$message.success('Processing complete!')
                interaction.setAttribute('image', reader.result)
                interaction.save()
                interaction.end()
              }
              reader.readAsDataURL(file)
              return false
            },
            tracedImageProcessing (file) {
              let interaction = this.$newrelic.interaction()
              interaction.setName('image-processing')
              let wrappedImageProcessing = interaction.createTracer(
                'image-reading',
                this.imageProcessing
              )
              wrappedImageProcessing(file)
              return false
            }
          }
        `.trim().replace(/^ {10}/gm, '')

      }
    }
  }
}
</script>
