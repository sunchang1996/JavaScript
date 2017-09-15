<template>
  <div class="glass">
    <h1 class="fun">放大镜 功能</h1>
    <div class="wap">
      <div class="box" id="box">
        <img src="../assets/iphone.jpg" alt="" srcset="">
        <div class="mask" id="mask"></div>
      </div>
      <div class="big" id="show">
        <img src="../assets/iphone_big.jpg" alt="" srcset="">
      </div>
    </div>
  </div>
</template>
<script>
  // const box = document.getElementById('box')
  // const mask = document.getElementById('mask')
  // const show = document.getElementById('show')
  // const img = show.getElementsByTagName('img')[0]
  export default {
  }
</script>
<style lang="less" scoped>
.glass{
  margin-top: 20px;
  text-align: center;
  .fun{
    font-size: 18px;
  }
  .wap{
    width: 100%;
    .box{
      width: 350px;
      height: 350px;
      box-sizing: 3px 3px 3px 3px violet;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        border: none;
        vertical-align: top;
      }
      .mask{
        position: absolute;
        left: 0;
        top:0;
        display: none;
        width:175px;
        height: 175px;
        background-color: #ccc;
        opacity: 0.5;
        cursor: move;
      }
    }
    .big{
      width: 350px;
      height: 350px;
      position: absolute;
      top:40px;
      left: 380px;
      overflow: hidden;
      // display: none;
      img{
        width: 200%;
        height: 200%;
        position: absolute;
      }
    }
  }
}
</style>
