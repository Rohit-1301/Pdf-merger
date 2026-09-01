import { GraphQLResolveInfo } from 'graphql';

/**
 * Resolver for Query.healthCheck
 * Description: Base healthcheck endpoint.
 * TODO: Implement actual business logic here.
 */
export const healthCheck = async (
  parent: any,
  args: any,
  context: any,
  info: GraphQLResolveInfo
) => {
  // TODO: Add database lookup, validation, etc.
  return "GraphQL Server is running smoothly!";
};
