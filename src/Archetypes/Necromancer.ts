import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _damage: EnergyType;
  static contador = 0;
  
  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Necromancer.contador += 1;
  }

  static createdArchetypeInstances() {
    return Necromancer.contador;
  }

  get energyType() {
    return this._damage;
  }
}

export default Necromancer;