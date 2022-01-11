export enum Games{
    COMBAT_MISSION_COLD_WAR="CMCW",
    COMBAT_MISSION_SHOCK_FORCE_2="CMSF2",
    COMBAT_MISSION_SHOCK_FORCE="CMSF",
    COMBAT_MISSION_BLACK_SEA="CMBS",
    COMBAT_MISSION_RED_THUNDER="CMRT",
    COMBAT_MISSION_FORTRESS_ITALY="CMFI",
    COMBAT_MISSION_FINAL_BLITZKRIEG="CMFB",
    COMBAT_MISSION_BATTLE_NORMANDY="CMBN",
}

export enum GameModes{
    PLAY_BY_EMAIL="PBEM",
    REALTIME="Realtime",
    INTERNET="Internet"
}

export enum GameImages{
    CMCW="https://cdn.akamai.steamstatic.com/steam/apps/1551160/capsule_616x353.jpg?t=163707557",
    CMSF2="https://cdn.akamai.steamstatic.com/steam/apps/1369370/capsule_616x353.jpg?t=1615392986",
    CMSF="https://cdn.akamai.steamstatic.com/steam/apps/1369370/capsule_616x353.jpg?t=1615392986",
    CMBS="https://cdn.akamai.steamstatic.com/steam/apps/1502380/capsule_616x353.jpg?t=1613740496",
    CMRT="https://cdn.akamai.steamstatic.com/steam/apps/1369370/capsule_616x353.jpg?t=1615392986",
    CMFI="https://cdn.akamai.steamstatic.com/steam/apps/1369370/capsule_616x353.jpg?t=1615392986",
    CMFB="https://cdn.akamai.steamstatic.com/steam/apps/1369370/capsule_616x353.jpg?t=1615392986",
    CMBN="https://cdn.akamai.steamstatic.com/steam/apps/1369370/capsule_616x353.jpg?t=1615392986",

}

export enum GameTypes{
    ANY="Any",
    BLU_ATT="BluFor attack",
    OP_ATT="OpFor attack",
    MEETING="Meeting engagement",
}

export type GameType = {
    game: Games;
    method: GameModes;
    modules: string;
    scenario: string;
    type: string;
    id?: string;
    status:boolean;
    gamepw:string;
  };