function zeroFuel(distanceToPump, fuelLeft, fuelEfficiency) {
    const maxDistance = fuelLeft * fuelEfficiency;
    return maxDistance >= distanceToPump;
}