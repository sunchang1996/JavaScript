<template>
  <div class="wrap">
    <ul class="options">
      <router-link class="option" to="/javaScript/MagnifyingGlass" tag="li">放大镜</router-link>
      <router-link class="option" to="/javaScript/Date" tag="li">时间选择器</router-link>
      <router-link class="option" to="/javaScript/Drag" tag="li">拖拽</router-link>
      <router-link class="option" to="/javaScript/Through" tag="li">穿墙效果</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import url('../../style/list.less');
</style>

