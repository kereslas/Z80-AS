import { cpu } from "../../assembly/index";

describe("cpu", () => {
  it("init", () => {
    expect(cpu).not.toBe(undefined);
  });
});
