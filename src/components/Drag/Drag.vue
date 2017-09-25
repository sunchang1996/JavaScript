<template>
  <div style="position: relative">
    <div class="box" ref="box">
      <img src="../../assets/iphone.jpg" alt="">
    </div>
  </div>
</template>
<script>
import Dragjs from './drag.js'
export default {
  mounted () {
    this.drag()
  },
  methods: {
    drag () {
      const box = this.$refs.box
      console.log('box', box)
      this.drags = new Dragjs(box)
    }
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 300px;
  height: 300px;
  position: relative;
  left: 0;
  top: 0;
  border: 1px solid red;
}
.box img{
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>
