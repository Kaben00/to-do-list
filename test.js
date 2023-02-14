let arr1 = [29, 40, 50, 100, 12, 51, 21, 30];
let arr2 = [77, 80, 21, 12, 567, 21, 102];

let newArr = arr1.concat(arr2);

/*The algorithm repeatedly swapping the adjacent numbers until correct order is acheived*/
for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
        let temp = 0;

        if (newArr[i] > newArr[j]) {
            temp = newArr[i];
            newArr[i] = newArr[j];
            newArr[j] = temp;
        }
    }
}

console.log(newArr); //Result: [12, 12, 21, 21, 21, 29, 30, 40, 50, 51, 77, 80, 100, 102, 567]