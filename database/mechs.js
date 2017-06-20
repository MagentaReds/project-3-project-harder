//stats [hp, en, mob, arm]
//upgrade [#hp, #en, #mob, #arm]

  var blank = {
    name: "",
    stats: [],
    upgrade: [],
    move: ,
    type: "",
    terrain: "",
    size: "",
    wpSpace: ,
    partSlots: ,
    fub: "",
    abilities: [],
    weapons: [],
    equipedWeapons: []
  }

var battleships = {
  Shirogane: {
    name: "Shirogane",
    stats: [14000, 200, 60, 1200],
    upgrade: [4,5,10,9],
    move: 6,
    type: "Air/Wtr",
    terrain: "AAAA",
    size: "LL",
    fub: "Armor +20%",
    wpSpace: 10,
    partSlots: 2,
    abilities: ["EN Regen (L)", "E Field"],
    weapons: ["AA Autocannon", "Spider Net", "Weaponbreaker", "Chaff Grenade", "Torpedo", "Homing Missile", "Sub Cannon", "Impact Cannon"],
    equipedWeapons: []
  },
  Hagane_1: {
    name: "Hagane (Shiro Type)",
    stats: [14000, 200, 60, 1200],
    upgrade: [4,5,10,9],
    move: 6,
    type: "Air/Wtr",
    terrain: "AAAA",
    size: "LL",
    wpSpace: 10,
    partSlots: 2,
    fub: "Armor +20%",
    abilities: ["E Field"],
    weapons: ["AA Autocannon", "Chaff Grenade", "Torpedo", "Homing Missile", "Sub Cannon", "Impact Cannon"],
    equipedWeapons: []
  },
  Hagane_2: {
    name: "Hagane",
    stats: [15000,220,60,1230],
    upgrade: [4,5,10,9],
    move: 6,
    type: "Air/Wtr",
    terrain: "AAAA",
    size: "LL",
    wpSpace: 10,
    partSlots: 2,
    fub: "Armor +20%",
    abilities: ["E Field'"],
    weapons: ["AA Autocannon", "Chaff Grenade", "Torpedo", "Sub Cannon", "Impact Cannon", "Tronium Cannon"],
    equipedWeapons: []
  },
  Kurogane: {
    name: "Kurogane",
    stats: [16000, 220, 65, 1500],
    upgrade: [4,5,10,9],
    move: 6,
    type: "Air/Wtr/UndGnd",
    terrain: "AAAA",
    size: "LL",
    wpSpace: 10,
    partSlots: 2,
    fub: "Armor +20%",
    abilities: ["E Field"],
    weapons: ["AA Autocannon", "Chaff Grenade", "Torpedo", "Homing Missile", "Sub Cannon", "Impact Cannon", "Titanic Drill"],
    equipedWeapons: []
  },
  Hiyru_Custom: {
    name: "Hiryu Custom",
    stats: [14000, 210, 65, 1300],
    upgrade: [4,6,10,9],
    move: 6,
    type: "Air/Wtr",
    terrain: "ABAS",
    size: "LL",
    wpSpace: 10,
    partSlots: 2,
    fub: "Weapon Accuracy +20%",
    abilities: ["E Field"],
    weapons: ["AA Autocannon", "Homing Missile", "Long Range Missile", "Dual Beam Cannon", "Gravity Cannon"],
    equipedWeapons: []
  }
}

var ptx = {
  Gespenst_Kai: {
    name: "Gespenst MKII-M (Kai)",
    stats: [3700, 100, 100, 1100],
    upgrade: [10,10,10,10],
    move: 5,
    type: "Grd/Wtr",
    terrain: "AAAA",
    size: "M",
    wpSpace: 170,
    partSlots: 4,
    fub: "All Terrains (except Air) S",
    abilities: [],
    weapons: ["Split Missile", "Jet Magnum"],
    equipedWeapons: ["M95 Machine Gun", "Plasma Slicer"]
  },
  Gespenst_Katina: {
    name: "Gespenst MKII-M (Katina)",
    stats: [3700, 100, 95, 1100],
    upgrade: [10,10,10,10],
    move: 5,
    type: "Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 170,
    partSlots: 4,
    fub: "Armor and HP +15%",
    abilities: [],
    weapons: ["Split Missile", "Jet Magnum"],
    equipedWeapons: ["Plasma Slicer", "M13 Shotgun"]
  },
  Gespenst_Russel: {
    name: "Gespenst MKII-M (Russel)",
    stats: [3800, 100, 95, 1100],
    upgrade: [10,10,10,10],
    move: 5,
    type: "Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 170,
    partSlots: 4,
    fub: "Armor +20%",
    abilities: [],
    weapons: ["Split Missile", "Jet Magnum"],
    equipedWeapons: ["M95 Machine Gun", "Plasma Slicer"]
  },
  Gespenst_R: {
    name: "Gespenst MkII-R",
    stats: [3700, 120, 110, 1200],
    upgrade: [10,10,8,10],
    move: 6,
    type: "Grd/Wtr",
    terrain: "SSAS",
    size: "M",
    wpSpace: 180,
    partSlots: 4,
    fub: "Mobility +15% and HP +20%",
    abilities: ["Beam Coat"],
    weapons: ["Split Missile"],
    equipedWeapons: ["Plasma Cutter", "Chakram Caster", "Slash Ripper", "Double Magna Rifle", "Graviton Cannon"]
  },
  Gespenst_S: {
    name: "Gespenst MkII-S",
    stats: [4400, 200, 105, 1700],
    upgrade: [10,10,8,10],
    move: 6,
    type: "Air/Grd/Wtr",
    terrain: "SSAS",
    size: "M",
    wpSpace: 170,
    partSlots: 4,
    fub: "HP +20% and EN +15%",
    abilities: ["AB Field"],
    weapons: ["Split Missile", "Mega Blaster", "Yell! Gespenst Kick!"],
    equipedWeapons: []
  },
  Gespenst: {
    name: "Gespenst",
    stats: [3600, 140, 110, 1200],
    upgrade: [10,10,8,10],
    move: 6,
    type: "Air/Grd/Wtr",
    terrain: "SSAS",
    size: "M",
    wpSpace: 170,
    partSlots: 4,
    fub: "I Weapon Ammo +4",
    abilities: ["Beam Coat"],
    weapons: ["Split Missile", "Neutron Beam"],
    equipedWeapons: ["Weapon Breaker", "Plasma Slicer", "Rectangle Launcher", "Remote Slasher", "M90 Assault Machine Gun"]
  },
  Alteisen: {
    name: "Alteisen",
    stats: [4500, 110, 95, 1600],
    upgrade: [6,8,8,7],
    move: 6,
    type: "Grd/Wtr",
    terrain: "ASAA",
    size: "M",
    wpSpace: 90,
    partSlots: 2,
    fub: "All Weapon Terrains S",
    abilities: ["Beam Coat"],
    weapons: ["Autocannon", "Heat Horn", "Revolver Stake", "Heavy Claymore", '"Trump Card"'],
    equipedWeapons: []
  },
  Alteisen_Riese: {
    name: "Alteisen Riese",
    stats: [6929, 130, 110, 1911],
    upgrade: [6, 8, 8, 7],
    move: 7,
    type: "Grd/Wtr",
    terrain: "ASAS",
    size: "M",
    wpSpace: 100,
    partSlots: 2,
    fub: "All Weapon Terrains S",
    abilities: ["Beam Coat"],
    weapons: ["5-Barrel Machine Cannon", "Plasma Horn", "Revolving Bunker", "Avalanche Claymore", "Aerial Claymore"],
    equipedWeapons: []
  },
  Weissritter: {
    name: "Wiessritter",
    stats: [4100, 120, 115, 900],
    upgrade: [8,8,5,10],
    move: 7,
    type: "Air/Grd",
    terrain: "AACS",
    size: "M",
    wpSpace: 90,
    partSlots: 2,
    fub: "I Weapon Ammo +2",
    abilities: ["Beam Coat"],
    weapons: ["Split Missile", "Beam Cannon", "Oxtongue Rifle E", "Oxtongue Rifile B", "Oxtongue Rifile W"],
    equipedWeapons: ["Plasma Slicer"]
  },
  Rein_Weissritter: {
    name: "Rein Weissritter",
    stats: [5100, 140, 125, 1100],
    upgrade: [8,8,5,10],
    move: 8,
    type: "Air/Grd",
    terrain: "SACS",
    size: "M",
    wpSpace: 100,
    partSlots: 2,
    fub: "I Weapon Ammo +2",
    abilities: ["Beam Coat", "HP Recovery (S)"],
    weapons: ["Split Missile", "3-Barrel Beam Cannon", "Howling Launcher E", "Howling Launher B", "Howling Launher X"],
    equipedWeapons: []
  },
  Schutzwald: {
    name: "Schutzwald",
    stats: [4400, 150, 85, 1600],
    upgrade: [10,10,10,10],
    move: 5,
    type: "Grd/Wtr",
    terrain: "AABA",
    size: "M",
    wpSpace: 170,
    partSlots: 4,
    fub: "AB Field",
    abilities: [],
    weapons: ["Gatling Gun", "Autocannon", "Twin Geam Cannon"],
    equipedWeapons: ["Plasma Sliver", "G-Railgun"]
  },
  R_Blade: {
    name: "R-Blade",
    stats: [3500, 120, 115, 1200],
    upgrade: [7,8,6,9],
    move: 6,
    type: "Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 170,
    partSlots: 4,
    fub: "W Space +30",
    abilities: [],
    weapons: ["Gatling Gun", "Blade Tonfa"],
    equipedWeapons: ["G-Revolver", "G-Railgun"]
  },
  Wildwurger: {
    name: "Wildwurger",
    stats: [4200, 150, 120, 1600],
    upgrade: [7,7,5,9],
    move: 6,
    type: "Air/Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 110,
    partSlots: 2,
    fub: "Mobility and Armor +15%",
    abilities: [],
    weapons: ["3-Barrel Gatling Cannon", "Cold Metal Sword", "Stag Beetle Crusher", "Raptor Wings"],
    equipedWeapons: ["M90 Assault Machine Gun"]
  },
  Wildwurger_L: {
    name: "Wildwurger-L",
    stats: [4200, 150, 120, 1600],
    upgrade: [10,10,10,10],
    move: 6,
    type: "Air/Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 140,
    partSlots: 3,
    fub: "Mobility and Armor +15%",
    abilities: [],
    weapons: ["Stun Shock", "3-Barrel Gatling Cannon", "M90 Assault Machine Gun", "Cold Metal Sword", "Stag Beetle Crusher", "Raptor Wings"],
    equipedWeapons: []
  },
  Wildfalken: {
    name: "Wildfalken",
    stats: [4000, 140, 130, 1100],
    upgrade: [7,7,5,9],
    move: 7,
    type: "Air/Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 100,
    partSlots: 2,
    fub: "I Weapon Ammo +2",
    abilities: [],
    weapons: ["Gatling Gun", "Split Missile", "Oxtongue Rifle E", "Oxtongue Rifle B", "Oxtongue Rifle W"],
    equipedWeapons: ["Roche Saber"]
  }
};

var rtx = {
  Huckebein_II: {
    name: "Huckebein MKII",
    stats: [4000, 130, 115, 1200],
    upgrade: [8,9,6,9],
    move: 6,
    type: "Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 130,
    partSlots: 3,
    fub: "W Space +50",
    abilities: ["G Wall"],
    weapons: ["Gatling Gun", "G-Impact Cannon"],
    equipedWeapons: ["Beam Sword" , "Photon Rifle", "Chakram Caster"]
  },
  Huckebein_IIM: {
    name: "Huckebein MkII-M",
    stats: [4000, 130, 115, 1200],
    upgrade: [8,9,6,9],
    move: 6,
    type: "Air/Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 130,
    partSlots: 3,
    fub: "W Space +30",
    abilities: [],
    weapons: ["Gatling Gun"],
    equipedWeapons: ["Beam Sword", "Photon Rifle", "Rectangle Launcher"]
  },
  Huckebein: {
    name: "Huckebein",
    stats: [3900, 150, 120, 1200],
    upgrade: [8,10,6,9],
    move: 6,
    type: "Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 120,
    partSlots: 2,
    fub: "W Space +40 and EN +20%",
    abilities: ["AB Field", "Double Image"],
    weapons: ["Gatling Gun", "Black Hole Cannon"],
    equipedWeapons: ["Roche Saber", "Magna Beam Rifile", "Remote Slasher"]
  },
  Huckebein_III_L: {
    name: "Huckebein MIII-L",
    stats: [4100, 160, 120, 1300],
    upgrade: [7,7,5,9],
    move: 6,
    type: "Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 130,
    partSlots: 2,
    fub: "Armor and EN +10%",
    abilities: ["G Territory", "Double Image"],
    weapons: ["Gatling Gun", "Multi-Trace Missiles", "Fang Slasher", "Graviton Rifle"],
    equipedWeapons: ["Roche Saber"]
  },
  Huckebein_III_T: {
    name: "Huckebeing MIII-T",
    stats: [4100, 160, 120, 1300],
    upgrade: [7,7,5,9],
    move: 6,
    type: "Air/Grd",
    terrain: "AAAA",
    size: "M",
    wpSpace: 130,
    partSlots: 2,
    fub: "Armor and EN +10%",
    abilities: ["G Territory", "Double Image"],
    weapons: ["Gatling Gun", "Fang Slasher", "Graviton Rifle"],
    equipedWeapons: ["Roche Saber", "Remote Slasher", "Boosted Rifle"]
  },
  Huckebein_III_R: {
    name: "Huckebein MIII-R",
    stats: [4100, 160, 120, 1300],
    upgrade: [7,7,5,9],
    move: 6,
    type: "Air/Grd",
    terrain: "AAAA",
    size: "M",
    wpSpace: 130,
    partSlots: 2,
    fub: "Armor and EN +10%",
    abilities: ["G Territory", "Double Image"],
    weapons: ["Gatling Gun", "Multitrace Missile", "Fang Slasher", "Graviton Rifile"],
    equipedWeapons: ["Photon Rifle, Roche Saber, Remote Slasher, Boosted Rifle"]
  },
  Huckebein_Gunner_L: {
    name: "Huckebein Gunner-L",
    stats: [4800, 180, 130, 1300],
    upgrade: [7,7,5,9],
    move: 9,
    type: "Air",
    terrain: "SABS",
    size: "M",
    wpSpace: 0,
    partSlots: 2,
    fub: "Armor and EN +10%",
    abilities: ["G Territory"],
    weapons: ["Gatling Gun", "Multi-Trace Missile", "Rip Missile", "Graviton Rifle", "Full Impact Cannon"],
    equipedWeapons: []
  },
  Huckebein_Gunner_R: {
    name: "Huckebein Gunner-R",
    stats: [4800, 180, 130, 1300],
    upgrade: [7,7,5,9],
    move: 9,
    type: "Air",
    terrain: "SABS",
    size: "M",
    wpSpace: 0,
    partSlots: 2,
    fub: "Armor and EN +10%",
    abilities: ["G Territory"],
    weapons: ["Gatling Gun", "Multi-Trace Missile", "Rip Missile", "Graviton Rifle", "Full Impact Cannon"],
    equipedWeapons: []
  },
  Huckebein_Boxer_L: {
    name: "Huckebein Boxer-L",
    stats: [5700, 249, 125, 1955],
    upgrade: [7,7,5,9],
    move: 7,
    type: "Grd/Wtr",
    terrain: "ASBS",
    size: "M",
    wpSpace: 130,
    partSlots: 2,
    fub: "Armor and EN +10%",
    abilities: ["G Territory", "Double Image"],
    weapons: ["Gatling Gun", "Graviton Cannon", "Fang Slasher", "Geist Knuckle", "G-Sword Diver"],
    equipedWeapons: []
  },
  Huckebein_Boxer_R: {
    name: "Huckebein Boxer-R",
    stats: [5700, 249, 125, 1955],
    upgrade: [7,7,5,9],
    move: 7,
    type: "Grd/Wtr",
    terrain: "ASBS",
    size: "M",
    wpSpace: 130,
    partSlots: 2,
    fub: "Armor and EN +10%",
    abilities: ["G Territory", "Double Image"],
    weapons: ["Gatling Gun", "Graviton Cannon", "Fang Slasher", "Geist Knuckle", "G-Sword Diver"],
    equipedWeapons: []
  },
  AM_Gunner: {
    name: "AM Gunner",
    stats: [4400, 200, 130, 1100],
    upgrade: [8,8,5,9],
    move: 9,
    type: "Air",
    terrain: "SABS",
    size: "M",
    wpSpace: 10,
    partSlots: 3,
    fub: "EN +15%",
    abilities: ["G Territory"],
    weapons: ["Homing Missile", "Rip Missile", "G-Impact Cannon"],
    equipedWeapons: []
  }
};

var srg_dgg = {
  Grungust: {
    name: "Grungust",
    stats: [7500, 180, 75, 1800],
    upgrade: [5,5,10,5],
    move: 5,
    type: "Grd",
    terrain: "AAAA",
    size: "L",
    wpSpace: 0,
    partSlots: 2,
    fub: "All Weapons +200",
    abilities: ["Change: Wing Gust", "Change: Gust Lander"],
    weapons: ["Boost Knuckle", "Final Beam", "Calamity Sword", "Darkness Slash"],
    equipedWeapons: []
  },
  Wing_Gust: {
    name: "Wing Gust",
    stats: [7500, 180, 85, 1700],
    upgrade: [5,5,10,5],
    move: 7,
    type: "Air",
    terrain: "SBCS",
    size: "L",
    wpSpace: 0,
    partSlots: 2,
    fub: "All Weapons +200",
    abilities: ["Change: Grungust", "Change: Gust Lander"],
    weapons: ["Double Omega Laser", "Spiral Attack", "Missile"],
    equipedWeapons: []
  },
  Gust_Lander: {
    name: "Gust Lander",
    stats: [7500, 180, 70, 1900],
    upgrade: [5,5,10,5],
    move: 6,
    type: "Grd/Wtr",
    terrain: "ASAC",
    size: "L",
    wpSpace: 0,
    partSlots: 2,
    fub: "All Weapons +200",
    abilities: ["Change: Grungust", "Change: Wing Gust"],
    weapons: ["Missile", "Omega Cannon", "Drill Attack"],
    equipedWeapons: []
  },
  Grungust_2: {
    name: "Grungust Type 2",
    stats: [7000, 190, 85, 1700],
    upgrade: [6,6,10,6],
    move: 6,
    type: "Grd",
    terrain: "AABA",
    size: "L",
    wpSpace: 0,
    partSlots: 2,
    fub: "TK Field absorb +300 damage",
    abilities: ["TK Field", "Change: G-Wing"],
    weapons: ["Eye Laser", "Boost Knuckle", "Maxiblaster", "Doom Blade"],
    equipedWeapons: []
  },
  G_Hawk: {
    name: "G-Hawk",
    stats: [7000, 190, 95, 1600],
    upgrade: [6,6,10,6],
    move: 8,
    type: "Air",
    terrain: "SBCS",
    size: "L",
    wpSpace: 0,
    partSlots: 2,
    fub: "TK Field absorb +300 damage",
    abilities: ["TK Field", "Change: Grungust Type 2"],
    weapons: ["Eye Laser", "Split Missile", "Spiral Attack"],
    equipedWeapons: []
  },
  Grungust_3: {
    name: "Grungust Type 3",
    stats: [8300, 210, 90, 1800],
    upgrade: [5,5,10,5],
    move: 6,
    type: "Grd",
    terrain: "ASBA",
    size: "L",
    wpSpace: 0,
    partSlots: 2,
    fub: "All Weapons +200",
    abilities: [],
    weapons: ["Armor Breaker", "Eye Laser", "Drill Boost Knuckle", "Omega Blaster", "Sanshiki Zankantou: Ichimonjigiri"],
    equipedWeapons: []
  },
  Ryukooh: {
    name: "Ryukooh",
    stats: [8300, 210, 95, 1500],
    upgrade: [5,5,10,5],
    move: 6,
    type: "Air/Grd/Wtr",
    terrain: "SBAA",
    size: "L",
    wpSpace: 0,
    partSlots: 1,
    fub: "EN Regen (S)",
    abilities: ["TK Field", "HP Regen (S)", "Change: Koryuoh"],
    weapons: ["Bakuraifu", "Magma Burst", "Mountain Pressure", "Dragoon Blade", "Dragon Fang"],
    equipedWeapons: []
  },
  Koryuoh: {
    name: "Koryuoh",
    stats: [8300, 210, 115, 1300],
    upgrade: [5,5,10,5],
    move: 8,
    type: "Grd",
    terrain: "ASBA",
    size: "L",
    wpSpace: 0,
    partSlots: 1,
    fub: "EN Regen (S)",
    abilities: ["TK Field", "HP Regen (S)", "Double Image", "Change: Ryukooh"],
    weapons: ["Tiger Knuckle", "Random Spike", "Sonic Javelin", "Tyrant Breaker"],
    equipedWeapons: []
  },
  Dygenguard: {
    name: "Dygenguard",
    stats: [7800, 190, 100, 1900],
    upgrade: [5,5,10,5],
    move: 6,
    type: "Air/Grd",
    terrain: "ASBA",
    size: "L",
    wpSpace: 0,
    partSlots: 1,
    fub: "All Melee Weapons +200",
    abilities: [],
    weapons: ["Colossal Burst", "Colossal Spinner", "Colossal Thunder", "Colossal Storm"],
    equipedWeapons: []
  },
  Ausenseiter: {
    name: "Ausenseiter",
    stats: [7700, 190, 110, 1400],
    upgrade: [5,5,10,5],
    move: 8,
    type: "Air/Grd",
    terrain: "ASAA",
    size: "L",
    wpSpace: 0,
    partSlots: 1,
    fub: "All Ranged Weapons +200",
    abilities: [],
    weapons: ["Schulterplatte", "Lanzerkanone", "Sturmangriff",  "Lanzerganone W"],
    equipedWeapons: []
  }
};

var r_series = {
  R_1: {
    name: "R-1",
    stats: [3800, 120, 115, 1200],
    upgrade: [7,7,5,9],
    move: 6,
    type: "Grd",
    terrain: "ASBA",
    size: "M",
    wpSpace: 130,
    partSlots: 2,
    fub: "Telekenesis Weapons +200",
    abilities: ["TK Field", "Change: R-Wing"],
    weapons: ["Gatling Gun", "T-Link Knuckle", "T-Link Sword"],
    equipedWeapons: ["Steel Knife", "G-Revovler", "Boosted Rifle"]
  },
  R_wing: {
    name: "R-Wing",
    stats: [3800, 120, 125, 1100],
    upgrade: [7,7,5,9],
    move: 8,
    type: "Air",
    terrain: "SBBA",
    size: "M",
    wpSpace: 0,
    partSlots: 2,
    fub: "Telekinesis Weapons +200",
    abilities: ["TK Field", "Chnge: R-1"],
    weapons: ["Anti-Air Missile", "Twin G-Cannon"],
    equipedWeapons: []
  },
  R_2: {
    name: "R-2 Powered",
    stats: [4600, 170, 100, 1700],
    upgrade: [6,7,8,7],
    move: 5,
    type: "Grd/Wtr",
    terrain: "AAAA",
    size: "M",
    wpSpace: 140,
    partSlots: 2,
    fub: "Ranged Weapons +200",
    abilities: ["AB Field"],
    weapons: ["Gatling Gun", "Beam Chakram", "Hi-Zol Launcher"],
    equipedWeapons: ["Beam Sword", "Magna Beam Rifle"]
  },
  R_3: {
    name: "R-3 Powered",
    stats: [4700, 140, 120, 1300],
    upgrade: [8,7,5,9],
    move: 7,
    type: "Air",
    terrain: "SABS",
    size: "M",
    wpSpace: 130,
    partSlots: 3,
    fub: "TK Field absorb +300 damage",
    abilities: ["Tk Field"],
    weapons: ["Gatling Gun", "TK Missile", "TK Laser Cannon", "Strike Shield"],
    equipedWeapons: ["Beam Sword"]
  },
  R_Gun: {
    name: "R-Gun Powered",
    stats: [3700, 180, 125, 1200],
    upgrade: [7,7,5,9],
    move: 6,
    type: "Grd",
    terrain: "ASBS",
    size: "M",
    wpSpace: 120,
    partSlots: 3,
    fub: "EN +20%",
    abilities: ["TK Field"],
    weapons: ["Gatling Gun", "TK Boomerang", "Hyper Twin Launchers"],
    equipedWeapons: ["Double Magna Rifle"]
  },
  SRX: {
    name: "SRX",
    stats: [8200, 250, 85, 1800],
    upgrade: [5,5,8,9],
    move: 5,
    type: "Air/Grd",
    terrain: "SSAS",
    size: "L",
    wpSpace: 0,
    partSlots: 1,
    fub: "Part Slots +1",
    abilities: ["TK Field"],
    weapons: ["Finger Launcher", "Blade Kick", "Dominion Ball", "TK Burst Slash"],
    equipedWeapons: []
  }
};

var am = {
  Guarlion_Custom: {
    name: "Guarlion-Custom",
    stats: [3900, 130, 115, 1300],
    upgrade: [8,8,5,9],
    move: 7,
    type: "Air/Grd/Wtr",
    terrain: "SAAS",
    size: "M",
    wpSpace: 135,
    partSlots: 3,
    fub: "WP Space +30 and EN+10%",
    abilities: [],
    weapons: ["Autocannon", "Sonic Breaker"],
    equipedWeapons: ["Divine Blade", "Burst Railgun"]
  },
  Calion: {
    name: "Calion",
    stats: [3200, 120, 130, 900],
    upgrade: [7,7,5,9],
    move: 7,
    type: "Air",
    terrain: "ABBS",
    size: "S",
    wpSpace: 10,
    partSlots: 3,
    fub: "Mobility +20%",
    abilities: [],
    weapons: ["Anti-Air Missile", "Sonic Cutter", "G-Drive"],
    equipedWeapons: []
  },
  Astelion: {
    name: "Astelion",
    stats: [4200, 140, 135, 1100],
    upgrade: [7,7,5,9],
    move: 8,
    type: "Air/Grd",
    terrain: "ABBS",
    size: "M",
    wpSpace: 130,
    partSlots: 2,
    fub: "Mobilit +20%",
    abilities: [],
    weapons: ["Autocannon", "Sonic Breaker",  "RaMVs"],
    equipedWeapons: ["Assault Blade", "Burst Railgun"]
  },
  Fairlion_S: {
    name: "Fairlion-S",
    stats: [3300, 130, 130, 800],
    upgrade: [7,7,5,9],
    move: 7,
    type: "Air/Grd",
    terrain: "SBCA",
    size: "S",
    wpSpace: 100,
    partSlots: 2,
    fub: "Mobility +20%",
    abilities: ["E Field", "Double Image", "Jammer"],
    weapons: ["Rolling Cannon", "Vostok Laser", "Sonic Driver"],
    equipedWeapons: ["Assault Blade"]
  },
  Fairlion_G: {
    name: "Fairlion-G",
    stats: [3300, 130, 130, 800],
    upgrade: [7,7,5,9],
    move: 7,
    type: "Air/Grd",
    terrain: "SBCA",
    size: "S",
    wpSpace: 100,
    partSlots: 2,
    fub: "Mobility +20%",
    abilities: ["E Field", "Double Image", "Jammer"],
    weapons: ["Rolling Cannon", "Vostok Laser", "Sonic Driver"],
    equipedWeapons: ["Assault Blade"]
  },
  Valsione: {
    name: "Valsione",
    stats: [5300, 170, 120, 1300],
    upgrade: [6,5,6,9],
    move: 6,
    type: "Air/Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 110,
    partSlots: 2,
    fub: "Double Image activation +20%",
    abilities: ["Double Image"],
    weapons: ["Psy-Blaster", "Cross Smasher"],
    equipedWeapons: ["Divine Blade", "Magna Beam Cannon"]
  }
};

var shadow_mirrors = {
  Angelg: {
    name: "Angelg",
    stats: [6200, 180, 90, 1800],
    upgrade: [6,6,10,6],
    move: 7,
    type: "Air/Grd",
    terrain: "AABA",
    size: "L",
    wpSpace: 0,
    partSlots: 2,
    fub: "EN Regen (S)",
    abilities: ["Beam Coat", "Double Image"],
    weapons: ["Shadow Lance", "Mirage Sword", "Illusion Arrow", "Mirage Sign", "Phantom Phoenix"],
    equipedWeapons: []
  },
  Angelg_2: {
    name: "Angelg (Upgrade)",
    stats: [6200, 180, 90, 1800],
    upgrade: [6,6,10,6],
    move: 7,
    type: "Air/Grd",
    terrain: "AABA",
    size: "L",
    wpSpace: 0,
    partSlots: 2,
    fub: "EN Regen (S)",
    abilities: ["Beam Coat", "Double Image", "+200 Weapon Damage"],
    weapons: ["Shadow Lance", "Mirage Sword", "Illusion Arrow", "Mirage Sign", "Phantom Phoenix"],
    equipedWeapons: []
  },
  Vaisaga: {
    name: "Vaisaga",
    stats: [7000, 250, 120, 1900],
    upgrade: [6,6,10,6],
    move: 7,
    type: "Air/Grd",
    terrain: "SSAS",
    size: "L",
    wpSpace: 0,
    partSlots: 2,
    fub: "Double Image activation +20%",
    abilities: ["AB Field", "Double Image", "SplWpn Block"],
    weapons: ["Blazer Blades", "Flowing Claws", "Geo Splitter", "Gust Ripper", "Lite Saber"],
    equipedWeapons: []
  },
  Randgrith: {
    name: "Randgrith",
    stats: [5400, 140, 100, 1800],
    upgrade: [10,10,8,8],
    move: 6,
    type: "Grd/Wtr",
    terrain: "ASAA",
    size: "M",
    wpSpace: 170,
    partSlots: 4,
    fub: "WP Space +30",
    abilities: ["Beam Coat", "Jammer"],
    weapons: ["Spider Net", "Phalanx Missile", "Matrix Missile", "Linear Bazooka"],
    equipedWeapons: ["Incision Knife", "M13 Shotgun"]
  },
  Rathgrith: {
    name: "Rathgrith",
    stats: [5600, 150, 105, 1900],
    upgrade: [7,7,8,7],
    move: 6,
    type: "Grd/Wtr",
    terrain: "ASAA",
    size: "M",
    wpSpace: 180,
    partSlots: 4,
    fub: "WP Space +50",
    abilities: ["Beam Coat", "Jammer"],
    weapons: ["Phalanx Missile", "Linear Missile Launcher", "Matrix Missile", "F-Solid Bazooka"],
    equipedWeapons: ["Incision Knife"]
  },
  Ashsaber: {
    name: "Ashsaber",
    stats: [3800, 190, 125, 1200],
    upgrade: [7,7,6,9],
    move: 8,
    type: "Grd",
    terrain: "ASAS",
    size: "M",
    wpSpace: 150,
    partSlots: 3,
    fub: "Ranged Weapons +200",
    abilities: ["Beam Coating", "Jammer"],
    weapons: ["Burning Dagger", "Halberd Shooter", "Sword Breakers"],
    equipedWeapons: ["Laser Blade", "Gun Rapier"]
  }
};

var misc = {
  Cybuster: {
    name: "Cybuster",
    stats: [5800, 180, 125, 1300],
    upgrade: [5,6,5,9],
    move: 7,
    type: "Air/Grd",
    terrain: "AABA",
    size: "M",
    wpSpace: 0,
    partSlots: 2,
    fub: "Mobility +10% and EN +15%",
    abilities: ["Morale Block", "SP Block", "Change: Cybird"],
    weapons: ["Caloric Missile", "Cy-Flash", "High Familiar", "Zephyr Sword", "Akashic Buster", "Cosmo Nova"],
    equipedWeapons: []
  },
  Cybird: {
    name: "Cybird",
    stats: [5800, 180, 135, 1200],
    upgrade: [5,6,5,9],
    move: 9,
    type: "Air",
    terrain: "SBCS",
    size: "M",
    wpSpace: 0,
    partSlots: 2,
    fub: "Mobility +10% and EN +15%",
    abilities: ["Morale Block", "SP Block", "Change: Cybuster"],
    weapons: ["Cy-Flash", "Caloric Missile", "High Familiar"],
    equipedWeapons: []
  },
  Giganscudo_Duro: {
    name: "Giganscudo Duro",
    stats: [9000, 200, 70, 1900],
    upgrade: [4,6,10,5],
    move: 5,
    type: "Air/Grd",
    terrain: "AACS",
    size: "L",
    wpSpace: 0,
    partSlots: 2,
    fub: "Armor +10% and EN +15%",
    abilities: ["G Territory"],
    weapons: ["Weapon Breaker", "Giga Burst", "Giga Knuckle", "Giga Blaster", "Giga Unghia"],
    equipedWeapons: []
  },
  Lichkeit: {
    name: "Lichkeit",
    stats: [7800, 280, 135, 190],
    upgrade: [10,10,10,10],
    move: 7,
    type: "Air/Grd",
    terrain: "SSAS",
    size: "M",
    wpSpace: 0,
    partSlots: 1,
    fub: "Fixed Weapon Ground rating = S",
    abilities: ["Beam Coat", "HP Regen (S)", "EN Regen (S)", "Double Image", "Break Block"],
    weapons: ["Yomiji", "Mabuitachi", "Raigoue", "Mabuiguri"],
    equipedWeapons: []
  },
  F_32V: {
    name: "F-32V Schwert X",
    stats: [3000, 115, 115, 900],
    upgrade: [10,10,10,10],
    move: 7,
    type: "Air",
    terrain: "SBDA",
    size: "S",
    wpSpace: 10,
    partSlots: 3,
    fub: "Mobility +15%",
    abilities: [],
    weapons: ["Gatling Gun", "Anti-Air Missile"],
    equipedWeapons: []
  }
};