/**
 * @flow
 * @relayHash 2e28ca1156a8c2bee9d9a729b7f86bf8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppAllPostQueryVariables = {| |};
export type AppAllPostQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: string,
    +title: ?string,
    +content: ?string,
    +image: ?string,
  |}>,
|};
*/


/*
query AppAllPostQuery {
  posts {
    id
    title
    content
    image
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "posts",
    "storageKey": null,
    "args": null,
    "concreteType": "post",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "image",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppAllPostQuery",
  "id": null,
  "text": "query AppAllPostQuery {\n  posts {\n    id\n    title\n    content\n    image\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppAllPostQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "AppAllPostQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'ba119d21fe6a652d6c638a2711ac7c2e';
module.exports = node;
