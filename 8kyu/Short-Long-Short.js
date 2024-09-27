function solution(a, b) {
    const aL = a.length;
    const bL = b.length;

    if (aL === 0 && bL === 0) return "";
    return (aL > bL) ? `${b}${a}${b}` : `${a}${b}${a}`;
}