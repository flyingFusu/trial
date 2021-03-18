<template>
 <div class="m-deallist">
    <div class="header">
      <span class="active">全部</span><span>进行中</span><span>分类</span>
    </div>
    <div class="line"></div>
    <div class="list">
      <div class="item">        
        <div class="name"><i>卖出</i>交银定期支付双息平衡混合<span>2021-02-02  13:57:54</span></div>
        <div class="amount">200元</div>
      </div>
      <div class="item t1">        
        <div class="name "><i>定投</i>交银定期支付双息平衡混合<span>2021-02-02  13:57:54</span></div>
        <div class="amount">200元<span>失败</span></div>
      </div>
      <div class="item t1">        
        <div class="name "><i>定投</i>交银定期支付双息平衡混合<span>2021-02-02  13:57:54</span></div>
        <div class="amount">200元<span>失败</span></div>
      </div>
      <div class="item t1">        
        <div class="name "><i>定投</i>交银定期支付双息平衡混合<span>2021-02-02  13:57:54</span></div>
        <div class="amount">200元<span>失败</span></div>
      </div>
      <div class="item t1">        
        <div class="name "><i>定投</i>交银定期支付双息平衡混合<span>2021-02-02  13:57:54</span></div>
        <div class="amount">200元<span>失败</span></div>
      </div>
      <div class="item t1">        
        <div class="name "><i>定投</i>交银定期支付双息平衡混合<span>2021-02-02  13:57:54</span></div>
        <div class="amount">200元<span>失败</span></div>
      </div>
      <div class="item t1">        
        <div class="name "><i>定投</i>交银定期支付双息平衡混合<span>2021-02-02  13:57:54</span></div>
        <div class="amount">200元<span>失败</span></div>
      </div>
      <div class="item t1">        
        <div class="name "><i>定投</i>交银定期支付双息平衡混合<span>2021-02-02  13:57:54</span></div>
        <div class="amount">200元<span>失败</span></div>
      </div>
      <div class="item t1">        
        <div class="name "><i>定投</i>交银定期支付双息平衡混合<span>2021-02-02  13:57:54</span></div>
        <div class="amount">200元<span>失败</span></div>
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'deallist',
  data () {
    return {
      
    }
  },
  mounted:function () {
    this.id = this.$route.params.id; 
    console.log(this.id)
  },
  methods: {

  }
}
</script>
<style scoped >
	body,#app{background:#fff;}
  .m-deallist{position: relative;z-index:10; width:100%;margin:0 auto;background: #fff;height: 100%;}
  .m-deallist .line{background: #f5f5f9;height:0.24rem;border-bottom: 1px solid #e0e0e0;border-top:1px solid #e0e0e0;}
  .m-deallist .header{background:#fff;display: flex;border-bottom: 1px solid #e0e0e0;padding:0 0.6rem; }
  .m-deallist .header>span{flex: 1;font-size: 0.28rem;color: #333333;padding:0.3rem 0;text-align: center;position: relative;}
  .m-deallist .header>span.active{color: #f0191b;}
  .m-deallist .header>span.active::after{content:"";width:3em;height:2px;background: #f0191b;position: absolute;left:50%;bottom: 0;margin-left:-1.5em;}

   .m-deallist .item{text-align: center;font-size:0.26rem;color: #333333;font-weight: bold;padding: 0.3rem 0;border-bottom: 1px solid #f3f3f3;}
   .m-deallist .item .name{display: inline-block;vertical-align: middle;width:4.4rem;text-align: left;padding-left:0.66rem;position: relative;}
   .m-deallist .item .name i{font-size:0.22rem;color: #5f92dd;position: absolute;left:0;font-weight: normal;}
   .m-deallist .item.t1 .name i{color: #f0191b;}
   .m-deallist .item .name span{display: block;margin-top: 0.1rem;font-size: 0.22rem;color: #979797;font-weight: normal;}
   .m-deallist .item .amount{display: inline-block;vertical-align: middle;width:1.9rem;text-align: right;font-weight: normal;}
   .m-deallist .item .amount span{display: block;color: #f0191b;}
  
</style>