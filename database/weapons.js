var blank = 
  {
    name: "",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: ,
    type: "",
    properties: [],
    damage: ,
    range: [],
    hit: ,
    terrain: "",
    ammo: ,
    en: ,
    crit: ,
    will: ,
    category: "",
    skill: "",
  };

var wp_spaec = [
  {
    name: "M95 Machine Gun",
    upgradeRate: "VF",
    upgradeCost: "VL",
    wpSpace: 15,
    type: "S",
    properties: ["P"],
    damage: 2300,
    range: [1,3],
    hit: 45,
    terrain: "AAAA",
    ammo: 20,
    en: 0,
    crit: 30,
    will: 0,
    category: "Bullet",
    skill: "",
  },
  {
    name: "M13 Shotgun",
    upgradeRate: "F",
    upgradeCost: "L",
    wpSpace: 25,
    type: "S",
    properties: ["P"],
    damage: 2600,
    range: [2,3],
    hit: 60,
    terrain: "AAAA",
    ammo: 7,
    en: 0,
    crit: 55,
    will: 0,
    category: "Bullet",
    skill: "",
  },
  {
    name: "Rectangle Launcher",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 40,
    type: "S",
    properties: [],
    damage: 3400,
    range: [2,7],
    hit: 20,
    terrain: "AABA",
    ammo: 6,
    en: 0,
    crit: 10,
    will: 0,
    category: "Bullet",
    skill: "",
  },
  {
    name: "M90 Assault Machine Gun",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 35,
    type: "S",
    properties: ["P"],
    damage: 3900,
    range: [1,4],
    hit: 35,
    terrain: "AABA",
    ammo: 15,
    en: 0,
    crit: 35,
    will: 0,
    category: "Bullet",
    skill: "",
  },
  {
    name: "Double Magna Rifle",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 35,
    type: "S",
    properties: ["P"],
    damage: 3400,
    range: [2,4],
    hit: 30,
    terrain: "AABA",
    ammo: 6,
    en: 0,
    crit: 15,
    will: 0,
    category: "Bullet",
    skill: "",
  },
  {
    name: "Boosted Rifle",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 35,
    type: "S",
    properties: [],
    damage: 3200,
    range: [3,7],
    hit: 30,
    terrain: "AABA",
    ammo: 7,
    en: 0,
    crit: 35,
    will: 0,
    category: "Bullet",
    skill: "",
  },
  {
    name: "G-Revolver",
    upgradeRate: "VF",
    upgradeCost: "VL",
    wpSpace: 15,
    type: "S",
    properties: ["P"],
    damage: 2500,
    range: [1,3],
    hit: 50,
    terrain: "ASAA",
    ammo: 6,
    en: 0,
    crit: 45,
    will: 0,
    category: "Bullet",
    skill: "",
  },
  {
    name: "G-Railgun",
    upgradeRate: "M",
    upgradeCost: "L",
    wpSpace: 30,
    type: "S",
    properties: [],
    damage: 3000,
    range: [1,7],
    hit: 30,
    terrain: "AABA",
    ammo: 10,
    en: 0,
    crit: 20,
    will: 0,
    category: "Bullet",
    skill: "",
  },
  {
    name: "Burst Railgun",
    upgradeRate: "M",
    upgradeCost: "L",
    wpSpace: 30,
    type: "S",
    properties: [],
    damage: 2900,
    range: [2,7],
    hit: 35,
    terrain: "SBAA",
    ammo: 10,
    en: 0,
    crit: 20,
    will: 0,
    category: "Bullet",
    skill: "",
  },
  {
    name: "Mega Beam Rifle",
    upgradeRate: "F",
    upgradeCost: "VL",
    wpSpace: 25,
    type: "S",
    properties: ["P"],
    damage: 2600,
    range: [2,4],
    hit: 35,
    terrain: "AADA",
    ammo: 12,
    en: 0,
    crit: 20,
    will: 0,
    category: "Energy Beam",
    skill: "",
  },
  {
    name: "Photon Rifle",
    upgradeRate: "F",
    upgradeCost: "L",
    wpSpace: 30,
    type: "S",
    properties: [],
    damage: 2800,
    range: [1,6],
    hit: 40,
    terrain: "AABA",
    ammo: 12,
    en: 0,
    crit: 20,
    will: 0,
    category: "Energy Beam",
    skill: "",
  },
  {
    name: "Magna Beam Rifle",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 35,
    type: "S",
    properties: [],
    damage: 3300,
    range: [2,7],
    hit: 25,
    terrain: "AADA",
    ammo: 8,
    en: 0,
    crit: 45,
    will: 0,
    category: "Energy Beam",
    skill: "",
  },
  {
    name: "Mega Beam Cannon",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 35,
    type: "S",
    properties: ["P"],
    damage: 3200,
    range: [1,4],
    hit: 20,
    terrain: "AADS",
    ammo: 0,
    en: 5,
    crit: 40,
    will: 0,
    category: "Energy Beam",
    skill: "",
  },
  {
    name: "Gun Rapier",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 40,
    type: "S",
    properties: ["P"],
    damage: 3500,
    range: [1,3],
    hit: 40,
    terrain: "ABA",
    ammo: 10,
    en: 0,
    crit: 10,
    will: 0,
    category: "Energy Beam",
    skill: "",
  },
  {
    name: "Steel Knife",
    upgradeRate: "VF",
    upgradeCost: "VL",
    wpSpace: 15,
    type: "M",
    properties: ["P"],
    damage: 2400,
    range: [1,1],
    hit: 50,
    terrain: "ASAA",
    ammo: 0,
    en: 0,
    crit: 50,
    will: 0,
    category: "Physical Blade",
    skill: "",
  },
  {
    name: "Divine Blade",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 30,
    type: "M",
    properties: ["P"],
    damage: 2900,
    range: [1,1],
    hit: 20,
    terrain: "SAAA",
    ammo: 0,
    en: 0,
    crit: 45,
    will: 0,
    category: "Physical Blade",
    skill: "",
  },
  {
    name: "Assault Blade",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 25,
    type: "M",
    properties: ["P"],
    damage: 2800,
    range: [1,2],
    hit: 30,
    terrain: "SBAA",
    ammo: 0,
    en: 0,
    crit: 40,
    will: 0,
    category: "Physical Blade",
    skill: "",
  },
  {
    name: "Shishioh Blade",
    upgradeRate: "S",
    upgradeCost: "H",
    wpSpace: 60,
    type: "M",
    properties: ["P"],
    damage: 4600,
    range: [1,1],
    hit: 50,
    terrain: "SSSS",
    ammo: 0,
    en: 0,
    crit: 40,
    will: 0,
    category: "Physical Blade",
    skill: "",
  },
  {
    name: "Plasma Sword",
    upgradeRate: "F",
    upgradeCost: "L",
    wpSpace: 25,
    type: "M",
    properties: ["P"],
    damage: 2600,
    range: [1,2],
    hit: 40,
    terrain: "AABA",
    ammo: 0,
    en: 5,
    crit: 30,
    will: 0,
    category: "Energy Blade",
    skill: "",
  },
  {
    name: "Beam Sword",
    upgradeRate: "VF",
    upgradeCost: "VL",
    wpSpace: 20,
    type: "M",
    properties: ["P"],
    damage: 2500,
    range: [1,1],
    hit: 45,
    terrain: "AABA",
    ammo: 0,
    en: 0,
    crit: 40,
    will: 0,
    category: "Energy Blade",
    skill: "",
  },
  {
    name: "Roche Saber",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 30,
    type: "M",
    properties: ["P"],
    damage: 3000,
    range: [1,2],
    hit: 10,
    terrain: "ASAS",
    ammo: 0,
    en: 10,
    crit: 0,
    will: 0,
    category: "Energy Blade",
    skill: "",
  },
  {
    name: "Laser Blade",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 30,
    type: "M",
    properties: ["P"],
    damage: 3000,
    range: [1,1],
    hit: 35,
    terrain: "AACA",
    ammo: 0,
    en: 5,
    crit: 45,
    will: 0,
    category: "Energy Blade",
    skill: "",
  },
  {
    name: "Remote Slasher",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 40,
    type: "S",
    properties: [],
    damage: 3500,
    range: [3,6],
    hit: 10,
    terrain: "AABA",
    ammo: 0,
    en: 0,
    crit: 0,
    will: 110,
    category: "Remote",
    skill: "",
  },
  {
    name: "Chakram Caster",
    upgradeRate: "M",
    upgradeCost: "L",
    wpSpace: 30,
    type: "M",
    properties: ["P"],
    damage: 2900,
    range: [2,4],
    hit: 35,
    terrain: "AABA",
    ammo: 0,
    en: 5,
    crit: 45,
    will: 0,
    category: "Remote",
    skill: "",
  },
  {
    name: "Slash Ripper",
    upgradeRate: "M",
    upgradeCost: "L",
    wpSpace: 30,
    type: "S",
    properties: ["P"],
    damage: 3000,
    range: [1,3],
    hit: 20,
    terrain: "AABA",
    ammo: 6,
    en: 0,
    crit: 35,
    will: 0,
    category: "Remote",
    skill: "",
  },
  {
    name: "Neo-Chakram Caster",
    upgradeRate: "M",
    upgradeCost: "H",
    wpSpace: 50,
    type: "M",
    properties: [],
    damage: 4300,
    range: [1,7],
    hit: 45,
    terrain: "SSSS",
    ammo: 0,
    en: 15,
    crit: 25,
    will: 0,
    category: "Remote",
    skill: "",
  },
  {
    name: "Incision Knife",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 20,
    type: "M",
    properties: ["P"],
    damage: 2800,
    range: [1,1],
    hit: 20,
    terrain: "ASAS",
    ammo: 0,
    en: 0,
    crit: 20,
    will: 0,
    category: "Physical",
    skill: "",
  },
  {
    name: "G-Impact Stake",
    upgradeRate: "S",
    upgradeCost: "H",
    wpSpace: 65,
    type: "M",
    properties: ["P"],
    damage: 4900,
    range: [1,3],
    hit: 35,
    terrain: "SSSS",
    ammo: 6,
    en: 0,
    crit: 70,
    will: 0,
    category: "Physical",
    skill: "",
  },
  {
    name: "Boosted Hammer",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 50,
    type: "M",
    properties: ["P"],
    damage: 4300,
    range: [1,4],
    hit: 40,
    terrain: "SSSS",
    ammo: 0,
    en: 5,
    crit: 70,
    will: 0,
    category: "Physical",
    skill: "",
  },
  {
    name: "Graviton Cannon",
    upgradeRate: "S",
    upgradeCost: "H",
    wpSpace: 60,
    type: "S",
    properties: [],
    damage: 5000,
    range: [2,8],
    hit: 20,
    terrain: "SSSS",
    ammo: 0,
    en: 40,
    crit: 10,
    will: 120,
    category: "Supreme",
    skill: "",
  },
  {
    name: "Linear Missile Launcher",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 35,
    type: "S",
    properties: [],
    damage: 3600,
    range: [1,6],
    hit: 50,
    terrain: "AABA",
    ammo: 15,
    en: 0,
    crit: 20,
    will: 0,
    category: "Missile",
    skill: "",
  },
  {
    name: "Stealth Wing",
    upgradeRate: "M",
    upgradeCost: "M",
    wpSpace: 40,
    type: "S",
    properties: ["P"],
    damage: 3900,
    range: [3,5],
    hit: 55,
    terrain: "SSSS",
    ammo: 0,
    en: 0,
    crit: 30,
    will: 0,
    category: "Remote",
    skill: "",
  },
  {
    name: "Mind Blast",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 35,
    type: "",
    properties: ["P"],
    damage: 1800,
    range: [1,4],
    hit: 70,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 0,
    will: 0,
    category: "Anti-Spirit",
    skill: "",
  },
  {
    name: "Spider Net",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 30,
    type: "",
    properties: ["P"],
    damage: 2000,
    range: [1,4],
    hit: 70,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 0,
    will: 0,
    category: "Net",
    skill: "",
  },
  {
    name: "Chaff Grenade",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 30,
    type: "",
    properties: [],
    damage: 2100,
    range: [1,6],
    hit: 70,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 0,
    will: 0,
    category: "Hit Lower",
    skill: "",
  },
  {
    name: "Armor Breaker",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 40,
    type: "",
    properties: [],
    damage: 2000,
    range: [1,6],
    hit: 70,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 0,
    will: 0,
    category: "Armor Break",
    skill: "",
  },
  {
    name: "Weapon Breaker",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 20,
    type: "",
    properties: [],
    damage: 2000,
    range: [1,6],
    hit: 70,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 0,
    will: 0,
    category: "Weapon Break",
    skill: "",
  },
  {
    name: "Energy Taker",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 15,
    type: "",
    properties: [],
    damage: 1700,
    range: [1,6],
    hit: 70,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 0,
    will: 0,
    category: "EN Absorb",
    skill: "",
  },
  {
    name: "Energy Taker+",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 15,
    type: "",
    properties: [],
    damage: 2000,
    range: [1,5],
    hit: 50,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 10,
    will: 0,
    category: "EN Absorb+",
    skill: "",
  },
  {
    name: "Energy Drain",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 15,
    type: "",
    properties: [],
    damage: 1700,
    range: [1,6],
    hit: 70,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 0,
    will: 0,
    category: "EN Drain",
    skill: "",
  },
  {
    name: "Energy Drain+",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 15,
    type: "",
    properties: [],
    damage: 2000,
    range: [1,5],
    hit: 50,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 10,
    will: 0,
    category: "EN Drain+",
    skill: "",
  },
  {
    name: "Spirit Taker",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 15,
    type: "",
    properties: [],
    damage: 1700,
    range: [1,6],
    hit: 70,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 0,
    will: 0,
    category: "SP Absorb",
    skill: "",
  },
  {
    name: "Spirit Taker+",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 15,
    type: "",
    properties: [],
    damage: 2000,
    range: [1,5],
    hit: 50,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 10,
    will: 0,
    category: "SP Absorb+",
    skill: "",
  },
  {
    name: "Spirit Drain",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 15,
    type: "",
    properties: [],
    damage: 1700,
    range: [1,6],
    hit: 70,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 0,
    will: 0,
    category: "SP Drain",
    skill: "",
  },
  {
    name: "Energy SP+",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 15,
    type: "",
    properties: [],
    damage: 2000,
    range: [1,5],
    hit: 50,
    terrain: "AAAA",
    ammo: 2,
    en: 0,
    crit: 10,
    will: 0,
    category: "SP Drain+",
    skill: "",
  },
  {
    name: "Repair Module",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 5,
    type: "",
    properties: ["Repair"],
    damage: 0,
    range: [1,1],
    hit: 0,
    terrain: "DDDD",
    ammo: 1,
    en: 0,
    crit: 0,
    will: 0,
    category: "Repair",
    skill: "",
  },
  {
    name: "Supply Module",
    upgradeRate: "",
    upgradeCost: "",
    wpSpace: 5,
    type: "",
    properties: ["Supply"],
    damage: 0,
    range: [1,1],
    hit: 0,
    terrain: "DDDD",
    ammo: 1,
    en: 0,
    crit: 0,
    will: 0,
    category: "Supply",
    skill: "",
  }
  
];