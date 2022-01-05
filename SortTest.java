//import org.junit.Test;
//import static org.junit.Assert.*;
import java.util.Random;

public class SortTest {
   /* @Test 
    void testBubbleSort() {
        double[] arr = new double[]{0.1, 2.5, 4.7, 6.9, 11.3, 15.5};
        double[] test = shuffle(arr);
        Tone t = new Tone(200, 2000, 0.25);
        Sorts s = new Sorts(t);
        double[] res = s.bubbleSort(test);
        assertEquals(arr, res);
    }
*/
    /**
     * Shuffles @param arr randomly and @return the result.
     */
    private static double[] shuffle(double[] arr) {
        Random r = new Random();
        for (int i = 0; i < arr.length; i++) {
            int index = r.nextInt(arr.length);
            double val = arr[index];
            arr[index] = arr[i];
            arr[i] = val;
        }
        return arr;
    }
}