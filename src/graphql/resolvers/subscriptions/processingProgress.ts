import { pubsub } from '../pubsub';

/**
 * Resolver for Subscription.processingProgress
 * Description: Subscribe to progress details of a processing job.
 * TODO: Implement actual trigger event publishing logic.
 */
export const processingProgress = {
  // TODO: In a production resolver, you would setup standard pubsub topics, auth checks, and return iterator.
  subscribe: (parent: any, args: any) => pubsub.asyncIterator([`PROCESSING_PROGRESS_${args.jobId}`])
};
