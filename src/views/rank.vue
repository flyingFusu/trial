<template>

 <div class="m-rank">
    <div class="title">一月赛季<span>（2021.X.X-2021.X.X）</span></div>

     <router-link :to="{name:'ranklist',params:{}}" class="u-his">查看历史榜单</router-link>

    <div class="ct">
      <div class="th tr"><span>名次</span><span  class="f2"><i>挑战者</i></span><span class="f3"><i>本赛季收益率</i></span></div>
      <div class="mine tr"><span>12</span><span  class="f2">我的</span><span>+5%</span><span class="f2"></span></div>
      <div class=" tr i1"><span>1</span><span  class="f2">184****5297</span><span>+5%</span><router-link :to="{name:'tas',params:{}}"  class="ta"><i>TA买了啥</i></router-link></div>
      <div class=" tr i2"><span>2</span><span  class="f2">184****5297</span><span>+5%</span><router-link :to="{name:'tas',params:{}}"  class="ta"><i>TA买了啥</i></router-link></div>
      <div class=" tr i1"><span>1</span><span  class="f2">184****5297</span><span>+5%</span><router-link :to="{name:'tas',params:{}}"  class="ta"><i>TA买了啥</i></router-link></div>
      <div class=" tr i2"><span>2</span><span  class="f2">184****5297</span><span>+5%</span><router-link :to="{name:'tas',params:{}}"  class="ta"><i>TA买了啥</i></router-link></div>
    </div>

</div>

</template>

<script>

export default {
  name: 'rank',
  data () {
    return {

    }
  },
  mounted: function () {
    this.id = this.$route.params.id
    console.log(this.id)
  },
  methods: {

  }
}
</script>
<style>
  body,#app{background:linear-gradient(to bottom,#ef6667,#e64a4b);height:100%;}
  .m-rank{position: relative;z-index:10; width:100%;margin:0 auto; background: url(../assets/bg2.jpg)  center 0 no-repeat;background-size:100%;}
  .m-rank .title{padding:1.3rem 0 0.8rem 0.4rem;font-size: 0.74rem;color: #ffffff;line-height: 1;}
  .m-rank .title span{display: block;font-size:0.28rem;color: #ffffff;margin-top:0.3rem;}
  .m-rank .ct{width:6.9rem;margin:0 auto;background: #fff;border-radius: 0.3rem;padding:0.4rem 0.3rem;box-sizing: border-box;}

  .u-his{position: absolute;z-index:10; background: rgba(0,0,0,0.2); padding:0.16rem;font-size: 0.24rem;color: #ffffff;line-height: 1;top:2.66rem;right:0;border-radius:  0.3rem 0 0 0.3rem ;}

  .m-rank .tr{display: flex;text-align: center;margin:0.3rem 0 0.4rem;font-weight: bold;}
  .m-rank .tr>span:first-child{font-size:0.32rem;color: #333333;}
  .m-rank .tr>span:nth-child(4n+2){font-size:0.24rem;color: #333333;padding:0 0.1rem;}
  .m-rank .tr>span:nth-child(4n+3){font-size:0.32rem;color: #f0191b;}

  .m-rank .tr.i1>span:nth-child(4n+2),.m-rank .tr.i2>span:nth-child(4n+2),.m-rank .tr.i3>span:nth-child(4n+2){color: #f0191b;}
  .m-rank .tr.i1>span:first-child{text-indent: -99rem;background: url(../assets/icon_rank.png)  center 0 no-repeat;background-size:0.54rem;}
  .m-rank .tr.i2>span:first-child{text-indent: -99rem;background: url(../assets/icon_rank.png)  center center no-repeat;background-size:0.54rem;}
  .m-rank .tr.i3>span:first-child{text-indent: -99rem;background: url(../assets/icon_rank.png)  center 100% no-repeat;background-size:0.54rem;}

  .m-rank .tr>span{flex:1;height:0.66rem;line-height: 0.66rem;vertical-align: middle;}
  .m-rank .tr .f2{flex:2;}
  .m-rank .tr .f3{flex:3;text-align: left;}
  .m-rank .tr .f3 i{margin-left:-0.4rem;}
  .m-rank .th{margin:0;}
  .m-rank .th span,.m-rank .th span i{font-size:0.32rem;color: #222e36;font-style: normal;}

  .m-rank .th .f2{text-align: center;}
  .m-rank .mine{margin:0.2rem 0;background:linear-gradient(120deg, #fff3e5 0%,#fff3e5 80%, #ffedd7 80%);border-radius: 0.1rem;padding:0.06rem 0;}
  .m-rank .mine.tr>span:first-child{color: #f0191b;}

  .m-rank .tr .ta{flex:2;text-align: right;display: inline-block;}
  .m-rank .ta i{font-size:0.26rem;color: #fff;padding:0.08rem 0.1rem;border-radius: 6px;background:linear-gradient(to bottom,#fc6c7d,#f11f22); font-weight: normal;display: inline-block;margin-top:0.1rem;}
</style>
