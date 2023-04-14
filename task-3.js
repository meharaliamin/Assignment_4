function longestString(arr) {
    let maxLength = 0; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > maxLength) { 
        maxLength = arr[i].length; 
      }
    }
    return maxLength;
  }
   const Arr = ["Daraz", "Amazon", "AliBaba", "AliExpress"];
   const result = longestString(inputArr);
   console.log(result); 

  