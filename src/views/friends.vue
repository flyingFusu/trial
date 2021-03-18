<template>
 <div class="m-friends"> 
    <div class="userinfo">
      <div>
        <div>已邀请好友</div>
        <span>4</span>人
      </div>     
       <div>
        <div>获得红包</div>
        <span>10.00</span>元
      </div>
    </div>

    <div class="list">
      <div class="msg"><span>仅展示已注册好友</span></div>
      <div class="items">
        <div class="item">
          <div class="img"></div>
          <div class="name">待邀请</div>
        </div>
         <div class="item">
          <div class="img"></div>
          <div class="name">待邀请</div>
        </div>
         <div class="item">
          <div class="img"></div>
          <div class="name">待邀请</div>
        </div>
         <div class="item">
          <div class="img"></div>
          <div class="name">待邀请</div>
        </div>
         <div class="item">
          <div class="img"></div>
          <div class="name">待邀请</div>
        </div>      
      </div>
       <div class="u-btns">
        <div class="u-btn">邀请好友</div>
        <div class="u-btn orange">立即提现</div>
       </div>
       <div class="txt">邀请10名好友获得XX元红包</div>
    </div>
    
    
    
 
</div>
</template>

<script>

export default {
  name: 'task',
  data () {
    return {
      
    }
  },
  mounted:function () {
    this.id = this.$route.params.id; 
    console.log(this.id);

   


  },
  methods: {
    drawPie(){
      

    }
  }
}
</script>
<style>
  #app{height:100%;}
	.m-friends{position: relative;z-index:10; width:100%;height:100%; margin:0 auto;background:linear-gradient(to bottom,#ef6667,#e64a4b); padding-bottom: 0.4rem;}
  .m-friends:after{content:"";width: 100%;height:5rem;position: absolute;left:0;top:0;background: url(../assets/bg4.jpg)  center 0 no-repeat;background-size:100%;z-index: 1;}
  .m-friends .userinfo{position: relative;z-index: 10; padding:0.8rem 0 0.5rem;margin: 0 0.3rem;}
  .m-friends .userinfo>div{display: inline-block;vertical-align: middle;width:2.2rem;font-size:0.28rem;color: #ffffff;line-height: 1;text-align: center;}
  .m-friends .userinfo>div>div{margin-bottom: 0.28rem;}
  .m-friends .userinfo>div span{display:inline-block;margin-right:0.1rem;font-size: 0.5rem;color: #fdf250; font-weight: 500;margin-top:0.1rem;}
    .m-friends .msg{margin-bottom: 0.1rem;text-align: center;}
    .m-friends .msg span{padding:2px 0.6rem;background: #fff4f4;border-radius: 0.3rem;font-size: 0.22rem;color: #fe797a;border:1px solid #fe797a;}
  .m-friends .list{position: relative;z-index: 10; background: #fff;border-radius: 0.2rem;width:7rem;margin:0 auto;padding:0.4rem 0 0.3rem;}
  .m-friends .items{position: relative;padding:0.1rem;}
  .m-friends .items:after{content:"";display: block;width:0;height: 0;clear:both;}
  .m-friends .item{width:1.7rem;float:left;text-align: center;margin:0.2rem 0;}
  .m-friends .item .img:after,.m-friends .item .img:before{content:"";position: absolute;width:0.5rem;height:0.06rem;background: #d9d9d8;border-radius: 0.1rem;left:0.4rem;top:0.6rem;}
  .m-friends .item .img:before{transform: rotate(90deg);}

  .m-friends .item .img{position: relative;z-index: 10; border:1px solid #efefef;width:1.26rem;height:1.26rem;margin:0 auto; border-radius: 100%;background: #f8f8f7;overflow: hidden;}
  .m-friends .item .img img{width:100%;}
  .m-friends .item .name{padding:0.14rem 0;}
  .m-friends .txt{font-size: 0.24rem;color: #999999;text-align: center;margin:0.2rem;}
  
  
</style>