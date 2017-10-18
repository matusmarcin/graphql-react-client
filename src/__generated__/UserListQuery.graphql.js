/**
 * @flow
 * @relayHash d0a64cd2fc145b27cf38f0076a9f38c2
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UserListQueryResponse = {|
  +allUsers: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query UserListQuery {
  allUsers {
    ...User_user
  }
}

fragment User_user on User {
  id
  name
  message
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserListQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "allUsers",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "User_user",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UserListQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "UserListQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "allUsers",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "User",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "message",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query UserListQuery {\n  allUsers {\n    ...User_user\n  }\n}\n\nfragment User_user on User {\n  id\n  name\n  message\n}\n"
};

module.exports = batch;
