<template>
 <div class="m-redeem">
    <div class="line"></div>   
    <div class="part">
       <div class="title">基金名称<div>中国梦30股票</div></div>
      <div class="num">赎回份额<div>可用份额：100份</div></div>
      <div class="txt"><input type="text" name="" placeholder="最多可赎回4份"></div>
      <div class="percent"><span>1/3</span><span>1/2</span><span>全部</span></div>
    </div>
    <div class="part">
        <div class="num">赎回至</div>
        <div class="to">体验金账户<span>预计02月-2日到账</span></div>
    </div>
    <div class="tips">今日<span>15:00</span>前赎回，预计以<span>02月01日（星期一）</span>净值计算金额，并于<span>02月02日（星期二）</span>到账。</div>
 
</div>
</template>

<script>

export default {
  name: 'redeem',
  data () {
    return {
      
    }
  },
  mounted:function () {

  },
  methods: {

  }
}
</script>
<style>
	body,#app{width:100%;height:100%;background: #f5f5f9;}
	.m-redeem{width:100%;height:100%;background: #f5f5f9;}
  .m-redeem .line{background: #f5f5f9;height:0.24rem;border-top: 1px solid #e0e0e0;}
  .m-redeem .part{background: #fff;border-top:1px solid #e0e0e0;border-bottom: 1px solid #e0e0e0;margin:0.26rem 0;}
  .m-redeem .title{font-size: 0.26rem;color: #333333;padding:0.24rem;border-bottom: 1px solid #e0e0e0;}
  .m-redeem .title div{font-weight: bold;display: inline-block;float: right;}
  .m-redeem .num{font-size: 0.26rem;color: #333333;padding: 0.24rem;}
	.m-redeem .num div{display: inline-block;float: right;font-size:0.24rem;color: #666666;}
  .m-redeem .txt{padding:0.06rem 0.24rem;font-size:0.38rem;font-weight: bold; color: #333333;line-height: 1;}
  .m-redeem .txt input{display: inline-block;width:50%;border:none;font-size:0.26rem;color: #333333;vertical-align: middle;line-height: 0.4rem;}
  .m-redeem .percent{position: relative; font-size:0.22rem;color: #b1b1b1;padding:0.24rem;line-height: 1.4;}
  .m-redeem .percent span{display: inline-block;vertical-align: middle;color: #b1b1b1;font-size: 0.2rem;line-height: 0.28rem;padding:1px 8px;border:1px solid #b1b1b1;margin-right:0.2rem;}
  .m-redeem .to{margin:0.1rem 0 0.5rem 0.24rem;padding-left:0.9rem;background: url(../assets/icon_pack.png) 0 center no-repeat;background-size:0.72rem;font-size: 0.28rem;color: #333333;}
  .m-redeem .to span{display: block;font-size: 0.22rem;color: #666666;}
  .m-redeem .tips{font-size: 0.22rem;color: #666666;padding:0.24rem;line-height: 1.5;margin:0.6rem 0.5rem;background: #e5e5e5;border-radius: 0.2rem;}
  .m-redeem .tips span{color: #f0191b;}

</style>