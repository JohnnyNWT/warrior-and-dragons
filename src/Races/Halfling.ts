import Race from './Race';

class Halfling extends Race {
  private _lifePoints: number;
  static contador = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 60;
    Halfling.contador += 1;
  }

  static createdRacesInstances() {
    return Halfling.contador;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Halfling;