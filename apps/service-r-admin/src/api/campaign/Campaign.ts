import { Donation } from "../donation/Donation";

export type Campaign = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  goal: number | null;
  owner: string | null;
  donations?: Array<Donation>;
};
