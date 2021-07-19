var nums = [-1,0,3,5,9,12], target = 9

// function search(nums, target) {
//     for(let i=0; i<nums.length; i++) {
//         if(nums[i] === target) {
//             return i
//         }
//     }
//     return -1
// }
var search = function(nums, target) {
    var left = 0, right = nums.length - 1, midIndex
    while(left <= right){
        midIndex = left + Math.floor((right - left)/2)
        if(nums[midIndex] === target) {
            return midIndex
        } else if (nums[midIndex] < target) {
            left = nums[midIndex] + 1
        } else {
            right = nums[midIndex] - 1
        }

    }
    return -1
}

console.log(search(nums, target))
