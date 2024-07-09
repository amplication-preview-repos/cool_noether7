import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";

export type DonationCreateInput = {
  amount?: number | null;
  donor?: string | null;
  campaign?: CampaignWhereUniqueInput | null;
};
