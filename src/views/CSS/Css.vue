<template>
  <div class="CSS">
    <ul class="options">
      <router-link class="option" to="/Css/Loading" tag="li">loading</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.CSS{
  width: 200px;
  .li{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
}
.router-link-active{
  background-color:#64a2f0 ;
  color: #fff;
}

</style>
