import { DonationUpdateManyWithoutCampaignsInput } from "./DonationUpdateManyWithoutCampaignsInput";

export type CampaignUpdateInput = {
  title?: string | null;
  description?: string | null;
  goal?: number | null;
  owner?: string | null;
  donations?: DonationUpdateManyWithoutCampaignsInput;
};
