var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
  array2 = [element, ...array]
  return array2
}
function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  array2 = [...array, element]
  return array2
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.shift(element)
  return array
}
function accessElementInArray(array,index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.unshift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  pop.array()
  return array
}
function removeElementFromEndOfArray(array) {
  array2 = array.slice(0, array.lenght -1)
  return array2
}
