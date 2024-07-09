import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BankAccountCreateInput = {
  stripeBankAccountId?: string | null;
  plaidBankAccountId?: string | null;
  user?: UserWhereUniqueInput | null;
};
