import { Injectable } from "@nestjs/common";
import { CreateCustomerInput } from "../stripe/CreateCustomerInput";
import { CreateCustomerOutput } from "../stripe/CreateCustomerOutput";

@Injectable()
export class StripeService {
  constructor() {}
  async CreateCustomer(args: CreateCustomerInput): Promise<CreateCustomerOutput> {
    throw new Error("Not implemented");
  }
}
