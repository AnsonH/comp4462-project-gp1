import { Card, CardContent, Grid } from "@mui/material";
import { ResponsiveTimeRange } from "@nivo/calendar";
import { filterYearsState, loadData } from "../../utils";
import { getRaceData } from "../../utils/demographics";

const rawData = loadData(true, "S#", "Date", "State", "Gender", "Race_encoded", "Age");

export default function Time_Range({ yearRange, usState }) {
  const data = filterYearsState(rawData, yearRange, usState);
  const raceData = getRaceData(data);

  return (
    <Card variant="outlined">
      <CardContent>
        <h2>Time Range</h2>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={6} style={{ height: 200 }}>
            {/* <ResponsiveTimeRange
                            data={data}
                            from="2018-04-01"
                            to="2018-08-12"
                            emptyColor="#eeeeee"
                            colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                            margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
                            dayBorderWidth={2}
                            dayBorderColor="#ffffff"
                            legends={[
                                {
                                    anchor: 'bottom-right',
                                    direction: 'row',
                                    justify: false,
                                    itemCount: 4,
                                    itemWidth: 42,
                                    itemHeight: 36,
                                    itemsSpacing: 14,
                                    itemDirection: 'right-to-left',
                                    translateX: -60,
                                    translateY: -60,
                                    symbolSize: 20
                                }
                            ]}
                        /> */}
          </Grid>
          <Grid item></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
