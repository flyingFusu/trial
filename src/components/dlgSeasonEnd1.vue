<template>
   <transition name="fade">
     <div class="m-dlg"  v-if="isShow" title="赛季结束">
        <div class="m-dlg_got">
          <div class="dlg_title">本赛季结束</div>
           <div class="dlg_subtitle">您本赛季收益率排名第122</div>
          <div class="u_txt">恭喜获得</div>
          <div class="dlg_pack"><div>{{num}}<span></span></div>财智金</div>
          <div class="dlg_btn" @click="$emit('join')">立即查看</div>
          <div class="dlg_closebtn" @click="isShow=0"   v-if="isClosable"></div>
        </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'dlg-season-end1',
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
  .m-dlg_got:after{content:"";width:1.36rem;height:1.24rem;position: absolute; left:50%;margin-left:-0.68rem;top:-0.6rem;background: url(../assets/medal.png) center center no-repeat;background-size: 100%;}
  .m-dlg .dlg_title{padding-top:0.8rem;}
 .m-dlg .dlg_pack{margin:0.1rem auto;}
 .m-dlg .u_txt{margin:-0.1rem auto 0.1rem;}
</style>
