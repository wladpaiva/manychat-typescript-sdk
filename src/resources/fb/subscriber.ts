// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FbAPI from './fb';
import * as PageAPI from './page';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class SubscriberResource extends APIResource {
  /**
   * **_Limit:_** 10 queries per second
   */
  addTag(body: SubscriberAddTagParams, options?: RequestOptions): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/subscriber/addTag', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  addTagByName(
    body: SubscriberAddTagByNameParams,
    options?: RequestOptions,
  ): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/subscriber/addTagByName', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  createSubscriber(
    body: SubscriberCreateSubscriberParams,
    options?: RequestOptions,
  ): APIPromise<SubscriberCreateSubscriberResponse> {
    return this._client.post('/fb/subscriber/createSubscriber', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second.
   *
   * This API method only works with Text and Number types of Custom User Fields.
   *
   * Results are sorted by last Custom User Field value update for a specific user.
   *
   * List is limited by 100 elements.
   */
  findByCustomField(
    query: SubscriberFindByCustomFieldParams,
    options?: RequestOptions,
  ): APIPromise<SubscriberFindByCustomFieldResponse> {
    return this._client.get('/fb/subscriber/findByCustomField', { query, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second. This API method search subscribers by full
   * name. List is limited by 100 subscribers.
   */
  findByName(
    query: SubscriberFindByNameParams,
    options?: RequestOptions,
  ): APIPromise<SubscriberFindByNameResponse> {
    return this._client.get('/fb/subscriber/findByName', { query, ...options });
  }

  /**
   * **_Limit:_** 100 queries per second. Set one parameter: Email OR Phone.
   */
  findBySystemField(
    query: SubscriberFindBySystemFieldParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriberFindBySystemFieldResponse> {
    return this._client.get('/fb/subscriber/findBySystemField', { query, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  removeTag(body: SubscriberRemoveTagParams, options?: RequestOptions): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/subscriber/removeTag', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  removeTagByName(
    body: SubscriberRemoveTagByNameParams,
    options?: RequestOptions,
  ): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/subscriber/removeTagByName', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  retrieveInfo(
    query: SubscriberRetrieveInfoParams,
    options?: RequestOptions,
  ): APIPromise<SubscriberRetrieveInfoResponse> {
    return this._client.get('/fb/subscriber/getInfo', { query, ...options });
  }

  retrieveInfoByUserRef(
    query: SubscriberRetrieveInfoByUserRefParams,
    options?: RequestOptions,
  ): APIPromise<SubscriberRetrieveInfoByUserRefResponse> {
    return this._client.get('/fb/subscriber/getInfoByUserRef', { query, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  setCustomField(
    body: SubscriberSetCustomFieldParams,
    options?: RequestOptions,
  ): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/subscriber/setCustomField', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  setCustomFieldByName(
    body: SubscriberSetCustomFieldByNameParams,
    options?: RequestOptions,
  ): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/subscriber/setCustomFieldByName', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  setCustomFields(
    body: SubscriberSetCustomFieldsParams,
    options?: RequestOptions,
  ): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/subscriber/setCustomFields', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  updateSubscriber(
    body: SubscriberUpdateSubscriberParams,
    options?: RequestOptions,
  ): APIPromise<SubscriberUpdateSubscriberResponse> {
    return this._client.post('/fb/subscriber/updateSubscriber', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  verifyBySignedRequest(
    body: SubscriberVerifyBySignedRequestParams,
    options?: RequestOptions,
  ): APIPromise<SubscriberVerifyBySignedRequestResponse> {
    return this._client.post('/fb/subscriber/verifyBySignedRequest', { body, ...options });
  }
}

export interface Subscriber {
  id?: string;

  custom_fields?: Array<Subscriber.CustomField>;

  email?: string;

  first_name?: string;

  gender?: string;

  ig_id?: number;

  ig_username?: string;

  is_followup_enabled?: boolean;

  language?: string;

  last_input_text?: string;

  /**
   * datetime in W3C format
   */
  last_interaction?: string | null;

  last_name?: string;

  /**
   * datetime in W3C format
   */
  last_seen?: string;

  live_chat_url?: string;

  locale?: string;

  name?: string;

  optin_email?: boolean;

  optin_phone?: boolean;

  optin_whatsapp?: boolean;

  /**
   * This is Facebook Page ID
   */
  page_id?: string;

  phone?: string;

  profile_pic?: string;

  /**
   * datetime in W3C format
   */
  subscribed?: string;

  tags?: Array<PageAPI.Tag>;

  timezone?: string;

  /**
   * array with ref of subscriber; can be empty
   */
  user_refs?: Array<Subscriber.UserRef>;

  whatsapp_phone?: string;
}

export namespace Subscriber {
  export interface CustomField {
    id?: number;

    description?: string;

    name?: string;

    type?: 'text' | 'number' | 'date' | 'datetime' | 'boolean';

    /**
     * string, integer or boolean
     */
    value?: unknown;
  }

  export interface UserRef {
    /**
     * datetime in W3C format
     */
    opted_in?: string;

    user_ref?: string;
  }
}

export interface SubscriberCreateSubscriberResponse {
  data?: Subscriber;

  status?: string;
}

export interface SubscriberFindByCustomFieldResponse {
  data?: Array<Subscriber>;

  status?: string;
}

export interface SubscriberFindByNameResponse {
  data?: Array<Subscriber>;

  status?: string;
}

export interface SubscriberFindBySystemFieldResponse {
  data?: Subscriber;

  status?: string;
}

export interface SubscriberRetrieveInfoResponse {
  data?: Subscriber;

  status?: string;
}

export interface SubscriberRetrieveInfoByUserRefResponse {
  data?: Subscriber;

  status?: string;
}

export interface SubscriberUpdateSubscriberResponse {
  data?: Subscriber;

  status?: string;
}

export interface SubscriberVerifyBySignedRequestResponse {
  status?: string;
}

export interface SubscriberAddTagParams {
  subscriber_id: number;

  tag_id: number;
}

export interface SubscriberAddTagByNameParams {
  subscriber_id: number;

  tag_name: string;
}

export interface SubscriberCreateSubscriberParams {
  /**
   * Consent phrase is required if property `has_opt_in_sms` equal true
   */
  consent_phrase?: string;

  /**
   * Email is required if Phone Number and Whatsapp Phone properties are empty
   */
  email?: string;

  /**
   * First Name
   */
  first_name?: string;

  /**
   * Gender
   */
  gender?: string;

  /**
   * Has opt-in Email is required if property Email is not empty
   */
  has_opt_in_email?: boolean;

  /**
   * Has opt-in SMS is required if property Phone Number is not empty
   */
  has_opt_in_sms?: boolean;

  /**
   * Last Name
   */
  last_name?: string;

  /**
   * Phone Number is required if Email and Whatsapp Phone properties are empty
   */
  phone?: string;

  /**
   * Whatsapp Phone Number is required if Email and Phone Number properties are empty
   */
  whatsapp_phone?: string;
}

export interface SubscriberFindByCustomFieldParams {
  field_id: number;

  field_value: string;
}

export interface SubscriberFindByNameParams {
  name: string;
}

export interface SubscriberFindBySystemFieldParams {
  /**
   * E-Mail (example: test@manychat.com)
   */
  email?: string;

  /**
   * Phone number (example: +15400000000)
   */
  phone?: string;
}

export interface SubscriberRemoveTagParams {
  subscriber_id: number;

  tag_id: number;
}

export interface SubscriberRemoveTagByNameParams {
  subscriber_id: number;

  tag_name: string;
}

export interface SubscriberRetrieveInfoParams {
  /**
   * Get subscriber info.
   */
  subscriber_id: number;
}

export interface SubscriberRetrieveInfoByUserRefParams {
  /**
   * Ref of subscriber
   */
  user_ref: number;
}

export interface SubscriberSetCustomFieldParams {
  field_id: number;

  /**
   * string, integer or boolean (see method description)
   */
  field_value: unknown;

  subscriber_id: number;
}

export interface SubscriberSetCustomFieldByNameParams {
  /**
   * not case sensitive
   */
  field_name: string;

  /**
   * string, integer or boolean (see method description)
   */
  field_value: unknown;

  subscriber_id: number;
}

export interface SubscriberSetCustomFieldsParams {
  fields: Array<SubscriberSetCustomFieldsParams.Field>;

  subscriber_id: number;
}

export namespace SubscriberSetCustomFieldsParams {
  export interface Field {
    field_id?: number;

    field_name?: string;

    /**
     * string, integer or boolean (see method description)
     */
    field_value?: unknown;
  }
}

export interface SubscriberUpdateSubscriberParams {
  subscriber_id: number;

  /**
   * Consent phrase is required if property Has Opt In SMS equal true
   */
  consent_phrase?: string;

  /**
   * Email
   */
  email?: string;

  /**
   * First Name
   */
  first_name?: string;

  /**
   * Gender
   */
  gender?: string;

  /**
   * Has opt-in Email is required if property Email is not empty
   */
  has_opt_in_email?: boolean;

  /**
   * Has opt-in SMS is required if property Phone Number is not empty
   */
  has_opt_in_sms?: boolean;

  /**
   * Last Name
   */
  last_name?: string;

  /**
   * Phone Number
   */
  phone?: string;
}

export interface SubscriberVerifyBySignedRequestParams {
  signed_request: string;

  subscriber_id: number;
}

export declare namespace SubscriberResource {
  export {
    type Subscriber as Subscriber,
    type SubscriberCreateSubscriberResponse as SubscriberCreateSubscriberResponse,
    type SubscriberFindByCustomFieldResponse as SubscriberFindByCustomFieldResponse,
    type SubscriberFindByNameResponse as SubscriberFindByNameResponse,
    type SubscriberFindBySystemFieldResponse as SubscriberFindBySystemFieldResponse,
    type SubscriberRetrieveInfoResponse as SubscriberRetrieveInfoResponse,
    type SubscriberRetrieveInfoByUserRefResponse as SubscriberRetrieveInfoByUserRefResponse,
    type SubscriberUpdateSubscriberResponse as SubscriberUpdateSubscriberResponse,
    type SubscriberVerifyBySignedRequestResponse as SubscriberVerifyBySignedRequestResponse,
    type SubscriberAddTagParams as SubscriberAddTagParams,
    type SubscriberAddTagByNameParams as SubscriberAddTagByNameParams,
    type SubscriberCreateSubscriberParams as SubscriberCreateSubscriberParams,
    type SubscriberFindByCustomFieldParams as SubscriberFindByCustomFieldParams,
    type SubscriberFindByNameParams as SubscriberFindByNameParams,
    type SubscriberFindBySystemFieldParams as SubscriberFindBySystemFieldParams,
    type SubscriberRemoveTagParams as SubscriberRemoveTagParams,
    type SubscriberRemoveTagByNameParams as SubscriberRemoveTagByNameParams,
    type SubscriberRetrieveInfoParams as SubscriberRetrieveInfoParams,
    type SubscriberRetrieveInfoByUserRefParams as SubscriberRetrieveInfoByUserRefParams,
    type SubscriberSetCustomFieldParams as SubscriberSetCustomFieldParams,
    type SubscriberSetCustomFieldByNameParams as SubscriberSetCustomFieldByNameParams,
    type SubscriberSetCustomFieldsParams as SubscriberSetCustomFieldsParams,
    type SubscriberUpdateSubscriberParams as SubscriberUpdateSubscriberParams,
    type SubscriberVerifyBySignedRequestParams as SubscriberVerifyBySignedRequestParams,
  };
}
