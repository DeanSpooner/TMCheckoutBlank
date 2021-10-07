const { checkout } = require("./index.js");

describe("Returns a total amount for buying from a catalogue of items", () => {
  it("returns the total amount for a simple catalogue", () => {
    const catalogue = {
      C: 20,
      D: 15,
      deals: {},
    };
    const basket = ["C"];
    expect(checkout(catalogue, basket)).toBe(20);
    const basket2 = ["D", "D"];
    expect(checkout(catalogue, basket2)).toBe(30);
  });
  it("returns the total amount for a simple catalogue of more than one item", () => {
    const catalogue = {
      C: 20,
      D: 15,
      deals: {},
    };
    const basket = ["C", "C", "D"];
    expect(checkout(catalogue, basket)).toBe(55);
    const basket2 = ["D", "D", "C", "C"];
    expect(checkout(catalogue, basket2)).toBe(70);
  });
});
describe("Returns a total amount for buying from a catalogue of items with deals", () => {
  it("returns the total amount for a simple catalogue with a deal", () => {
    const catalogue = {
      C: 20,
      deals: {
        C: {
          amount: 2,
          price: 30,
        },
      },
    };
    const basket = ["C", "C"];
    expect(checkout(catalogue, basket)).toBe(30);
  });
  it("returns the total amount for a simple catalogue with more deals", () => {
    const catalogue = {
      C: 20,
      D: 15,
      deals: {
        C: {
          amount: 2,
          price: 30,
        },
        D: {
          amount: 3,
          price: 40,
        },
      },
    };
    const basket = ["C", "C", "D", "D", "D", "D", "D"];
    expect(checkout(catalogue, basket)).toBe(100);
  });
  it("returns the total amount for a full catalogue with deals", () => {
    const catalogue = {
      A: 50,
      B: 30,
      C: 20,
      D: 15,
      deals: {
        A: {
          amount: 3,
          price: 130,
        },
        B: {
          amount: 2,
          price: 45,
        },
      },
    };
    const basket = [
      "C",
      "C",
      "D",
      "D",
      "D",
      "D",
      "D",
      "A",
      "B",
      "A",
      "B",
      "A",
      "B",
      "A",
    ];
    expect(checkout(catalogue, basket)).toBe(370);
  });
});
