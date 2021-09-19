import { Registers } from "./registers";

export class CPU {
  registers: Registers;
  im: u16 = 0x0; // Interrrup mode

  constructor() {
    this.registers = new Registers();
  }

  reset(): void {
    this.registers.reset();
    this.im = 0x0;
  }

  execute(): void {
    this.registers.pc += 1;
  }
}
