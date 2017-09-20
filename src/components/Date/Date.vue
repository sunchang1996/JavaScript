<template>
  <div class="date-picker">
    <div class="input-wrapper" @click.stop = "showPanel = !showPanel" :style = "{width:width}">
      <input type="text" :placeholder="placeholder" disabled v-model="date" class="input">
      <i class="iconfont icon-arrow_down" :class="{show: showPanel}"></i>
    </div>
    <div class="panel" v-if="showPanel" :style="{width:width}">
      <div class="header">
        <i class="iconfont icon-arrow_left_small" @click.stop = "changeCurrentMonth(currentMonth - 1)"></i>
        <div class="date">
          <span class="text">{{currentMonth}}月</span>
          <span class="text">{{currentYear}}</span>
        </div>
        <i class="iconfont icon-arrow_right_small" @click.stop="changeCurrentMonth(currentMonth + 1)"></i>
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
        <li class="date" v-for="(date, index) in dateList" :key="index" @click="onSelectDate(date)"
        :class="{inactive: date.month !== currentMonth, active: date.year === currentYear && date.month === currentMonth && date.day === currentDay}">
        {{date.day}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
const TOTAL_LENGTH = 42

export default {
  name: 'data',
  props: {
    placeholder: String,
    width: {
      type: String,
      default: '300px'
    }
    // date: {
    //   type: [Date, Number, String]
    // }
  },
  data () {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      currentDay: new Date().getDate(),
      showPanel: false,
      date: ''
    }
  },
  computed: {
    currentDate () { // 当前时间的毫秒数
      return new Date(this.currentYear, this.currentMonth, this.currentDay).getTime()
    },
    formattedDate () { // 格式化今天的日期时间
      return `${this.currentYear} - ${this.currentMonth} - ${this.currentDay}`
    },
    currentMonthLength () { // 这个月的总天数
      return new Date(this.currentYear, this.currentMonth, 0).getDate()
    },
    currentMonthDateList () { // 遍历这个月的天数
      return [...new Array(this.currentMonthLength)]
      .map((value, index) => ({
        year: this.currentYear,
        month: this.currentMonth,
        day: index + 1
      }))
    },
    currentMonthStartDay () {
      return new Date(this.currentYear, this.currentMonth - 1, 1).getDay()
    },
    previousMonthDateList () {
      const previousMouthLength = new Date(this.currentYear, this.currentMonth - 1, 0).getDate() // 上个月的天数
      const year = this.currentMouth <= 0 ? this.currentYear - 1 : this.currentYear// 如果月数小于等于0 年数-1
      const month = this.currentMouth <= 0 ? 12 : this.currentMonth - 1 // 如果月数小于等于0 就会到第十二月
      return [...new Array(previousMouthLength)].map((value, index) => ({
        year,
        month,
        day: index + 1
      }))
      .reverse()
      .slice(0, this.currentMonthStartDay).reverse()
    },
    nextMonthDateList () {
      const length = TOTAL_LENGTH - this.currentMonthLength - this.currentMonthStartDay
      const year = this.currentMonth + 1 >= 12 ? this.currentYear + 1 : this.currentYear // 月份+1 大于等于12 年就加1
      const month = this.currentMonth + 1 >= 12 ? 1 : this.currentMonth + 1
      return [...new Array(length)].map((value, index) => ({
        year,
        month,
        day: index + 1
      }))
    },
    dateList () {
      return [
        ...this.previousMonthDateList,
        ...this.currentMonthDateList,
        ...this.nextMonthDateList
      ]
    }
  },
  methods: {
    changeCurrentMonth (month) {
      this.currentMonth = month
    },
    onSelectDate ({year, month, day}) {
      this.currentYear = year
      this.currentMonth = month
      this.currentDay = day
      this.date = this.formattedDate
      this.$emit('update:data', this.formattedDate)
      this.showPanel = false
    }
  },
  watch: {
    currentMonth (month) {
      if (month > 12) {
        this.currentMonth = 1
        this.currentYear = this.currentYear + 1
      }
      if (month < 1) {
        this.currentYear = this.currentYear - 1
        this.currentMonth = 12
      }
    }
  }
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
    padding: 6px;
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

