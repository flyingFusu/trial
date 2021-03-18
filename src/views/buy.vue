<template>
 <div class="m-buy">
    <div class="line"></div>
    <transition name="fade" mode="out-in">
        <div v-if="!isDone">  
          <div class="title">基金名称<div>中国梦30股票</div></div>
          <div>
            <div class="num">虚拟买入金额<div>剩余虚拟理财金：10000.00元</div></div>
            <div class="txt">¥<input type="text" name="" placeholder="10.00元起购"></div>
            <div class="tips">虚拟买入费率0.00%，今日15点之前买入，预计X月X日确认份额。虚拟交易与真实交易的规则和费率不同。</div>
            <div class="u-btn flat" @click="fnDone">确认买入</div>
          </div>
        </div>
        <div  v-else>  
          <div class="steps">
            <div class="step active">买入1000.00元，等待确认</div>
            <div class="step">预计X月X日确认份额，计算收益</div>
            <div class="step">买入1000.00元，等待确认预计X月X日查看收益</div>
            <div class="u-btn flat">完成</div>
          </div>
      </div>
    </transition> 
 
</div>
</template>

<script>

export default {
  name: 'buy',
  data () {
    return {
      isDone:false
    }
  },
  mounted:function () {

  },
  methods: {
    fnDone:function(){
      this.isDone=true;
    }
  }
}
</script>
<style>
	body,#app{background: #fff;}
	.m-buy{width:100%;height:100%;background: #fff;}
  .m-buy .line{background: #f5f5f9;height:0.24rem;border-bottom: 1px solid #e0e0e0;border-top:1px solid #e0e0e0;}
  .m-buy .title{font-size: 0.26rem;color: #333333;padding:0.24rem;border-bottom: 1px solid #e0e0e0;}
  .m-buy .title div{font-weight: bold;display: inline-block;float: right;}
  .m-buy .num{font-size: 0.26rem;color: #333333;padding:0.24rem;}
	.m-buy .num div{display: inline-block;float: right;font-size:0.24rem;color: #666666;}
  .m-buy .txt{padding:0.24rem;font-size:0.38rem;font-weight: bold; color: #333333;line-height: 1;border-bottom: 1px solid #ededed;}
  .m-buy .txt input{display: inline-block;width:50%;border:none;font-size:0.26rem;color: #333333;vertical-align: middle;padding:0 0.2rem;line-height: 0.4rem;}
  .m-buy .tips{position: relative; font-size:0.22rem;color: #666666;padding:0.24rem;line-height: 1.4;background: #f6f6f6;}
  .m-buy .tips:after{content:"";position: absolute;width:0.1rem;height:0.1rem;border:1px solid #ededed; border-bottom:0;border-right: 0;transform: rotate(45deg); background: #f6f6f6;left:0.8rem;top:-0.1rem;}
  .m-buy .u-btn{margin:0.58rem auto;}
  .m-buy .steps{position: relative;padding:0.3rem;font-size:0.26rem;color: #979797;}
  .m-buy .steps:after{content:"";position: absolute;width:1px;height:1.8rem;background: #dadada;left:0.48rem;top:0.4rem;}
  .m-buy .steps .step{position: relative;z-index:10; margin-bottom: 0.5rem;padding-left:0.54rem;line-height: 0.4rem;}
  .m-buy .steps .step:after{content:"";position: absolute;z-index:10; width:0.36rem;height:0.36rem;background: #dadada;left:0;top:0;border-radius: 100%;}
  .m-buy .steps .step:before{content:"";position:absolute;z-index:11;width:0.14rem;height:0.1rem;border:1px solid #fff;border-top:none;border-right: none;transform: skewX(-20deg) rotate(-60deg);left:0.1rem;top:0.1rem;}
  .m-buy .steps .step.active{color: #333333;}
  .m-buy .steps .step.active:after{background:#e64a4b; }
</style>