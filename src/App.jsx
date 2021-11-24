import { useState } from "react";
import Grid from "@mui/material/Grid";
import Map from "./components/map/Map";
import WordCloud from "./components/wordcloud/WordCloud";
import Demographics from "./components/demographics/Demographics";

function App() {
  const [yearRange, setYearRange] = useState([2016, 2017]);

  return (
    <div>
      <h1>US Mass Shooting Overview</h1>
      <Grid container spacing={2}>
        <Grid item xs={7} container direction="column" spacing={2}>
          <Grid item>
            <Map yearRange={yearRange} />
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

  // return (
  //   <Grid
  //     container
  //     direction="row"
  //     justifyContent="space-evenly"
  //     alignItems="center"
  //     columnSpacing={1}
  //   >
  //     <Grid
  //       container
  //       item
  //       direction="column"
  //       alignItems="stretch"
  //       flexDirection="column"
  //       sm={7.5}
  //     >
  //       <Grid item sm={8} flexGrow={8}>
  //         <Map style={{ height: "100%" }} StartYear={StartYear} EndYear={EndYear} />
  //       </Grid>
  //       <Grid item sm={4} flexGrow={4}>
  //         <Map />
  //       </Grid>
  //     </Grid>
  //     <Grid
  //       container
  //       item
  //       direction="column"
  //       alignItems="center"
  //       flexDirection="column"
  //       sm={3.5}
  //     >
  //       <Grid item sm={4.5} flexGrow={4.5}>
  //         <WordCloud style={{ height: "100%" }} />
  //       </Grid>
  //       <Grid item sm={7.5} flexGrow={7.5}>
  //         <Demographics style={{ height: "100%" }} />
  //       </Grid>
  //     </Grid>
  //   </Grid>
  // );
}

export default App;
