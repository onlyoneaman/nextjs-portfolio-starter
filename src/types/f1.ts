type RaceSession = {
  name: string;
  time: string;
  endTime?: string;
};

type RaceResult = {
  position: number;
  driver_id: string;
  team_id: string;
  points: number;
  status?: string;
};

type Race = {
  name: string;
  id: string;
  circuit: string;
  location: string;
  date: string;
  sessions: RaceSession[];
  results?: RaceResult[];
};

type TeamData = {
  name: string;
  id: string;
};

type DriverData = {
  name: string;
  team_id: string;
  id: string;
  rookie?: boolean;
};

type DriverStanding = {
  position: number;
  driver_id: string;
  points: number;
};

type FullDriver = DriverStanding & {
  driver: DriverData;
  team: TeamData;
}

type ConstructorStanding = {
  position: number;
  constructor_id: string;
  points: number;
};

type FullConstructor = ConstructorStanding & {
  team: TeamData;
}

type F1Data = {
  races: Race[];
  currentRaceIndex: string;
  driverStandings: FullDriver[];
  constructorStandings: FullConstructor[];
};

export type {
  DriverData,
  TeamData,
  DriverStanding,
  ConstructorStanding,
  F1Data,
  Race,
  RaceResult,
  RaceSession,
  FullDriver,
  FullConstructor
};
