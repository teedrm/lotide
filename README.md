# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @teedrm/lotide`

**Require it:**

`const _ = require('@teedrm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function(assertArraysEqual)`: asserts if 2 arrays are equal
* `function(assertEqual)`: asserts if 2 values are equal
* `function(assertObjectsEqual)`: asserts if 2 objects are equal
* `function(countLetters)`: ake in a sentence (as a string) and then return a count of each of the letters in that sentence
* `function(countOnly)`: take in a collection of items and return counts for a specific subset of those items
* `function(eqArrays)`: compare two arrays 
* `function(eqObjects)`: compare objects
* `function(findKey)`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined
* `function(findKeyByValue)`: search for a key on an object where its value matches a given value
* `function(head)`: retrieve the first element from the array
* `function(letterPositions)`: return all the indices (zero-based positions) in the string where each character is found
* `function(map)`: higher-order function that creates a new array with the results of calling a provided function on every element in the calling array
* `function(middle)`: returns the middle item of an array
* `function(tail)`: return every element except the head (first element) of the array
* `function(takeUntil)`: will keep collecting items from a provided array until the callback provided returns a truthy value
* `function(without)`: removes unwanted items from array