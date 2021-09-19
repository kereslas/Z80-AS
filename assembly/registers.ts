class MainRegisters {
  af: u16 = 0;
  bc: u16 = 0;
  de: u16 = 0;
  hl: u16 = 0;
}

class AlternateRegisters {
  af: u16 = 0;
  bc: u16 = 0;
  de: u16 = 0;
  hl: u16 = 0;
}

class IndexRegisters {
  ix: u16 = 0;
  iy: u16 = 0;
  sp: u16 = 0; // Stack Pointer
}

export class Registers {
  mainRegisters: MainRegisters;
  alternateRegisters: AlternateRegisters;
  indexRegisters: IndexRegisters;

  i: u8 = 0;
  r: u8 = 0;
  pc: u16 = 0; // Program Counter

  constructor() {
    this.mainRegisters = new MainRegisters();
    this.alternateRegisters = new AlternateRegisters();
    this.indexRegisters = new IndexRegisters();
  }

  reset(): void {
    this.mainRegisters.af = 0;
    this.mainRegisters.bc = 0;
    this.mainRegisters.de = 0;
    this.mainRegisters.hl = 0;

    this.alternateRegisters.af = 0;
    this.alternateRegisters.bc = 0;
    this.alternateRegisters.de = 0;
    this.alternateRegisters.hl = 0;

    this.indexRegisters.ix = 0;
    this.indexRegisters.iy = 0;
    this.indexRegisters.sp = 0;

    this.i = 0;
    this.r = 0;
    this.pc = 0;
  }
}
