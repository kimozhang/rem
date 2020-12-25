import * as Rem from '../src'

const options = {
  base: 100,
  designWidth: 750
}

window.addEventListener('resize', handler)

handler()

Rem.init(options)

function $(selector: string) {
  return document.querySelector(selector)
}

function handler() {
  const $doc = document.documentElement
  const $wrapper = $('#wrapper') as HTMLElement
  const clientWidth = $doc.clientWidth

  $wrapper.innerHTML = `
    designWidth: ${ options.designWidth }px <br>
    base: ${ options.base }px <br>
    1rem: ${ options.base / options.designWidth * clientWidth }px
  `
}
