/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
    left = 0
    right = arr.length - 1

    while left < right:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. left++
            2. right--
            3. Both left++ and right--
 */
const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1
    while(left <= right){
        [s[left], s[right]] = [s[right], s[left]]
            left++
            right--
        }
};