import React, { useState, useEffect } from "react";
import ControlPanel from "../ControlPanel";
import ResultsTable from "../ResultsTable";
import normalSort from "../../helpers/sorts";
import "./App.css";

const searchList = [
  { name: "Место", value: "place", order: "desc" },
  { name: "Фамилия", value: "athleteName", order: "desc" },
  { name: "Страна", value: "country", order: "desc" },
  { name: "Общее время", value: "time", order: "desc" },
  { name: "Попадания", value: "hit", order: "asc" },
  { name: "Скорострельность", value: "rateFire", order: "desc" },
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
  {
    place: "4",
    athleteName: "Серов Дмитрий",
    country: "Америка",
    time: 37.5,
    hit: 2,
    rateFire: 2.3,
  },
];

function App() {
  const [athletesList, setAthletesList] = useState(athletesData);
  const [radioValue, setRadioValue] = useState("place");
  const [order, setOrder] = useState("desc");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    setAthletesList(normalSort(athletesList, radioValue, order));
  }, [radioValue]);

  const findAthlete = (event) => {
    event.preventDefault();

    const athletes = athletesList.filter(
      ({ athleteName }) => athleteName.indexOf(searchName) !== -1
    );
    setAthletesList(athletes);
  };

  return (
    <div className="App">
      <ControlPanel
        searchList={searchList}
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        setOrder={setOrder}
        searchName={searchName}
        setSearchName={setSearchName}
        findAthlete={findAthlete}
      />
      <ResultsTable data={athletesList} />
    </div>
  );
}

export default App;
