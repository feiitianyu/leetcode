const searchInsert = (nums, target) => {
    var left = 0, right = nums.length - 1
    var midIndex = Math.floor((left + right) / 2)
    while(left <= right) {
        if(target === nums[midIndex]) {
            return midIndex
        }else if(target < nums[midIndex]) {
            right = midIndex - 1
        }else if(target > nums[midIndex]) {
            left = midIndex + 1
        }
    }
    return left
}