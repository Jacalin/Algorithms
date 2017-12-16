// Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {

  if(arr.length < howMany){
    return [];
  }else if(howMany === 0){
    return arr;
  }else{
      return arr.splice(howMany);
  }

}
