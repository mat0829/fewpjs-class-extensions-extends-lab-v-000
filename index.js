// Your code here

class Polygon {
  constructor(arrayOfSides) {
    this.arrayOfSides = arrayOfSides
  }
  
  get countSides() {
    return this.arrayOfSides.length
  }
  
  get perimeter() {
    if (this.arrayOfSides.length == 3)
    return this.arrayOfSides[0] + this.arrayOfSides[1] + this.arrayOfSides[2]
    else return this.arrayOfSides[0] + this.arrayOfSides[1] + this.arrayOfSides[2] + this.arrayOfSides[3]
  }
}

class Triangle extends Polygon {
  
  get isValid() {
  if (!Array.isArray(this.arrayOfSides)) return
  if (this.arrayOfSides.length !== 3) return
  let side1 = this.arrayOfSides[0]
  let side2 = this.arrayOfSides[1]
  let side3 = this.arrayOfSides[2]
  return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
  
  get area() {
    return this.arrayOfSides[0] * this.arrayOfSides[0]
  }
  
  get isValid() {
  if (!Array.isArray(this.arrayOfSides)) return
  if (this.arrayOfSides.length !== 4) return
  let side1 = this.arrayOfSides[0]
  let side2 = this.arrayOfSides[1]
  let side3 = this.arrayOfSides[2]
  let side4 = this.arrayOfSides[3]
  return ((side1 == side2) && (side1 == side3) && (side1 == side4))
  }
}