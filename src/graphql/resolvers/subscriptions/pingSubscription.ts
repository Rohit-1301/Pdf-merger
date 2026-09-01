import { pubsub } from '../pubsub';

/**
 * Resolver for Subscription.pingSubscription
 * Description: Subscription ping.
 * TODO: Implement actual trigger event publishing logic.
 */
export const pingSubscription = {
  // TODO: In a production resolver, you would setup standard pubsub topics, auth checks, and return iterator.
  subscribe: () => pubsub.asyncIterator(['PING'])
};
