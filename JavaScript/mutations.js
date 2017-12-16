//Return true if the string in the first element of the array contains all
//of the letters of the string in the second element of the array.

function mutation(arr) {

  var lowArr1 = arr[0].toLowerCase();
  var lowArr2 = arr[1].toLowerCase();

  var count = 0;

  for(var i = 0 , len = lowArr2.length; i < len; i++){

    if(lowArr1.indexOf(lowArr2[i]) >= 0){
        count ++;
    }
  }


  var res = count === lowArr2.length ? true : false;

  return res;

}
