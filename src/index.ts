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

interface SetRemOptions {
  designWidth?: number,
  maxWidth?: number
}

function setRem(options: SetRemOptions = {}) {
  const opts: SetRemOptions = Object.assign({}, setRem.defaultOptions, options)
  const $doc = document.documentElement
  const base = 100
  const designWidth = opts.designWidth
  let maxWidth = opts.maxWidth
  let clientWidth: number

  function handler() {
    clientWidth = $doc.clientWidth

    // 以宽为标准，达到最大尺寸时，不变
    if (designWidth && (maxWidth || (maxWidth = designWidth)) && (clientWidth >= maxWidth)) {
      clientWidth = maxWidth
    }

    $doc.style.fontSize = (base / designWidth) * clientWidth + 'px'
  }

  window.addEventListener('resize', debounce(handler, { immediate: true }), false)
}

setRem.defaultOptions = {
  designWidth: 750
} as SetRemOptions

export default setRem
