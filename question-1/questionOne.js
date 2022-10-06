const lowerCaseWords = (mixedArray) => {
    return new Promise ((resolve, reject) => {
        if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
            const filteredArrHaOnStr = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string");
            const mappedArrayOFLowCaseStr = filteredArrHaOnStr.map((eachItemOfFilArr) => eachItemOfFilArr.toLowerCase());
            resolve(mappedArrayOFLowCaseStr);
        } else{
            reject("rejected");
        }
    });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
   .then((value) => 
        console.log(value)
   )
   .catch((error) =>
        console.log(error)
   );