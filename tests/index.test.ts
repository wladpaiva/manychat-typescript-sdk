// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIPromise } from 'manychat/api-promise';

import util from 'node:util';
import Manychat from 'manychat';
import { APIUserAbortError } from 'manychat';
const defaultFetch = fetch;

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  describe('defaultHeaders', () => {
    const client = new Manychat({
      baseURL: 'http://localhost:5000/',
      defaultHeaders: { 'X-My-Default-Header': '2' },
      token: 'My Token',
    });

    test('they are used in the request', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post' });
      expect(req.headers.get('x-my-default-header')).toEqual('2');
    });

    test('can ignore `undefined` and leave the default', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect(req.headers.get('x-my-default-header')).toEqual('2');
    });

    test('can be removed with `null`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect(req.headers.has('x-my-default-header')).toBe(false);
    });
  });
  describe('logging', () => {
    afterEach(() => {
      process.env['MANYCHAT_LOG'] = undefined;
    });

    const forceAPIResponseForClient = async (client: Manychat) => {
      await new APIPromise(
        client,
        Promise.resolve({
          response: new Response(),
          controller: new AbortController(),
          options: {
            method: 'get',
            path: '/',
          },
        }),
      );
    };

    test('debug logs when log level is debug', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      const client = new Manychat({ logger: logger, logLevel: 'debug', token: 'My Token' });

      await forceAPIResponseForClient(client);
      expect(debugMock).toHaveBeenCalled();
    });

    test('debug logs are skipped when log level is info', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      const client = new Manychat({ logger: logger, logLevel: 'info', token: 'My Token' });

      await forceAPIResponseForClient(client);
      expect(debugMock).not.toHaveBeenCalled();
    });

    test('debug logs happen with debug env var', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      process.env['MANYCHAT_LOG'] = 'debug';
      const client = new Manychat({ logger: logger, token: 'My Token' });

      await forceAPIResponseForClient(client);
      expect(debugMock).toHaveBeenCalled();
    });

    test('client log level overrides env var', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      process.env['MANYCHAT_LOG'] = 'debug';
      const client = new Manychat({ logger: logger, logLevel: 'off', token: 'My Token' });

      await forceAPIResponseForClient(client);
      expect(debugMock).not.toHaveBeenCalled();
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Manychat({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        token: 'My Token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Manychat({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        token: 'My Token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Manychat({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        token: 'My Token',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new Manychat({
      baseURL: 'http://localhost:5000/',
      token: 'My Token',
      fetch: (url) => {
        return Promise.resolve(
          new Response(JSON.stringify({ url, custom: true }), {
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      },
    });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
  });

  test('explicit global fetch', async () => {
    // make sure the global fetch type is assignable to our Fetch type
    const client = new Manychat({
      baseURL: 'http://localhost:5000/',
      token: 'My Token',
      fetch: defaultFetch,
    });
  });

  test('custom signal', async () => {
    const client = new Manychat({
      baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
      token: 'My Token',
      fetch: (...args) => {
        return new Promise((resolve, reject) =>
          setTimeout(
            () =>
              defaultFetch(...args)
                .then(resolve)
                .catch(reject),
            300,
          ),
        );
      },
    });

    const controller = new AbortController();
    setTimeout(() => controller.abort(), 200);

    const spy = jest.spyOn(client, 'request');

    await expect(client.get('/foo', { signal: controller.signal })).rejects.toThrowError(APIUserAbortError);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('normalized method', async () => {
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      capturedRequest = init;
      return new Response(JSON.stringify({}), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Manychat({ baseURL: 'http://localhost:5000/', token: 'My Token', fetch: testFetch });

    await client.patch('/foo');
    expect(capturedRequest?.method).toEqual('PATCH');
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Manychat({ baseURL: 'http://localhost:5000/custom/path/', token: 'My Token' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Manychat({ baseURL: 'http://localhost:5000/custom/path', token: 'My Token' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    afterEach(() => {
      process.env['MANYCHAT_BASE_URL'] = undefined;
    });

    test('explicit option', () => {
      const client = new Manychat({ baseURL: 'https://example.com', token: 'My Token' });
      expect(client.baseURL).toEqual('https://example.com');
    });

    test('env variable', () => {
      process.env['MANYCHAT_BASE_URL'] = 'https://example.com/from_env';
      const client = new Manychat({ token: 'My Token' });
      expect(client.baseURL).toEqual('https://example.com/from_env');
    });

    test('empty env variable', () => {
      process.env['MANYCHAT_BASE_URL'] = ''; // empty
      const client = new Manychat({ token: 'My Token' });
      expect(client.baseURL).toEqual('https://api.manychat.com');
    });

    test('blank env variable', () => {
      process.env['MANYCHAT_BASE_URL'] = '  '; // blank
      const client = new Manychat({ token: 'My Token' });
      expect(client.baseURL).toEqual('https://api.manychat.com');
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new Manychat({ maxRetries: 4, token: 'My Token' });
    expect(client.maxRetries).toEqual(4);

    // default
    const client2 = new Manychat({ token: 'My Token' });
    expect(client2.maxRetries).toEqual(2);
  });

  test('with environment variable arguments', () => {
    // set options via env var
    process.env['MANYCHAT_TOKEN'] = 'My Token';
    const client = new Manychat();
    expect(client.token).toBe('My Token');
  });

  test('with overridden environment variable arguments', () => {
    // set options via env var
    process.env['MANYCHAT_TOKEN'] = 'another My Token';
    const client = new Manychat({ token: 'My Token' });
    expect(client.token).toBe('My Token');
  });
});

describe('request building', () => {
  const client = new Manychat({ token: 'My Token' });

  describe('custom headers', () => {
    test('handles undefined', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        body: { value: 'hello' },
        headers: { 'X-Foo': 'baz', 'x-foo': 'bar', 'x-Foo': undefined, 'x-baz': 'bam', 'X-Baz': null },
      });
      expect(req.headers.get('x-foo')).toEqual('bar');
      expect(req.headers.get('x-Foo')).toEqual('bar');
      expect(req.headers.get('X-Foo')).toEqual('bar');
      expect(req.headers.get('x-baz')).toEqual(null);
    });
  });
});

describe('default encoder', () => {
  const client = new Manychat({ token: 'My Token' });

  class Serializable {
    toJSON() {
      return { $type: 'Serializable' };
    }
  }
  class Collection<T> {
    #things: T[];
    constructor(things: T[]) {
      this.#things = Array.from(things);
    }
    toJSON() {
      return Array.from(this.#things);
    }
    [Symbol.iterator]() {
      return this.#things[Symbol.iterator];
    }
  }
  for (const jsonValue of [{}, [], { __proto__: null }, new Serializable(), new Collection(['item'])]) {
    test(`serializes ${util.inspect(jsonValue)} as json`, () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        body: jsonValue,
      });
      expect(req.headers).toBeInstanceOf(Headers);
      expect(req.headers.get('content-type')).toEqual('application/json');
      expect(req.body).toBe(JSON.stringify(jsonValue));
    });
  }

  const encoder = new TextEncoder();
  const asyncIterable = (async function* () {
    yield encoder.encode('a\n');
    yield encoder.encode('b\n');
    yield encoder.encode('c\n');
  })();
  for (const streamValue of [
    [encoder.encode('a\nb\nc\n')][Symbol.iterator](),
    new Response('a\nb\nc\n').body,
    asyncIterable,
  ]) {
    test(`converts ${util.inspect(streamValue)} to ReadableStream`, async () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        body: streamValue,
      });
      expect(req.headers).toBeInstanceOf(Headers);
      expect(req.headers.get('content-type')).toEqual(null);
      expect(req.body).toBeInstanceOf(ReadableStream);
      expect(await new Response(req.body).text()).toBe('a\nb\nc\n');
    });
  }

  test(`can set content-type for ReadableStream`, async () => {
    const { req } = client.buildRequest({
      path: '/foo',
      method: 'post',
      body: new Response('a\nb\nc\n').body,
      headers: { 'Content-Type': 'text/plain' },
    });
    expect(req.headers).toBeInstanceOf(Headers);
    expect(req.headers.get('content-type')).toEqual('text/plain');
    expect(req.body).toBeInstanceOf(ReadableStream);
    expect(await new Response(req.body).text()).toBe('a\nb\nc\n');
  });
});

describe('retries', () => {
  test('retry on timeout', async () => {
    let count = 0;
    const testFetch = async (
      url: string | URL | Request,
      { signal }: RequestInit = {},
    ): Promise<Response> => {
      if (count++ === 0) {
        return new Promise(
          (resolve, reject) => signal?.addEventListener('abort', () => reject(new Error('timed out'))),
        );
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Manychat({ token: 'My Token', timeout: 10, fetch: testFetch });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Manychat({ token: 'My Token', fetch: testFetch, maxRetries: 4 });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers).get('x-stainless-retry-count')).toEqual('2');
    expect(count).toEqual(3);
  });

  test('omit retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new Manychat({ token: 'My Token', fetch: testFetch, maxRetries: 4 });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
        headers: { 'X-Stainless-Retry-Count': null },
      }),
    ).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers).has('x-stainless-retry-count')).toBe(false);
  });

  test('omit retry count header by default', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new Manychat({
      token: 'My Token',
      fetch: testFetch,
      maxRetries: 4,
      defaultHeaders: { 'X-Stainless-Retry-Count': null },
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
      }),
    ).toEqual({ a: 1 });

    expect(capturedRequest!.headers as Headers).not.toHaveProperty('x-stainless-retry-count');
  });

  test('overwrite retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new Manychat({ token: 'My Token', fetch: testFetch, maxRetries: 4 });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
        headers: { 'X-Stainless-Retry-Count': '42' },
      }),
    ).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers).get('x-stainless-retry-count')).toEqual('42');
  });

  test('retry on 429 with retry-after', async () => {
    let count = 0;
    const testFetch = async (
      url: string | URL | Request,
      { signal }: RequestInit = {},
    ): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Manychat({ token: 'My Token', fetch: testFetch });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry on 429 with retry-after-ms', async () => {
    let count = 0;
    const testFetch = async (
      url: string | URL | Request,
      { signal }: RequestInit = {},
    ): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After-Ms': '10',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Manychat({ token: 'My Token', fetch: testFetch });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });
});
