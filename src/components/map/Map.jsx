import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { ResponsivePie } from "@nivo/pie";
import { CircleMarker, MapContainer, TileLayer, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { filterYearsState, loadData } from "../../utils";
import { getPieChartData, getPoliticalStance, getStanceColor } from "../../utils/usMap";
import BubbleLegend from "./BubbleLegend";

const LegendH3 = styled.h3`
  text-align: center;
  margin: 0;
`;

const fullData = loadData();

export default function Map({ yearRange, usState, venues }) {
  const data = filterYearsState(fullData, yearRange, usState, venues);
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

  // returns state coordinates by taking cluster mean / mid-point of given coordinates by state
  function stateCenter() {
    if (usState === "") return [38, -98];

    const lats = data.map((shooting) => shooting["Coordinates"][0]);
    const longs = data.map((shooting) => shooting["Coordinates"][1]);
    if (lats.length === 0) return [38, -98];

    // return [
    //   lats.reduce((a, b) => a + b, 0) / lats.length,
    //   longs.reduce((a, b) => a + b, 0) / longs.length,
    // ];
    return [
      (Math.max(...lats) + Math.min(...lats)) / 2,
      (Math.max(...longs) + Math.min(...longs)) / 2,
    ];
  }
  // set zoom
  const zoom =
    usState === "" || (stateCenter()[0] === 38 && stateCenter()[1] === -98) ? 4 : 5;

  function ReZoomComponent() {
    const minimap = useMap();
    minimap.setView(stateCenter(), zoom);
    return null;
  }

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
                <ReZoomComponent />
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
                          <p>
                            Total victims: {shooting["Total victims"]} (Fatalities:{" "}
                            {shooting["Fatalities"]} ; Injured: {shooting["Injured"]})
                          </p>
                          <p className="summary">{shooting["Summary"]}</p>
                        </div>
                      </Tooltip>
                    </CircleMarker>
                  );
                })}
              </MapContainer>
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
