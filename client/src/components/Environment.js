import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

const store = new Store(new RecordSource());

const network = new Network.create((operation, variables) => {
  return fetch('http://192.168.0.14:4000/graphql', {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(res => res.json());
});
const environment = new Environment({
  network,
  store
});

export default environment;