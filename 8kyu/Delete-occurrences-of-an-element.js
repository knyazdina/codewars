
function deleteNth(arr,n){
    const result = [];
    const count = {};
    for (const num of arr) {
        if (!count[num]) {
            count[num] = 0;
        }
        if (count[num] < n) {
            result.push(num);
            count[num]++;
        }
    }
    return result;
}