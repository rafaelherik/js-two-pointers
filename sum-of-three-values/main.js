function findSumOfThree(nums, target) {
    nums.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < nums.length - 2; i++){
        let low = i + 1;
        let high = nums.length - 1;

        while (low < high) {
            let triple = nums[i] + nums[low] + nums[high];

            if (triple == target) {
                return true;
            }

            else if (triple < target) low++;

            else high--;
        }
    };

    return false;
}


function main() {
    let numsLists = [
        [3, 7, 1, 2, 8, 4, 5],
        [-1, 2, 1, -4, 5, -3],
        [2, 3, 4, 1, 7, 9],
        [1, -1, 0],
        [2, 4, 2, 7, 6, 3, 1],
    ];

    let testLists = [10, 7, 20, -1, 8];

    numsLists.map((numList, i) => {
        console.log(i + 1 + ".\tInput array:", numsLists[i]);
        
        if (findSumOfThree(numsLists[i], testLists[i]))
            console.log("\tSum for", testLists[i], "exists");
        else console.log("\tSum for", testLists[i], "does not exist");
        
        console.log("-".repeat(100));
    });
}

main();