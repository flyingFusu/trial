<template>
   <transition name="fade">
     <div class="m-dlg-message"  v-if="isShow" >
         <div class="message">{{msg}}</div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: String,
    isShow: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    var _this = this
    setTimeout(function () {
      _this.isShow = false
    }, 3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .m-dlg-message{display: flex;-webkit-box-align: center;align-items: center;-webkit-box-pack: center;justify-content: center;position:fixed; top:0; left:0; width:100%; z-index:9999;height:100%; background: rgba(0,0,0,0.7); }
 .m-dlg-message .message{background: rgba(255,255,255,0.6);font-size: 0.3rem;color: #fff;padding:0.1rem 0.2rem;border-radius: 0.1rem;}

</style>
