export function move (e, box, mask, img) { // 计算
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
