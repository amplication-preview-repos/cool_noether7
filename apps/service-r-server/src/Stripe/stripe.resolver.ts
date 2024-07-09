import * as graphql from "@nestjs/graphql";
import { CreateCustomerInput } from "../stripe/CreateCustomerInput";
import { CreateCustomerOutput } from "../stripe/CreateCustomerOutput";
import { StripeService } from "./stripe.service";

export class StripeResolver {
  constructor(protected readonly service: StripeService) {}

  @graphql.Mutation(() => CreateCustomerOutput)
  async CreateCustomer(
    @graphql.Args()
    args: CreateCustomerInput
  ): Promise<CreateCustomerOutput> {
    return this.service.CreateCustomer(args);
  }
}
