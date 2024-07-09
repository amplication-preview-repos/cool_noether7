import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StripeService } from "./stripe.service";
import { CreateCustomerInput } from "../stripe/CreateCustomerInput";
import { CreateCustomerOutput } from "../stripe/CreateCustomerOutput";

@swagger.ApiTags("stripes")
@common.Controller("stripes")
export class StripeController {
  constructor(protected readonly service: StripeService) {}

  @common.Post("/stripe/customers")
  @swagger.ApiOkResponse({
    type: CreateCustomerOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCustomer(
    @common.Body()
    body: CreateCustomerInput
  ): Promise<CreateCustomerOutput> {
        return this.service.CreateCustomer(body);
      }
}
