import { Campaign } from "../campaign/Campaign";

export type Donation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  donor: string | null;
  campaign?: Campaign | null;
};
