<template>
  <div class="glass">
    <h1 class="fun">放大镜 功能</h1>
    <div class="wap">
      <div class="box" id="box">
        <img src="../../assets/iphone.jpg">
        <div class="mask" id="mask"></div>
      </div>
      <div class="big" id="show">
        <img src="../../assets/iphone_big.jpg">
      </div>
    </div>
  </div>
</template>
<script>

export default {
  mounted () {
    this.magnifying()
  },
  methods: {
    magnifying () {
      const box = document.getElementById('box')
      const mask = document.getElementById('mask')
      const show = document.getElementById('show')
      const img = show.getElementsByTagName('img')[0]
      function move (e) { // 计算
        let left = e.clientX - box.offsetLeft - (mask.offsetWidth / 2)
        let top = e.clientY - box.offsetTop - mask.offsetHeight / 2
        const minL = 0
        const minT = 0
        const maxL = box.offsetWidth - mask.offsetWidth
        const maxT = box.offsetHeight - mask.offsetHeight
        left = left < minL ? minL : (left > maxL) ? maxL : left
        top = top < minT ? minT : (top > maxT) ? maxT : top
        mask.style.left = left + 'px'
        mask.style.top = top + 'px'
        img.style.left = -2 * left + 'px'
        img.style.top = -2 * top + 'px'
      }
      box.onmouseenter = function (e) {
        e = e || window.event
        mask.style.display = 'block'
        show.style.display = 'block'
        move(e)
      }
      box.onmousemove = function (e) {
        e = e || window.event
        move(e)
      }
      box.onmouseleave = function (e) {
        mask.style.display = 'none'
        show.style.display = 'none'
        move(e)
      }
    }
  }
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
      top:140px;
      left: 580px;
      overflow: hidden;
      display: none;
      img{
        width: 200%;
        height: 200%;
        position: absolute;
      }
    }
  }
}
</style>
