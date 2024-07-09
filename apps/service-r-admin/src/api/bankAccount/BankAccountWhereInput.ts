import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BankAccountWhereInput = {
  id?: StringFilter;
  stripeBankAccountId?: StringNullableFilter;
  plaidBankAccountId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
