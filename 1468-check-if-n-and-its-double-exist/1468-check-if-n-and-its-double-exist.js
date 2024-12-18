var checkIfExist = function(arr) {
    let set = new Set()
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i]*2))return true
        if(set.has(arr[i]/2))return true
        set.add(arr[i])
    }
    return false
};