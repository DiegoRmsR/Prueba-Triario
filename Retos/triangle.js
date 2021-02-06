/**
 * class Triangle
 * Attributes: baseline, height
 */
class Triangle {
  attributes = {
    baseline: 20,
    height: 25
  }
  /**
  * Method that returns the perimeter of the triangle
  */
  perimeter() {
    const { baseline, height } = this.attributes;
    const perimetrer = height + baseline + Math.sqrt((height * height) + (baseline * baseline));
    return (perimetrer)
  }
}