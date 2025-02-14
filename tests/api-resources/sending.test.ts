// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Manychat from 'manychat';

const client = new Manychat({
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sending', () => {
  // skipped: tests are disabled for the time being
  test.skip('sendContent: only required params', async () => {
    const responsePromise = client.sending.sendContent({ data: {}, subscriber_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('sendContent: required and optional params', async () => {
    const response = await client.sending.sendContent({
      data: {},
      subscriber_id: 0,
      message_tag: 'ACCOUNT_UPDATE',
      otn_topic_name: 'Сhannel news',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('sendContentByUserRef: only required params', async () => {
    const responsePromise = client.sending.sendContentByUserRef({ data: {}, user_ref: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('sendContentByUserRef: required and optional params', async () => {
    const response = await client.sending.sendContentByUserRef({ data: {}, user_ref: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('sendFlow: only required params', async () => {
    const responsePromise = client.sending.sendFlow({ flow_ns: 'flow_ns', subscriber_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('sendFlow: required and optional params', async () => {
    const response = await client.sending.sendFlow({ flow_ns: 'flow_ns', subscriber_id: 0 });
  });
});
