import React, { useState, useEffect } from "react";
import ControlPanel from "../ControlPanel";
import ResultsTable from "../ResultsTable";
import "./App.css";

const searchList = [
  { name: "Место", value: "place" },
  { name: "Фамилия", value: "athleteName" },
  { name: "Страна", value: "country" },
  { name: "Общее время", value: "time" },
  { name: "Попадания", value: "hit" },
  { name: "Скорострельность", value: "rateFire" },
];

const athletesData = [
  {
    place: "1",
    athleteName: "Иванов Иван",
    country: "Украина",
    time: 33.5,
    hit: 4,
    rateFire: 2.2,
  },
  {
    place: "3",
    athleteName: "Петров Петр",
    country: "Уругваи",
    time: 34.5,
    hit: 2,
    rateFire: 2.5,
  },
  {
    place: "2",
    athleteName: "Димитров Дмитрий",
    country: "Россия",
    time: 36.5,
    hit: 3,
    rateFire: 2.7,
  },
];

function App() {
  const [athletesList, setAthletesList] = useState(athletesData);
  const [radioValue, setRadioValue] = useState("place");
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    const sortData = reversSort(athletesList, radioValue);

    setAthletesList(sortData);
  }, [radioValue]);

  const normalSort = (data, radioValue) => {
    const sortData = [...data].sort((a, b) => {
      return a[radioValue] - b[radioValue];
    });
    return sortData;
  };
  const reversSort = () => normalSort(athletesList, radioValue).reverse();

  return (
    <div className="App">
      <ControlPanel
        searchList={searchList}
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        searchName={searchName}
        setSearchName={setSearchName}
      />
      <ResultsTable data={athletesList} />
    </div>
  );
}

export default App;
