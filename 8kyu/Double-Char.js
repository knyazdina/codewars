function doubleChar(str) {
    let result = '';
    for (let char of str) {
        result += char.repeat(2); }
    return result;
}