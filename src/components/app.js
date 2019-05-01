// @flow
import React, { useState, useEffect } from "react";

import { Checkbox } from "./checkbox/checkbox";
import { Item } from "./item/item";
import { Currency } from "./currency/currency";
import { DATA, CURRENCY, ALL } from "../data";
import s from "./index.module.css";

export function App() {
  const [currency, setCurrency] = useState("RUB");
  const [data, setData] = useState([]);
  const [originalData, setOrginalData] = useState([]);
  const [stops, setStops] = useState([]);

  useEffect(() => {
    const sort = DATA.tickets
      .map(el => el.stops)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort()
      .map(el => el);

    setStops(sort);
    setData(sort);
    setOrginalData(sort);
  }, []);

  function onlyCurrent(stop) {
    setData([stop]);
  }

  function onClick(stop) {
    if (stop === ALL) {
      setData(data.length ? [] : [...originalData]);
    } else {
      setData(
        data.includes(stop)
          ? data.filter(el => el !== stop)
          : data.concat([stop])
      );
    }
    // short variant
    // setData(
    //   stop === ALL
    //     ? data.length
    //       ? []
    //       : [0, 1, 2, 3]
    //     : data.includes(stop)
    //     ? data.filter(el => el !== stop)
    //     : data.concat([stop])
    // );
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
            <Checkbox stop={ALL} onClick={onClick} checked key="all" />
          ) : (
            <Checkbox stop={ALL} onClick={onClick} key="all" />
          )}
          {stops.map(el =>
            data.includes(el) ? (
              <Checkbox
                key={el + 1}
                stop={el}
                onClick={onClick}
                onlyCurrent={onlyCurrent}
                checked
              />
            ) : (
              <Checkbox
                key={el + 1}
                stop={el}
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
