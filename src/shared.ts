export function cached(fn: Function) {
  var cache = Object.create(null)
  return function cachedFn(str: string) {
    var hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

export const ua = navigator.userAgent.toLowerCase()
export const testUa = (regexp: RegExp) => regexp.test(ua)

export const objProto = Object.prototype
export const hasOwn = objProto.hasOwnProperty

export const toString = Object.prototype.toString
