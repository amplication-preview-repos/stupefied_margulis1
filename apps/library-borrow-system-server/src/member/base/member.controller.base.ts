/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MemberService } from "../member.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MemberCreateInput } from "./MemberCreateInput";
import { Member } from "./Member";
import { MemberFindManyArgs } from "./MemberFindManyArgs";
import { MemberWhereUniqueInput } from "./MemberWhereUniqueInput";
import { MemberUpdateInput } from "./MemberUpdateInput";
import { BorrowFindManyArgs } from "../../borrow/base/BorrowFindManyArgs";
import { Borrow } from "../../borrow/base/Borrow";
import { BorrowWhereUniqueInput } from "../../borrow/base/BorrowWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MemberControllerBase {
  constructor(
    protected readonly service: MemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Member })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMember(@common.Body() data: MemberCreateInput): Promise<Member> {
    return await this.service.createMember({
      data: data,
      select: {
        address: true,
        contact: true,
        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Member] })
  @ApiNestedQuery(MemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async members(@common.Req() request: Request): Promise<Member[]> {
    const args = plainToClass(MemberFindManyArgs, request.query);
    return this.service.members({
      ...args,
      select: {
        address: true,
        contact: true,
        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async member(
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Member | null> {
    const result = await this.service.member({
      where: params,
      select: {
        address: true,
        contact: true,
        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMember(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() data: MemberUpdateInput
  ): Promise<Member | null> {
    try {
      return await this.service.updateMember({
        where: params,
        data: data,
        select: {
          address: true,
          contact: true,
          createdAt: true,
          id: true,
          name: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMember(
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Member | null> {
    try {
      return await this.service.deleteMember({
        where: params,
        select: {
          address: true,
          contact: true,
          createdAt: true,
          id: true,
          name: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/borrows")
  @ApiNestedQuery(BorrowFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Borrow",
    action: "read",
    possession: "any",
  })
  async findBorrows(
    @common.Req() request: Request,
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Borrow[]> {
    const query = plainToClass(BorrowFindManyArgs, request.query);
    const results = await this.service.findBorrows(params.id, {
      ...query,
      select: {
        book: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        endDueDate: true,
        id: true,

        member: {
          select: {
            id: true,
          },
        },

        returnDate: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/borrows")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async connectBorrows(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: BorrowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      borrows: {
        connect: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/borrows")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async updateBorrows(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: BorrowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      borrows: {
        set: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/borrows")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async disconnectBorrows(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: BorrowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      borrows: {
        disconnect: body,
      },
    };
    await this.service.updateMember({
      where: params,
      data,
      select: { id: true },
    });
  }
}