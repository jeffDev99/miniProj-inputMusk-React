import { useState } from "react";
import Input from "./Input.jsx";
import { cities } from "./data.js";
import CityList from "./CityList.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [suggestion, setSuggestion] = useState("Search Your City Name...");
  const [cityList, setCityList] = useState([]);
  const [isShowList, setIsShowList] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      // input mask handle
      const closestCity = cities.find((city) => city.startsWith(value));
      setSuggestion(closestCity || "");
      // list mask handle
      const findCityList = cities.filter((city) => city.startsWith(value));
      if (findCityList) {
        setCityList(findCityList || cities);
        setIsShowList(true);
      }
    } else {
      setSuggestion("Search Your City Name...");
      setIsShowList(false);
    }
  };

  return (
    <div>
      <Input handleChange={handleChange} hint={suggestion}  inputValue={inputValue} />
      {isShowList && <CityList cityList={cityList} setInputValue={setInputValue} setSuggestion={setSuggestion} setIsShowList={setIsShowList}/>}
    </div>
  );
}

export default App;
