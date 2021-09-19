import { CPU } from "../../assembly/cpu";

describe("CPU", () => {
  const cpu = new CPU();

  beforeEach(() => {
    cpu.reset();

    expect(cpu.pc).toEqual(0);
  });

  it("execute add", () => {
    cpu.execute();

    expect(cpu.pc).toEqual(1);
  });
});
