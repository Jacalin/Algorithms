/*

You will be provided with an initial array
(the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array that
are of the same value as these arguments.

*/


function destroyer(arr) {


  // convert arguments into an array
  var args = Array.from(arguments);

  // first list contains array, second contains all other passed args.
  var list1 = args[0], list2 = args.slice(1);

  // create callback func for .filter
  function filter(value){

    // loop through l2. If l1 value = l2[i] r false, otherwise r value.
    for(var i=0, len=list2.length; i<len; i++){

      if(value === list2[i]){
        return false;
      }
    }
      return value;

    }

  // stores results from callback into var results.
  var result = list1.filter(filter);

  // return array without given values.
  return result;

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
