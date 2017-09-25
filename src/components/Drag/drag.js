export default function Drag (ele, left, top) {
  this.ele = ele
  this.left = null // 当鼠标按下的时候才会赋值
  this.top = null
  this.minL = 0
  this.minT = 0
  this.maxL = left || (document.documentElement.clientWidth || document.body.clientWidth) - this.ele.offsetWidth
  this.maxT = top || (document.documentElement.clientHeight || document.body.clientHeight) - this.ele.offsetHeight
  this.DOWN = (e) => this.down(e)
  this.MOVE = (e) => this.move(e)
  this.UP = (e) => this.up(e)
  this.ele.onmousedown = this.DOWN
}
Drag.prototype.down = function (e) { // mousedown 事件绑定
  e = e || window.event
  this.left = e.clientX - this.ele.offsetLeft
  this.top = e.clientY - this.ele.offsetTop
  if (this.ele.setCapture) {
    this.ele.setCapture()
    this.ele.onmousemove = this.MOVE
    this.ele.onmouseup = this.UP
  } else {
    document.onmousemove = this.MOVE
    document.onmouseup = this.UP
  }
}
Drag.prototype.move = function (e) { // mousemove 事件绑定
  e = e || window.event

  var left = e.clientX - this.left
  var top = e.clientY - this.top
  left = left < this.minL ? this.minL : left > this.maxL ? this.maxL : left
  top = top < this.minT ? this.minT : top > this.maxT ? this.maxT : top

  this.ele.style.left = `${left}px`
  this.ele.style.top = `${top}px`
  e.preventDefault()
}
Drag.prototype.up = function (e) { // mouseup 事件绑定
  if (this.releaseCapture) {
    this.releaseCapture()
    this.onmousemove = null
    this.onmouseup = null
  } else {
    document.onmousemove = null
    document.onmouseup = null
  }
}

