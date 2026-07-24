type TTSModel = {
  [key: string]: any;
  id: string;
  provider: string;
  name: string;
  description: string;
  pricePerMillion: number;
  freeAllowance?: {
    type: 'characters' | 'minutes' | 'credits';
    amount: number;
  };
  basicPlan?: {
    type: 'characters' | 'minutes' | 'hours' | 'seconds';
    amount: number;
    price: number;
  };
}

export type {
  TTSModel
};
