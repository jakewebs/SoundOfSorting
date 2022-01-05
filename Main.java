import java.util.Random;
public class Main {
	public static void main(String[] args) {
		/*int r = Integer.parseInt(args[0]);
        int g = Integer.parseInt(args[1]);
        int b = Integer.parseInt(args[2]);
        RGB color = new RGB(r, g, b);
        System.out.println("Cur: " + color.getColor());
        Tone t = new Tone(200, 2000, 0.25);
        t.generateSound(color.getColor());*/
        Tone t = new Tone(200, 2000, 0.2);
        Sorts s = new Sorts(t);
        
        System.out.println("Bubble sort time");
        double[] arr = new double[15];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = randColor();
        }
        s.bubbleSort(arr);
        System.out.println();
        for (int i = 0; i < arr.length; i++) {
            t.generateSound(arr[i]);
        }
        System.out.println();

        System.out.println("Insertion sort time");
        arr = new double[15];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = randColor();
        }
        s.insertionSort(arr);
        System.out.println();
        for (int i = 0; i < arr.length; i++) {
            t.generateSound(arr[i]);
        }
        System.out.println();

        System.out.println("Merge sort time");
        arr = new double[15];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = randColor();
        }
        s.mergeSort(arr);
        System.out.println();
        for (int i = 0; i < arr.length; i++) {
            t.generateSound(arr[i]);
        }
        System.out.println(); 
        

        System.out.println("Quick sort time");
        arr = new double[30];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = randColor();
        }
        s.quickSort(arr);
        System.out.println();
        for (int i = 0; i < arr.length; i++) {
            t.generateSound(arr[i]);
        }
        System.out.println();

        System.out.println("Radix sort time");
        arr = new double[15];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = randColor();
        }
        s.radixSort(arr);
        System.out.println();
        for (int i = 0; i < arr.length; i++) {
            t.generateSound(arr[i]);
        }
        System.out.println(); 
	}

    private static double randColor() {
        Random rand = new Random();
        int r = rand.nextInt(256);
        int g = rand.nextInt(256);
        int b = rand.nextInt(256);
        RGB color = new RGB(r, g, b);
        return color.getColor();
    }
}