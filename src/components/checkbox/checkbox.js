import React from "react";
import s from "./checkbox.module.css";
import classNames from "classnames";
import { ALL } from "../../data";

export const Checkbox = ({ onClick, onlyCurrent, stop, data, checked }) => (
  <div className={s.checkbox}>
    <div onClick={() => onClick(stop)} className={s.choosen}>
      <div
        className={classNames(
          { [s.check]: stop === ALL ? checked : data.includes(stop) },
          s.handle
        )}
      />
      {stop === ALL ? (
        <div className={s.text}>Все пересадки</div>
      ) : stop === 0 ? (
        <div className={s.text}>Без пересадок</div>
      ) : (
        <div className={s.text}>
          {stop === 1 ? `${stop} пересадка` : `${stop} пересадки`}
        </div>
      )}
    </div>
    {onlyCurrent && (
      <div className={s.only} onClick={() => onlyCurrent(stop)}>
        только
      </div>
    )}
  </div>
);
