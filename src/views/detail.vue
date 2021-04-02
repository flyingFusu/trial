<template>
  <iframe ref="iframe" scrolling="auto" width="100%" :style="style" frameborder="0" ></iframe>
</template>
<script>
export default {
  name: 'ComponentsName',
  data () {
    return {
      url: '',
      style: ''
    }
  },
  mounted: function () {
    this.url = 'https://zhixiao.yhfund.com.cn/fund/detail/?fundCode=180012'

    var height = document.body.clientHeight || document.documentElement.clientHeight
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth
    console.log(height)
    this.style = 'height:' + (height + (2.44 * oWidth / 10)) + 'px'
  },
  watch: {
    url (val) {
      console.log(val)
      if (val) {
        this.$refs.iframe.contentWindow.location.replace(val)
      }
    }
  }
}
</script>
