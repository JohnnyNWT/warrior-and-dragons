import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _damage: EnergyType;
  static contador = 0;
  
  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Mage.contador += 1;
  }

  static createdArchetypeInstances() {
    return Mage.contador;
  }

  get energyType() {
    return this._damage;
  }
}

export default Mage;