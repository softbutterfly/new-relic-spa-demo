<template>
  <nr-content>
    <div class="nr-page__content-inner-wrapper">
      <div class="nr-page__content-section">
        <h1>
          Formularios
        </h1>

        <p>
          En los siguientes ejemplos se muestra la instrumentacion de New Relic
          para el seguimiento de formularios, envio de datos y reporte de
          errores.
        </p>
      </div>

      <div class="nr-page__content-section">
        <h3>
          <strong>Ejemplos</strong>
        </h3>
      </div>

      <div class="nr-page__content-section">
        <h4>
          1. <code>login-form</code>
        </h4>

        <p>
          Este ejemplo muestra el registro de un evento personalizado llamado
          <code class="language-javascript inline">preloader-vanishing</code>
          que se registra cuando desaparece el prelaoder de esta página.
        </p>

        <p>
          Este evento no necesita interaccion del usuario para iniciarse.
        </p>

        <nr-example-login-form />
      </div>

      <nr-code-snippet :number="1">
        <template slot="default">{{ examples.submitForm }}</template>
        <template slot="legend"><code>Envío de estados al completar formularios</code></template>
      </nr-code-snippet>
    </div>
  </nr-content>
</template>

<script>
export default {
  name: 'nr-forms',
  components: {
    'nr-content': () => import('@/components/Content'),
    'nr-code-snippet': () => import('@/components/CodeSnippet.vue'),
    'nr-example-login-form': () => import('@/components/_examples/LoginForm.vue')
  },
  data () {
    return {
      examples: {
        submitForm: `
          methods: {
            validateUserName (rule, value, cbf) {
              if (value !== 'admin@example.com') {
                cbf('Invalid username!')
              }
              cbf()
            },
            validatePassword (rule, value, cbf) {
              if (value !== 'admin') {
                cbf('Invalid password!')
              }
              cbf()
            },
            handleSubmit (e) {
              e.preventDefault()
              let interaction = this.$newrelic.interaction()
              interaction.setName('login')
              this.form.validateFields((err, values) => {
                interaction.setAttribute('username', values.userName)
                interaction.setAttribute('remember', values.remember)

                if (!err) {
                  this.$message.success('Login complete!')
                  interaction.setAttribute('result', 'success')
                } else {
                  this.$message.error('Login failure!')
                  interaction.setAttribute('result', 'error')
                  interaction.setAttribute('error', err)
                }

                interaction.save()
                interaction.end()
              })
            }
        `.trim().replace(/^ {10}/gm, '')
      }
    }
  }
}
</script>
