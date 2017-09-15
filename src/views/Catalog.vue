<template>
  <div class="wrapper">
    <div class="header">
      <h1 class="name">Hi，I am sunchang</h1>
      <!-- <h2 class="intro">欢迎来到我的个人小网站，我将这里分享自己的学习经历</h2> -->
    </div>
    <main>
      <ul>
        <li class="">
          <router-link to="/MagnifyingGlass">放大镜</router-link>
        </li>
      </ul>
    </main>
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
}
</style>

