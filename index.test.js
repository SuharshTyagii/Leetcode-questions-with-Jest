/// import test from jest
const { describe, expect, test } = require('@jest/globals')

const findMedianSortedArrays = require('./medianTwoSorted.test');


test('Median of Two Sorted Arrays', () => {
  console.log('running testtt');
  findMedianSortedArrays([1, 3, 4, 5, 6, 7], [2, 3, 4]);
});

