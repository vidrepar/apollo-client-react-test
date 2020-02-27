import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(RATES_QUERY);

  return <>{JSON.stringify(data)}</>;
}

const RATES_QUERY = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
