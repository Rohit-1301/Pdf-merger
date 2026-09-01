import { GraphQLResolveInfo } from 'graphql';

/**
 * Resolver for Query.recentFiles
 * Description: Retrieve recently updated files.
 * TODO: Implement actual business logic here.
 */
export const recentFiles = async (
  parent: any,
  args: any,
  context: any,
  info: GraphQLResolveInfo
) => {
  // TODO: Add database lookup, validation, etc.
  return [
    {
      id: "file-1",
      filename: "invoice.pdf",
      size: 154320,
      mimeType: "application/pdf",
      status: "READY",
      userId: "user-123",
      isFavorite: true,
      isArchived: false,
      url: "https://example.com/files/invoice.pdf",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];
};
