/**
 * 通过 rem 使页面和设计图等比例缩放
 * 
 * 实现逻辑
 * 1. 将基数设置成 100，通过公式 rem / clientWidth = 100 / 设计图宽，得出 rem.
 * 2. css 中的值就是 实际的长度 / 100，加上单位 rem. 如：
 *  div { width: 1rem } 1rem = (设计图的实际尺寸 / 100)rem.
 *  通过将基数设置成 100，可以方便的计算出 css 的大小
 * 
 */

import debounce from './debounce'

interface RemOptions {
  designWidth?: number,
  maxWidth?: number
}

const DEFAULT_OPTIONS = {
  designWidth: 750
} 

function init(options: RemOptions = {}) {
  const opts: RemOptions = Object.assign({}, DEFAULT_OPTIONS, options)
  const $doc = document.documentElement
  const designWidth = opts.designWidth
  const base = 100
  let maxWidth = opts.maxWidth
  let clientWidth: number

  function handler() {
    clientWidth = $doc.clientWidth

    // 以宽为标准，达到最大尺寸时，不变
    if (maxWidth && (clientWidth >= maxWidth)) {
      clientWidth = maxWidth
    }

    $doc.style.fontSize = (base / designWidth) * clientWidth + 'px'
  }

  window.addEventListener('resize', debounce(handler), false)
}

const Rem = {
  init
}

export default Rem
