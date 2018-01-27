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
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
      //初始化 better-scroll ,this.refs(2.0新增)
      initScroll () {
        //console.log(this.refs);
        this.wrapperScroll = new BScroll(this.$refs.wrapper,{
          
        })
      },
      //调用_initScroll函数是什么效果？
      _initScroll () {
        //console.log(this.refs);
        this.wrapperScroll = new BScroll(this.$refs.wrapper,{
          startY:100,
          // scrollY:false 传入这个值有何效果
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
  position: absolute;
  width:100%;
  bottom: 100px;
  top:50px;
  overflow: hidden;
}
.content{
  width:100%;
}
.content li{
  width:100%;
  height: 300px;
  background-color: rgb(156, 119, 119);
}
</style>
