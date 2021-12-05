import { Button, Card, CardContent, Grid } from "@mui/material";
import WordCloud from "react-d3-cloud";
import { loadData, filterYearsState } from "../../utils";
import WordCloudLegend from "./WordCloudLegend";
import placeSynonyms from "../../constants/placeSynonyms";

const rawData = loadData(
  true,
  "S#",
  "Title",
  "Date",
  "State",
  "Incident Area",
  "Summary",
  "NER"
);

function getWordColor(wordText, venueName, proportion) {
  let color;
  if (proportion >= 0.3) {
    color = "#6D0909";
  } else if (proportion >= 0.2) {
    color = "#B41717";
  } else if (proportion >= 0.02) {
    color = "#D15151";
  } else {
    color = "#dd7373";
  }

  // Highlight the selected venue
  if (venueName) {
    return wordText === venueName ? color : "#e6cdcd";
  }
  return color;
}

export default function Word_Cloud(props) {
  const words = [
    { text: "Party", value: 0 },
    { text: "Restaurant", value: 0 },
    { text: "Home", value: 0 },
    { text: "Drive-by", value: 0 },
    { text: "Club", value: 0 },
    { text: "School", value: 0 },
    { text: "Street", value: 0 },
    { text: "Gas station", value: 0 },
    { text: "Post office", value: 0 },
    { text: "Church", value: 0 },
    { text: "Mall", value: 0 },
    { text: "Public facilities", value: 0 },
    { text: "Others", value: 0 },
  ];

  function handleMouseClick(d) {
    const locs = filterByVenue[d.text];
    props.setVenueName(d.text);
    props.setVenues(locs);
  }

  function addValue(txt) {
    const element = words.find((item) => item.text === txt);
    element.value = element.value + 1;
  }

  const filterByVenue = {
    Party: [],
    Restaurant: [],
    Home: [],
    "Drive-by": [],
    Club: [],
    School: [],
    Street: [],
    "Gas station": [],
    "Post office": [],
    Church: [],
    Mall: [],
    "Public facilities": [],
    Others: [],
  };

  // Populate `filterByVenue` object
  const filteredData = filterYearsState(rawData, props.yearRange, props.usState);
  const locations = Object.keys(placeSynonyms);
  for (let i in filteredData) {
    let counted = false;
    const shooting = filteredData[i];
    for (let j in locations) {
      const loc = locations[j];
      if (
        placeSynonyms[loc]
          .map((item) => shooting["Title"].toLowerCase().includes(item))
          .includes(true) ||
        placeSynonyms[loc]
          .map((item) =>
            shooting["Incident Area"]
              ? shooting["Incident Area"].toLowerCase().includes(item)
              : false
          )
          .includes(true) ||
        placeSynonyms[loc]
          .map((item) => shooting["Summary"].toLowerCase().includes(item))
          .includes(true) ||
        placeSynonyms[loc]
          .map((item) =>
            shooting["NER"]
              ? JSON.stringify(shooting["NER"]).toLowerCase().includes(item)
              : false
          )
          .includes(true)
      ) {
        addValue(loc);
        counted = true;
        filterByVenue[loc].push(shooting["S#"]);
      }
    }
    if (!counted) {
      addValue("Others");
      filterByVenue["Others"].push(shooting["S#"]);
      continue;
    }
  }

  // Calculate the proportion
  const totalCount = words.reduce((acc, word) => (acc += word.value), 0);
  words.forEach((word) => {
    // Add new property called `proportion`
    word.proportion = word.value / totalCount;
  });

  return (
    <Card style={props.style} variant="outlined">
      <CardContent id="word-cloud">
        <h2>Places of Shooting</h2>
        <WordCloud
          data={words}
          width={300}
          height={100}
          font="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'"
          fontSize={(word) => (word.value === 0 ? 0 : 10 + word.proportion * 100)}
          fill={(word) => getWordColor(word.text, props.venueName, word.proportion)}
          rotate={0}
          random={() => 1}
          onWordClick={(event, d) => {
            handleMouseClick(d); // Select word, updates global state
          }}
        />
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          style={{ marginTop: 10 }}
        >
          <Grid item>
            <WordCloudLegend />
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => {
                props.setVenueName("");
                props.setVenues([]);
              }}
              style={{ visibility: props.venueName ? "visible" : "hidden" }}
            >
              Clear Filter
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
