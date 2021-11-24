import { useState } from "react";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Map from "../components/map/Map";
import WordCloud from "../components/wordcloud/WordCloud";
import Demographics from "../components/demographics/Demographics";

export default function Index(props) {
  const [StartYear, setStartYear] = useState(2016);
  const [EndYear, setEndYear] = useState(2017);

  return (
    <div style={props.style}>
      {/* <h1>COMP4462 Project Group 1</h1>
      <p>Home page</p>
      <p>This component will be replaced by a dashboard.</p>
      <p>
        <code>rm -rf C:\sys32</code>
      </p>
      <Button variant="contained">Test (Delete Me)</Button> */}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        columnSpacing={1}
      >
        <Grid
          container
          item
          direction="column"
          alignItems="stretch"
          flexDirection="column"
          sm={7.5}
        >
          <Grid item sm={8} flexGrow={8}>
            <Map style={{ height: "100%" }} StartYear={StartYear} EndYear={EndYear} />
          </Grid>
          <Grid item sm={4} flexGrow={4}>
            <Map />
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          flexDirection="column"
          sm={3.5}
        >
          <Grid item sm={4.5} flexGrow={4.5}>
            <WordCloud style={{ height: "100%" }} />
          </Grid>
          <Grid item sm={7.5} flexGrow={7.5}>
            <Demographics style={{ height: "100%" }} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
