
function pairElement(str) {

  const strSplt = str.split("");

  const pairs = {
    "A":"T",
    "T":"A",
    "G":"C",
    "C":"G"
  }

  let finArr = [];


  strSplt.map(x =>{
    //console.log(x,"str")
    Object.keys(pairs).map(y => {
      if(x === y){
        finArr.push([x,pairs[y]])
        //console.log(pairs[y]);
      }
      //console.log(y,"obj");
    })
  })

  console.log(finArr);


}

pairElement("GCG");
