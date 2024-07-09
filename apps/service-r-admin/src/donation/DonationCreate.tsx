import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CampaignTitle } from "../campaign/CampaignTitle";

export const DonationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="donor" source="donor" />
        <ReferenceInput
          source="campaign.id"
          reference="Campaign"
          label="campaign"
        >
          <SelectInput optionText={CampaignTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
