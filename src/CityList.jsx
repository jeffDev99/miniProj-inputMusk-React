import React, { useEffect } from "react";
import styles from "./CityList.module.css";
export default function CityList({ cityList, setInputValue, setIsShowList, setSuggestion }) {
  const clickHandler = (e) => {
    setInputValue(e.target.innerText);
    setSuggestion(e.target.innerText);
    setIsShowList(false);
  };
  return (
    <ul className={styles.cityList}>
      {cityList.map((city, index) => (
        <li key={index} onClick={clickHandler}>
          {city}
        </li>
      ))}
    </ul>
  );
}
