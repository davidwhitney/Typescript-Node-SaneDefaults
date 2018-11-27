import { Greeter } from "../../src/Features/greeter"

test('adds 1 + 1 to equal 2', () => {    
    const sut = new Greeter("name");

    let val = sut.greet();

    expect(val).toBe("Hello, name");    
});