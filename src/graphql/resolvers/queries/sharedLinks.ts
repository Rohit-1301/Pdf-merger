import { GraphQLResolveInfo } from 'graphql';

/**
 * Resolver for Query.sharedLinks
 * Description: Retrieve all shared links created by the user.
 * TODO: Implement actual business logic here.
 */
export const sharedLinks = async (
  parent: any,
  args: any,
  context: any,
  info: GraphQLResolveInfo
) => {
  // TODO: Add database lookup, validation, etc.
  return {
    nodes: [
      {
        id: "share-1",
        fileId: "file-1",
        sharedBy: "user-123",
        url: "https://example.com/share/abc123xyz",
        permission: "VIEWER",
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ],
    paginationInfo: {
      page: args.pagination?.page || 1,
      limit: args.pagination?.limit || 10,
      totalCount: 1,
      totalPages: 1,
      hasNextPage: false,
      hasPreviousPage: false
    }
  };
};
