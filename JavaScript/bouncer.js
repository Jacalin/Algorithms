// Remove all falsy values from an array.

function bouncer(arr) {

  var filter = arr.filter(function(x){
    if(x){
      return x;
    }
  });

  return filter;
}
