import React from "react";
import { DATA } from "../../data";
import { Tab } from "../tab/tab";

export const Item = ({ amount, currency }) =>
  DATA.tickets.map(
    el =>
      el.stops === amount && (
        <Tab
          key={el.price.rub}
          transfer={el.transfer}
          price={
            (currency === "RUB" && el.price.rub) ||
            (currency === "USD" && el.price.usd) ||
            (currency === "EUR" && el.price.euro)
          }
          amount={amount}
          logo={el.logo}
          currency={currency}
          origin={el.origin}
          departureTime={el.departure_time}
          arrivalTime={el.arrival_time}
          flightNameStart={el.origin_name}
          flightNameEnd={el.arrival_date}
          departureDate={el.departure_date}
          arrivalDate={el.arrival_date}
        />
      )
  );
