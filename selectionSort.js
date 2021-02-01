const selectionSort = array => {
    const arr = [...array]
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[i - 1]) {
                const temp = arr[j]
                arr[j] = arr[i - 1]
                arr[i - 1] = temp
            }
        }
    }
    return arr
}

const arr = new Array(1024).fill().map((_, i) => i).reverse()

console.log(arr)
console.log(selectionSort(arr))