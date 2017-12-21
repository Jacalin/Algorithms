
function diffArray(arr1, arr2) {

  var newArray = [];
  var concatArr = arr1.concat(arr2);

  if(arr1.length > arr2.length){

    newArray = arr1.filter(function(i){
      //console.log(i);
      if (arr2.indexOf(i) === -1) {
        return i;
      }
    });

    if (newArray.length === arr1.length){
      newArray = concatArr;
    }

  }else if(arr2.length > arr1.length){

    newArray = arr2.filter(function(x){
      if (arr1.indexOf(x) === -1) {
        //console.log(x);
        return x;
      }

    if (newArray.length === arr2.length){
      newArray = concatArr;
    }


    });
  }else if (arr1.length === arr2.length){

    newArray = concatArr.filter(function(j){

      if (arr1.indexOf(j) === -1) {
        return j;
      }else if ( arr2.indexOf(j) === -1){
        return j;
      }

    });

  }else{
    return;
  }

  return newArray;

}

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
