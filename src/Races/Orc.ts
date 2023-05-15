import Race from './Race';

class Orc extends Race {
  private _lifePoints: number;
  static contador = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 74;
    Orc.contador += 1;
  }

  static createdRacesInstances() {
    return Orc.contador;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Orc;