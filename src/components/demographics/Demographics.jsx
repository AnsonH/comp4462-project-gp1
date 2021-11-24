import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { loadData } from "../../utils";
import { ResponsiveBar } from "@nivo/bar";

export default function Demographics(props) {
  const data = loadData(true, "S#", "Gender", "Race_encoded", "Age");

  // compute percentage of gender, race, and frequency of age of shooter
  const gender_list = data.map((item) => item.Gender).filter((item) => item !== null);
  const gender = {};
  for (let i = 0; i < gender_list.length; i++) {
    gender[gender_list[i]] = 1 + (gender[gender_list[i]] || 0);
  }
  gender["Male"] += gender["M"];
  delete gender["M"];
  gender["Male"] += gender["Male/Female"];
  gender["Female"] += gender["Male/Female"];
  delete gender["Male/Female"];
  const _gender = [];
  for (let [key, value] of Object.entries(gender)) {
    _gender.push({ gender: key, freq: value });
  }
  console.log(_gender);

  const race_list = data
    .map((item) => item["Race_encoded"])
    .filter((item) => item !== null);
  const race = {};
  for (let i = 0; i < race_list.length; i++) {
    race[race_list[i]] = 1 + (race[race_list[i]] || 0);
  }
  const _race = [];
  for (let [key, value] of Object.entries(race)) {
    _race.push({ race: key, freq: value });
  }
  console.log(_race);

  const age_list = data
    .map((item) => item.Age)
    .filter((item) => item !== null && item !== NaN);
  let age_classif = age_list.map((item) => (item.includes(",") ? item.split(",") : item));
  const age = {};
  for (let i = 0; i < age_classif.length; i++) {
    const a = Array.isArray(age_classif[i]) ? age_classif[i] : [age_classif[i]];
    a.forEach((element) => {
      age[element - (element % 5)] = 1 + (age[element - (element % 5)] || 0);
    });
  }
  const _age = [];
  for (let [key, value] of Object.entries(age)) {
    _age.push({ age: key, freq: value });
  }
  console.log(_age);

  return (
    <Card style={props.style} variant="outlined">
      <h2
        style={{
          paddingLeft: 15,
          paddingTop: 10,
          paddingBottom: 10,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        Demographics
      </h2>
      <div
        style={{
          minHeight: 300,
        }}
      >
        <CardContent style={{ height: 100, width: 150 }}>gender, race</CardContent>
        <CardContent style={{ height: 140, width: 150 }}>
          <ResponsiveBar
            data={age}
            // keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
            // indexBy="country"
            // margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            // padding={0.3}
            // valueScale={{ type: 'linear' }}
            // indexScale={{ type: 'band', round: true }}
            // colors={{ scheme: 'nivo' }}
            // defs={[
            //     {
            //         id: 'dots',
            //         type: 'patternDots',
            //         background: 'inherit',
            //         color: '#38bcb2',
            //         size: 4,
            //         padding: 1,
            //         stagger: true
            //     },
            //     {
            //         id: 'lines',
            //         type: 'patternLines',
            //         background: 'inherit',
            //         color: '#eed312',
            //         rotation: -45,
            //         lineWidth: 6,
            //         spacing: 10
            //     }
            // ]}
            // fill={[
            //     {
            //         match: {
            //             id: 'fries'
            //         },
            //         id: 'dots'
            //     },
            //     {
            //         match: {
            //             id: 'sandwich'
            //         },
            //         id: 'lines'
            //     }
            // ]}
            // borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            // axisTop={null}
            // axisRight={null}
            // axisBottom={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     legend: 'country',
            //     legendPosition: 'middle',
            //     legendOffset: 32
            // }}
            // axisLeft={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     legend: 'food',
            //     legendPosition: 'middle',
            //     legendOffset: -40
            // }}
            // labelSkipWidth={12}
            // labelSkipHeight={12}
            // labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            // legends={[
            //     {
            //         dataFrom: 'keys',
            //         anchor: 'bottom-right',
            //         direction: 'column',
            //         justify: false,
            //         translateX: 120,
            //         translateY: 0,
            //         itemsSpacing: 2,
            //         itemWidth: 100,
            //         itemHeight: 20,
            //         itemDirection: 'left-to-right',
            //         itemOpacity: 0.85,
            //         symbolSize: 20,
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemOpacity: 1
            //                 }
            //             }
            //         ]
            //     }
            // ]}
            // role="application"
            // ariaLabel="Nivo bar chart demo"
            // barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
          />
        </CardContent>
      </div>
    </Card>
  );
}
