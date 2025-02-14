// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PageAPI from './page';
import {
  BotField,
  CustomField,
  GrowthTools,
  Page,
  PageCreateBotFieldParams,
  PageCreateBotFieldResponse,
  PageCreateCustomFieldParams,
  PageCreateCustomFieldResponse,
  PageCreateTagParams,
  PageCreateTagResponse,
  PageListBotFieldsResponse,
  PageListCustomFieldsResponse,
  PageListFlowsResponse,
  PageListGrowthToolsResponse,
  PageListOtnTopicsResponse,
  PageListTagsResponse,
  PageListWidgetsResponse,
  PageRemoveTagByNameParams,
  PageRemoveTagByNameResponse,
  PageRemoveTagParams,
  PageRemoveTagResponse,
  PageRetrieveInfoResponse,
  PageSetBotFieldByNameParams,
  PageSetBotFieldParams,
  PageSetBotFieldsParams,
  Tag,
} from './page';
import * as SendingAPI from './sending';
import {
  Sending,
  SendingSendContentByUserRefParams,
  SendingSendContentParams,
  SendingSendFlowParams,
} from './sending';
import * as SubscriberAPI from './subscriber';
import {
  Subscriber,
  SubscriberAddTagByNameParams,
  SubscriberAddTagParams,
  SubscriberCreateSubscriberParams,
  SubscriberCreateSubscriberResponse,
  SubscriberFindByCustomFieldParams,
  SubscriberFindByCustomFieldResponse,
  SubscriberFindByNameParams,
  SubscriberFindByNameResponse,
  SubscriberFindBySystemFieldParams,
  SubscriberFindBySystemFieldResponse,
  SubscriberRemoveTagByNameParams,
  SubscriberRemoveTagParams,
  SubscriberResource,
  SubscriberRetrieveInfoByUserRefParams,
  SubscriberRetrieveInfoByUserRefResponse,
  SubscriberRetrieveInfoParams,
  SubscriberRetrieveInfoResponse,
  SubscriberSetCustomFieldByNameParams,
  SubscriberSetCustomFieldParams,
  SubscriberSetCustomFieldsParams,
  SubscriberUpdateSubscriberParams,
  SubscriberUpdateSubscriberResponse,
  SubscriberVerifyBySignedRequestParams,
  SubscriberVerifyBySignedRequestResponse,
} from './subscriber';

export class Fb extends APIResource {
  page: PageAPI.Page = new PageAPI.Page(this._client);
  sending: SendingAPI.Sending = new SendingAPI.Sending(this._client);
  subscriber: SubscriberAPI.SubscriberResource = new SubscriberAPI.SubscriberResource(this._client);
}

export interface ResponseSuccess {
  status?: string;
}

Fb.Page = Page;
Fb.Sending = Sending;
Fb.SubscriberResource = SubscriberResource;

export declare namespace Fb {
  export { type ResponseSuccess as ResponseSuccess };

  export {
    Page as Page,
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

  export {
    Sending as Sending,
    type SendingSendContentParams as SendingSendContentParams,
    type SendingSendContentByUserRefParams as SendingSendContentByUserRefParams,
    type SendingSendFlowParams as SendingSendFlowParams,
  };

  export {
    SubscriberResource as SubscriberResource,
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
