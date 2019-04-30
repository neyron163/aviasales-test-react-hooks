import React from "react";
import classNames from "classnames";
import s from "./currency.module.css";

export const Currency = ({ name, setCurrency, currency }) => (
  <div
    className={classNames({ [s.active]: currency === name }, s.item)}
    onClick={() => setCurrency(name)}
  >
    {name}
  </div>
);
