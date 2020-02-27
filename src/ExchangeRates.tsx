import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { spawn } from "child_process";

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(RATES_QUERY);

  console.log(data);

  return (
    <>
      {data && // TODO: remove if loading === true
        data.rates.map((rate: any) => (
          <div key={rate.currency}>
            {rate.currency} | {rate.rate}
          </div>
        ))}
    </>
  );
}

const RATES_QUERY = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
