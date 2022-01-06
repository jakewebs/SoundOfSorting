/******************************************************************************
 *  Compilation:  javac -classpath .:stdlib.jar *.java
 *  Execution:    java -classpath .:stdlib.jar Main
 *
 *  Play a note of the given freqency for the given duration.
 *
 ******************************************************************************/
public class Main {
	public static void main(String[] args) {
		/*int r = Integer.parseInt(args[0]);
        int g = Integer.parseInt(args[1]);
        int b = Integer.parseInt(args[2]);
        RGB color = new RGB(r, g, b);
        System.out.println("Cur: " + color.getColor());
        Tone t = new Tone(200, 2000, 0.25);
        t.generateSound(color.getColor());
        Tone t = new Tone(200, 2000, 0.2);
        Sorts s = new Sorts(t); */
        
        
        runSort(5, 5);
	}

    /**
     * Runs the sorting algorithm given by @param type on a random array of length @param length.
     */
    public static void runSort(int type, int length) {
        double[] arr = new double[length];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = randColor().getColor();
        }
        if (type == 0) {
            System.out.println("Bubble Sort");
            sorts.bubbleSort(arr);
        } else if (type == 1) {
            System.out.println("Insertion Sort");
            sorts.insertionSort(arr);
        } else if (type == 2) {
            System.out.println("Merge Sort");
            sorts.mergeSort(arr);
        } else if (type == 3) {
            System.out.println("Quick Sort");
            sorts.quickSort(arr);
        } else if (type == 4) {
            System.out.println("LSD Radix Sort");
            sorts.LSDRadixSort(arr);
        } else if (type == 5) {
            //arr = new double[]{610, 78, 441, 349, 91};
            System.out.println("MSD Radix Sort");
            sorts.MSDRadixSort(arr);
        } else {
            System.out.println("Error: Bad input for type.");
            return;
        }

        for (int i = 0; i < arr.length; i++) {
            tone.generateSound(arr[i]);
        }
        System.out.println();
    }

}