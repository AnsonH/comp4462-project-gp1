import { useState } from "react";
import Grid from "@mui/material/Grid";
import Map from "./components/map/Map";
import Word_Cloud from "./components/wordcloud/Word_Cloud";
import Demographics from "./components/demographics/Demographics";

function App() {
  const [yearRange, setYearRange] = useState([1966, 2017]);

  return (
    <div>
      <h1>US Mass Shooting Overview</h1>
      <Grid container spacing={2}>
        <Grid item xs={7} container direction="column" spacing={2}>
          <Grid item>
            <Map yearRange={yearRange} setYearRange={setYearRange} />
          </Grid>
          {/* <Grid item>
            <Map />
          </Grid> */}
        </Grid>
        <Grid item xs={5} container direction="column" spacing={2}>
          <Grid item>
            <Word_Cloud yearRange={yearRange} style={{ height: "100%" }} />
          </Grid>
          <Grid item>
            <Demographics yearRange={yearRange} style={{ height: "100%" }} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
