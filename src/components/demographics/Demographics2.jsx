import { Card, CardContent, Grid } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveRadar } from "@nivo/radar";
import { filterYearsState, loadData } from "../../utils";
import { getAgeData, getRaceData } from "../../utils/demographics";

const rawData = loadData(true, "S#", "Date", "State", "Gender", "Race_encoded", "Age");

export default function Demographics({ yearRange, usState }) {
  const data = filterYearsState(rawData, yearRange, usState);
  const raceData = getRaceData(data);
  const ageData = getAgeData(data);

  return (
    <Card variant="outlined">
      <CardContent>
        <h2>Demographics</h2>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={4} style={{ height: 200 }}>
            <ResponsiveRadar
              data={raceData}
              keys={["Frequency"]}
              indexBy="Race"
              margin={{ top: 10, right: 35, bottom: 10, left: 38 }}
              colors="#850d0d"
              gridLabelOffset={8}
            />
          </Grid>
          <Grid item xs={8} style={{ height: 220 }}>
            <ResponsiveBar
              data={ageData}
              keys={["freq"]}
              indexBy="age"
              margin={{ top: 20, right: 30, bottom: 45, left: 55 }}
              colors="#e27c7c"
              isInteractive={false}
              axisLeft={{
                legend: "No. of shooters",
                legendPosition: "middle",
                legendOffset: -35,
              }}
              axisBottom={{
                legend: "Age",
                legendPosition: "middle",
                legendOffset: 35,
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
