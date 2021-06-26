import "./App.scss";
import React, { useEffect, useState } from "react";
import { getProgramsService } from "./services";
import Program from "./Components/Program";
import LaunchYear from "./Components/Filters/LaunchYear";
import SuccesFulLaunch from "./Components/Filters/SuccessFulLaunch";
import SuccessFulLanding from "./Components/Filters/SuccessFulLanding";

function App() {
  const [programData, setProgramData] = useState([]);
  const [yearFilter, SetYearFilter] = useState(null);
  const [launchFilter, setLaunchFilter] = useState(null);
  const [landFilter, setLandFilter] = useState(null);

  useEffect(() => {
    const getPrograms = () => {
      getProgramsService(yearFilter, launchFilter, landFilter)
        .then((res) => res.json())
        .then((data) => setProgramData(data))
        .catch((e) => e);
    };
    getPrograms();
  }, [launchFilter, yearFilter, landFilter]);

  return (
    <div className="main_container">
      <div className="container">
        <h5>SpaceX Lauch Programs</h5>
        <div className="left">
          <LaunchYear
            heading="Launch Year"
            filters={[
              2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
              2017, 2018, 2019, 2020,
            ]}
            setFilterValue={(val) => SetYearFilter(val)}
            selectedFilter={yearFilter}
          />
          <SuccesFulLaunch
            heading="Successful Launch"
            filters={["True", "False"]}
            setFilterValue={(val) => setLaunchFilter(val)}
            selectedFilter={launchFilter}
          />
          <SuccessFulLanding
            heading="Successful Landing"
            filters={["True", "False"]}
            setFilterValue={(val) => setLandFilter(val)}
            selectedFilter={landFilter}
          />
        </div>
        <div className="main_right">
          {programData && programData.length
            ? programData.map((p) => {
                return <Program data={p} />;
              })
            : "No Data Found"}
        </div>
      </div>
      <div className="developer">
        <h2>Developed By</h2>
        <div>Siddharth Arora</div>
      </div>
    </div>
  );
}

export default App;
