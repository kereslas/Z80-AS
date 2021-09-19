class MainRegisters {
  af: u16 = 0xffff;
  bc: u16 = 0xffff;
  de: u16 = 0xffff;
  hl: u16 = 0xffff;
}

class AlternateRegisters {
  af: u16 = 0xffff;
  bc: u16 = 0xffff;
  de: u16 = 0xffff;
  hl: u16 = 0xffff;
}

class IndexRegisters {
  ix: u16 = 0xffff;
  iy: u16 = 0xffff;
  sp: u16 = 0xffff; // Stack Pointer
}

export class Registers {
  mainRegisters: MainRegisters;
  alternateRegisters: AlternateRegisters;
  indexRegisters: IndexRegisters;

  i: u8 = 0xff;
  r: u8 = 0xff;
  pc: u16 = 0x0; // Program Counter

  iff1: u16 = 0x0; // Interrup flop-flop 1
  iff2: u16 = 0x0; // Interrup flop-flop 2

  constructor() {
    this.mainRegisters = new MainRegisters();
    this.alternateRegisters = new AlternateRegisters();
    this.indexRegisters = new IndexRegisters();
  }

  reset(): void {
    this.mainRegisters.af = 0xffff;
    this.mainRegisters.bc = 0xffff;
    this.mainRegisters.de = 0xffff;
    this.mainRegisters.hl = 0xffff;

    this.alternateRegisters.af = 0xffff;
    this.alternateRegisters.bc = 0xffff;
    this.alternateRegisters.de = 0xffff;
    this.alternateRegisters.hl = 0xffff;

    this.indexRegisters.ix = 0xffff;
    this.indexRegisters.iy = 0xffff;
    this.indexRegisters.sp = 0xffff;

    this.i = 0xff;
    this.r = 0xff;
    this.pc = 0x0;

    this.iff1 = 0x0;
    this.iff2 = 0x0;
  }
}
