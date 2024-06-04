import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BorrowService } from "./borrow.service";
import { BorrowControllerBase } from "./base/borrow.controller.base";

@swagger.ApiTags("borrows")
@common.Controller("borrows")
export class BorrowController extends BorrowControllerBase {
  constructor(
    protected readonly service: BorrowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
