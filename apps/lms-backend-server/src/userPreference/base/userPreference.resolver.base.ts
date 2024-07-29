/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserPreference } from "./UserPreference";
import { UserPreferenceCountArgs } from "./UserPreferenceCountArgs";
import { UserPreferenceFindManyArgs } from "./UserPreferenceFindManyArgs";
import { UserPreferenceFindUniqueArgs } from "./UserPreferenceFindUniqueArgs";
import { CreateUserPreferenceArgs } from "./CreateUserPreferenceArgs";
import { UpdateUserPreferenceArgs } from "./UpdateUserPreferenceArgs";
import { DeleteUserPreferenceArgs } from "./DeleteUserPreferenceArgs";
import { UserPreferenceService } from "../userPreference.service";
@graphql.Resolver(() => UserPreference)
export class UserPreferenceResolverBase {
  constructor(protected readonly service: UserPreferenceService) {}

  async _userPreferencesMeta(
    @graphql.Args() args: UserPreferenceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserPreference])
  async userPreferences(
    @graphql.Args() args: UserPreferenceFindManyArgs
  ): Promise<UserPreference[]> {
    return this.service.userPreferences(args);
  }

  @graphql.Query(() => UserPreference, { nullable: true })
  async userPreference(
    @graphql.Args() args: UserPreferenceFindUniqueArgs
  ): Promise<UserPreference | null> {
    const result = await this.service.userPreference(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserPreference)
  async createUserPreference(
    @graphql.Args() args: CreateUserPreferenceArgs
  ): Promise<UserPreference> {
    return await this.service.createUserPreference({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => UserPreference)
  async updateUserPreference(
    @graphql.Args() args: UpdateUserPreferenceArgs
  ): Promise<UserPreference | null> {
    try {
      return await this.service.updateUserPreference({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserPreference)
  async deleteUserPreference(
    @graphql.Args() args: DeleteUserPreferenceArgs
  ): Promise<UserPreference | null> {
    try {
      return await this.service.deleteUserPreference(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
