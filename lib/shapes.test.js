const { Triangle, Square, Circle } = require('./shapes.js');

test('Triangle renders', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 10 290, 190 10, 190" fill="blue" />');
});

test('Square renders', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="50" y="25" width="200" height="200" fill="blue" />');
});

test('Circle renders', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="blue" />');
});