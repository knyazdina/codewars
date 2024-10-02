function highAndLow(numbers) {
    const numArray = numbers.split(' ').map(Number);
    const maxNum = Math.max(...numArray);
    const minNum = Math.min(...numArray);
    return `${maxNum} ${minNum}`;
}