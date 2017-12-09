/*

Return the lowest index at which a value (second argument)
should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.


*/


function getIndexToIns(arr, num) {

  // sorted arr, small to large.
  var sorted = arr.sort(function(a,b){
    return a-b;

  });

  // init list which will contain ith position of sorted list.
  var index = [];

  // loop through sorted list, and push any i vals >= num.
  for(var i=0, len=sorted.length; i<len; i++){
    if(num > sorted[i]){
      index.push(i+1);
    }else if(num === sorted[i] )
      index.push(i);
  }

  // slice all vals in list except for the last.
  var result = index.slice(-1);

  // return index
  return result[0];

}

getIndexToIns([3, 10, 5], 3);
