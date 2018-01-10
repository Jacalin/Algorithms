
function translatePigLatin(str) {

  var strArr = str.split("")
  var vowels = ["a","e","i","o","u"];
  var consLetters = "";

  for(letter in strArr){
    if (vowels.indexOf(strArr[letter]) === -1){
      consLetters += strArr[letter];
    }else{
      break;
    }
  }

  var consPig = str.substr(consLetters.length).concat(consLetters.concat("ay"));

  var vowelPig = str.concat("way");


  for(var i = 0 ,len = vowels.length; i < len; i++){
    if(vowels[i] === str[0]){
      return vowelPig
    }
  }

  return consPig;


}

//translatePigLatin("consonant");
//translatePigLatin("algorithm")
//translatePigLatin("glove");
translatePigLatin("eight")
