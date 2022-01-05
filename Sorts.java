public class Sorts {
    private static Tone tone;
    private static int comparisons;
    /**
     * Initializes Sort with a @param tone instance to play tones while sorting.    
     */
    public Sorts(Tone tone) {
        this.tone = tone;
        this.comparisons = 0;
    }

    public static void bubbleSort(double[] nums) {
        comparisons = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length - i - 1; j++) {
                double cur = nums[j];
                double next = nums[j + 1];
                double mag = Math.abs(cur - next);
                //mag = (cur + next) / 2;
                comparisons++;
                tone.generateSound(mag);
                if (cur > next) {
                    nums[j] = next;
                    nums[j + 1] = cur;
                }
            }
        }
        System.out.println("Comparisons: " + comparisons);
    }

    public static void insertionSort(double[] nums) {
        comparisons = 0;
        double min = nums[0];
        int index = 0;
        for (int i = 1; i < nums.length; i++) {
            comparisons++;
            double mag = Math.abs(nums[i] - min);
            tone.generateSound(mag);
            if (nums[i] < min) {
                min = nums[i];
                index = i;
            }
        }
        double zero = nums[0];
        nums[0] = min;
        nums[index] = zero;
        for (int i = 2; i < nums.length; i++) {
            int j = i;
            
            while (j > 0 && nums[j-1] > nums[j]) {
                comparisons++;
                double next = nums[j - 1];
                double mag = Math.abs(nums[j] - next);
                tone.generateSound(mag);
                nums[j - 1] = nums[j];
                nums[j] = next;
                j--;
            }
        }

        System.out.println("Comparisons: " + comparisons);
    }

    public static void mergeSort(double[] nums) {
        comparisons = 0;
        ms(nums, 0, nums.length - 1);
        System.out.println("Comparisons: " + comparisons);
    }

    private static void merge(double[] nums, int low, int mid, int high) {
        int left_size = mid - low + 1;
        int right_size = high - mid;
        double[] left = new double[left_size];
        double[] right = new double[right_size];
        for (int i = 0; i < left_size; i++) {
            left[i] = nums[low + i];
        }
        for (int i = 0; i < right_size; i++) {
            right[i] = nums[mid + 1 + i];
        }
        int l = 0, r = 0;
        int k = low;
        while (l < left_size && r < right_size) {
            double mag = Math.abs(left[l] - right[r]);
            tone.generateSound(mag);
            if (left[l] <= right[r]) {
                nums[k] = left[l];
                l++;
            } else {
                nums[k] = right[r];
                r++;
            }
            k++;
            comparisons++;
        }

        while (l < left_size) {
            nums[k] = left[l];
            l++;
            k++;
        }

        while(r < right_size) {
            nums[k] = right[r];
            r++;
            k++;
        }
    }

    private static void ms(double[] nums, int low, int high) {
        if (low < high) {
            int mid = (low + high - 1) / 2;
            ms(nums, low, mid);
            ms(nums, mid + 1, high);

            merge(nums, low, mid, high);
        }
    }

    public static void quickSort(double[] nums) {
        comparisons = 0;
        qs(nums, 0, nums.length - 1);
        System.out.println("Comparisons: " + comparisons);
    }

    private static void qs(double[] nums, int left, int right) {
        if (left >= right) {
            return;
        }
        int pivot = partition(nums, left, right);
        qs(nums, left, pivot - 1);
        qs(nums, pivot + 1, right);
    }

    private static int partition(double[] nums, int left, int right) {
        double pivot = nums[right];
        int i = left - 1;
        for (int j = left; j < right; j++) {
            comparisons++;
            double mag = Math.abs(nums[j] - pivot);
            tone.generateSound(mag);
            if (nums[j] < pivot) {
                i++;
                double temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
        double temp = nums[i + 1];
        nums[i + 1] = nums[right];
        nums[right] = temp;
        return i + 1; 
    }

    public static void radixSort(double[] nums) {
        // LSD radix
        int K = 4; 
        double m = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > m) {
                m = nums[i];
            }
        }
        int D = (int) (Math.log(m + 1) / Math.log(4));
        double[] temp = new double[nums.length];
        int d = 0;
        while (d < D) {
            double[] count = new double[10];
            for (int i = 0; i < count.length; i++) {
                count[i] = 0;
            }
            for (int i = 0; i < nums.length; i++) {
                count[(int)(nums[i] / (Math.pow(10, d))) % 10]++;
            }
            // Give count[i] the correct starting index based on counts found in last loop
            for (int i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }
            for (int i = nums.length - 1; i >= 0; i--) {
              temp[(int) count[(int)(nums[i] / (Math.pow(10, d))) % 10] - 1] = nums[i];
              count[(int)(nums[i] / (Math.pow(10, d))) % 10]--;
            }
            for (int i = 0; i < nums.length; i++) {
                tone.generateSound(temp[i]);
                nums[i] = temp[i];
            }
            d++;
        }

    }
}