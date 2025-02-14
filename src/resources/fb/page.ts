// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PageAPI from './page';
import * as FbAPI from './fb';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Page extends APIResource {
  /**
   * **_Limit:_** 10 queries per second
   */
  createBotField(
    body: PageCreateBotFieldParams,
    options?: RequestOptions,
  ): APIPromise<PageCreateBotFieldResponse> {
    return this._client.post('/fb/page/createBotField', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  createCustomField(
    body: PageCreateCustomFieldParams,
    options?: RequestOptions,
  ): APIPromise<PageCreateCustomFieldResponse> {
    return this._client.post('/fb/page/createCustomField', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  createTag(body: PageCreateTagParams, options?: RequestOptions): APIPromise<PageCreateTagResponse> {
    return this._client.post('/fb/page/createTag', { body, ...options });
  }

  /**
   * **_Limit:_** 100 queries per second
   */
  listBotFields(options?: RequestOptions): APIPromise<PageListBotFieldsResponse> {
    return this._client.get('/fb/page/getBotFields', options);
  }

  /**
   * **_Limit:_** 100 queries per second
   */
  listCustomFields(options?: RequestOptions): APIPromise<PageListCustomFieldsResponse> {
    return this._client.get('/fb/page/getCustomFields', options);
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  listFlows(options?: RequestOptions): APIPromise<PageListFlowsResponse> {
    return this._client.get('/fb/page/getFlows', options);
  }

  /**
   * **_Limit:_** 100 queries per second
   */
  listGrowthTools(options?: RequestOptions): APIPromise<PageListGrowthToolsResponse> {
    return this._client.get('/fb/page/getGrowthTools', options);
  }

  /**
   * **_Limit:_** 100 queries per second
   */
  listOtnTopics(options?: RequestOptions): APIPromise<PageListOtnTopicsResponse> {
    return this._client.get('/fb/page/getOtnTopics', options);
  }

  /**
   * **_Limit:_** 100 queries per second
   */
  listTags(options?: RequestOptions): APIPromise<PageListTagsResponse> {
    return this._client.get('/fb/page/getTags', options);
  }

  /**
   * **_Limit:_** 100 queries per second. Use getGrowthTools instead.
   */
  listWidgets(options?: RequestOptions): APIPromise<PageListWidgetsResponse> {
    return this._client.get('/fb/page/getWidgets', options);
  }

  /**
   * **_Limit:_** 10 queries per second. Removes specified tag from the page and the
   * page's subscribers. This action can not be undone.
   */
  removeTag(body: PageRemoveTagParams, options?: RequestOptions): APIPromise<PageRemoveTagResponse> {
    return this._client.post('/fb/page/removeTag', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second. Removes specified tag from the page and the
   * page's subscribers. This action can not be undone.
   */
  removeTagByName(
    body: PageRemoveTagByNameParams,
    options?: RequestOptions,
  ): APIPromise<PageRemoveTagByNameResponse> {
    return this._client.post('/fb/page/removeTagByName', { body, ...options });
  }

  /**
   * **_Limit:_** 100 queries per second
   */
  retrieveInfo(options?: RequestOptions): APIPromise<PageRetrieveInfoResponse> {
    return this._client.get('/fb/page/getInfo', options);
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  setBotField(body: PageSetBotFieldParams, options?: RequestOptions): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/page/setBotField', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  setBotFieldByName(
    body: PageSetBotFieldByNameParams,
    options?: RequestOptions,
  ): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/page/setBotFieldByName', { body, ...options });
  }

  /**
   * **_Limit:_** 10 queries per second
   */
  setBotFields(body: PageSetBotFieldsParams, options?: RequestOptions): APIPromise<FbAPI.ResponseSuccess> {
    return this._client.post('/fb/page/setBotFields', { body, ...options });
  }
}

export interface BotField {
  id?: number;

  description?: string;

  name?: string;

  type?: 'text' | 'number' | 'date' | 'datetime' | 'boolean';

  /**
   * string, integer or boolean
   */
  value?: unknown;
}

export interface CustomField {
  id?: number;

  description?: string;

  name?: string;

  type?: 'text' | 'number' | 'date' | 'datetime' | 'boolean';
}

export interface GrowthTools {
  id?: number;

  name?: string;

  type?: string;
}

export interface Tag {
  id?: number;

  name?: string;
}

export interface PageCreateBotFieldResponse {
  data?: PageCreateBotFieldResponse.Data;

  status?: string;
}

export namespace PageCreateBotFieldResponse {
  export interface Data {
    field?: PageAPI.BotField;
  }
}

export interface PageCreateCustomFieldResponse {
  data?: PageCreateCustomFieldResponse.Data;

  status?: string;
}

export namespace PageCreateCustomFieldResponse {
  export interface Data {
    field?: PageAPI.CustomField;
  }
}

export interface PageCreateTagResponse {
  data?: PageCreateTagResponse.Data;

  status?: string;
}

export namespace PageCreateTagResponse {
  export interface Data {
    tag?: PageAPI.Tag;
  }
}

export interface PageListBotFieldsResponse {
  data?: Array<BotField>;

  status?: string;
}

export interface PageListCustomFieldsResponse {
  data?: Array<CustomField>;

  status?: string;
}

export interface PageListFlowsResponse {
  data?: PageListFlowsResponse.Data;

  status?: string;
}

export namespace PageListFlowsResponse {
  export interface Data {
    flows?: Array<Data.Flow>;

    folders?: Array<Data.Folder>;
  }

  export namespace Data {
    export interface Flow {
      folder_id?: number;

      name?: string;

      /**
       * Automation namespace - unique Automation ID
       */
      ns?: string;
    }

    export interface Folder {
      id?: number;

      name?: string;

      parent_id?: number;
    }
  }
}

export interface PageListGrowthToolsResponse {
  data?: Array<GrowthTools>;

  status?: string;
}

export interface PageListOtnTopicsResponse {
  data?: Array<PageListOtnTopicsResponse.Data>;

  status?: string;
}

export namespace PageListOtnTopicsResponse {
  export interface Data {
    id?: number;

    description?: string;

    name?: string;
  }
}

export interface PageListTagsResponse {
  data?: Array<Tag>;

  status?: string;
}

export interface PageListWidgetsResponse {
  data?: Array<GrowthTools>;

  status?: string;
}

export interface PageRemoveTagResponse {
  status?: string;
}

export interface PageRemoveTagByNameResponse {
  status?: string;
}

export interface PageRetrieveInfoResponse {
  data?: PageRetrieveInfoResponse.Data;

  status?: string;
}

export namespace PageRetrieveInfoResponse {
  export interface Data {
    /**
     * This is Facebook Page ID
     */
    id?: number;

    about?: string;

    avatar_link?: string;

    category?: string;

    description?: string;

    is_pro?: boolean;

    name?: string;

    timezone?: string;

    username?: string;
  }
}

export interface PageCreateBotFieldParams {
  name: string;

  /**
   * Value from list: text, number, date, datetime, boolean
   */
  type: string;

  description?: string;

  /**
   * string, integer or boolean (see method description for setBotField)
   */
  value?: unknown;
}

export interface PageCreateCustomFieldParams {
  caption: string;

  /**
   * Value from list: text, number, date, datetime, boolean
   */
  type: string;

  description?: string;
}

export interface PageCreateTagParams {
  name: string;
}

export interface PageRemoveTagParams {
  tag_id: number;
}

export interface PageRemoveTagByNameParams {
  tag_name: string;
}

export interface PageSetBotFieldParams {
  field_id: number;

  /**
   * string, integer or boolean (see method description)
   */
  field_value: unknown;
}

export interface PageSetBotFieldByNameParams {
  field_name: string;

  /**
   * string, integer or boolean (see method description)
   */
  field_value: unknown;
}

export interface PageSetBotFieldsParams {
  fields: Array<PageSetBotFieldsParams.Field>;
}

export namespace PageSetBotFieldsParams {
  export interface Field {
    field_id?: number;

    field_name?: string;

    /**
     * string, integer or boolean (see method description)
     */
    field_value?: unknown;
  }
}

export declare namespace Page {
  export {
    type BotField as BotField,
    type CustomField as CustomField,
    type GrowthTools as GrowthTools,
    type Tag as Tag,
    type PageCreateBotFieldResponse as PageCreateBotFieldResponse,
    type PageCreateCustomFieldResponse as PageCreateCustomFieldResponse,
    type PageCreateTagResponse as PageCreateTagResponse,
    type PageListBotFieldsResponse as PageListBotFieldsResponse,
    type PageListCustomFieldsResponse as PageListCustomFieldsResponse,
    type PageListFlowsResponse as PageListFlowsResponse,
    type PageListGrowthToolsResponse as PageListGrowthToolsResponse,
    type PageListOtnTopicsResponse as PageListOtnTopicsResponse,
    type PageListTagsResponse as PageListTagsResponse,
    type PageListWidgetsResponse as PageListWidgetsResponse,
    type PageRemoveTagResponse as PageRemoveTagResponse,
    type PageRemoveTagByNameResponse as PageRemoveTagByNameResponse,
    type PageRetrieveInfoResponse as PageRetrieveInfoResponse,
    type PageCreateBotFieldParams as PageCreateBotFieldParams,
    type PageCreateCustomFieldParams as PageCreateCustomFieldParams,
    type PageCreateTagParams as PageCreateTagParams,
    type PageRemoveTagParams as PageRemoveTagParams,
    type PageRemoveTagByNameParams as PageRemoveTagByNameParams,
    type PageSetBotFieldParams as PageSetBotFieldParams,
    type PageSetBotFieldByNameParams as PageSetBotFieldByNameParams,
    type PageSetBotFieldsParams as PageSetBotFieldsParams,
  };
}
