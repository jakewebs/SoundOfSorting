let comparisons = 0;
function bubbleSort(nums) {
    comparisons = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length - i - 1; j++) {
            cur = nums[j];
            next = nums[j + 1];
            mag = Math.abs(cur - next);
            comparisons++;
            //tone.generateSound(mag);
            if (cur > next) {
                nums[j] = next;
                nums[j + 1] = cur;
            }
        }
    }
    console.log(nums);
    console.log(comparisons);
    document.getElementById("stuff").innerHTML = nums;
}


function insertionSort(nums) {
    comparisons = 0;
    let min = nums[0];
    let index = 0;
    for (var i = 1; i < nums.length; i++) {
        comparisons++;
        mag = Math.abs(nums[i] - min);
        if (nums[i] < min) {
            min = nums[i];
            index = i;
        }
    }
    let zero = nums[0];
    nums[0] = min;
    nums[index] = zero;
    for (var i = 2; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j - 1] > nums[j]) {
            comparisons++;
            let next = nums[j - 1];
            let mag = Math.abs(nums[j] - next);
            nums[j - 1] = nums[j];
            nums[j] = next;
            j--;
        }
    }

    console.log(nums);
    console.log(comparisons);
    document.getElementById("stuff").innerHTML = nums;
}

function mergeSort(nums) {
    comparisons = 0;
    nums = ms(nums);
    console.log(comparisons);
    console.log(nums);
    document.getElementById("stuff").innerHTML = nums;
}

function ms(nums) {
    if (nums.length < 2) {
        return nums;
    }
    let mid = Math.floor(nums.length / 2);
    let first = ms(nums.slice(0, mid));
    let second = ms(nums.slice(mid));

    return merge(first, second);
}

function merge(first, second) {
    let arr = [];
    while (first.length  && second.length) {
        comparisons++;
        if (first[0] < second[0]) {
            arr.push(first.shift());
            //first.shift();
        } else {
            arr.push(second.shift());
            //second.shift();
        }
    }
    return [...arr, ...first, ...second];
}

function quickSort(nums) {
    comparisons = 0;
    qs(nums, 0, nums.length - 1);
    console.log(comparisons);
    console.log(nums);
    document.getElementById("stuff").innerHTML = nums;
}

function qs(nums, left, right) {
    if (left >= right) {
        return;
    }
    const pivot = partition(nums, left, right);
    qs(nums, left, pivot - 1);
    qs(nums, pivot + 1, right);
}

function partition(nums, left, right) {
    const pivot = nums[right];
    let i = left - 1;
    for (var j = left; j < right; j++) {
        comparisons++;
        let mag = Math.abs(nums[j] - pivot);
        //tone.generateSound(mag);
        if (nums[j] < pivot) {
            i++;
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
        }
    }
    let temp = nums[i + 1];
    nums[i + 1] = nums[right];
    nums[right] = temp;
    return i + 1; 
}

function LSDRadixSort(nums) {
    const m = getMax(nums);
    const D = (int) (Math.log(m + 1) / Math.log(4));
    let temp = [];
    let d = 0;
    while (d < D) {
        let count = [];
        for (var i = 0; i < 10; i++) {
            count.push(0);
        }
        for (var i = 0; i < nums.length; i++) {
            count[(int)(nums[i] / (Math.pow(10, d))) % 10]++;
        }
        // Give count[i] the correct starting index based on counts found in last loop
        for (var i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        for (var i = nums.length - 1; i >= 0; i--) {
            temp[count[(int)(nums[i] / (Math.pow(10, d))) % 10] - 1] = nums[i];
            count[(int)(nums[i] / (Math.pow(10, d))) % 10]--;
        }
        for (var i = 0; i < nums.length; i++) {
            //tone.generateSound(temp[i]);
            nums[i] = temp[i];
        }
        d++;
    }
    console.log(nums);
    document.getElementById("stuff").innerHTML = nums;
}

function getMax(nums) {
    let m = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > m) {
            m = nums[i];
        }
    }
    return m;
}