<template>
 <div class="m-ranklist">
    <div class="title">赛季排名</div>
    <div v-for="item in ranklist" class="item">
      <router-link :to="{name:'rank',params:{id:item.id}}" >
        <div class="name">
         {{item.name}}赛季<span>{{item.range}}</span>
        </div>
        <div class="btn">点击查看</div>
      </router-link>
    </div>
     
    
 
</div>
</template>

<script>

export default {
  name: 'ranklist',
  data () {
    return {
      ranklist:[]
    }
  },
  mounted:function () {
    this.ranklist=[{id:1,"name":" 五月","range":"2021.05.10-2021.6.10"},{id:2,"name":" 六月","range":"2021.06.10-2021.07.10"}];
  },
  methods: {

  }
}
</script>
<style>
	body,#app{background: #fff;}
	.m-ranklist{width:100%;}
  body,#app{background:linear-gradient(to bottom,#ef6667,#e64a4b);}
  .m-ranklist{position: relative;z-index:10; width:100%;margin:0 auto; background: url(../assets/bg2.jpg)  center 0 no-repeat;background-size:100%;}
  .m-ranklist .title{padding:1.4rem 0 0.8rem 0.4rem;font-size: 0.74rem;color: #ffffff;line-height: 1;}
  .m-ranklist .item{margin:0.28rem auto;width:7rem;box-sizing: border-box;padding: 0.5rem 0 0.5rem 0.4rem;background: #fff;border-radius: 0.2rem;}
 .m-ranklist .item .name{display: inline-block;vertical-align: middle;width:4.4rem;font-size:0.36rem;color:#333333;}
 .m-ranklist .item .name span{display: block;font-size:0.28rem;color: #999999;margin-top: 0.14rem;}
 .m-ranklist .item .btn{display: inline-block;vertical-align: middle;width:1.5rem;font-size:0.28rem;color: #fff;padding:0.14rem;border-radius: 6px;background:linear-gradient(to bottom,#fc6c7d,#f11f22);text-align: center; }
</style>