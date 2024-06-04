import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LibrarianModuleBase } from "./base/librarian.module.base";
import { LibrarianService } from "./librarian.service";
import { LibrarianController } from "./librarian.controller";
import { LibrarianResolver } from "./librarian.resolver";

@Module({
  imports: [LibrarianModuleBase, forwardRef(() => AuthModule)],
  controllers: [LibrarianController],
  providers: [LibrarianService, LibrarianResolver],
  exports: [LibrarianService],
})
export class LibrarianModule {}
