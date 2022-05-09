import { toString } from "./shared"
import { isActualNaN, isInfinite, isNumber } from "./type"

export function isEqual(value: any, other: any) {
  if (value === other) {
    return true
  }

  var type = toString.call(value)
  var key

  if (type !== toString.call(other)) {
    return false
  }

  if (type === "[object Object]") {
    for (key in value) {
      if (!isEqual(value[key], other[key]) || !(key in other)) {
        return false
      }
    }
    for (key in other) {
      if (!isEqual(value[key], other[key]) || !(key in value)) {
        return false
      }
    }
    return true
  }

  if (type === "[object Array]") {
    key = value.length
    if (key !== other.length) {
      return false
    }
    while (key--) {
      if (!isEqual(value[key], other[key])) {
        return false
      }
    }
    return true
  }

  if (type === "[object Function]") {
    return value.prototype === other.prototype
  }

  if (type === "[object Date]") {
    return value.getTime() === other.getTime()
  }

  return false
}

// lt （less than）               小于
// le （less than or equal to）   小于等于
// eq （equal to）                等于
// ne （not equal to）            不等于
// ge （greater than or equal to）大于等于
// gt （greater than）            大于

// 大于等于
export function isGe(value: number, other: number) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError("NaN is not a valid value")
  }
  return !isInfinite(value) && !isInfinite(other) && value >= other
}
// 大于
export function isGt(value: number, other: number) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError("NaN is not a valid value")
  }
  return !isInfinite(value) && !isInfinite(other) && value > other
}

// 小于等于
export function isLe(value: number, other: number) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError("NaN is not a valid value")
  }
  return !isInfinite(value) && !isInfinite(other) && value <= other
}

// 小于
export function isLt(value: number, other: number) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError("NaN is not a valid value")
  }
  return !isInfinite(value) && !isInfinite(other) && value < other
}

// 是否在范围内
export function isWithin(value: number, start: number, finish: number) {
  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
    throw new TypeError("NaN is not a valid value")
  } else if (!isNumber(value) || !isNumber(start) || !isNumber(finish)) {
    throw new TypeError("all arguments must be numbers")
  }
  var isAnyInfinite =
    isInfinite(value) || isInfinite(start) || isInfinite(finish)
  return isAnyInfinite || (value >= start && value <= finish)
}
