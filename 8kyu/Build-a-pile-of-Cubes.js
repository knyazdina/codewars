function findNb(m) {
    let n = 0;
    let volumeSum = 0;
    while (volumeSum < m) {
        n++;
        volumeSum += n ** 3;
    }
    return volumeSum === m ? n : -1;
}