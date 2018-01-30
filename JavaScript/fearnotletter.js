
function fearNotLetter(str) {
  let alpha = "abcdefghijklmnopqrxtuvwxyz".split('');
  const strSplt = str.split('');
  //console.log(alpha.indexOf(strSplt[0]));
  const alphaSlice = alpha.slice(alpha.indexOf(strSplt[0]),alpha.indexOf(strSplt[0])+ strSplt.length);
  //console.log(alphaSlice);

  let finalArr = []

  if(strSplt.join("") === alphaSlice.join("")){
    return undefined;
  }else{
    for(var i in strSplt){
      if(strSplt[i]===alphaSlice[i]){
        finalArr.push(strSplt[i]);
      }else{
        finalArr.push(alphaSlice[i].concat(strSplt.slice(-1)))
      }
    }
  }

  return finalArr.join();
}

fearNotLetter("abce");
