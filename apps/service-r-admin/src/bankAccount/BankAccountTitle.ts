import { BankAccount as TBankAccount } from "../api/bankAccount/BankAccount";

export const BANKACCOUNT_TITLE_FIELD = "stripeBankAccountId";

export const BankAccountTitle = (record: TBankAccount): string => {
  return record.stripeBankAccountId?.toString() || String(record.id);
};
