import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _damage: EnergyType;
  static contador = 0;
  
  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Ranger.contador += 1;
  }

  static createdArchetypeInstances() {
    return Ranger.contador;
  }

  get energyType() {
    return this._damage;
  }
}

export default Ranger;