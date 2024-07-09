import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";

export type DonationWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  donor?: StringNullableFilter;
  campaign?: CampaignWhereUniqueInput;
};
