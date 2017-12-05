function destroyer(arr) {

  var args = Array.from(arguments);

  var list1 = args[0], list2 = args.slice(1);

  function filter(value){

    for(var i=0, len=list2.length; i<len; i++){

      if(value === list2[i]){
        return;
      }
    }
      return value;

    }

  var result = list1.filter(filter);

  return result;

}
