<template>
 <div class="m-rule">
    <div class="m-part">
      <div class="title">活动规则</div>
      <div class="content">
          <div><span>1</span>本赛季活动时间：2021年X月X日-X月X日</div>
          <div><span>2</span>活动期间，用户可免费领取银华基金体验金。每位用户最多可以同时体验3只基金产品。</div>
          <div><span>3</span>用户可通过完成任务，获得财智金奖励。</div>
          <div><span>4</span>用户每成功邀请一个好友注册获得XX元红包，邀请好友最多获得XXX元红包，用户可随时提现红包，兑换成等额的微信红包。</div>
          <div>提现成功后前往银华基金微信公众号（微信号：yhfund)，通过回复“体验金”领取提现的红包，红包金额将以微信红包形式在1小时内发至微信[服务通知]</div>
          <div>微信红包发出后，用户应在24小时内点击微信[服务通知]取，逾期未领取的视为用户放弃红包，银华基金无义务再为用户补发红包。</div>
          <div><span>5</span>参与活动的新用户，第7天将根据当日收益领取财智金。例：用户7天收益为200，则可领取200财智金，最多可获得2000财智金。</div>
          <div><span>6</span>最后7天可以进行赎回加仓等操作，但是最后7天参与游戏的玩家不进行排名。</div>
          <div><span>7</span>本赛季结束后，赛季收益榜前100名用户获得财智金。</div>
          <div><span>8</span>活动期间，如发现有用户通过不正当手段（如利用黑客工具，软件作弊等）参加活动而有碍其他用户公平参加本次活动或有违反活动目的之行为，银华基金有权取消该用户获奖资格或取消、追回该用户通过参加活动所获赠品或权益。如该作弊行为给银华基金造成损失的，银华基金保留向该用户追究赔偿的权利。</div>
          <div><span>9</span>抽奖期间发生任何不可抗力事件使本抽奖活动或本次抽奖目的不能实现，银华基金因此免责。不可抗力是指不能控制、不可预见或不能避免，即使预见亦无法避免的事件，该事件使任何一方根据本规则履行其全部或部分义务已不可能。包括社会异常事件，自然灾害或政府管制行为而造成的网络关闭等非银华基金过错的行为。</div>
          <div><span>10</span>银华基金可根据前述规则自行判断，从而行使限制、中止、终止、调整活动，或变更活动奖品的权利。</div>
          <div><span>11</span>用户参与本活动即视为同意上述规则，本活动最终解释权归银华基金所有。</div>
          <div>客服电话4006783333</div>

      </div>

    </div>

</div>
</template>

<script>

export default {
  name: 'rule',
  data () {
    return {

    }
  },
  mounted: function () {
    this.id = this.$route.params.id
    console.log(this.id)

    this.drawPie()
  },
  methods: {
    drawPie () {

    }
  }
}
</script>
<style>
  #app{    display: flex;height: 100%;overflow: hidden;}
  .m-rule{position: relative;z-index:10; width:100%;margin:0 auto;background:linear-gradient(to bottom,#ef6667,#e64a4b);padding-bottom: 0.3rem;height: 100%;overflow: scroll; }
  .m-rule:after{content:"";width: 100%;height:5rem;position: absolute;left:0;top:0;background: url(../assets/bg1.jpg)  center 0 no-repeat;background-size:100%;z-index: 1;}

  .m-part{margin:0 0.3rem 0.3rem;position: relative;z-index: 100;}
  .m-part .title{padding:0.8rem 0 0.3rem;font-size: 0.36rem;color: #b71b1c;text-align: center;text-shadow: 1px 1px 1px #fff;background: url(../assets/titlebg.png) center 100% no-repeat;background-size:4.2rem; position: relative;z-index: 3;}
  .m-part .content{background: #fff;border-radius: 0.3rem;margin-top:-0.66rem;padding:0.7rem 0.26rem 0.5rem;}
  .m-rule .content>div{font-size: 0.24rem;color:#333333;padding:0.12rem 0;line-height: 1.6;}
  .m-rule .content>div span{display:inline-block;width:0.3rem;height:0.3rem;background: #fa2d3d;color:#fff;border-radius:100%;line-height: 0.3rem;margin-right:0.1rem; text-align: center;}

</style>
