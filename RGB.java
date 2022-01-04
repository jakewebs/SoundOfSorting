public class RGB {
	private int r, g, b;
	private double color;

	public RGB(int r, int g, int b) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.color = (1000000 * r) + (1000 * g) + b; //RANGE: 0 to 255,255,255
	}

	public int getRed() {
		return r;
	}

	public int getGreen() {
		return g;
	}

	public int getBlue() {
		return b;
	}

	public double getColor() {
		return color;
	}
}