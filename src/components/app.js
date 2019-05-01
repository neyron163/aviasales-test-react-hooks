// @flow
import React, { useState, useEffect } from "react";

import { Checkbox } from "./checkbox/checkbox";
import { Item } from "./item/item";
import { Currency } from "./currency/currency";
import { DATA, CURRENCY, ALL } from "../data";
import s from "./index.module.css";

export function App() {
  const [currency, setCurrency] = useState("RUB");
  const [data, setData] = useState([0, 1, 2, 3]);
  const [originalData, setOrginalData] = useState([]);
  const [stops, setStops] = useState([]);

  useEffect(() => {
    const stops = DATA.tickets.map(el => el.stops);

    const sort = stops
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort()
      .map(el => ({
        number: el
      }));
      setStops(sort);
      setOrginalData(sort.map(el => el));
  }, []);

  function onlyCurrent(stop) {
    setData([stop]);
  }

  const joinArrays = (
    currentData,
    newData = originalData.map(el => el.number)
  ) => currentData.concat(newData);

  function onClick(stop) {
    let currentData = data.map(el => el);
    const length = currentData.length !== originalData.length;

    if (currentData.includes(stop)) {
      currentData = currentData.filter(el => el !== stop);
    } else if (stop === ALL) {
      currentData = [];
      currentData = length ? joinArrays(currentData) : [];
    } else {
      currentData = joinArrays(currentData, [stop]);
    }
    setData(currentData);
  }
  return (
    <div className={s.app}>
      <div className={s.left}>
        <div className={s.currency}>
          {CURRENCY.map(el => (
            <Currency
              key={el.name}
              setCurrency={setCurrency}
              name={el.name}
              currency={currency}
            />
          ))}
        </div>
        <div>
          <div className={s.amountTitle}>Количество пересадок</div>
          {data.length >= originalData.length ? (
            <Checkbox stop={ALL} onClick={onClick} data key="all" />
          ) : (
            <Checkbox stop={ALL} onClick={onClick} key="all" />
          )}

          {stops.map(el =>
            data.includes(el.number) ? (
              <Checkbox
                key={el.number + 1}
                stop={el.number}
                onClick={onClick}
                onlyCurrent={onlyCurrent}
                data
              />
            ) : (
              <Checkbox
                key={el.number}
                stop={el.number}
                onClick={onClick}
                onlyCurrent={onlyCurrent}
              />
            )
          )}
        </div>
      </div>
      <div className={s.right}>
          {data.map(el => (
              <Item amount={el} currency={currency} />
          ))}
      </div>
    </div>
  );
}
