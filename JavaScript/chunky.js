//Write a function that splits an array (first argument)
//into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {

  var newList = [];


  for (var i = 0 ; i < arr.length ; i += size){
    newList.push(arr.slice(i,i+size));
    }

  return newList;
}
