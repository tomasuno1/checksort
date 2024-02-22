# checksort
check if an Array is sorted.

## Example
``` javascript
const sorted = require('checksort')

console.log(checksort([1, 3, 5]))
// => true

console.log(checksort([2, 7, 0]))
// => false

// pass comparators
console.log(checksort([11, 5, 2], function (a, b) { return b - a }))
// => true
```

## LICENSE [MIT](LICENSE)
