import { Greeter } from "../../src/Features/greeter";

test("adds 1 + 1 to equal 2", () => {
    const sut = new Greeter("name");

    const val = sut.greet();

    expect(val).toBe("Hey, name");
});