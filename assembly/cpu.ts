import { Registers } from "./registers";

export class CPU {
  registers: Registers;

  constructor() {
    this.registers = new Registers();
  }

  reset(): void {
    this.registers.reset();
  }

  execute(): void {
    this.registers.pc += 1;
  }
}
