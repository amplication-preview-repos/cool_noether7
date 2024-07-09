import { SortOrder } from "../../util/SortOrder";

export type CampaignOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  goal?: SortOrder;
  owner?: SortOrder;
};
