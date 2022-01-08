

let comparisons = 0;
/*
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
}*/
function bubbleSort(nums) {
    document.getElementById("header").innerHTML = "Bubble Sort Selected";
    hideButtons("bubble");
    comparisons = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length - i - 1; j++) {
            cur = nums[j];
            next = nums[j + 1];
            //mag = Math.abs(cur - next);
            comparisons++;
            //tone.generateSound(mag);
            if (cur > next) {
                let temp = colorArr[j + 1];
                colorArr[j + 1] = colorArr[j];
                colorArr[j] = temp;
                nums[j] = next;
                nums[j + 1] = cur;
                //clear();
                //sleep(.1);
                redraw();
                return;
            }
        }
    }
    // if we make it here we are done sorting
    sorted = 1;
    console.log(nums);
    console.log(comparisons);
    document.getElementById("stuff").innerHTML = nums;
}


function insertionSort(nums) {
    document.getElementById("header").innerHTML = "Insertion Sort Selected";
    hideButtons("insertion");
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
            let cNext = colorArr[j - 1];
            colorArr[j - 1] = colorArr[j];
            colorArr[j] = cNext;
            redraw();
            j--;
            return;
        }
    }

    console.log(nums);
    console.log(comparisons);
    document.getElementById("stuff").innerHTML = nums;
}


// may need to do iterative mergesort to work for my vis?
function mergeSort(nums) {
    document.getElementById("header").innerHTML = "Merge Sort Selected";
    hideButtons("merge");
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
    while (first.length && second.length) {
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

// may need to do iterative quicksort to work for my vis?
function quickSort(nums) {
    document.getElementById("header").innerHTML = "Quick Sort Selected";
    hideButtons("quick");
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
            let cTemp = colorArr[j];
            colorArr[j] = colorArr[i];
            colorArr[i] = cTemp;
            //redraw();
            //return;
        }
    }
    let temp = nums[i + 1];
    nums[i + 1] = nums[right];
    nums[right] = temp;
    let cTemp = colorArr[i + 1];
    colorArr[i + 1] = colorArr[right];
    colorArr[right] = cTemp;
    //redraw();
    return i + 1; 
}

let d = 0;
function LSDRadixSort(nums) {
    document.getElementById("header").innerHTML = "LSD Radix Sort Selected";
    hideButtons("radix");
    const m = getMax(nums);
    const D = (int) (Math.log(m + 1) / Math.log(4));
    let temp = [];
    let tempColor = [];
    //let d = 0;
    while (d < D) {
        let count = [];
        for (var i = 0; i < 10; i++) {
            count.push(0);
            tempColor.push([0, 0, 0]);
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
            tempColor[count[(int)(nums[i] / (Math.pow(10, d))) % 10] - 1] = colorArr[i];
            count[(int)(nums[i] / (Math.pow(10, d))) % 10]--;
        }
        for (var i = 0; i < nums.length; i++) {
            //tone.generateSound(temp[i]);
            nums[i] = temp[i];
            colorArr[i] = tempColor[i];
        }
        d++;
        redraw();
        //console.log(d);
        return;
    }
    d = 0;
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