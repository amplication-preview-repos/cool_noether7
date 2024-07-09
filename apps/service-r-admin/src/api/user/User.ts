import { JsonValue } from "type-fest";
import { BankAccount } from "../bankAccount/BankAccount";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  bankAccounts?: Array<BankAccount>;
};
