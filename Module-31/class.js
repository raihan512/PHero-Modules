class rect {
    constructor(height, width) {
        this.height = height,
            this.width = width
    };
    calculateArea() {
        return 2 * (this.height + this.width);
    }
}
const rect1 = new rect(10, 20);
const rect2 = new rect(30, 50);
const rect3 = new rect(100, 200);

console.log(rect1.calculateArea());
console.log(rect2.calculateArea());
console.log(rect3.calculateArea());