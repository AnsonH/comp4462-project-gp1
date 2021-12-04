import { useState } from "react";
import Grid from "@mui/material/Grid";
import DropdownMenu from "./components/dropdownmenu/DropdownMenu";
import Map from "./components/map/Map";
import Word_Cloud from "./components/wordcloud/Word_Cloud";
// import Demographics from "./components/demographics/Demographics";
import Demographics2 from "./components/demographics/Demographics2";
import ParallelCoordinate from "./components/parallelcoordinate/ParallelCoordinate";
import Time_Range from "./components/timerange/Time_Range";

function App() {
  const [yearRange, setYearRange] = useState([1966, 2017]);
  const [usState, setUsState] = useState("");
  const [venues, setVenues] = useState([]);

  return (
    <div>
      <DropdownMenu
        yearRange={yearRange}
        setYearRange={setYearRange}
        usState={usState}
        setUsState={setUsState}
        venues={venues}
        setVenues={setVenues}
      />
      <Grid container spacing={2} style={{ paddingTop: 80 }}>
        <Grid item xs={7} container direction="column" spacing={2}>
          <Grid item>
            <Map yearRange={yearRange} usState={usState} venues={venues} />
          </Grid>
          <Grid item>
            <ParallelCoordinate yearRange={yearRange} usState={usState} venues={venues} />
          </Grid>
        </Grid>
        <Grid item xs={5} container direction="column" spacing={2}>
          <Grid item>
            <Word_Cloud
              yearRange={yearRange}
              usState={usState}
              venues={venues}
              setVenues={setVenues}
            />
          </Grid>
          <Grid item>
            <Demographics2 yearRange={yearRange} usState={usState} venues={venues} />
          </Grid>
          <Grid item>
            <Time_Range yearRange={yearRange} usState={usState} venues={venues} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
