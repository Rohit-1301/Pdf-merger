import { pubsub } from '../pubsub';

/**
 * Resolver for Subscription.uploadProgress
 * Description: Subscribe to the upload progress of a specific file.
 * TODO: Implement actual trigger event publishing logic.
 */
export const uploadProgress = {
  // TODO: In a production resolver, you would setup standard pubsub topics, auth checks, and return iterator.
  subscribe: (parent: any, args: any) => pubsub.asyncIterator([`UPLOAD_PROGRESS_${args.fileId}`])
};
