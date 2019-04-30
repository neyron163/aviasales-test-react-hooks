import React from "react";
import s from "./tab.module.css";

export function Tab({
  price,
  logo,
  origin,
  amount,
  departureTime,
  arrivalTime,
  flightNameStart,
  flightNameEnd,
  departureDate,
  arrivalDate,
  currency
}) {
  return (
    <div>
      <div className={s.wrap}>
        <div className={s.leftSide}>
          <div className={s.nameCompany}>
            <img src={logo} alt={origin} />
          </div>
          <button className={s.btn}>
            Купить <br /> за {price}
            {currency === "RUB" && <span>&#8381;</span>}
            {currency === "USD" && <span>&#36;</span>}
            {currency === "EUR" && <span>&#8364;</span>}
          </button>
        </div>

        <div className={s.info}>
          <div className={s.top}>
            <div className={s.departureTime}>{departureTime}</div>
            {amount === 0 ? (
              <div className={s.transfer}>Без пересадок</div>
            ) : (
              <div className={s.transfer}>
                {amount === 1 ? `${amount} пересадка` : `${amount} пересадки`}
              </div>
            )}
            <div className={s.arrivalTime}>{arrivalTime}</div>
          </div>

          <div className={s.bottom}>
            <div className={s.flight}>
              <div className={s.nameFlight}>{origin},{flightNameStart}</div>
              <div>{flightNameEnd}</div>
            </div>
            <div className={s.date}>
              <div className={s.dateFlight}>{departureDate}</div>
              <div>{arrivalDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
