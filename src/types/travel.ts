type TravelStatusDone = 'done';
type TravelStatusPlanning = 'Planning';

type TravelStatus = TravelStatusDone | TravelStatusPlanning;

type Travel = {
  slug: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  image?: string;
  content: string;
  status: TravelStatus;
  places: string[];
};

export type {
  TravelStatusDone,
  TravelStatusPlanning,
  TravelStatus,
  Travel
}
