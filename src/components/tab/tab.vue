<template>
<div>
  <ul class="box">
      <li>
          <router-link to="/">上下滚动</router-link>
      </li>
      <li>
          <router-link to="/slide">左右滚动</router-link>
      </li>
      <li>
          <router-link to="/click">点击</router-link>
      </li>
  </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.box{
    display: inline-block;
    font-size: 0;
}
.box li {
    display: inline-block;
    font-size: 12px;
    margin-right: 6px;
    line-height: 36px;
}
</style>
