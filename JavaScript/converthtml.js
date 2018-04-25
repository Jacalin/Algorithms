
function convertHTML(str) {
  const chars = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&​quot;",
    "'": "&apos;",
  }

  let charList = [];
  let newString = "";

  //onsole.log(str.split(""))

  str.split("").map(stringChars => {
    Object.keys(chars).map((x,iter) => {
      if(x === stringChars){
        charList.push(chars[x]);
      }
    })
  })

  console.log(charList);



  //console.log(charList);
}

convertHTML('Stuff in "quotation marks"');
