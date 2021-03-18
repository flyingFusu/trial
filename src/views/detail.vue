<template>
  <iframe ref="iframe" scrolling="auto" width="100%" :style="style" frameborder="0" ></iframe>
</template>
<script>
export default {
  name: 'ComponentsName',
  data() {
    return {
      url: '',
      style:""
    }
  },
  mounted:function () {
    
  },
  watch: {
    url(val) {
      console.log(val);
      if (val) {
        this.$refs.iframe.contentWindow.location.replace(val)
      }
    }
  }
}
</script>