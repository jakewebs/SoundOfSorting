public class Main {
	public static void main(String[] args) {
		int r = Integer.parseInt(args[0]);
        int g = Integer.parseInt(args[1]);
        int b = Integer.parseInt(args[2]);
        RGB color = new RGB(r, g, b);
        System.out.println("Cur: " + color.getColor());
        Tone t = new Tone(200, 2000, 0.25);
        t.generateSound(color.getColor());
	}
}