const test = (arr1, arr2) => {
    const array = [...arr1,...arr2].sort((a, b) => a - b)
    console.log(array)
    let midIndex
    if(array.length%2 === 1) {
        midIndex = Math.ceil(array.length/2) - 1
        console.log(midIndex)
        return array[midIndex]
    }
    midIndex = array.length/2 - 1
    return (array[midIndex] + array[(midIndex + 1)])/2
}
