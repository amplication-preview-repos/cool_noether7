import { InputJsonValue } from "../../types";
import { BankAccountCreateNestedManyWithoutUsersInput } from "./BankAccountCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  bankAccounts?: BankAccountCreateNestedManyWithoutUsersInput;
};
