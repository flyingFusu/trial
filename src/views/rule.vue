<template>
 <div class="m-rule">
  
    <div class="m-part">
      <div class="title">活动规则</div>
      <div class="content">
          <div><span>1</span>本赛季活动时间：2021年X月X日-X月X日</div>
          
              

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
  mounted:function () {
    this.id = this.$route.params.id; 
    console.log(this.id);

    this.drawPie()


  },
  methods: {
    drawPie(){

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