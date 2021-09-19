import { CPU } from "../cpu";

let cpu: CPU;

describe("CPU", () => {
  cpu = new CPU();

  beforeEach(() => {
    cpu.reset();
  });

  it("reset", () => {
    cpu.reset();

    expect(cpu.registers.mainRegisters.af).toBe(0xffff);
    expect(cpu.registers.mainRegisters.bc).toBe(0xffff);
    expect(cpu.registers.mainRegisters.de).toBe(0xffff);
    expect(cpu.registers.mainRegisters.hl).toBe(0xffff);

    expect(cpu.registers.alternateRegisters.af).toBe(0xffff);
    expect(cpu.registers.alternateRegisters.bc).toBe(0xffff);
    expect(cpu.registers.alternateRegisters.de).toBe(0xffff);
    expect(cpu.registers.alternateRegisters.hl).toBe(0xffff);

    expect(cpu.registers.indexRegisters.ix).toBe(0xffff);
    expect(cpu.registers.indexRegisters.iy).toBe(0xffff);
    expect(cpu.registers.indexRegisters.sp).toBe(0xffff);

    expect(cpu.registers.i).toBe(0xff);
    expect(cpu.registers.r).toBe(0xff);
    expect(cpu.registers.pc).toBe(0x0);

    expect(cpu.im).toBe(0x0);
    expect(cpu.registers.iff1).toBe(0x0);
    expect(cpu.registers.iff2).toBe(0x0);
  });

  it("execute add", () => {
    cpu.execute();

    expect(cpu.registers.pc).toBe(1);
  });
});
