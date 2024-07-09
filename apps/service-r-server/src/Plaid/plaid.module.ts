import { Module } from "@nestjs/common";
import { PlaidService } from "./plaid.service";
import { PlaidController } from "./plaid.controller";
import { PlaidResolver } from "./plaid.resolver";

@Module({
  controllers: [PlaidController],
  providers: [PlaidService, PlaidResolver],
  exports: [PlaidService],
})
export class PlaidModule {}
