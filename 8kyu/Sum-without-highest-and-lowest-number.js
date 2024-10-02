function sumArray(array) {
    if (!Array.isArray(array) || array.length <= 2) {
        return 0;
    }
    const max = Math.max(...array);
    const min = Math.min(...array);
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum - max - min;
}