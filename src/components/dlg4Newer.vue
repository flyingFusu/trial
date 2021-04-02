<template>
   <transition name="fade">
     <div class="m-dlg"  v-if="isShow" title="赛季结束">
        <div class="">
          <div class="dlg_title">体验第7天 新人专享</div>
          <div class="u_txt l">恭喜获得</div>
          <div class="dlg_pack"><div>{{num}}<span></span></div>财智金</div>
          <div class="dlg_btn"   @click="isShow=0" >收入囊中</div>
          <div class="u_txt">财智金根据今日累计收益情况进行发放</div>
          <div class="dlg_closebtn" @click="isShow=0"   v-if="isClosable"></div>

        </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'dlg4Newer',
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
  .m-dlg>div{padding-bottom: 0.4rem;}
 .m-dlg .dlg_pack{margin:0.1rem auto;}
 .m-dlg .dlg_btn{margin:0.3rem auto;}
 .m-dlg .u_txt{color:#979797;}
 .m-dlg .u_txt.l {font-size: 0.32rem;color: #666666;margin:0.14rem 0;}

</style>
