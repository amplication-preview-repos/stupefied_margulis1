import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LibrarianServiceBase } from "./base/librarian.service.base";

@Injectable()
export class LibrarianService extends LibrarianServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
