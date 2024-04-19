/* eslint-disable @typescript-eslint/naming-convention */
import {
  TrackClient,
  RegionUS,
  APIClient,
  SendEmailRequest,
} from 'customerio-node';

import type { TransactionalEmailArgs } from '../types/customerio';

export const createCioApiClient = async (
  apiKey: string,
): Promise<APIClient> => {
  return new APIClient(apiKey, {
    region: RegionUS,
  });
};

export const createCioTrackClient = async (
  siteId: string,
  apiKey: string,
): Promise<TrackClient> => {
  return new TrackClient(siteId, apiKey, {
    region: RegionUS,
  });
};

export const sendTransactionalEmail = async <
  TransactionalEmailTemplateId extends keyof TransactionalEmailArgs,
>(
  to: string,
  messageId: TransactionalEmailTemplateId,
  data: TransactionalEmailArgs[TransactionalEmailTemplateId],
  apiKey: string,
) => {
  const cio = await createCioApiClient(apiKey);

  const params = new SendEmailRequest({
    transactional_message_id: messageId as string,
    to,
    identifiers: {
      email: to,
    },
    message_data: data,
    reply_to: 'hello@normalfinance.io',
    tracked: true,
  });

  return await cio.sendEmail(params);
};
