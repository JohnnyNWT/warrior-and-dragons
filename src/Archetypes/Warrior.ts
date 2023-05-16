import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _damage: EnergyType;
  static contador = 0;
  
  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Warrior.contador += 1;
  }

  static createdArchetypeInstances() {
    return Warrior.contador;
  }

  get energyType() {
    return this._damage;
  }
}

export default Warrior;