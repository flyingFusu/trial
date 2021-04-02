<template>
 <div class="m-task">

    <div class="m-part">
      <div class="title">做任务 领财智金</div>
      <div class="content">
          <div class="item">
            <div class="img"><img src="../assets/icon_t1.png"></div>
            <div class="desc">
              每日签到<span>领1财智金</span>
            </div>
            <div v-if="initData.IsSignIn" class="btn dis">已完成</div>
            <div v-else class="btn" @click="SignIn">去签到</div>
          </div>
           <router-link :to="{name:'friends'}"  class="item">
            <div class="img"><img src="../assets/icon_t2.png"></div>
            <div class="desc">
              邀请好友（{{initData.InviteCon}}/10）<span>成功邀请{{initData.InviteCon}}位好友</span><span>获得xx元红包</span>
            </div>
             <div v-if="initData.InviteCon>=10" class="btn dis">已完成</div>
            <div v-else class="btn">去邀请</div>
          </router-link>
           <div class="item">
            <div class="img"><img src="../assets/icon_t3.png"></div>
            <div class="desc">
              完成注册<span>领200财智金</span>
            </div>
            <div class="btn ">去完成</div>
          </div>
          <div class="item">
            <div class="img"><img src="../assets/icon_t4.png"></div>
            <div class="desc">
              完善身份信息<span>领100财智金</span>
            </div>
            <div class="btn ">去完成</div>
          </div>
          <div class="item">
            <div class="img"><img src="../assets/icon_t5.png"></div>
            <div class="desc">
              绑定银行卡<span>领100财智金</span>
            </div>
            <div class="btn ">去完成</div>
          </div>
          <div class="item">
            <div class="img"><img src="../assets/icon_t6.png"></div>
            <div class="desc">
              完成风险评测<span>领100财智金</span>
            </div>
            <div class="btn ">去完成</div>
          </div>

      </div>

    </div>
    <Loading :isShow="isShowLoading" />

</div>
</template>

<script>
import Loading from '@/components/Loading.vue'

import { InitTask, SignIn } from '@/mock/data'

export default {
  name: 'task',
  components: {
    Loading
  },
  data () {
    return {
      isShowLoading: false,
      isDone: false,
      initData: {},
      fund_amount: ''
    }
  },
  mounted: function () {
    this.id = this.$route.params.id

    this.InitTask()
  },
  methods: {
    InitTask () {
      InitTask().then(res => {
        this.initData = res.data
      })
    },
    SignIn () {
      this.isShowLoading = true
      SignIn().then(res => {
        if (res.data.succ) {
          this.initData.IsSignIn = 1
        }
        this.isShowLoading = false
      })
    }

  }
}
</script>
<style>
  #app{    display: flex;height: 100%;overflow: hidden;}
  .m-task{position: relative;z-index:10; width:100%;margin:0 auto;background:linear-gradient(to bottom,#ef6667,#e64a4b);padding-bottom: 0.3rem;height: 100%;overflow: scroll;; }
  .m-task:after{content:"";width: 100%;height:5rem;position: absolute;left:0;top:0;background: url(../assets/bg1.jpg)  center 0 no-repeat;background-size:100%;z-index: 1;}

  .m-part{margin:0 0.3rem;position: relative;z-index: 100;}
  .m-part .title{padding:0.8rem 0 0.2rem;font-size: 0.36rem;color: #b71b1c;text-align: center;text-shadow: 1px 1px 1px #fff;background: url(../assets/titlebg.png) center 100% no-repeat;background-size:4.2rem; position: relative;z-index: 3;}
  .m-part .content{background: #fff;border-radius: 0.3rem;margin-top:-0.66rem;padding:0.7rem 0.26rem ;}
  .m-task .item{margin:0.3rem 0;background: #fff9ea;border-radius: 0.1rem;display: flex;align-items: center;justify-content: center;}
  .m-task .item .img{flex: 1;text-align: center;display: flex;align-items: center;justify-content: center;margin:0.1rem;border-radius: 100%;overflow: hidden;}
  .m-task .item .img img{width:0.5rem;height:0.5rem;background: #fff;padding:0.16rem;}
  .m-task .item .desc{flex:3;font-size: 0.32rem;color: #333333;padding:0.3rem 0.1rem;}
  .m-task .item .desc span{display: block;line-height: 1.2; font-size: 0.24rem;color: #666666;}
  .m-task .item .desc span:first-child{margin-top:0.1rem;}
  .m-task .item .btn{flex:2;display: flex;align-items: center;justify-content: center;height:0.54rem;background: #fb6777;font-size: 0.3rem;color: #ffffff;text-align: center;line-height: 1;box-shadow: 1px 1px 4px rgba(0,0,0,0.2);border-radius: 0.3rem;margin-right:0.26rem;}
  .m-task .item .btn.dis{opacity: 0.5;}

</style>
