import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PlaidService } from "./plaid.service";
import { AddBankAccountInput } from "../plaid/AddBankAccountInput";
import { AddBankAccountOutput } from "../plaid/AddBankAccountOutput";

@swagger.ApiTags("plaids")
@common.Controller("plaids")
export class PlaidController {
  constructor(protected readonly service: PlaidService) {}

  @common.Post("/plaid/bank-accounts")
  @swagger.ApiOkResponse({
    type: AddBankAccountOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddBankAccount(
    @common.Body()
    body: AddBankAccountInput
  ): Promise<AddBankAccountOutput> {
        return this.service.AddBankAccount(body);
      }
}
