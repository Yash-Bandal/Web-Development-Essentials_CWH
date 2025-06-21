# JavaScript Sorting & Searching Arrays


##  Array Sort Methods

###  Alphabetic Sort

* `Array.sort()` – Sorts elements alphabetically.
* `Array.reverse()` – Reverses the order of elements.
* `Array.toSorted()` – Returns a sorted **copy** (ES2023).
* `Array.toReversed()` – Returns a reversed **copy** (ES2023).
* Sorting Objects – Sort an array of objects using custom comparison.

###  Numeric Sort

* Numeric Sort – `arr.sort((a, b) => a - b)`
* Random Sort – `arr.sort(() => 0.5 - Math.random())`
* `Math.min(...arr)` – Smallest value
* `Math.max(...arr)` – Largest value
* Home-made Min – Loop through array to find smallest
* Home-made Max – Loop through array to find largest

<br>

---

<br>

##  JavaScript Array Search

###  Array Find and Search Methods

* `Array.indexOf()` – Finds index of a value (first match)

* `Array.lastIndexOf()` – Finds index from end

* `Array.includes()` – Checks for existence

* `Array.findIndex()` – Index of first matching condition

* `Array.findLast()` – Returns last matching element (ES2023)

* `Array.findLastIndex()` – Index of last matching element (ES2023)



<br>

---

<br>


## Javascript Array Methods
###  Commonly used

* `Array.length` – Returns the number of elements
* `Array.toString()` – Converts array to comma-separated string
* `Array.at(index)` – Returns element at a specific index (supports negative indexing)
* `Array.join(separator)` – Joins elements with a separator
* `Array.pop()` – Removes last element
* `Array.push(item)` – Adds to the end
* `Array.shift()` – Removes first element
* `Array.unshift(item)` – Adds to the beginning
* `delete array[index]` – Deletes an element (leaves `undefined`)
* `Array.concat(arr)` – Merges arrays
* `Array.copyWithin()` – Copies elements within the array
* `Array.flat(depth)` – Flattens nested arrays
* `Array.splice(start, deleteCount, ...)` – Add/remove items
* `Array.toSpliced()` – Immutable version of `splice()` (ES2023)
* `Array.slice(start, end)` – Extracts a portion of the array

 [W3Schools: JS Array Methods](https://www.w3schools.com/js/js_array_methods.asp)



<br>

---

<br>


###  See Also:

* Basic Methods
* Sort Methods
* Iteration Methods
* `Array.find()` – Returns the first matching element




 [W3Schools: JS Array Sort](https://www.w3schools.com/js/js_array_sort.asp)
 [W3Schools: JS Array Search](https://www.w3schools.com/js/js_array_search.asp)
