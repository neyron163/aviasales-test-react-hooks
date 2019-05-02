import React, { Fragment } from "react";
import s from "./tab.module.css";
import plane from "../images/plane.svg";

export function Tab({
  price,
  logo,
  origin,
  amount,
  departureTime,
  arrivalTime,
  destinationName,
  arrivalName,
  departureDate,
  arrivalDate,
  currency,
  weekDays,
  date
}) {
  const getDate = date => new Date(date);
  return (
    <Fragment>
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
              <div className={s.transferWrap}>
                <div className={s.leftPlane}>
                  <img src={plane} alt="plane" />
                </div>
                <div className={s.transfer}>Без пересадок</div>
                <div className={s.rightPlane}>
                  <img src={plane} alt="plane" />
                </div>
              </div>
            ) : (
              <div className={s.transferWrap}>
                <div className={s.leftPlane}>
                  <img src={plane} alt="plane" />
                </div>
                <div className={s.transfer}>
                  {amount === 1 ? `${amount} пересадка` : `${amount} пересадки`}
                </div>
                <div className={s.rightPlane}>
                  <img src={plane} alt="plane" />
                </div>
              </div>
            )}
            <div className={s.arrivalTime}>{arrivalTime}</div>
          </div>

          <div className={s.bottom}>
            <div className={s.flightName}>
              <div>
                {origin},{arrivalName}
              </div>
              <div>{destinationName}</div>
            </div>
            <div className={s.date}>
              <div className={s.dateFlight}>
                {arrivalDate.substring(0, 2)}{" "}
                {date[getDate(departureDate).getDate() - 1]}{" "}
                {getDate(departureDate).getFullYear()},{" "}
                {weekDays[getDate(departureDate).getDay()]}
              </div>
              <div>
                {arrivalDate.substring(0, 2)}{" "}
                {date[getDate(arrivalDate).getDate() - 1]}{" "}
                {getDate(arrivalDate).getFullYear()},{" "}
                {weekDays[getDate(arrivalDate).getDay()]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
