function merge (arr1, arr2) {
    let i = 0;
    let j = 0;
    const resArr =[];
    while (i < arr1.length && j < arr2.length) {
if (arr1[i] < arr2[j]) {
    resArr.push(arr1[i])
    i++;
} else {
    resArr.push(arr2[j])
    j++;
}
    }
    while (i < arr1.length) {
        resArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        resArr.push(arr2[j]);
        j++;
    }
    return resArr;
}
console.log(merge([1,2,7], [ -7, 0, 12]))