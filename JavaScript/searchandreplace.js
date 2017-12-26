//Perform a search and replace on the sentence using the arguments
//provided and return the new sentence.
//Preserve the case of the original word when you are replacing it.

function myReplace(str, before, after) {

  var newStr = str.split(" ");

  //console.log(newStr);

  var replacedStr = newStr.map(function(x,iter){

    if(x === before){
      //console.log(x,iter);
      //console.log(x[0])
      //console.log(x[0] === x[0].toUpperCase());
      //console.log(newStr.splice(iter,1,after));

      if(x[0] === x[0].toUpperCase()){
        //console.log(x);
        var retainedState = after.replace(after[0], after[0].toUpperCase());
        return (x.replace(x,retainedState));
      }else{
        //console.log(x);
        return x.replace(x , after);
      }
    }
    console.log(x);
    return x;

  });

  console.log(replacedStr);

  var joinedStr = replacedStr.join(" ");

}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
