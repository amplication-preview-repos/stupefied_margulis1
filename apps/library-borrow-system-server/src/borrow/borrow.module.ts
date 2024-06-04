import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BorrowModuleBase } from "./base/borrow.module.base";
import { BorrowService } from "./borrow.service";
import { BorrowController } from "./borrow.controller";
import { BorrowResolver } from "./borrow.resolver";

@Module({
  imports: [BorrowModuleBase, forwardRef(() => AuthModule)],
  controllers: [BorrowController],
  providers: [BorrowService, BorrowResolver],
  exports: [BorrowService],
})
export class BorrowModule {}
