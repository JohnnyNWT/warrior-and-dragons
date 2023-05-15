import Race from './Race';

class Elf extends Race {
  private _lifePoints: number;
  static contador = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 99;
    Elf.contador += 1;
  }

  static createdRacesInstances() {
    return Elf.contador;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Elf;