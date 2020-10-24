/**
 * implemention logic:
 * 1. formula: rem / clientWidth = base / designWidth
 * 2. When base is set to 100, you can get the CSS value in rem very simply, 
 *    which is calculated by value of design / 100。 
 * 
 * E.g: there is a div element which is 75px in design, 
 * then the actual size is 0.75rem by 75 / 100
 * 
 */

import debounce from './debounce'

interface RemOptions {
  base?: number,
  designWidth?: number,
  maxWidth?: number
}

const DEFAULT_OPTIONS = {
  base: 100,
  designWidth: 750
} 

function init(options: RemOptions = {}) {
  const { base, designWidth, maxWidth } = Object.assign({}, DEFAULT_OPTIONS, options)
  const $doc = document.documentElement
  let clientWidth: number

  function handler() {
    clientWidth = $doc.clientWidth

    // keep the width of client constant when reaching maxWidth
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
