interface DebounceOptions {
  interval?: number,
  immediate?: boolean // whether to excute immediately
}

export default function debounce(
  fn: Function,
  options: DebounceOptions = {}
) {
  const opts: DebounceOptions = Object.assign({}, debounce.defaultOptions, options)
  let timer: any

  return function(...args: any[]) {
    const context = this

    if (opts.immediate) {
      const callNow = !timer
      if (callNow) {
        fn.apply(context, args)
      }
      
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
      }, opts.interval)
      
    } else {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, opts.interval)
    }
  }
}

debounce.defaultOptions = {
  interval: 50,
  immediate: false
} as DebounceOptions
