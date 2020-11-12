function struct (arr1,arr2){
    let sum = 0
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if (arr1[i] == arr2[j]){
                sum += arr1[i];
                break;
            }
        }
    }
    for(let i=0; i<arr2.length; i++){
        for(let j=0; j<arr1.length; j++){
            if (arr2[i] == arr1[j]){
                sum += arr2[i];
                break;
            }
        }
    }
    return(sum)
}
struct ([12, 13, 6, 10],[13, 10, 16, 15])