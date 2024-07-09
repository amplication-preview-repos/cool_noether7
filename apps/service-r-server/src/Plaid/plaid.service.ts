import { Injectable } from "@nestjs/common";
import { AddBankAccountInput } from "../plaid/AddBankAccountInput";
import { AddBankAccountOutput } from "../plaid/AddBankAccountOutput";

@Injectable()
export class PlaidService {
  constructor() {}
  async AddBankAccount(args: AddBankAccountInput): Promise<AddBankAccountOutput> {
    throw new Error("Not implemented");
  }
}
