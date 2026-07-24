export interface HNItem {
  author: string;
  comments: number;
  created_at: string;
  posted_at: string;
  domain: string;
  first_seen_at: string;
  hn_link: string;
  item_id: number;
  last_seen_at: string;
  rank: number;
  score: number;
  streak_count: number;
  title: string;
  total_appearances: number;
  url: string;
  velocity_pts_per_hr: number;
}

export interface HNResponse {
  count: number;
  items: HNItem[];
}

