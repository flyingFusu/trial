<template>
 <div class="m-cate">
    <div class="header">
    	<div :class="{active:cur==0}"  @click="cur=0">全部</div>
    	<div :class="{active:cur==1}"  @click="cur=1">热销榜</div>
    	<div :class="{active:cur==2}"  @click="cur=2">收益榜</div>
    	<div :class="{active:cur==3}"  @click="cur=3">性价比</div>
    	<div :class="{active:cur==4}"  @click="cur=4">定投榜</div>
    </div>
    <div class="tips">此列表仅列出了支持此活动的产品，非银华基金全部产品</div>
    <div class="th"><div>基金名称</div><div>近1周</div><div>近1月</div></div>
    <div class="list">
    	<div class="item th">
    		<div class="name">银华富裕主题<span><i>1</i>180012</span></div><div  class="num"><span>-1.1%</span></div><div class="num"><span>-1.1%</span></div>
    	</div>
    	<div class="item th">
    		<div class="name">银华富裕主题<span><i>1</i>180012</span></div><div  class="num"><span>-1.1%</span></div><div class="num"><span>-1.1%</span></div>
    	</div>

    	
    </div>
    <div class="fixbtm th">
    	<div><label>日榜</label></div>
    	<div><label>周榜</label></div>
    	<div class="active"><label>月榜</label></div>
    	<div><label>更多</label></div>
    </div>
</div>
</template>

<script>

export default {
  name: 'category',
  

  data () {
    return {
      cur:0
    }
  },
  mounted:function () {

  },
  methods: {

  }
}
</script>
<style>
	body{background: #fff;}
	.m-cate{width:100%;}
	.m-cate .header{background:#fff;display: flex;border-bottom: 1px solid #e0e0e0; }
	.m-cate .header>div{flex: 1;font-size: 0.28rem;color: #333333;padding:0.3rem 0;text-align: center;position: relative;}
	.m-cate .header>div.active{color: #f0191b;}
	.m-cate .header>div.active::after{content:"";width:3em;height:2px;background: #f0191b;position: absolute;left:50%;bottom: 0;margin-left:-1.5em;}
	.m-cate .tips{font-size: 0.22rem;color: #666666;padding:0.2rem 0.3rem;line-height: 1;border-bottom:1px solid #e0e0e0;background: #fff;}
	.m-cate .th{background:#fff;display: flex;border-bottom: 1px solid #e0e0e0;padding:0 0.3rem; }
	.m-cate .th>div{flex: 1;font-size: 0.26rem;color: #333333;padding:0.3rem 0;text-align: center;display: inline-block;vertical-align: middle;}
	.m-cate .th>div span{text-align: center;width:100%;}
	.m-cate .th>div:first-child{text-align: left;flex: 2;}
	.m-cate .th>div:last-child{text-align: right;}
	.m-cate .th>div:last-child span{display: block;;text-align: right;width:100%;}

	.m-cate .th .name{font-size: 0.26rem;color: #333333;padding:0.2rem 0;}
	.m-cate .th .name span{display: block;font-size: 0.22rem;color: #979797;margin-top:0.14rem;text-align: left;}
	.m-cate .th .name i{font-style: normal;display: inline-block;line-height: 1.1;width: 1.1em;border:1px solid #979797;text-align: center;margin-right:2px;}
	.m-cate .th .num{font-size: 0.24rem;color: #f0191b;align-items: center;display: flex;}
	.m-cate .item{border-bottom: 1px solid #f3f3f3;}

	.m-cate .fixbtm{position: fixed;bottom: 0;width:100%;background: #fff;}
	.m-cate .fixbtm.th >div{flex: 1;text-align: center;;}
	.m-cate .fixbtm.th >div.active label{color: #f0191b;border:1px solid #f0191b;}
	.m-cate .fixbtm.th label{display: inline-block;padding:0.1rem 0.3rem;background: #f5f5f5;font-size:0.24rem;color: #333333;border-radius: 0.4rem;}
</style>