/*
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {

  var ascii1 = [], ascii2 = [];

  for(var i=0, len=str.length; i < len; i++){
    ascii1.push(str.charCodeAt(i));
  }

  for(var j=0, len2=ascii1.length; j<len2; j++){
    if(ascii1[j] <=77 && ascii1[j] >= 65){
      ascii2.push(ascii1[j] + 13);
    }else if(ascii1[j]>=78 && ascii1[j] <= 90){
      ascii2.push(ascii1[j] - 13);
    }else{
      ascii2.push(ascii1[j]);
    }
  }

  var result = ascii2.map(function(x){
    return String.fromCharCode(x);
  });

  return result.join("");

}
