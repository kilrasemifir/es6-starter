import { addition, affect, fooError } from ".";


test("addition function", () => {
    expect(addition()).toBe(0)
    expect(addition(1,2)).toBe(3)
    expect(addition(1,2,3)).toBe(6)
});

test('affectation function ', () => {
    expect(affect(1,"A")).toEqual({x:1,y:"A"})
});

test('null', () => {
    const n = null;
    expect(n).toBeNull(); // OK
    expect(n).toBeDefined(); // OK
    expect(n).not.toBeUndefined(); // OK
    expect(n).not.toBeTruthy(); // OK
    expect(n).toBeFalsy(); // OK
  });

test('2+2', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test("match", ()=> expect('Killian').toMatch(/illi/))

test("contain", ()=> expect([1,2,3]).toContain(2))


test('Error', ()=>{
    expect(fooError).toThrow()
    expect(fooError).toThrow(Error)
    expect(fooError).toThrow('Mon message')
    expect(fooError).toThrow(/mes/)
})