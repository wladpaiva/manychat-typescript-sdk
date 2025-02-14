// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ManyChat from 'ManyChat';

const client = new ManyChat({
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriber', () => {
  // skipped: tests are disabled for the time being
  test.skip('addTag: only required params', async () => {
    const responsePromise = client.fb.subscriber.addTag({ subscriber_id: 0, tag_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addTag: required and optional params', async () => {
    const response = await client.fb.subscriber.addTag({ subscriber_id: 0, tag_id: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('addTagByName: only required params', async () => {
    const responsePromise = client.fb.subscriber.addTagByName({ subscriber_id: 0, tag_name: 'tag_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addTagByName: required and optional params', async () => {
    const response = await client.fb.subscriber.addTagByName({ subscriber_id: 0, tag_name: 'tag_name' });
  });

  // skipped: tests are disabled for the time being
  test.skip('createSubscriber', async () => {
    const responsePromise = client.fb.subscriber.createSubscriber({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findByCustomField: only required params', async () => {
    const responsePromise = client.fb.subscriber.findByCustomField({
      field_id: 0,
      field_value: 'field_value',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findByCustomField: required and optional params', async () => {
    const response = await client.fb.subscriber.findByCustomField({
      field_id: 0,
      field_value: 'field_value',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('findByName: only required params', async () => {
    const responsePromise = client.fb.subscriber.findByName({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findByName: required and optional params', async () => {
    const response = await client.fb.subscriber.findByName({ name: 'name' });
  });

  // skipped: tests are disabled for the time being
  test.skip('findBySystemField', async () => {
    const responsePromise = client.fb.subscriber.findBySystemField();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findBySystemField: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fb.subscriber.findBySystemField(
        { email: 'email', phone: 'phone' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ManyChat.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('removeTag: only required params', async () => {
    const responsePromise = client.fb.subscriber.removeTag({ subscriber_id: 0, tag_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('removeTag: required and optional params', async () => {
    const response = await client.fb.subscriber.removeTag({ subscriber_id: 0, tag_id: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('removeTagByName: only required params', async () => {
    const responsePromise = client.fb.subscriber.removeTagByName({ subscriber_id: 0, tag_name: 'tag_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('removeTagByName: required and optional params', async () => {
    const response = await client.fb.subscriber.removeTagByName({ subscriber_id: 0, tag_name: 'tag_name' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInfo: only required params', async () => {
    const responsePromise = client.fb.subscriber.retrieveInfo({ subscriber_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInfo: required and optional params', async () => {
    const response = await client.fb.subscriber.retrieveInfo({ subscriber_id: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInfoByUserRef: only required params', async () => {
    const responsePromise = client.fb.subscriber.retrieveInfoByUserRef({ user_ref: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInfoByUserRef: required and optional params', async () => {
    const response = await client.fb.subscriber.retrieveInfoByUserRef({ user_ref: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('setCustomField: only required params', async () => {
    const responsePromise = client.fb.subscriber.setCustomField({
      field_id: 0,
      field_value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
      subscriber_id: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('setCustomField: required and optional params', async () => {
    const response = await client.fb.subscriber.setCustomField({
      field_id: 0,
      field_value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
      subscriber_id: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('setCustomFieldByName: only required params', async () => {
    const responsePromise = client.fb.subscriber.setCustomFieldByName({
      field_name: 'field_name',
      field_value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
      subscriber_id: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('setCustomFieldByName: required and optional params', async () => {
    const response = await client.fb.subscriber.setCustomFieldByName({
      field_name: 'field_name',
      field_value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
      subscriber_id: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('setCustomFields: only required params', async () => {
    const responsePromise = client.fb.subscriber.setCustomFields({ fields: [{}], subscriber_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('setCustomFields: required and optional params', async () => {
    const response = await client.fb.subscriber.setCustomFields({
      fields: [
        {
          field_id: 0,
          field_name: 'field_name',
          field_value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
        },
      ],
      subscriber_id: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateSubscriber: only required params', async () => {
    const responsePromise = client.fb.subscriber.updateSubscriber({ subscriber_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateSubscriber: required and optional params', async () => {
    const response = await client.fb.subscriber.updateSubscriber({
      subscriber_id: 0,
      consent_phrase: 'consent_phrase',
      email: 'email',
      first_name: 'first_name',
      gender: 'gender',
      has_opt_in_email: true,
      has_opt_in_sms: true,
      last_name: 'last_name',
      phone: 'phone',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('verifyBySignedRequest: only required params', async () => {
    const responsePromise = client.fb.subscriber.verifyBySignedRequest({
      signed_request:
        '_1SXnOuwXiUrcDRxI1D6Dvr55aiNusDNMxyHb8PQe7Y.eyJhbGdvcml0aG0iOiJIT2FDLVNIQTI1NiIsImNvbW11bml0eV9pZCI6bnVsbCwiaXNzdWVkX2F0IjoxNTU5MjE8NTQxLCJtZXRhZGF0YSI6bnVsbCwicGFnZV9pZCI6MjI4NjkwMDEyNDk2MTgxOSwicHNpZCI6IjIxNzI0OTkwNDI4Njc2MjIiLCJ0aHJlYWRfcGFydGljaXBhbnRfaWRzIjpudWxsLCJ0aHJlYWRfdHlwZSI6IlVTRVJfVE9fUEFHRSIsInRpZCI1IjIxNzI0OTkwNDI4Njc2MjIifQ',
      subscriber_id: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('verifyBySignedRequest: required and optional params', async () => {
    const response = await client.fb.subscriber.verifyBySignedRequest({
      signed_request:
        '_1SXnOuwXiUrcDRxI1D6Dvr55aiNusDNMxyHb8PQe7Y.eyJhbGdvcml0aG0iOiJIT2FDLVNIQTI1NiIsImNvbW11bml0eV9pZCI6bnVsbCwiaXNzdWVkX2F0IjoxNTU5MjE8NTQxLCJtZXRhZGF0YSI6bnVsbCwicGFnZV9pZCI6MjI4NjkwMDEyNDk2MTgxOSwicHNpZCI6IjIxNzI0OTkwNDI4Njc2MjIiLCJ0aHJlYWRfcGFydGljaXBhbnRfaWRzIjpudWxsLCJ0aHJlYWRfdHlwZSI6IlVTRVJfVE9fUEFHRSIsInRpZCI1IjIxNzI0OTkwNDI4Njc2MjIifQ',
      subscriber_id: 0,
    });
  });
});
