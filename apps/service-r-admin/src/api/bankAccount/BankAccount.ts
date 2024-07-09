import { User } from "../user/User";

export type BankAccount = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  stripeBankAccountId: string | null;
  plaidBankAccountId: string | null;
  user?: User | null;
};
