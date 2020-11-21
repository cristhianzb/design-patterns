import { ArmourDecorator } from "./ArmourDecorator.ts";
import BaseEnemy from "./BaseEnemy.ts";
import DifficultEnemy from "./DifficultEnemy.ts";
import { HelmetDecorator } from "./HelmetDecorator.ts";

let enemy = new DifficultEnemy();
let enemyWithHelmet = new HelmetDecorator(enemy);
let enemyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet);

let computedDamaged = enemyWithHelmetAndArmour.takeDamage();
console.log(computedDamaged);
