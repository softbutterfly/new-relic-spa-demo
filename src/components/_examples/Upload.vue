<template>
  <nr-example-wrapper class="clearfix">
    <a-upload
      listType="picture"
      :fileList="fileList"
      :beforeUpload="tracedImageProcessing"
      @change="handleChange"
      @preview="handlePreview">
      <a-button v-if="fileList.length < 10">
        <a-icon type="upload" />
        Upload
      </a-button>
    </a-upload>
    <a-modal
      :visible="previewVisible"
      :footer="null"
      @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </nr-example-wrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper.vue'

export default {
  name: 'nr-upload',
  components: {
    'nr-example-wrapper': ExampleWrapper
  },
  data () {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: []
    }
  },
  methods: {
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      console.log(file)
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      console.log(fileList)
      this.fileList = fileList
    },
    imageProcessing (file) {
      let interaction = this.$newrelic.interaction()
      const reader = new FileReader()
      reader.onload = (event) => {
        let fileData = {
          uid: this.fileList.length + 1,
          name: `sample${this.fileList.length + 1}.png`,
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
}
</script>
