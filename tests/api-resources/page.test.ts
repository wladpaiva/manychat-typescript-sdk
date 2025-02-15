// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Manychat from 'manychat';

const client = new Manychat({
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource page', () => {
  // skipped: tests are disabled for the time being
  test.skip('createBotField: only required params', async () => {
    const responsePromise = client.page.createBotField({ name: 'My bot name', type: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createBotField: required and optional params', async () => {
    const response = await client.page.createBotField({
      name: 'My bot name',
      type: 'text',
      description: 'This field store my bot name',
      value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createCustomField: only required params', async () => {
    const responsePromise = client.page.createCustomField({ caption: 'My custom field name', type: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createCustomField: required and optional params', async () => {
    const response = await client.page.createCustomField({
      caption: 'My custom field name',
      type: 'text',
      description: 'This field store my custom field name',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createTag: only required params', async () => {
    const responsePromise = client.page.createTag({ name: 'My tag' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createTag: required and optional params', async () => {
    const response = await client.page.createTag({ name: 'My tag' });
  });

  // skipped: tests are disabled for the time being
  test.skip('listBotFields', async () => {
    const responsePromise = client.page.listBotFields();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listCustomFields', async () => {
    const responsePromise = client.page.listCustomFields();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listFlows', async () => {
    const responsePromise = client.page.listFlows();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listGrowthTools', async () => {
    const responsePromise = client.page.listGrowthTools();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listOtnTopics', async () => {
    const responsePromise = client.page.listOtnTopics();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTags', async () => {
    const responsePromise = client.page.listTags();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listWidgets', async () => {
    const responsePromise = client.page.listWidgets();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('removeTag: only required params', async () => {
    const responsePromise = client.page.removeTag({ tag_id: 123 });
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
    const response = await client.page.removeTag({ tag_id: 123 });
  });

  // skipped: tests are disabled for the time being
  test.skip('removeTagByName: only required params', async () => {
    const responsePromise = client.page.removeTagByName({ tag_name: 'MyTagName' });
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
    const response = await client.page.removeTagByName({ tag_name: 'MyTagName' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInfo', async () => {
    const responsePromise = client.page.retrieveInfo();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('setBotField: only required params', async () => {
    const responsePromise = client.page.setBotField({
      field_id: 0,
      field_value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
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
  test.skip('setBotField: required and optional params', async () => {
    const response = await client.page.setBotField({
      field_id: 0,
      field_value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('setBotFieldByName: only required params', async () => {
    const responsePromise = client.page.setBotFieldByName({
      field_name: 'field_name',
      field_value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
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
  test.skip('setBotFieldByName: required and optional params', async () => {
    const response = await client.page.setBotFieldByName({
      field_name: 'field_name',
      field_value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('setBotFields: only required params', async () => {
    const responsePromise = client.page.setBotFields({ fields: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('setBotFields: required and optional params', async () => {
    const response = await client.page.setBotFields({
      fields: [
        {
          field_id: 0,
          field_name: 'field_name',
          field_value: "'string', 123, true, '2018-07-18', '2018-07-02T00:00:00+00:00'",
        },
      ],
    });
  });
});
