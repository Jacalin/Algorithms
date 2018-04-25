function recursiveMap(arr,fn){
  if (arr.length === 0) return arr;
  return [fn(arr[0]), ...recursiveMap(arr.slice(1),fn)]
}
