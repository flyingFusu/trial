<template>
 <div class="m-tas">
  
    <div class="userinfo">
      <div>1<span>本赛季排名</span></div>
      <div><img src="../assets/user.png"/><span>184****5297</span></div>
      <div>+5.13%<span>本赛季收益率</span></div>
    </div>
    <div class="pie">
      <div class="names">
        <div><i></i>富裕主题混合<span>40%</span></div>
        <div><i></i>富裕主题混合<span>40%</span></div>
        <div><i></i>富裕主题混合<span>40%</span></div>
      </div>
      <div class="sv"><canvas id="canvas"></canvas></div>
    </div>
    
    <div class="list">
      <div class="title">持仓详情<router-link :to="{name:'deallist',params:{}}" class="his">调仓记录>></router-link></div>
      <div class="item">
        <div class="name">富裕主题混合</div>
        <div class="amount">体验金额<span>500.0</span></div>
        <div class="got">累计收益（元）<span>40.0</span></div>
        <router-link :to="{name:'buy',params:{id:1}}" class="btn">买一笔</router-link>
      </div>
      <div class="item">
        <div class="name">富裕主题混合</div>
        <div class="amount">体验金额<span>500.0</span></div>
        <div class="got">累计收益（元）<span>40.0</span></div>
        
         <router-link :to="{name:'buy',params:{id:1}}" class="btn">买一笔</router-link>
      </div>

    </div>
 
</div>
</template>

<script>

export default {
  name: 'tas',
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
      let cans=document.getElementById("canvas"); //获取画布
      let ctx=cans.getContext("2d"); 
      var w = 0,x=0,y=0;  //width:1.9rem;height:1.9rem;的画布
     // var progress=0.1;
      w = document.body.clientWidth || document.documentElement.clientWidth;  

      x = y = (w / 7.5 * 1.9) / 2;
      
      var nums = [30,10,20,40];
      var colors = ["#fa9e3b","#8c98f6","#fbd375","#f73e31"];
      var start = 0;
      var end = 0;
      ctx.translate(x,y);
      //ctx.rotate(-Math.PI/2);
      //绘制圆饼
      console.log("x"+x+"__y:"+y);
     
      for (var i = 0;i < nums.length; i++){
          ctx.beginPath();
          ctx.moveTo(0,0);
          end += nums[i]/100*(2*Math.PI);//终止角度
          ctx.arc(0,0,x,start,end);

          ctx.fillStyle=(colors[i]);
          
          ctx.fill(); 
          ctx.closePath();
          start += nums[i]/100*(2*Math.PI);//起始角度
          
      }
       ctx.globalCompositeOperation = "destination-out";
       ctx.beginPath();
       ctx.moveTo(0,0);
       ctx.arc(0,0,x/2,0,2*Math.PI);
       ctx.fill(); 


       /*
      arc(x, y, radius, startAngle, endAngle, anticlockwise)
      一个完整的圆的弧度是2π，所以2π rad = 360°(deg)
      该方法有五个参数： x,y为绘制圆弧所在圆上的圆心坐标。radius为半径。startAngle以及engAngle参数用弧度定义了开始以及结束的弧度。这些都是以x轴为基准。参数anticlockwise 为一个布尔值。为true时，是逆时针方向，否则顺时针方向。
      */
      return;

    }
  }
}
</script>
<style>
	body,#app{height:100%;}
  .m-tas{position: relative;z-index:10; width:100%;margin:0 auto;background:linear-gradient(to bottom,#e84f50,#f67575,#e64a4b);height:100%;}
  .m-tas:after{content:"";position: absolute;z-index: 1;left:0;top:0; width:100%;height:3rem; background: url(../assets/bg3.jpg)  center 0 no-repeat;background-size:100%;}
  .m-tas .userinfo{position: relative;z-index: 3; text-align: center;padding:0.4rem 0 0.3rem;}
  .m-tas .userinfo>div{display: inline-block;vertical-align: middle;width:2.2rem;}
  .m-tas .userinfo>div{font-size:0.42rem;color: #ffffff;line-height: 1;}
  .m-tas .userinfo>div span{display: block;font-size: 0.26rem;font-weight: 200;margin-top:0.1rem;}
  .m-tas .userinfo img{width:1rem;height:1rem;border-radius: 100%;border:1px solid #fff;}
  .m-tas .pie{padding:0.6rem 0 0.6rem 0.4rem;width:6.9rem;margin:0.2rem auto;box-sizing: border-box;background: #fff;border-radius: 0.3rem;}
  .m-tas .pie .names{width:3.8rem;display: inline-block;vertical-align: middle;font-size:0.28rem;color: #666666;}
  .m-tas .pie .names div{margin:0.2rem 0;}
  .m-tas .pie .names i{width:0.2rem;height:0.2rem;border-radius: 100%;display: inline-block;vertical-align: middle;margin-right:0.1rem;background: red;}
  .m-tas .pie .names span{font-size:0.32rem;color: #333333;display: inline-block;vertical-align: middle;margin:0 0.1rem;font-weight: bold;}
  .m-tas .pie .sv{width:1.9rem;height:1.9rem;display: inline-block;vertical-align: middle;}
  .m-tas .pie .sv canvas{}
  .m-tas .list{padding:0.38rem ;width:6.9rem;margin:0.2rem auto;box-sizing: border-box;background: #fff;border-radius: 0.3rem;}
  .m-tas .list .title{font-size:0.32rem;color: #f8354c;font-weight: bold;background: url(../assets/icon_detail.png)  0 center  no-repeat;background-size:0.3rem;padding-left:0.5rem;}
  .m-tas .list .title .his{float: right;font-size:0.22rem;color: #999999;display: inline-block;margin-right:0.2rem;margin-top:0.1rem;}

  .m-tas .item{margin:0.24rem auto 0; padding:0.26rem 0 0.26rem 0.26rem;background: #fff8f9;border:1px solid #f8354c;border-radius: 0.1rem;}
  .m-tas .item .name{font-size:0.3rem;color: #333333;text-align: left;}
  .m-tas .item .amount,.m-tas .item .got{padding:0.34rem 0 0.1rem;text-align: left;display: inline-block;vertical-align: middle;width:2rem;font-size:0.24rem;color: #999999;}
  .m-tas .item .amount span,.m-tas .item .got span{display: block; font-size:0.32rem;color: #181818;margin-top:0.12rem;}
  .m-tas .item .btn{display: inline-block;vertical-align: middle;width:1.4rem;font-size:0.28rem;color: #fff;padding:0.12rem;border-radius: 0.34rem;background:linear-gradient(to bottom,#fc6c7d,#f11f22);text-align: center; }
  
</style>