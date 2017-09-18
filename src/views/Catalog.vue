<template>
  <div class="wrapper">
    <div class="header">
      <h1 class="name">Hi，I am sunchang</h1>
      <!-- <h2 class="intro">欢迎来到我的个人小网站，我将这里分享自己的学习经历</h2> -->
    </div>
    <nav class="nav">
      <ul>
        <li class="js">
          <router-link to="/javascript">javascript</router-link>
        </li>
        <li class="html">
          <router-link to="/Html">html</router-link>
        </li>
        <li class="css">
          <router-link to="/Css">css</router-link>
        </li>
        <li class="git">
          <router-link to="/Git">git</router-link>
        </li>
         <li class="mobile">
          <router-link to="/Mobile">移动端</router-link>
        </li>
         <li class="vue">
          <router-link to="/Vues">vue</router-link>
        </li>
      </ul>
    </nav>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.wrapper{
  height: 100%;
  margin-left: 50px;
  margin-right: 50px;
  background-color: #fff;
  .header{
    width: 100%;
    height: 50px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    .name{
      font-size: 18px;
      font-weight: 500;
    }
  }
  .nav{
    width: 100%;
    height: 30px;
    ul li{
      display: inline-block;
      width: 100px;
      text-align: center;
      background-color: #ccc;
      height: 30px;
      line-height: 30px;
      &:hover{
        background-color: blue;
      }
      & > a {
        color: #fff; 
        display: inline-block;
        width: 100%;
        height: 100%;       
      }
    }
  }
}
</style>

