<template>
  <nr-example-wrapper>
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">{{steps[current].content}}</div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        Next
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="done">
        Done
      </a-button>
      <a-button v-if="current>0" style="margin-left: 8px" @click="prev">
        Previous
      </a-button>
    </div>
  </nr-example-wrapper>
</template>

<style lang="less" scoped>
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>

<script>
import ExampleWrapper from './ExampleWrapper.vue'

export default {
  name: 'nr-stepper',
  components: {
    'nr-example-wrapper': ExampleWrapper
  },
  data () {
    return {
      current: 0,
      steps: [
        {
          title: 'First',
          content: 'First-content'
        },
        {
          title: 'Second',
          content: 'Second-content'
        },
        {
          title: 'Last',
          content: 'Last-content'
        }
      ]
    }
  },
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
}
</script>
