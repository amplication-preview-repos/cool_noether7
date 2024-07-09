import { DonationCreateNestedManyWithoutCampaignsInput } from "./DonationCreateNestedManyWithoutCampaignsInput";

export type CampaignCreateInput = {
  title?: string | null;
  description?: string | null;
  goal?: number | null;
  owner?: string | null;
  donations?: DonationCreateNestedManyWithoutCampaignsInput;
};
