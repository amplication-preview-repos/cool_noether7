import { SortOrder } from "../../util/SortOrder";

export type BankAccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  stripeBankAccountId?: SortOrder;
  plaidBankAccountId?: SortOrder;
  userId?: SortOrder;
};
