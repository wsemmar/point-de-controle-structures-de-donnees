function struct (arr1,arr2){
    let sum = 0
    const copy1 =[]
    for(let i=0; i<arr1.length; i++){
          copy1.push(arr1[i])
    }
    for(let i=0; i<arr2.length; i++){
        for(let j=0; j<arr1.length; j++){
            if (arr2[i] == arr1[j]){
                arr1.splice(j,1);
                break;
            }
        }
    }
    for(let i=0; i<copy1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if (copy1[i] == arr2[j]){
                arr2.splice(j,1);
                break;
            }
        }
    }
    for(let i=0; i<arr1.length; i++){
        sum += arr1[i]
    }
    for(let i=0; i<arr2.length; i++){
        sum += arr2[i]
    }
    return(sum)
}
struct ([3, 1, 7, 9],[2, 4, 1, 9, 3])