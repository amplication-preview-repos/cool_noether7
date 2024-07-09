import { InputJsonValue } from "../../types";
import { BankAccountUpdateManyWithoutUsersInput } from "./BankAccountUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  bankAccounts?: BankAccountUpdateManyWithoutUsersInput;
};
