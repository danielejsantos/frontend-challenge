import { Opportunity } from '../pages/Home/Opportunities/types';
import { Asset } from '../pages/Home/Assets/types';

export interface Finances {
  opportunities: Opportunity[];
  credit: {
    granted: string;
    available: string;
  },
  assets: Asset[]
}