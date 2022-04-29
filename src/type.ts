import { cached } from './shared'

var objProto = Object.prototype
var hasOwn = objProto.hasOwnProperty

const _toString = Object.prototype.toString
const typeFactory = cached(function (originType: string) {
  return (value: any): boolean => {
    return _toString.call(value) === `[object ${originType}]`
  }
})

export function isNumber(value: any) {
  return typeFactory('Number')(value)
}

export function isString(value: any) {
  return typeFactory('String')(value)
}

export function isBoolean(value: any) {
  return typeFactory('Boolean')(value)
}

export function isNull(value: any) {
  return typeFactory('Null')(value)
}

export function isSymbol(value: any) {
  return typeFactory('Symbol')(value)
}

export function isObject(value: any) {
  return typeFactory('Object')(value)
}

export function isArray(value: any) {
  return typeFactory('Array')(value)
}

export function isArrayLike(value: any) {
  return (
    !!value &&
    !isBoolean(value) &&
    hasOwn.call(value, 'length') &&
    isFinite(value.length) &&
    isNumber(value.length) &&
    value.length >= 0
  )
}

export function isArguments(value: any) {
  return typeFactory('Arguments')(value)
}

export function isDate(value: any) {
  return typeFactory('Date')(value)
}

// 是否是一个错误对象
export function isError(value: any) {
  return typeFactory('Error')(value)
}

export function isFunction(value: any) {
  var isAlert = typeof window !== 'undefined' && value === window.alert
  if (isAlert) {
    return true
  }
  return (
    typeFactory('Function')(value) ||
    typeFactory('GeneratorFunction')(value) ||
    typeFactory('AsyncFunction')(value)
  )
}

export function isEmpty(value: any) {
  if (isArray(value) || isArguments(value) || isString(value)) {
    return value.length === 0
  }

  if (isObject(value)) {
    let key
    for (key in value) {
      if (hasOwn.call(value, key)) {
        return false
      }
    }
    return true
  }

  return !value
}
