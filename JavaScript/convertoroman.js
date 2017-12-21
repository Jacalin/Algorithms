function convertToRoman(num) {

  var nums = {
    1:"I",
    2:"II",
    3:"III",
    4:"IV",
    5:"V",
    6:"VI",
    7:"VII",
    8:"VIII",
    9:"IX",
    10:"X",
    20:"XX",
    30:"XXX",
    40:"XL",
    50:"L",
    60:"LX",
    70:"LXX",
    80:"LXXX",
    90:"XC",
    100:"C",
    200:"CC",
    300:"CCC",
    400:"CD",
    500:"D",
    600:"DC",
    700:"DCC",
    800:"DCCC",
    900:"CM",
    1000:"M",
    2000:"MM",
    3000:"MMM",
    4000:"MMMM",
  }

  var splitS = String(num).split("");

  splitSRev = splitS.reverse()

  var numConvert1 = splitSRev.map(function(x){
    return Number(x);
  });

  var listWithZeros = [];

  for (var len = numConvert1.length, i = len-1 ; i >= 0 ; i--){
    listWithZeros.push(String(numConvert1[i]).concat("0".repeat(i)));
  }

  var numConvert2 = listWithZeros.map(function(x){
    return Number(x);
  });

  var removeNums = numConvert2.filter(function(x){
    if (x > 0){
      return x;
    }
  });

  var obj = {};

  for (var i = 0 , len= Object.keys(nums).length; i < len; i++){
    for(var j = 0, len2= removeNums.length; j < len2; j++){
      if(removeNums[j] % Object.keys(nums)[i] === 0 ){
        obj[(removeNums[j])] = Object.values(nums)[i]
      }
    }
  }

  var numConvertToString = removeNums.map(function(x){
    return String(x)[0];
  });


  var numConvert3 = numConvertToString.map(function(x){
    return Number(x);

  });


  var numConvert3Rev = numConvert3.reverse();


  var finalArr = []

  for (var i = 0 , len = Object.values(obj).length; i < len; i++){
      //console.log(i)
      finalArr.push(Object.values(obj)[i]);

   }

  console.log(finalArr);

  var romans = finalArr.reverse().join("");

  console.log(romans)

  return romans;

}

convertToRoman(1004);

//.concat(obj[numConvert3[0]])
//.repeat(numConvert3Rev[i]));
