import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BorrowServiceBase } from "./base/borrow.service.base";

@Injectable()
export class BorrowService extends BorrowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
