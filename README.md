# introspect

rover subgraph introspect [path to service] > [name].graphql

# compose

rover supergraph compose --config ./supergraph-config.yaml > supergraph.graphql

# create subgraph config .yaml

<code>
subgraphs:
  [service]:
    routing_url: [url]
    schema:
      file: [paht local to .graphql]
</code>

### Exemple

rover subgraph introspect http://localhost:4001/graphql > service.graphql
rover subgraph introspect http://localhost:4002/ > ./src/graphql/auth.graphql
rover supergraph compose --config ./src/graphql/supergraph-config.yaml > ./src/graphql/supergraph.graphql

### Ref

https://www.apollographql.com/docs/federation/

...
