<template>
  <div class="loading" v-if="isShow">
    <div class="bk"></div>
    <div class="cont"><img src="https://alicfhoss2.yhfund.com.cn/invitation/loading.gif" alt="loading...">{{ msg||'正在加载...' }}</div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    msg: String,
    isShow:true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.loading{ position:fixed;left:50%;top:50%;z-index:9999;}
	.loading:after{content:"";position:fixed;width:100%;height:100%;left:0;top:0;z-index:9990; background:rgba(0,0,0,0.2);}
	.loading,.loading .bk,.loading .cont{width:146px;height:146px;}
	.loading .bk,.loading .cont{position:relative;}
	.loading .bk{background-color:#000;opacity:.5;border-radius:10px;margin:-73px 0 0 -73px;z-index:0;}
	.loading .cont{margin:-146px 0 0 -73px;text-align:center;color:#f5f5f5;font-size:14px;line-height:35px;z-index:1;}
	.loading img{width:35px;height:35px;margin:30px auto;display:block;}

</style>
