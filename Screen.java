import javax.swing.JPanel;
import java.awt.Graphics;
import java.awt.Color;
import java.awt.Dimension;
import java.util.Random;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;

public class Screen extends JPanel implements ActionListener {
    private static Tone tone;
    private static Sorts sorts;
    private JButton bubble;
    private boolean bubbleSort = false;
    public Screen() {
        this.setFocusable(true);
        this.setLayout(null);

        tone = new Tone(200, 2000, 0.2);
        sorts = new Sorts(tone);

        bubble = new JButton("Bubble Sort");
        bubble.setBounds(50, 50, 100, 50); 
        bubble.addActionListener(this);
        this.add(bubble);
    }

    /**
     * Sets the size of the panel
     */
    public Dimension getPreferredSize() {
        return new Dimension(800,600);
    }
    boolean done = false;
    public void paintComponent(Graphics g) {
        super.paintComponent(g); 
        RGB[] colors = new RGB[10];
        double[] arr = new double[10];
        
        if (done == false) {
            for (int i = 0; i < arr.length; i++) {
                RGB r = randColor();
                arr[i] = r.getColor();
                colors[i] = r;
            }
            for (int i = 0; i < colors.length; i++) {
                RGB cur = colors[i];
                int height = 40 + cur.getRed();
                g.setColor(new Color(cur.getRed(), cur.getGreen(), cur.getBlue()));
                g.fillRect(100 + (60 * i), 400 - height, 55, height);
            }
        }
        
        if (bubbleSort) {
            runSort(arr, 0);
            g.clearRect(0, 0, 800, 600);
            for (int i = 0; i < colors.length; i++) {
                double cur = arr[i];
                int height = 40 + (int) cur / 1000000;
                g.setColor(new Color((int) cur / 1000000, (int) (cur / 1000) % 1000, (int ) cur % 1000));
                g.fillRect(100 + (60 * i), 400 - height, 55, height);
            }
            //repaint();
            bubbleSort = false;
            done = true;
        } else {
            // do nothing
        }
        //repaint();
    }

    private static RGB randColor() {
        Random rand = new Random();
        int r = rand.nextInt(256);
        int g = rand.nextInt(256);
        int b = rand.nextInt(256);
        RGB color = new RGB(r, g, b);
        return color;
    }

    /**
     * Runs the sorting algorithm given by @param type on a random array of length @param length.
     */
    private static void runSort(double[] arr, int type) {
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
            System.out.println("Radix Sort");
            sorts.radixSort(arr);
        } else {
            System.out.println("Error: Bad input for type.");
            return;
        }

        for (int i = 0; i < arr.length; i++) {
            tone.generateSound(arr[i]);
        }
        System.out.println();
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == bubble) {
            bubbleSort = true;
        }
    }
}