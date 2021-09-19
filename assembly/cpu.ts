export class CPU {
  public pc: number;

  reset(): void {
    this.pc = 0;
  }

  execute(): void {
    this.pc += 1;
  }
}
