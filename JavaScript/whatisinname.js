
function whatIsInAName(collection, source) {
  // What's in a name?

  var arr = [];

  for(var i in collection){

    var count = 0

    for(var j in Object.keys(source)){
      //console.log(collection[i])
      //console.log(Object.values(source)[j])
      //console.log(Object.values(collection)[j])
      //console.log(Object.values(collection[i]).indexOf(Object.values(source)[j]) > -1)
      //console.log(Object.values(source)[j] === Object.values(collection)[i]);

      if(collection[i].hasOwnProperty(Object.keys(source)[j]) && (Object.values(collection[i]).indexOf(Object.values(source)[j]) > -1)) {
        //console.log("yes", Object.values(collection)[i] , Object.keys(source)[j]);
        count += 1
      }else{
        //console.log("no",Object.values(collection)[i] , Object.keys(source)[j])
      }
       //console.log(count);

      if(count >= Object.keys(source).length){
        arr.push(collection[i]);
        //console.log(collection[i]);
        //console.log(count);
        count = 0
      }
    }
  }
  //console.log(arr);
  return(arr);

}


//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
