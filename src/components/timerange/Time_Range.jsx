import { Card, CardContent, Grid } from "@mui/material";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { filterYearsState, loadData } from "../../utils";
import { weekdays, months } from "../../constants/time";

const rawData = loadData(true, "S#", "Date", "State", "Gender", "Race_encoded", "Age");

export default function Time_Range({ yearRange, usState, venues }) {
  const data = filterYearsState(rawData, yearRange, usState, venues);

  /* timeData = [
   *   { weekday: "Sun", Jan: 0, Feb: 0, ... , Dec: 0 },
   *   ...
   *   { weekday: "Sat", Jan: 0, Feb: 0, ... , Dec: 0 },
   * ]
   */
  const timeData = [];
  weekdays.forEach((weekday) => {
    const obj = { weekday: weekday };
    months.forEach((month) => {
      obj[month] = 0;
    });
    timeData.push(obj);
  });

  data.forEach((shooting) => {
    const d = new Date(shooting["Date"]);
    ++timeData[d.getDay()][months[d.getMonth()]];
  });

  return (
    <Card variant="outlined">
      <CardContent>
        <h2>Distribution by Weekdays and Months</h2>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12} style={{ height: 250 }}>
            <ResponsiveHeatMap
              data={timeData}
              keys={months}
              indexBy="weekday"
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              forceSquare={true}
              colors="reds"
            />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
