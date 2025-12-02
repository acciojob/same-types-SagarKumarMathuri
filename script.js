function isSameType(value1, value2) {
  // Check if both are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Normal type comparison
  return typeof value1 === typeof value2;
}
