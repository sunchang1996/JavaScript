<template>
  <div class="data-picker">
    <div class="input-wrapper">
      <input type="text" placeholder="">
      <i class="iconfont icon-arrow_down"></i>
    </div>
    <div class="panel">
      <i class="iconfont icon-arrow_left_small"></i>
      <div class="date">
        <span class="text">月</span>
        <span class="text"></span>
      </div>
      <i class="iconfont icon-arrow_right_small"></i>
    </div>
    <div class="title">
      <span class="day">日</span>
      <span class="day">一</span>
      <span class="day">二</span>
      <span class="day">三</span>
      <span class="day">四</span>
      <span class="day">五</span>
      <span class="day">六</span>
    </div>
    <ul class="days">
      <li class="data"></li>
    </ul>
    <div class="global--button blue">确定</div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>

.date-picker {
  position: relative;
  font-size: 13px;
  .input-wrapper {
    display: flex;
    align-items: center;

    height: 100%;
    padding: 12px;

    border-radius: 2px;
    background-color: #ffffff;
    border: solid 1px rgba(7, 28, 78, 0.1);
    background: white;

    font-size: inherit;
    .input {
      flex: 1;
      width: 0;

      border: none;
      outline: none;
      &:disabled {
        background: none;
      }
    }
    i.iconfont {
      flex: 0;
      color: #a6a6a6;
      transition: transform .2s;
      &.show {
        transform: rotate(180deg);
      }
    }
  }
  .panel {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    min-width: 250px;
    padding: 15px;

    color: #383838;
    font-size: 14px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);

    z-index: 999;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      color: inherit;
      font-size: inherit;
      .date {
        font-size: inherit;
        .text {
          font-size: inherit;
        }
      }
      i.iconfont {
        color: #a6a6a6;
        cursor: pointer;
      }
    }
    .title {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;

      color: inherit;
      font-size: inherit;
      .day {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 28px;
        height: 28px;
        color: inherit;
        font-size: inherit;
      }
    }
    .days {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 16px;

      font-size: inherit;
      .date {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 14.2857%;

        font-size: inherit;
        border-radius: 2px;
        cursor: pointer;
        &::after {
          content: '';
          display: block;
          padding-top: 100%;
        }
        &.inactive {
          color: #a6a6a6;
        }
        &.active {
          color: white;
          background-color: #3da8f5;
        }
      }
    }
    .global--button {
      height: 40px;
      line-height: 40px;
      font-size: inherit;
      background-color: #3da8f5;
    }
  }
}
</style>

