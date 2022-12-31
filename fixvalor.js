function checkEquals(arr1, arr2) {
    if (arr1.toString() === arr2.toString()) {
      return true
     } else {
      return false
     }
    }

console.log(checkEquals([1, 2], [1, 3]));
