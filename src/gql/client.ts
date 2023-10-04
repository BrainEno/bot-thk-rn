import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { ServerSentEventsLink } from "@graphql-sse/apollo-client";
import { GRAPHQL_ENDPOINT, SSE_URL } from "@env";

const sseLink = new ServerSentEventsLink({
  graphQlSubscriptionUrl: `${SSE_URL}`,
});

const httpLink = new HttpLink({
  uri: `${GRAPHQL_ENDPOINT}`,
  credentials: "include",
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  sseLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
