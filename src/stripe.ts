import { SubscriptionType } from './subscription';

/**
 * Example function that returns a greeting for the given name.
 *
 * @param nickname - The name to greet.
 * @returns The greeting.
 */
export const parsePlanNickname = (nickname: string): SubscriptionType => {
  if (nickname.toLowerCase() === SubscriptionType.PREMIUM) {
    return SubscriptionType.PREMIUM;
  }
  if (nickname.toLowerCase() === SubscriptionType.ADVANCED) {
    return SubscriptionType.ADVANCED;
  }
  return SubscriptionType.FREE;
};
