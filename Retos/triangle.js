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

  /**
  * Method that returns the surface of the triangle
  */
  surface() {
    const { baseline, height } = this.attributes;
    const surface = baseline * height / 2;
    return surface
  }
}

const { baseline, height } = new Triangle().attributes;
console.log(`Triangle: baseline - ${baseline},  height - ${height}`)

const perimeter = new Triangle().perimeter()
console.log("Perimeter: ", perimeter)

const surface = new Triangle().surface()
console.log("Surface: ", surface)