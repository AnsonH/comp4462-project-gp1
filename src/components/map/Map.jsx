import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import { ResponsivePie } from "@nivo/pie";
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { filterYear, loadData } from "../../utils";
import { getPieChartData, getPoliticalStance, getStanceColor } from "../../utils/usMap";
import BubbleLegend from "./BubbleLegend";

const LegendH3 = styled.h3`
  text-align: center;
  margin: 0;
`;

const YearRangeLegend = styled.p`
  font-size: 16px;
  margin: 0 10px 0 0;
`;

const fullData = loadData();

export default function Map({ yearRange, setYearRange }) {
  const data = filterYear(fullData, yearRange);
  const pieChartData = getPieChartData(data);

  const PieChartCenterText = ({ dataWithArc, centerX, centerY }) => {
    let total = 0;
    dataWithArc.forEach((datum) => {
      total += datum.value;
    });

    return (
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        {total}
      </text>
    );
  };

  const handleSliderChange = (event, newYearRange) => {
    setYearRange(newYearRange);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <h2>Locations</h2>
        <Grid container spacing={2}>
          <Grid item xs={9} container direction="column">
            <Grid item style={{ height: 350 }}>
              <MapContainer
                style={{ height: 350 }}
                center={[38, -98]}
                zoom={4}
                minZoom={3}
                maxZoom={12}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map((shooting) => {
                  const S_id = shooting["S#"];
                  const stance = getPoliticalStance(S_id);
                  const victims = shooting["Total victims"];
                  return (
                    <CircleMarker
                      key={S_id}
                      center={shooting["Coordinates"]}
                      stroke={false}
                      fillColor={getStanceColor(stance)}
                      fillOpacity={0.5}
                      radius={5 * Math.log(victims)}
                    >
                      <Tooltip>
                        <div className="map-tooltip">
                          <strong>{shooting["Title"]}</strong>
                          <p>Date: {shooting["Date"]}</p>
                          <p>Total victims: {shooting["Total victims"]}</p>
                          <p>
                            Fatalities: {shooting["Fatalities"]} ; Injured:{" "}
                            {shooting["Injured"]}
                          </p>
                        </div>
                      </Tooltip>
                    </CircleMarker>
                  );
                })}
              </MapContainer>
            </Grid>
            <Grid
              item
              style={{ marginTop: 30 }}
              container
              direction="row"
              justifyContent="center"
              spacing={3}
            >
              <Grid item>
                <YearRangeLegend>Year Range:</YearRangeLegend>
              </Grid>
              <Grid item>
                <Box sx={{ width: 300 }}>
                  <Slider
                    min={1966}
                    max={2017}
                    value={yearRange}
                    onChange={handleSliderChange}
                    valueLabelDisplay="on"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems="center" spacing={3}>
            <Grid item style={{ height: 220 }}>
              <LegendH3>Political Stance</LegendH3>
              <ResponsivePie
                data={pieChartData}
                margin={{ top: 0, right: 20, bottom: 60, left: 20 }}
                innerRadius={0.5}
                colors={{ datum: "data.color" }}
                sortByValue
                enableArcLabels={false}
                enableArcLinkLabels={false}
                activeOuterRadiusOffset={2}
                layers={["arcs", "arcLabels", "legends", PieChartCenterText]}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "column",
                    justify: false,
                    translateX: 0,
                    translateY: 50,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#000",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 15,
                    symbolShape: "circle",
                  },
                ]}
              />
            </Grid>
            <Grid item style={{ marginTop: 30 }}>
              <LegendH3>Total Victims</LegendH3>
              <BubbleLegend style={{ marginTop: 15 }} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
