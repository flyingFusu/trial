<template>

  <div class="m-act hasbtm">
    
  	    <router-link to="/rule" class="u-rule">活动规则</router-link>
        <router-link to="/mine" class="u-mine">我的交易</router-link>
        <router-link to="/friends" class="u-friends">我邀请的好友</router-link>
        <router-link to="/rank" class="u-rank">赛季排行榜</router-link>

        <div class="m-slogan">
            <span>本赛季时间2020.X.X-2020.X.X</span>
            <img src="../assets/slogan.png?v=71621" >
        </div>

        <router-link :to="{name:'task',params:{id:1}}" class="pack"><img src="../assets/pack.png"  /></router-link>
        <div class="u-part m-amount">
            <div class="amount">
                我的体验金资产（元）
                <b>10000.0</b>
                <span>剩余可用模拟体验金9000.00</span>
            </div>
            <div class="detail">
                <div>昨日收益（元）<b>+0.0</b></div><div>累计收益（元）<b>+0.0</b></div><div>账户收益率<b>+0.0</b></div>
            </div>
            <div class="msg">一笔交易确认中</div>                
        </div>
        <div class="u-part m-empty">
            <p>每位用户最多可以同时体验3只基金</p><p>您还可以体验3只</p>
            <div class="u-line"></div>
             <router-link :to="{name:'buy',params:{id:1}}" class="u-btn">买一只基 开始体验</router-link>
        </div>
        <div class="u-part m-pro">
            <router-link :to="{name:'detail',params:{id:1090}}">
            <div class="title">中国梦30股票<span>已体验<i>4</i>天</span></div>
             <div class="detail">
                <div>昨日收益（元）<b>+0.0</b></div><div>累计收益（元）<b class="red">+0.0</b></div><div>账户收益率<b>+0.0</b></div>
            </div>
            </router-link>
            <div class="u-btns">
                <router-link :to="{name:'redeem',params:{id:1}}" class="u-btn pink">赎回</router-link>
                <router-link :to="{name:'buy',params:{id:1}}" class="u-btn orange">追加体验</router-link>
            </div>
            <router-link :to="{name:'buy',params:{id:1}}" class="u-btn">买一只基 开始体验</router-link>

        </div>
        <div class="u-txt">
            <p>每位用户最多可以同时体验3只基金</p><p>您还可以体验3只</p>
        </div>
        <div class="u-fixbtn">买入更多</div>   

         <Loading msg="" :isShow="isShowLoading"/>

  </div>

</template>

<script>
// @ is an alias to /src
import Loading from '@/components/Loading.vue'

export default {
  name: 'Home',
  components: {
    Loading
  },
  data(){
  	return {
  		isShowLoading: false,      
  	}
  },
  mounted:function () {

  },
  methods: {
  	init(){

  	},
  	toPack(){
        location.href="https://www.cdollar.cn/yhjj/index?tokenId="+encodeURIComponent(sessionId);
    },
  }
}
</script>
<style>
#app{}
.m-act{position: relative;z-index:10; width:100%;margin:0 auto;background:linear-gradient(to bottom,#ef6667,#e64a4b); padding-bottom: 0.4rem;}
.m-act:after{content:"";width: 100%;height:5rem;position: absolute;left:0;top:0;background: url(../assets/bg1.jpg)  center 0 no-repeat;background-size:100%;z-index: 1;}
.m-act .m-slogan{width:6.2rem;display: block;padding:0.78rem 0 0.3rem;margin:0 auto;text-align: center;position: relative;z-index: 2;}
.m-act .m-slogan img{display: block;margin:0 auto;width:3.88rem;}
.m-act .m-slogan span{display: inline-block; font-size: 0.24rem;color: #ffffff;border-radius: 0.3rem 0.3rem 0 0.3rem;border:0.01rem solid #ffffff;line-height: 1;padding:2px;margin-bottom: 0.2rem;}
.m-act.hasbtm{padding-bottom: 1rem;}
.m-act.hasbtm .u-fixbtn{display: block;}

.u-rule,.u-mine,.u-friends,.u-rank{position: absolute;z-index:10; background: rgba(0,0,0,0.2); padding:0.16rem;font-size: 0.24rem;color: #ffffff;line-height: 1;}
.u-rule{top:0.24rem;left:0;border-radius: 0 0.3rem 0.3rem 0;}
.u-mine{top:0.9rem;left:0;border-radius: 0 0.3rem 0.3rem 0;}
.u-friends{top:0.24rem;right:0;border-radius: 0.3rem 0 0  0.3rem ;}
.u-rank{top:0.9rem;right:0;border-radius: 0.3rem 0 0  0.3rem ;}

.pack{position:absolute;width:1.1rem;right:0.14rem;top:3.6rem;z-index: 40;}
.pack img{display:block;width:100%;}

.u-part{position: relative;z-index: 2;width:7.1rem;margin:0.3rem auto;position: relative;z-index:10;border-radius: 0.1rem;overflow: hidden;background: #fff;}
.m-amount{text-align: center;background: url(../assets/_b1.png) #fff center 0 no-repeat;background-size:100%;}
.m-amount .amount{font-size: 0.27rem;color: #333333;padding:0.5rem 0.3rem 0.1rem;}
.m-amount .amount b{font-size: 0.84rem;color: #f0191b;font-weight: bolder;line-height: 1;display: block;padding:0.2rem 0.1rem 0.1rem;}
.m-amount .amount span{font-size: 0.22rem;color: #fe797a;background: #fff4f4;line-height: 1;padding:1px 0.4rem;border:1px solid #ffdada;display: inline-block;border-radius: 0.3rem;}

.m-amount .detail{display: flex;font-size: 0.26rem;color: #333333;width:6.4rem;margin:0.3rem auto;}
.m-amount .detail>div{flex: 1;text-align: center;}
.m-amount .detail>div:nth-child(3n+1){text-align: left;}
.m-amount .detail>div:nth-child(3n+3){text-align: right;}
.m-amount .detail b{font-weight: bold;font-size: 0.4rem;color: #333333;display: block;margin-top: 0.1rem;}
.m-amount .msg{box-sizing: border-box;width:6.4rem;margin:0.4rem auto ;background:url(../assets/icon_msg.png) #f8f8f8 0.16rem center no-repeat;background-size:0.3rem;padding:0.2rem 0.2rem 0.2rem 0.7rem;font-size: 0.24rem;color: #333333;line-height: 1;border-radius: 2px;text-align: left;  }

.m-empty{position: relative; padding:0.4rem;font-size: 0.3rem;color: #333333;text-align: center;box-sizing: border-box;}
.u-line{width:6.4rem;height:1px;background: #e2e3e5;position: relative;margin:0.36rem auto;}
.u-line:after,.u-line:before{content:"";width:0.2rem;height:0.2rem;position: absolute;top:-0.1rem; background: #e05b5c;border-radius: 100%;}
.u-line:after{left:-0.5rem;}
.u-line:before{right:-0.4rem;}


.m-pro{padding:0 0 0.3rem;}
.m-pro .title{padding:0.3rem;font-size: 0.34rem;color: #181818;font-weight: bold;margin:0 0.04rem;border-bottom:1px solid #ebebeb;}
.m-pro .title span{float: right;font-size: 0.24rem;color: #666666;}
.m-pro .title span i{font-style: normal;color: #f0191b;}
.m-pro .detail{display: flex;font-size: 0.26rem;color: #333333;width:6.4rem;margin:0.3rem auto;}
.m-pro .detail>div{flex: 1;text-align: center;}
.m-pro .detail>div:nth-child(3n+1){text-align: left;}
.m-pro .detail>div:nth-child(3n+3){text-align: right;}
.m-pro .detail b{font-weight: bold;font-size: 0.4rem;color: #181818;display: block;margin-top: 0.1rem;}
.m-pro .detail b.red{color: #ff2424;}
.m-pro .u-btn{margin:0.1rem auto;}

.u-txt{font-size: 0.24rem;color: #fff;text-align: center;margin:0.4rem auto;line-height: 1.5;}
.u-fixbtn{display: none; position: fixed;z-index:20;width: 7.5rem;bottom: 0; height:1rem;line-height: 1rem;text-align: center; background:linear-gradient(to top,#f4ba70,#fee1b9); font-size: 0.4rem;font-weight: bold;color: #b41019;text-shadow: 0 0 1px #fff;}

</style>
