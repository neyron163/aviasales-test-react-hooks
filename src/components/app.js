import React, { useState, useEffect } from "react";

import { Checkbox } from "./checkbox/checkbox";
import { Item } from "./item/item";
import { Currency } from "./currency/currency";
import { DATA, CURRENCY, ALL, WEEK_DAYS, DATE } from "../data";
import logoPlane from "./images/logoPlane.png";
import s from "./index.module.css";

export function App() {
  const [currency, setCurrency] = useState("RUB");
  const [data, setData] = useState([]);
  const [originalData, setOrginalData] = useState([]);
  const [stops, setStops] = useState([]);
  const [weekDays, setWeekDays] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    const sort = DATA.tickets
      .map(el => el.stops)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort()
      .map(el => el);

    setStops(sort);
    setData(sort);
    setOrginalData(sort);
    setWeekDays(WEEK_DAYS);
    setDate(DATE);
  }, []);

  function onlyCurrent(stop) {
    setData([stop]);
  }

  function onClick(stop) {
    if (stop === ALL) {
      setData(data.length !== originalData.length ? [...originalData] : []);
    } else {
      setData(
        data.includes(stop)
          ? data.filter(el => el !== stop)
          : data.concat([stop])
      );
    }
  }
  return (
    <div className={s.app}>
      <img className={s.logoPlane} src={logoPlane} alt="logoPlane" />
      <div className={s.container}>
        <div className={s.left}>
          <div className={s.currencyWrap}>
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
              <Checkbox
                stop={ALL}
                onClick={onClick}
                originalData={originalData.length}
                data={data}
                checked={data.length >= originalData.length}
              />
              {stops.map(el => (
                <Checkbox
                  key={el}
                  data={data}
                  stop={el}
                  onClick={onClick}
                  onlyCurrent={onlyCurrent}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={s.right}>
          {data
            .sort((a, b) => a - b)
            .map(el => (
              <Item
                key={el}
                amount={el}
                currency={currency}
                weekDays={weekDays}
                date={date}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
