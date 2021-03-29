import React, { useState, useEffect } from "react";
import ControlPanel from "../ControlPanel";
import ResultsTable from "../ResultsTable";
import normalSort from "../../helpers/sorts";
import findAthlete from "../../helpers/findAthlete";
import getData from "../../services/dataService";
import TABS from "../../constants";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [tabItem, setTabItem] = useState(TABS[0]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    getData.then((result) => {
      setData(result);
      setIsDataLoaded(true);
    });
  }, []);

  const visibilityAthletes = normalSort(
    findAthlete(data, searchName),
    tabItem.value,
    tabItem.order
  );

  return (
    <div className="App">
      <ControlPanel
        currentTab={tabItem}
        setTabItem={setTabItem}
        inputValue={searchName}
        setSearchName={setSearchName}
      />
      <ResultsTable
        data={visibilityAthletes}
        isDataLoaded={isDataLoaded}
        setIsDataLoaded={setIsDataLoaded}
      />
    </div>
  );
}

export default App;
