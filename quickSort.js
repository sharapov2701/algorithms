const quickSort = (arr) => {
    switch (arr.length) {
        case 0:
        case 1:
            return arr

        case 2:
            if (arr[0] > arr[1]) {
                const temp = arr[0]
                arr[0] = arr[1]
                arr[1] = temp
            }
            return arr

        default:
            const num = arr[0]
            const left = []
            const right = []
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < num) {
                    left.push(arr[i])
                } else {
                    right.push(arr[i])
                }
            }
            return [...quickSort(left), num, ...quickSort(right)]
    }
}

const arr = [5, 3, 7, 11, 1]
console.log(quickSort(arr))