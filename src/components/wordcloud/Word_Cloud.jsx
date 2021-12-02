import { Card, CardContent } from "@mui/material";
import * as d3 from "d3";
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

function handleMouseOut(d) {
  d3.select("#story-titles").remove();
}

function getWordColor(proportion) {
  if (proportion >= 0.3) {
    return "#6D0909";
  } else if (proportion >= 0.2) {
    return "#B41717";
  } else if (proportion >= 0.02) {
    return "#D15151";
  } else {
    return "#E27C7C";
  }
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

  function handleMouseClick(d) {}

  // function handleMouseOver(d) {
  //   var group = focus.append('g')
  //                    .attr('id', 'story-titles');
  //    var base = d.y - d.size;

  //   d3.selectAll('text')
  //        .data(data['sample_title'][d.key])
  //        .enter().append('text')
  //        .attr('x', d.x)
  //        .attr('y', function(title, i) {
  //          return (base - i*14);
  //        })
  //        .attr('text-anchor', 'middle')
  //        .text(function(title) { return title; });

  //   var bbox = group.node().getBBox();
  //   var bboxPadding = 5;

  //   // place a white background to see text more clearly
  //   var rect = group.insert('rect', ':first-child')
  //                 .attr('x', bbox.x)
  //                 .attr('y', bbox.y)
  //                 .attr('width', bbox.width + bboxPadding)
  //                 .attr('height', bbox.height + bboxPadding)
  //                 .attr('rx', 10)
  //                 .attr('ry', 10)
  //                 .attr('class', 'label-background-strong');
  // }

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

  // calculate word cloud text size
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
      <CardContent>
        <h2>Places of Shooting</h2>
        <WordCloud
          data={words}
          width={300}
          height={100}
          font="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'"
          fontSize={(word) => (word.value === 0 ? 0 : 10 + word.proportion * 100)}
          fill={(word) => getWordColor(word.proportion)}
          rotate={0}
          random={() => 1}
          onWordClick={(event, d) => {
            // set global state
            console.log(`onWordClick: ${d.text}`);
            handleMouseClick(d);
          }}
          onWordMouseOver={(event, d) => {
            // display number
            console.log(`onWordMouseOver: ${d.text}, ${d.value}`);
            // handleMouseOver(d);
          }}
          onWordMouseOut={(event, d) => {
            handleMouseOut(d);
          }}
        />
        <WordCloudLegend style={{ margin: "15px 0 0 5px" }} />
      </CardContent>
    </Card>
  );
}
