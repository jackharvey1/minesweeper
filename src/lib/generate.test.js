import generate from './generate';

it('generates a grid with 10 mines', () => {
    const grid = generate();
    const mineCount = grid.flat().reduce((acc, next) => next === 'X' ? acc + 1 : acc, 0);
    expect(mineCount).toEqual(10);
});
