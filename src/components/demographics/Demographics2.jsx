import { Card, CardContent, Grid } from "@mui/material";
import { ResponsiveRadar } from "@nivo/radar";
import { filterYearsState, loadData } from "../../utils";
import { getRaceData } from "../../utils/demographics";

const rawData = loadData(true, "S#", "Date", "State", "Gender", "Race_encoded", "Age");

export default function Demographics({ yearRange, usState }) {
  const data = filterYearsState(rawData, yearRange, usState);
  const raceData = getRaceData(data);

  // const age_list = data
  //   .map((item) => item.Age)
  //   .filter((item) => item !== null && item !== NaN);
  // let age_classif = age_list.map((item) => (item.includes(",") ? item.split(",") : item));
  // const age = {};
  // for (let i = 0; i < age_classif.length; i++) {
  //   const a = Array.isArray(age_classif[i]) ? age_classif[i] : [age_classif[i]];
  //   a.forEach((element) => {
  //     age[element - (element % 5)] = 1 + (age[element - (element % 5)] || 0);
  //   });
  // }
  // const _age = [];
  // for (let [key, value] of Object.entries(age)) {
  //   _age.push({ age: key, freq: value });
  // }
  // console.log("age", _age);

  return (
    <Card variant="outlined">
      <CardContent>
        <h2>Demographics</h2>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={6} style={{ height: 200 }}>
            <ResponsiveRadar
              data={raceData}
              keys={["Frequency"]}
              indexBy="Race"
              margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
              colors="#850d0d"
              gridLabelOffset={14}
            />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
