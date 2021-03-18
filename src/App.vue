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
  position: fixed;
  transform:translateX(-10px)  scale(0.1);
  opacity:1;
}
.slide-fade-enter-active { 
  opacity: 0;transition: all 0.3s ease; 
}
.slide-fade-leave-active {
  opacity: 0;
  transition: all 0.3s ease; 
  transform:translateX(10px)  scale(1) ;
}





</style>
