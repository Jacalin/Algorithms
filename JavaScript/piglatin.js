
function translatePigLatin(str) {

  var vowels = ["a","e","i","o","u"];
  var firstLetter = "";

  var consonantWord = str.split("").map(function(letter,iter){
    //console.log(str[0])
    for(var vowel in vowels){
      //console.log(vowels[vowel]);
      //console.log(letter)
      if(str[0] != vowels[vowel]){
        firstLetter = str[0];
        if(iter != 0){
          //console.log(letter);
          return letter;
        }
      }
    }
  })
  .splice(1,str.length - 1)
  .join("")
  .concat(firstLetter.concat("ay"));

  //console.log(consonantWord);

  for(var vowel2 in vowels){
    if(str[0] != vowels[vowel2]){
      console.log(consonantWord)
      return consonantWord;
    }else{
      console.log(str.concat("way"));
      return str.concat("way");
    }
  }
}

//translatePigLatin("consonant");
//translatePigLatin("algorithm")
translatePigLatin("glove");
