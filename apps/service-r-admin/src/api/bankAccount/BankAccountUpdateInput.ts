import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BankAccountUpdateInput = {
  stripeBankAccountId?: string | null;
  plaidBankAccountId?: string | null;
  user?: UserWhereUniqueInput | null;
};
