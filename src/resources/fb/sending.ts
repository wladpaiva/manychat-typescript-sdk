// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FbAPI from './fb';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Sending extends APIResource {
  /**
   * **_Limit:_** 25 queries per second
   */
  sendContent(body: SendingSendContentParams, options?: RequestOptions): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/sending/sendContent', { body, ...options });
  }

  /**
   * **_Limit:_** 25 queries per second
   */
  sendContentByUserRef(
    body: SendingSendContentByUserRefParams,
    options?: RequestOptions,
  ): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/sending/sendContentByUserRef', { body, ...options });
  }

  /**
   * **_Limit:_** 25 queries per second
   */
  sendFlow(body: SendingSendFlowParams, options?: RequestOptions): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/sending/sendFlow', { body, ...options });
  }
}

export interface SendingSendContentParams {
  data: unknown;

  subscriber_id: number;

  message_tag?: string;

  otn_topic_name?: string;
}

export interface SendingSendContentByUserRefParams {
  data: unknown;

  user_ref: number;
}

export interface SendingSendFlowParams {
  flow_ns: string;

  subscriber_id: number;
}

export declare namespace Sending {
  export {
    type SendingSendContentParams as SendingSendContentParams,
    type SendingSendContentByUserRefParams as SendingSendContentByUserRefParams,
    type SendingSendFlowParams as SendingSendFlowParams,
  };
}
