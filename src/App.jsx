import { useState } from "react";
import Grid from "@mui/material/Grid";
import Map from "./components/map/Map";
import WordCloud from "./components/wordcloud/WordCloud";
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
            <WordCloud />
          </Grid>
          <Grid item>
            <Demographics />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
