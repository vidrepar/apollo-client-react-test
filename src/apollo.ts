import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { authLink } from "./Authorization";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
