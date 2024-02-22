function checksort(array, comparator = (a, b) => a - b) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected Array, got ${typeof array}`);
  }

  return array.every((value, i, arr) => i === 0 || comparator(arr[i - 1], value) <= 0);
}

module.exports = checksort;
