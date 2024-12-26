import React, { useState } from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const getData = async (e) => {
    await setSearchValue(e.target.value);
    await axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchValue
      )
      .then((res) => {
        setData(res.data.meals);
        console.log(data);
      });
  };

  const showResults = () => {
    if (data && data.length > 0) {
      return data.map((meal, index) => <Card key={index} meal={meal} />);
    } else {
      return (
        <img
          src="./burger.png"
          alt=""
          height="7972px"
          width="7811px"
          className="burger"
        />
      );
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Recipe book</h1>
        <h2>Taste new flavors !</h2>
        <div className="search">
          <input
            type="search"
            placeholder="Ingredient, dish..."
            value={searchValue}
            onChange={getData}
          />
        </div>
      </div>

      <div className="recipes-container">{showResults()}</div>
    </div>
  );
};

export default App;
