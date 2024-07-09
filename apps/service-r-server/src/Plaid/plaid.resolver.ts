import * as graphql from "@nestjs/graphql";
import { AddBankAccountInput } from "../plaid/AddBankAccountInput";
import { AddBankAccountOutput } from "../plaid/AddBankAccountOutput";
import { PlaidService } from "./plaid.service";

export class PlaidResolver {
  constructor(protected readonly service: PlaidService) {}

  @graphql.Mutation(() => AddBankAccountOutput)
  async AddBankAccount(
    @graphql.Args()
    args: AddBankAccountInput
  ): Promise<AddBankAccountOutput> {
    return this.service.AddBankAccount(args);
  }
}
