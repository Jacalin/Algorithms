
function uniteUnique(arr) {

  const args = [].slice.call(arguments);
  //console.log(args);

  const consildatedList = [];

  for(let i in args){
    for(let j in args[i]){
      if(!(consildatedList.includes(args[i][j])))
        consildatedList.push(args[i][j]);
      //console.log(args[i][j]);
    }
    //consildatedList.push(args[i]);
    //console.log(args[i]);
  }

  return consildatedList;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
