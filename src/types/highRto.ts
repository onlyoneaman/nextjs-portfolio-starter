export interface PinRow {
  pincode: number;
  district: string;
  state: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface PinRegionData {
  name: string;
  value: number;
  digit: string;
}

export interface StateRtoPercent {
  state: string;
  highRtoCount: number;
  totalPincodes: number;
  rtoPercent: number;
}
