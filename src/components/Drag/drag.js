
export default function Drag (ele, L, T) {
  this.ele = ele
  this.l = null // 当鼠标按下的时候才会赋值
  this.t = null
  this.minL = 0
  this.minT = 0
  this.maxL = L || (document.documentElement.clientWidth || document.body.clientWidth) - this.ele.offsetWidth
  this.maxT = T || (document.documentElement.clientHeight || document.body.clientHeight) - this.ele.offsetHeight
  var that = this
  this.DOWN = function (e) { // this.down 中的this要看这个方法在哪执行的时候this是谁
    that.down(e)
  }
  this.MOVE = function (e) {
    e = e || window.event
    that.move(e)
  }
  this.UP = function (e) {
    e = e || window.event
    that.up(e)
  }
  this.ele.onmousedown = this.DOWN
}
Drag.prototype.down = function (e) { // mousedown 事件绑定
  e = e || window.event
  console.log('this.l', this.l)
  this.l = e.clientX - this.ele.offsetLeft
  this.t = e.clientY - this.ele.offsetTop
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

  var l = e.clientX - this.l
  var t = e.clientY - this.t
  l = l < this.minL ? this.minL : l > this.maxL ? this.maxL : l
  t = t < this.minT ? this.minT : t > this.maxT ? this.maxT : t

  this.ele.style.left = `${l}px`
  this.ele.style.top = `${t}px`
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

