export default function through (box, shade, width) {
  box.onmouseenter = function (e) {
    const x = e.clientX - box.offsetLeft - box.offsetWidth / 2
    const y = box.offsetTop + box.offsetHeight / 2 - e.clientY
    const res = getDirection(x, y)
    switch (res) {
      case 0:
        shade.style.left = `${-width}px`
        shade.style.top = 0
        break
      case 1:
        shade.style.left = 0
        shade.style.top = `${width}px`
        break
      case 2:
        shade.style.left = `${width}px`
        shade.style.top = 0
        break
      case 3:
        shade.style.left = 0
        shade.style.top = `${-width}px`
        break
    }
  }
}

function getDirection (x, y) {
  const radian = Math.atan2(y, x) // 根据坐标返回一个对应坐标点的弧度值
  const ang = 180 / Math.PI * radian // 根据弧度值运算成角度值
  const res = Math.round((ang + 180) / 90) % 4
  // 角度区间是[-180,180], 在元素有的基础上加上180后[0, 360],然后除以90，区间就是[0,4]，然后四舍五入后，%4 变成[0,1,2,3]
  return res
}
