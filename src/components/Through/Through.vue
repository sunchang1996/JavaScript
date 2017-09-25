<template>
  <div class="main">
    <div class="box">
      <img src="../../assets/360.jpg" alt="" srcset="">
      <div class="mask">遮罩层</div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.box{
  position: relative;
  width: 200px;
  height: 200px;
  img{
    width: 100%;
    height: 100%;
    border: none;
  }
  .mask{
    position: absolute;
    left: 200px;
    top: 0;
    width: 200px;
    height: 200px;
    background: #00b38a;
    opacity: .6;
    font-size: 24px;
    text-align: center;
    line-height: 200px;
  }
}
</style>

