import Race from './Race';

class Dwarf extends Race {
  private _lifePoints: number;
  static contador = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 80;
    Dwarf.contador += 1;
  }

  static createdRacesInstances() {
    return Dwarf.contador;
  }

  get maxLifePoints():number {
    return this._lifePoints;
  }
}

export default Dwarf;
