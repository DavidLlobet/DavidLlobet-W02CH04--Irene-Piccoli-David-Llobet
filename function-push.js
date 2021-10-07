function push(arr, x) {
    const lion = arr.length;
    arr[lion] = x;
 
    return [arr, arr.length];
}