<template>
  <div>我的交易</div>
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
