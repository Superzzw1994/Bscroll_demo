<template>
<div class="wrapper" ref="wrapper">
  <ul class="content">
    <li>{{msg}}</li>
    <li>{{msg}}</li>
    <li>{{msg}}</li>
    <li>{{msg}}</li>
    <li>{{msg}}</li>
  </ul>
</div>
</template>

<script>
//import Bscroll!!
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      msg: 'zzzzz'
    }
  },
  methods:{
      initScroll () {
        this.wrapperScroll = new BScroll(this.$refs.wrapper,{
            scrollX:true,
            scrollY:false
        })
      },      
      _initScroll () {
       
        this.wrapperScroll = new BScroll(this.$refs.wrapper,{
          startX:100
        })
      }
  },
  //根据钩子函数渲染原理，思考
  // 1.什么情况要在mounted内渲染，何时在created函数渲染？
  // 2.nextTick 到底干了什么？为什么要在nexttick中调用函数。
  mounted (){
    this.msg="Welcome to Your Vue.js App";
    let self = this;
    self.$nextTick(() => {          
          self.initScroll();
        })
  }
}
</script>
<style scoped>
.wrapper{
    width:100%;
    height:100px;
    overflow: hidden;
    position:relative;    
}
.content{
    width:1000px;
    height:100px;
    position: absolute;
    left:0;
    top:0;
}
.content li{
    float:left; 
    height:100px;
    width:200px;
    background-color: red;
}
</style>
