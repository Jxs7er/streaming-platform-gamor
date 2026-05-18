export const games = [
  {
    id: "fortnite",
    name: "Fortnite",
    image: [
      `${process.env.BACKEND_URL}/api/v1/images/fortnite.jpg`,
      `${process.env.BACKEND_URL}/api/v1/images/fortnite2.jpeg`,
      `${process.env.BACKEND_URL}/api/v1/images/fortnite3.jpeg`,
    ],
    video: `${process.env.BACKEND_URL}/api/v1/video/fortnite-video.mp4`,
    playersOnline: 5200,
    season: 6,
    mood: "Battle Royale",
    searches: [
      {
        id: 1,
        type: "match",
        team: "Deadline",
        players: [{ name: "Adam" }, { name: "Killer" }, { name: "Smith" }],
      },
      {
        id: 2,
        type: "match",
        team: "Storm Riders",
        players: [{ name: "Neo" }, { name: "Viper" }],
      },
      {
        id: 3,
        type: "party",
        team: "Build Masters",
        players: [{ name: "Luna" }, { name: "Echo" }, { name: "Blaze" }],
      },
      {
        id: 4,
        type: "streams",
        team: "Zero Builders",
        players: [{ name: "Ghost" }, { name: "Nova" }],
      },
      {
        id: 5,
        type: "match",
        team: "Sky Fighters",
        players: [{ name: "Ray" }, { name: "Storm" }, { name: "Ice" }],
      },
    ],
  },

  {
    id: "valorant",
    name: "Valorant",
    image: [
      `${process.env.BACKEND_URL}/api/v1/images/valorant.jpg`,
      `${process.env.BACKEND_URL}/api/v1/images/valorant2.jpeg`,
      `${process.env.BACKEND_URL}/api/v1/images/valorant3.jpeg`,
    ],
    video: `${process.env.BACKEND_URL}/api/v1/video/valorant-video.mp4`,
    playersOnline: 4100,
    season: 9,
    mood: "Tactical Shooter",
    searches: [
      {
        id: 1,
        type: "match",
        team: "Radiant Squad",
        players: [{ name: "Jett" }, { name: "Sage" }, { name: "Phoenix" }],
      },
      {
        id: 2,
        type: "match",
        team: "Spike Defenders",
        players: [{ name: "Reyna" }, { name: "Omen" }],
      },
      {
        id: 3,
        type: "party",
        team: "AIM Gods",
        players: [{ name: "Viper" }, { name: "Chamber" }, { name: "Skye" }],
      },
      {
        id: 4,
        type: "streams",
        team: "No Scope Crew",
        players: [{ name: "Fade" }, { name: "Kayo" }],
      },
      {
        id: 5,
        type: "match",
        team: "Neon Rush",
        players: [{ name: "Neon" }, { name: "Brimstone" }, { name: "Cypher" }],
      },
    ],
  },

  {
    id: "csgo",
    name: "Counter-Strike 2",
    image: [
      `${process.env.BACKEND_URL}/api/v1/images/cs2.jpg`,
      `${process.env.BACKEND_URL}/api/v1/images/cs2.2.jpeg`,
      `${process.env.BACKEND_URL}/api/v1/images/cs2.3.jpeg`,
    ],
    video: `${process.env.BACKEND_URL}/api/v1/video/cs2-video.mp4`,
    playersOnline: 3800,
    season: 3,
    mood: "Competitive FPS",
    searches: [
      {
        id: 1,
        type: "match",
        team: "Terror Elite",
        players: [{ name: "Dust" }, { name: "Flash" }, { name: "Smoke" }],
      },
      {
        id: 2,
        type: "match",
        team: "CT Guardians",
        players: [{ name: "Ace" }, { name: "Hawk" }, { name: "Frost" }],
      },
      {
        id: 3,
        type: "party",
        team: "Headshot Kings",
        players: [{ name: "Bolt" }, { name: "Rex" }],
      },
      {
        id: 4,
        type: "streams",
        team: "Bomb Defusers",
        players: [{ name: "Clutch" }, { name: "Rush" }],
      },
      {
        id: 5,
        type: "match",
        team: "Eco Rounders",
        players: [{ name: "Eco" }, { name: "Spray" }, { name: "Tap" }],
      },
    ],
  },

  {
    id: "dota",
    name: "Dota 2",
    image: [
      `${process.env.BACKEND_URL}/api/v1/images/dota2.jpg`,
      `${process.env.BACKEND_URL}/api/v1/images/dota2.2.jpeg`,
      `${process.env.BACKEND_URL}/api/v1/images/dota2.3.jpeg`,
    ],
    video: `${process.env.BACKEND_URL}/api/v1/video/dota2-video.mp4`,
    playersOnline: 2900,
    season: 7,
    mood: "MOBA Strategy",
    searches: [
      {
        id: 1,
        type: "match",
        team: "Ancient Breakers",
        players: [{ name: "Invoker" }, { name: "Druid" }, { name: "Luna" }],
      },
      {
        id: 2,
        type: "match",
        team: "Roshan Hunters",
        players: [{ name: "Axe" }, { name: "Storm" }],
      },
      {
        id: 3,
        type: "party",
        team: "Mid Lords",
        players: [{ name: "Zeus" }, { name: "Ember" }, { name: "Void" }],
      },
      {
        id: 4,
        type: "streams",
        team: "Lane Dominators",
        players: [{ name: "Lion" }, { name: "Tide" }],
      },
      {
        id: 5,
        type: "match",
        team: "GG Pushers",
        players: [{ name: "Puck" }, { name: "Tiny" }, { name: "Sniper" }],
      },
    ],
  },

  {
    id: "warzone",
    name: "COD: Warzone",
    image: [
      `${process.env.BACKEND_URL}/api/v1/images/warzone.jpg`,
      `${process.env.BACKEND_URL}/api/v1/images/warzone2.jpg`,
      `${process.env.BACKEND_URL}/api/v1/images/warzone3.jpg`,
    ],
    video: `${process.env.BACKEND_URL}/api/v1/video/cod-video.mp4`,
    playersOnline: 3400,
    season: 8,
    mood: "Battle Royale",
    searches: [
      {
        id: 1,
        type: "match",
        team: "Drop Zone",
        players: [{ name: "Ghost" }, { name: "Soap" }, { name: "Price" }],
      },
      {
        id: 2,
        type: "match",
        team: "Final Circle",
        players: [{ name: "Raptor" }, { name: "Wraith" }],
      },
      {
        id: 3,
        type: "party",
        team: "Loadout Squad",
        players: [{ name: "Nova" }, { name: "Blitz" }, { name: "Vox" }],
      },
      {
        id: 4,
        type: "streams",
        team: "Rebirth Kings",
        players: [{ name: "Shade" }, { name: "Echo" }],
      },
      {
        id: 5,
        type: "match",
        team: "Zone Survivors",
        players: [{ name: "Ash" }, { name: "Rook" }, { name: "Vex" }],
      },
    ],
  },
];