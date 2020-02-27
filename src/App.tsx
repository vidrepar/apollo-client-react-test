import * as React from "react";
import "./styles.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo";
import ExchangeRates from "./ExchangeRates";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
}
