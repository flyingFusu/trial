<template>
   <transition name="fade">
     <div class="m-dlg"  v-if="isShow">
        <div>
          <div class="dlg_title">恭喜您获得</div>
          <div class="dlg_pack"><div>10000<span>元</span></div>体验金</div>
          <div class="u_txt ">可用于体验银华基金产品</div>
          <div class="dlg_btn" @click="$emit('join')">立即领取</div>
          <div class="dlg_closebtn" @click="isShow=0"   v-if="isClosable"></div>
        </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'dlg',
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

</style>
