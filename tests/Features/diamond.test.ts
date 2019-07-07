import { Diamond } from "../../src/Features/diamond";

let sut: Diamond = null;
beforeEach(() => {
    sut = new Diamond();
});

test("Create Output, given A, prints only A", () => {
    const result = sut.MakeDiamond("A");

    expect(result[0]).toBe("A");
});