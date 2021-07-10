---
id: graphql-middlewares
title: GraphQL Middlewares
---

Casbin follows the officially suggested way to provide authorization for GraphQL endpoints by having a single source of truth for authorization: https://graphql.org/learn/authorization/ . In another word, Casbin should be placed between GraphQL layer and your business logic.

```javascript
// Casbin authorization logic lives inside postRepository
var postRepository = require('postRepository');
 
var postType = new GraphQLObjectType({
  name: ‘Post’,
  fields: {
    body: {
      type: GraphQLString,
      resolve: (post, args, context, { rootValue }) => {
        return postRepository.getBody(context.user, post);
      }
    }
  }
});
```
## Supported GraphQL middlewares

A complete list of Casbin GraphQL middlewares is provided as below. Any 3rd-party contribution on a new GraphQL middleware is welcomed, please inform us and we will put it in this list:)

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
Middleware | GraphQL Implementation | Author | Description
----|----|----|----
[graphql-authz](https://github.com/casbin/graphql-authz) | [graphql](https://github.com/graphql-go/graphql) | Casbin | An authorization middleware for graphql-go
[graphql-casbin](https://github.com/esmaeilpour/graphql-casbin) | [graphql](https://github.com/graphql-go/graphql) | [@esmaeilpour](https://github.com/esmaeilpour) | An Implementation of using Graphql and Casbin together
[gqlgen_casbin_RBAC_example](https://github.com/WenyXu/gqlgen_casbin_RBAC_example) | [gqlgen](https://github.com/99designs/gqlgen) | [@WenyXu](https://github.com/WenyXu) | (empty)

<!--Node.js-->
Middleware | GraphQL Implementation | Author | Description
----|----|----|----
[graphql-authz](https://github.com/node-casbin/graphql-authz) | [GraphQL.js](https://github.com/graphql/graphql-js) | Casbin | A Casbin authorization middleware for [GraphQL.js](https://github.com/graphql/graphql-js)

<!--END_DOCUSAURUS_CODE_TABS-->
