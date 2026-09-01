import { GraphQLResolveInfo } from 'graphql';

/**
 * Resolver for Query.storageUsage
 * Description: Retrieve current storage usage details for the user.
 * TODO: Implement actual business logic here.
 */
export const storageUsage = async (
  parent: any,
  args: any,
  context: any,
  info: GraphQLResolveInfo
) => {
  // TODO: Add database lookup, validation, etc.
  return {
    usedBytes: 3606320,
    totalBytes: 10737418240, // 10 GB
    fileCount: 2,
    folderCount: 2
  };
};
