function recursiveBinarySearch(arr,target){
  let lowerBound = arr[0]
  let upperBound = arr.slice(-1)[0]
  let middle = arr[Math.round(arr.length / 2)]
  if(middle > target) {
    upperBound = middle
    let updatedArray = arr.slice(lowerBound-1,upperBound-1)
    return recursiveBinarySearch(updatedArray,target)
  }else if(middle < target){
    lowerBound = middle
    let updatedArray = arr.slice(lowerBound-1,upperBound)
    return recursiveBinarySearch(updatedArray,target)
  }else{
    return target
  }
}
