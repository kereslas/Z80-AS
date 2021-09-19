import { CPU } from "../cpu";

let cpu: CPU;

describe("CPU", () => {
  cpu = new CPU();

  beforeEach(() => {
    cpu.reset();
  });

  it("reset", () => {
    cpu.reset();

    expect(cpu.registers.mainRegisters.af).toBe(0);
    expect(cpu.registers.mainRegisters.bc).toBe(0);
    expect(cpu.registers.mainRegisters.de).toBe(0);
    expect(cpu.registers.mainRegisters.hl).toBe(0);

    expect(cpu.registers.alternateRegisters.af).toBe(0);
    expect(cpu.registers.alternateRegisters.bc).toBe(0);
    expect(cpu.registers.alternateRegisters.de).toBe(0);
    expect(cpu.registers.alternateRegisters.hl).toBe(0);

    expect(cpu.registers.indexRegisters.ix).toBe(0);
    expect(cpu.registers.indexRegisters.iy).toBe(0);
    expect(cpu.registers.indexRegisters.sp).toBe(0);

    expect(cpu.registers.i).toBe(0);
    expect(cpu.registers.r).toBe(0);
    expect(cpu.registers.pc).toBe(0);
  });

  it("execute add", () => {
    cpu.execute();

    expect(cpu.registers.pc).toBe(1);
  });
});
