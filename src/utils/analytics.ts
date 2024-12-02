/* eslint-disable @typescript-eslint/naming-convention */
import {
  TrackClient,
  RegionUS,
  APIClient,
  SendEmailRequest,
} from 'customerio-node';

import type { TransactionalEmailArgs } from '../types/analytics/email';

/**
 * Creates a Customer.io API Client for email sending.
 *
 * @param apiKey - Customer.io API key.
 * @returns A Cusotmer.io API Client.
 */
export const createAPIClient = async (apiKey: string): Promise<APIClient> => {
  return new APIClient(apiKey, {
    region: RegionUS,
  });
};

/**
 * Creates a Customer.io Track Client for page views, events, and property setting.
 *
 * @param siteId - Customer.io Site id.
 * @param apiKey - Customer.io API key.
 * @returns A Cusotmer.io Track Client.
 */
export const createTrackClient = async (
  siteId: string,
  apiKey: string,
): Promise<TrackClient> => {
  return new TrackClient(siteId, apiKey, {
    region: RegionUS,
  });
};

/**
 * Sends a transactional email using a Customer.io template.
 *
 * @param client - A Customer.io API Client.
 * @param to - The to email address.
 * @param templateId - The Customer.io email template id.
 * @param data - Arguments to use inside the email template.
 * @returns The response from client.sendEmail().
 */
export const sendEmail = async <
  TransactionalEmailTemplateId extends keyof TransactionalEmailArgs,
>(
  client: APIClient,
  to: string,
  templateId: TransactionalEmailTemplateId,
  data: TransactionalEmailArgs[TransactionalEmailTemplateId],
): Promise<any> => {
  const params = new SendEmailRequest({
    transactional_message_id: templateId as string,
    to,
    identifiers: {
      email: to,
    },
    message_data: data,
    reply_to: 'hello@normalfinance.io',
    tracked: true,
  });

  return await client.sendEmail(params);
};
