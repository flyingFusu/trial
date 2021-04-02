<template>
  <div id="app">
   <transition name="slide-fade">
     <router-view/>
    </transition>
  </div>
</template>

<style>
html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, font, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td{border: 0;margin: 0;outline: none;text-decoration: none;padding: 0;}
*, *: after, *: before{-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);-webkit-touch-callout: none;-webkit-user-drag: none;-ms-touch-action: none;}ol, ul{margin: 0px;padding: 0px;list-style: none;}input,button,select,textarea{outline: none; font-size:1em;}textarea{resize: none}a{text-decoration: none;color: #252e33;}
html,body{   height: 100%;color:#666; width:100%; }
html { font-size:50px; }
body { font-size:14px;height: 100%;overflow: scroll;}
*{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hidden { display:none;}
i{ font-style:normal;}
#app{width:100%;max-width: 750px;margin:0 auto;}
.u-btns{text-align: center;}
.u-btn{display: block; width:6.2rem;height:0.7rem;margin:0.3rem auto 0.1rem;background:linear-gradient(to top,#f01a1d,#fc6c7d);font-size: 0.28rem;color: #ffffff;text-align: center;line-height: 0.7rem;border-radius: 0.4rem; }
.u-btn.pink{background: #ffe9eb;border:1px solid #f2262a;color: #f2262a}
.u-btn.orange{background: linear-gradient(to top,#f04d1a,#fc9d42);border:none;color: #fff}
.u-btns .u-btn{display: inline-block;vertical-align: middle;width:2.9rem;}
.u-btns .u-btn:first-child{margin-right:0.3rem;}
.u-btn.flat{background: #e64a4b;}

.m-act{width: 7.5rem;}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}

.slide-fade{
  position: fixed;left:0;right: 0;
  width: 100%;
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;top: 0;right: 0;
  position: fixed;width:100%;
  transform:translateX(-60px)  scale(0.1);
  opacity:1;
}
.slide-fade-enter-active {
  opacity: 0;transition: all 0.4s ease;
}
.slide-fade-leave-active {
  opacity: 0;
  transition: all 0.4s ease;
  transform:translateX(60px)  scale(1) ;
}

/***弹窗相关*/
.m-dlg{display: flex;-webkit-box-align: center;align-items: center;-webkit-box-pack: center;justify-content: center;position:fixed; top:0; left:0; width:100%; z-index:1600;height:100%; background: rgba(0,0,0,0.7);  }
  .m-dlg>div{position: relative; text-align: center;width:5.5rem;border-radius: 0.2rem; position: relative;transition: all 0.4s ease-in-out; background: linear-gradient(to bottom,#ffecca,#ffffff) ;}
  .m-dlg>div:after{content:"";position: absolute;width:4.16rem;height:0.86rem;background: url(assets/dlg_b.png) center center no-repeat;background-size:100%;left:0.86rem;top:-0.4rem;z-index:1;}
  .m-dlg .dlg_title{position: relative;z-index: 2; font-size: 0.46rem;color: #f01b1c;line-height: 1;padding:0.5rem 0 0.3rem;}
  .m-dlg .dlg_title:after,.m-dlg .dlg_title:before{content:"";position: absolute;}
  .m-dlg .dlg_title:after{width:3.4rem;height:1px;bottom:0;left:50%;margin-left:-1.7rem; background: linear-gradient(to right,transparent,#ffbf7f,transparent);}
  .m-dlg .dlg_title:before{width:3px;height:3px;background: #ffbf7f;border-radius: 100%;left:50%;margin-left:-1px;bottom:-1px;}

  .m-dlg .dlg_subtitle{position: relative; margin:0.4rem auto 0.2rem; font-size: 0.32rem;color: #f01b1c;text-align: center;background: linear-gradient(to right,transparent,#ffe9cc,transparent);height:0.68rem;line-height: 0.68rem;}
  .m-dlg .dlg_subtitle:after,.m-dlg .dlg_subtitle:before{content:"";position: absolute;width:80%;height:1px;left:10%; background: linear-gradient(to right,transparent,#ffbf7f,transparent);}
  .m-dlg .dlg_subtitle:after{top:0;}.m-dlg .dlg_subtitle:before{bottom: 0;}

  .m-dlg .dlg_pack{margin:0.34rem auto 0.24rem;width:4.9rem;box-sizing: border-box;padding:0.3rem 0 0.3rem 2rem;font-size: 0.26rem;color: #f01b1c;background: url(assets/packbg.png) center center no-repeat;background-size:100%;text-align: left;}
  .m-dlg .dlg_pack>div{font-size: 0.54rem;}
  .m-dlg .dlg_pack>div span{font-size: 0.34rem;}
  .m-dlg .u_txt{margin-top:0.24rem;color: #979797;font-size: 0.24rem;text-align: center;}
  .m-dlg .u_txt i{font-style: normal;color: #f01b1c;}
  .m-dlg .dlg_btn{width:3.8rem;margin:0.44rem auto 0.54rem; height:0.9rem;font-size: 0.32rem;color: #ffffff;line-height: 0.9rem;text-align: center; background: linear-gradient(to right,#f01a1c,#fc6c7c);border-radius: 0.5rem;}
  .dlg_closebtn{position: absolute;left:50%;bottom:-1rem;margin-left:-0.28rem; width:0.56rem;height:0.6rem;background:url(assets/x.png) center center no-repeat;background-size:100%; }

</style>
