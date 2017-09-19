<template>
  <div>CSS
    <div>calc测试学习</div>
    <div class="demo">
      <div class="box"></div>
    </div>
    
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.demo{
  width: 300px;
  background: #60f;
  padding: 3px 0;
}
.box{
  width: 100%;
  background: #f60;
  height: 50px;
  padding: 10px;
  border: 5px solid green;
  width: -moz-calc(100% - 40px);
  width: -webkit-calc(100% - 40px);
  width:  calc(100% - 20px); 
}

</style>
