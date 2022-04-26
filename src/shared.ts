export function cached(fn: Function) {
  var cache = Object.create(null)
  return function cachedFn(str: string) {
    var hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}