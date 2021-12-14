export enum Games{
    COMBAT_MISSION_COLD_WAR="CMCW",
    COMBAT_MISSION_SHOCK_FORCE_2="CMSF2",
    COMBAT_MISSION_SHOCK_FORCE="CMSF",
    COMBAT_MISSION_BLACK_SEA="CMBS",
    COMBAT_MISSION_RED_THUNDER="CMCW",
    COMBAT_MISSION_FORTRESS_ITALY="CMFI",
    COMBAT_MISSION_FINAL_BLITZKRIEG="CMCW",
    COMBAT_MISSION_BATTLE_NORMANDY="CMBN",
}

export enum GameModes{
    PLAY_BY_EMAIL="PBEM",
    REALTIME="Realtime",
    INTERNET="Internet"
}

export type openGameType = {
    game: Games;
    mode: GameModes;
    map: string;
    gameuuid: string;
    email?: string;
    steamUserName?: string;
  };