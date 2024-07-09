import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DonationListRelationFilter } from "../donation/DonationListRelationFilter";

export type CampaignWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  goal?: FloatNullableFilter;
  owner?: StringNullableFilter;
  donations?: DonationListRelationFilter;
};
