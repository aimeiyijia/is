// 系统
import{ testUa } from './shared'

export function isAndriod(){
  return testUa(/android|adr/g)
}
export function isIOS(){
  return testUa(/ios|iphone|ipad|ipod|iwatch/g)
}
export function isWindow(){
  testUa(/windows|win32|win64|wow32|wow64/g)
}
export function isLiunx(){
  testUa(/x11/g)
}
export function isMac(){
  testUa(/macintosh|macintel/g)
}