/**
 * Gift specific events.
 */
export enum GiftEventName {
  // IO
  SubmitGift = 'Submit Gift',
  SubmitGiftRedemption = 'Submit Gift Redemption',

  // API
  GiftCreated = 'Gift Created',
  GiftRedemptionCreated = 'Gift Redemption Created',
  GiftRedemptionSucceeded = 'Gift Redemption Succeeded',
  GiftRedemptionFailed = 'Gift Redemption Failed',
}
