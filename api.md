# Fb

Types:

- <code><a href="./src/resources/fb/fb.ts">ResponseSuccess</a></code>

## Page

Types:

- <code><a href="./src/resources/fb/page.ts">BotField</a></code>
- <code><a href="./src/resources/fb/page.ts">CustomField</a></code>
- <code><a href="./src/resources/fb/page.ts">GrowthTools</a></code>
- <code><a href="./src/resources/fb/page.ts">Tag</a></code>
- <code><a href="./src/resources/fb/page.ts">PageCreateBotFieldResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageCreateCustomFieldResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageCreateTagResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageListBotFieldsResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageListCustomFieldsResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageListFlowsResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageListGrowthToolsResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageListOtnTopicsResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageListTagsResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageListWidgetsResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageRemoveTagResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageRemoveTagByNameResponse</a></code>
- <code><a href="./src/resources/fb/page.ts">PageRetrieveInfoResponse</a></code>

Methods:

- <code title="post /fb/page/createBotField">client.fb.page.<a href="./src/resources/fb/page.ts">createBotField</a>({ ...params }) -> PageCreateBotFieldResponse</code>
- <code title="post /fb/page/createCustomField">client.fb.page.<a href="./src/resources/fb/page.ts">createCustomField</a>({ ...params }) -> PageCreateCustomFieldResponse</code>
- <code title="post /fb/page/createTag">client.fb.page.<a href="./src/resources/fb/page.ts">createTag</a>({ ...params }) -> PageCreateTagResponse</code>
- <code title="get /fb/page/getBotFields">client.fb.page.<a href="./src/resources/fb/page.ts">listBotFields</a>() -> PageListBotFieldsResponse</code>
- <code title="get /fb/page/getCustomFields">client.fb.page.<a href="./src/resources/fb/page.ts">listCustomFields</a>() -> PageListCustomFieldsResponse</code>
- <code title="get /fb/page/getFlows">client.fb.page.<a href="./src/resources/fb/page.ts">listFlows</a>() -> PageListFlowsResponse</code>
- <code title="get /fb/page/getGrowthTools">client.fb.page.<a href="./src/resources/fb/page.ts">listGrowthTools</a>() -> PageListGrowthToolsResponse</code>
- <code title="get /fb/page/getOtnTopics">client.fb.page.<a href="./src/resources/fb/page.ts">listOtnTopics</a>() -> PageListOtnTopicsResponse</code>
- <code title="get /fb/page/getTags">client.fb.page.<a href="./src/resources/fb/page.ts">listTags</a>() -> PageListTagsResponse</code>
- <code title="get /fb/page/getWidgets">client.fb.page.<a href="./src/resources/fb/page.ts">listWidgets</a>() -> PageListWidgetsResponse</code>
- <code title="post /fb/page/removeTag">client.fb.page.<a href="./src/resources/fb/page.ts">removeTag</a>({ ...params }) -> PageRemoveTagResponse</code>
- <code title="post /fb/page/removeTagByName">client.fb.page.<a href="./src/resources/fb/page.ts">removeTagByName</a>({ ...params }) -> PageRemoveTagByNameResponse</code>
- <code title="get /fb/page/getInfo">client.fb.page.<a href="./src/resources/fb/page.ts">retrieveInfo</a>() -> PageRetrieveInfoResponse</code>
- <code title="post /fb/page/setBotField">client.fb.page.<a href="./src/resources/fb/page.ts">setBotField</a>({ ...params }) -> ResponseSuccess</code>
- <code title="post /fb/page/setBotFieldByName">client.fb.page.<a href="./src/resources/fb/page.ts">setBotFieldByName</a>({ ...params }) -> ResponseSuccess</code>
- <code title="post /fb/page/setBotFields">client.fb.page.<a href="./src/resources/fb/page.ts">setBotFields</a>({ ...params }) -> ResponseSuccess</code>

## Sending

Methods:

- <code title="post /fb/sending/sendContent">client.fb.sending.<a href="./src/resources/fb/sending.ts">sendContent</a>({ ...params }) -> ResponseSuccess</code>
- <code title="post /fb/sending/sendContentByUserRef">client.fb.sending.<a href="./src/resources/fb/sending.ts">sendContentByUserRef</a>({ ...params }) -> ResponseSuccess</code>
- <code title="post /fb/sending/sendFlow">client.fb.sending.<a href="./src/resources/fb/sending.ts">sendFlow</a>({ ...params }) -> ResponseSuccess</code>

## Subscriber

Types:

- <code><a href="./src/resources/fb/subscriber.ts">Subscriber</a></code>
- <code><a href="./src/resources/fb/subscriber.ts">SubscriberCreateSubscriberResponse</a></code>
- <code><a href="./src/resources/fb/subscriber.ts">SubscriberFindByCustomFieldResponse</a></code>
- <code><a href="./src/resources/fb/subscriber.ts">SubscriberFindByNameResponse</a></code>
- <code><a href="./src/resources/fb/subscriber.ts">SubscriberFindBySystemFieldResponse</a></code>
- <code><a href="./src/resources/fb/subscriber.ts">SubscriberRetrieveInfoResponse</a></code>
- <code><a href="./src/resources/fb/subscriber.ts">SubscriberRetrieveInfoByUserRefResponse</a></code>
- <code><a href="./src/resources/fb/subscriber.ts">SubscriberUpdateSubscriberResponse</a></code>
- <code><a href="./src/resources/fb/subscriber.ts">SubscriberVerifyBySignedRequestResponse</a></code>

Methods:

- <code title="post /fb/subscriber/addTag">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">addTag</a>({ ...params }) -> ResponseSuccess</code>
- <code title="post /fb/subscriber/addTagByName">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">addTagByName</a>({ ...params }) -> ResponseSuccess</code>
- <code title="post /fb/subscriber/createSubscriber">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">createSubscriber</a>({ ...params }) -> SubscriberCreateSubscriberResponse</code>
- <code title="get /fb/subscriber/findByCustomField">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">findByCustomField</a>({ ...params }) -> SubscriberFindByCustomFieldResponse</code>
- <code title="get /fb/subscriber/findByName">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">findByName</a>({ ...params }) -> SubscriberFindByNameResponse</code>
- <code title="get /fb/subscriber/findBySystemField">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">findBySystemField</a>({ ...params }) -> SubscriberFindBySystemFieldResponse</code>
- <code title="post /fb/subscriber/removeTag">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">removeTag</a>({ ...params }) -> ResponseSuccess</code>
- <code title="post /fb/subscriber/removeTagByName">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">removeTagByName</a>({ ...params }) -> ResponseSuccess</code>
- <code title="get /fb/subscriber/getInfo">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">retrieveInfo</a>({ ...params }) -> SubscriberRetrieveInfoResponse</code>
- <code title="get /fb/subscriber/getInfoByUserRef">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">retrieveInfoByUserRef</a>({ ...params }) -> SubscriberRetrieveInfoByUserRefResponse</code>
- <code title="post /fb/subscriber/setCustomField">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">setCustomField</a>({ ...params }) -> ResponseSuccess</code>
- <code title="post /fb/subscriber/setCustomFieldByName">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">setCustomFieldByName</a>({ ...params }) -> ResponseSuccess</code>
- <code title="post /fb/subscriber/setCustomFields">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">setCustomFields</a>({ ...params }) -> ResponseSuccess</code>
- <code title="post /fb/subscriber/updateSubscriber">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">updateSubscriber</a>({ ...params }) -> SubscriberUpdateSubscriberResponse</code>
- <code title="post /fb/subscriber/verifyBySignedRequest">client.fb.subscriber.<a href="./src/resources/fb/subscriber.ts">verifyBySignedRequest</a>({ ...params }) -> SubscriberVerifyBySignedRequestResponse</code>
