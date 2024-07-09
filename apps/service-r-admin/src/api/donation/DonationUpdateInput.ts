import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";

export type DonationUpdateInput = {
  amount?: number | null;
  donor?: string | null;
  campaign?: CampaignWhereUniqueInput | null;
};
