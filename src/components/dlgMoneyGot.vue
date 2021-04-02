<template>
   <transition name="fade">
     <div class="m-dlg"  v-if="isShow" title="赛季结束">
        <div class="">
          <div class="dlg_title">提现成功</div>
          <div class="u_txt">领取微信红包<span>X.XX</span>元</div>
          <div class="dlg_btn"   @click="isShow=0" >我知道了</div>
          <div class="dlg_closebtn" @click="isShow=0"   v-if="isClosable"></div>

        </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'dlgMoneyGot',
  emits: ['join'],
  props: {
    msg: String,
    isShow: {
      type: Boolean,
      default: false
    },
    isClosable: {
      type: Boolean,
      default: false
    },
    num: {
      type: Number,
      default: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .m-dlg .u_txt{color:#333333;font-size: 0.36rem;margin:0.3rem auto 0.6rem;}
 .m-dlg .u_txt span{color:#f01b1c;font-size: 0.5rem;}

</style>
