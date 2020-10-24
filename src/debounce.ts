interface DebounceOptions {
  interval?: number,
  immediate?: boolean // whether to excute immediately
}

const DEFAULT_OPTIONS = {
  interval: 100 / 60,
  immediate: true
}

export default function debounce(
  fn: Function,
  options: DebounceOptions = {}
) {
  const opts: DebounceOptions = Object.assign({}, DEFAULT_OPTIONS, options)
  let timer: any

  if (opts.immediate) {
    fn()
  }

  return function(this: any, ...args: any[]) {
    const context = this

    if (timer) {
      clearTimeout(timer)
    }
    
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, opts.interval)
  }
}
