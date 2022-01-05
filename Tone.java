

/******************************************************************************
 *  Compilation:  javac -classpath .:stdlib.jar Tone.java
 *  Execution:    java -classpath .:stdlib.jar Tone r g b
 *
 *  Play a note of the given freqency for the given duration.
 *
 ******************************************************************************/
public class Tone {
    private static double min_freq;
    private static double max_freq;
    private static double duration;
    private static double slope;

    /**
     *  Creates a tone instance with given @param min, @param max, @param time.
     *  Calculates the slope of the linear function for prescribing frequencies to RGB colors.
     */
    public Tone (double min, double max, double time) {
        min_freq = min;
        max_freq = max;
        duration = time;
        slope = (max_freq - min_freq) / (255255255);
    }


    /** 
     * Create a pure tone of the given frequency @param hz for the given @param duration.
     * @Source: https://introcs.cs.princeton.edu/java/21function/Tone.java.html.
     */
    private static double[] tone(double hz) { 
        System.out.println("Freq: " + hz);
        int n = (int) (StdAudio.SAMPLE_RATE * duration);
        double[] a = new double[n+1];
        for (int i = 0; i <= n; i++) {
            a[i] = Math.sin(2 * Math.PI * i * hz / StdAudio.SAMPLE_RATE);
        }
        return a; 
    } 


    /**
     *  Calculates the frequency to play a sound at given @param color and generates the sound.
     */
    public void generateSound(double color) {
        double hz = (slope * color) + min_freq;
        double[] a = tone(hz);
        StdAudio.play(a);
    }
}
