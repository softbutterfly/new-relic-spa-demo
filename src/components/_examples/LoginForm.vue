<template>
  <nr-example-wrapper>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            {
              validateTrigger: 'submit',
              rules: [
                {
                  required: true,
                  message: 'Please input your username!'
                },
                {
                  validator: validateUserName
                }
              ]
            },
          ]"
          placeholder="Username">
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              validateTrigger: 'submit',
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!'
                },
                {
                  validator: validatePassword
                }
              ]
            },
          ]"
          type="password"
          placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]">
          Remember me
        </a-checkbox>
        <a class="login-form-forgot" href="">
          Forgot password
        </a>
        <a-button type="primary" html-type="submit" class="login-form-button">
          Log in
        </a-button>
        Or
        <a href="">
          register now!
        </a>
      </a-form-item>
    </a-form>
  </nr-example-wrapper>
</template>

<style>
#components-form-demo-normal-login.login-form {
  max-width: 300px;
  width: 100%;
  display: block;
  margin: 0 auto;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>

<script>
import ExampleWrapper from './ExampleWrapper.vue'

export default {
  name: 'nr-login-form',
  components: {
    'nr-example-wrapper': ExampleWrapper
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
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
  }
}
</script>
