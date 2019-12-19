<template>
  <div class="nr-page__content-section-code-wrapper">
    <div class="legend-wrapper">
      <div class="nr-page__content-section legend">
        <template v-if="number !== null">
          <strong>Script {{ number }}: </strong>
        </template>
        <slot name="legend"/>
      </div>
    </div>
    <div class="nr-page__content-section">
      <prism :language="language" :class="classes"><slot/></prism>
    </div>
  </div>
</template>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default';

.nr-page__content {
  code[class*="language-"],
  pre[class*="language-"] {
    font-family: @code-family;
  }

  code[class*="language-"].inline,
  pre[class*="language-"].inline {
    font-size: @font-size-sm;
    line-height: inherit;
    padding: 2px;
    border-radius: 4px;
  }

  .nr-page__content-section-code-wrapper {
    background-color: @black;
    .legend-wrapper {
      background-color: fade(@white, 15%);
      padding: @padding-sm 0;

      .legend {
        margin-bottom: 0;
        color: @white;
        font-size: @font-size-sm;
      }
    }

    pre[class*="language-"] {
      background-color: @black;
      padding: @padding-lg;
      margin: 0 -@padding-lg;
      overflow: auto;
      line-height: 2;

      & > code[class*="language-"] {
        display: block;
        line-height: inherit;
      }

      &.line-numbers {
        padding-left: 3.5 * @padding-lg;

        .line-numbers-rows {
          left: -2.5 * @padding-lg;
          width: 2 * @padding-lg;
          top: -@padding-lg;
          bottom: -@padding-lg;
          padding: @padding-lg 0;
          background-color: fade(@white, 15%);
          border-right: 0 none;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'nr-code-snippet',
  props: {
    language: {
      type: String,
      default: 'javascript'
    },
    plugins: {
      type: Array[String],
      default () {
        return ['line-numbers']
      }
    },
    number: {
      type: Number,
      default: null
    }
  },
  computed: {
    classes () {
      return this.plugins.join(' ')
    }
  }
}
</script>
