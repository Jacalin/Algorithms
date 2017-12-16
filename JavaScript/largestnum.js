//Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {

  var sorted = [];
  var highNum = [];

  // loop through original array.
  for (var i in arr){
    // sort nums in array from highest to lowest. push sorted array to sorted
     sorted.push(arr[i].sort(function compareNums(a,b){
      return b - a;
    }));
    // nested loop iterating sorted list
    for (var j in sorted){
      // if j/ first and highest num in sorted evalutes to false push highNum
      if (!(j in highNum)){
      highNum.push(sorted[j][0]);
      }
    }
   }

  return highNum;
}
