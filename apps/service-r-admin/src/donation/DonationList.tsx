import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CAMPAIGN_TITLE_FIELD } from "../campaign/CampaignTitle";

export const DonationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Donations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="amount" source="amount" />
        <TextField label="donor" source="donor" />
        <ReferenceField
          label="campaign"
          source="campaign.id"
          reference="Campaign"
        >
          <TextField source={CAMPAIGN_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
