import React from "react";
import { DATA } from "../../data";
import { Tab } from "../tab/tab";
import uuid from "uuid";

export const Item = ({ amount, currency, weekDays, date }) =>
  DATA.tickets.map(
    el =>
      el.stops === amount && (
        <Tab
          key={uuid()}
          transfer={el.transfer}
          price={
            (currency === "RUB" && el.price.rub) ||
            (currency === "USD" && el.price.usd) ||
            (currency === "EUR" && el.price.euro)
          }
          date={date}
          weekDays={weekDays}
          amount={amount}
          logo={el.logo}
          currency={currency}
          origin={el.origin}
          destinationName={el.destination_name}
          departureTime={el.departure_time}
          arrivalTime={el.arrival_time}
          arrivalName={el.origin_name}
          departureDate={el.departure_date}
          arrivalDate={el.arrival_date}
        />
      )
  );
