<template>
   <transition name="fade">
     <div class="m-dlg"  v-if="isShow"   title="赛季结束">
        <div>
          <div class="dlg_title">本赛季结束</div>
          <div class="dlg_subtitle">您本赛季收益率排名第122</div>
          <div class="u_txt t1">继续下一赛季挑战  最高赢<i>4999</i>财智金</div>
           <router-link to="/rank"><div class="dlg_btn" @click="$emit('join')">查看排行榜</div> </router-link>

          <div class="dlg_closebtn" @click="isShow=0"   v-if="isClosable"></div>
        </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'dlg-season-end0',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-dlg .u_txt.t1{font-size: 0.24rem;color: #666666;margin:0.14rem 0;}

</style>
