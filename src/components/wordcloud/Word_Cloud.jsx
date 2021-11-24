import { Card } from "@mui/material";
import * as d3 from "d3";
import WordCloud from "react-d3-cloud";
import { loadData, getShootingByID } from "../../utils";

export default function Word_Cloud(props) {
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

  function handleMouseOut(d) {
    d3.select("#story-titles").remove();
  }

  function addValue(txt) {
    const element = words.find((item) => item.text === txt);
    element.value = element.value + 1;
  }

  const synonyms = {
    Party: ["party"],
    Restaurant: ["restaurant", "cafeteria", "cafe", "coffee shop"],
    Home: [
      "home",
      "house",
      "family",
      "mother",
      "father",
      "child",
      "son",
      "daughter",
      "apartment",
    ],
    "Drive-by": ["drive-by", "drive by"],
    Club: ["club", "bar", "pub"],
    School: ["school", "teacher", "student", "university", "college"],
    Street: ["street", "sidewalk", "roadside"],
    "Gas station": ["gas station"],
    "Post office": ["post office"],
    Church: ["church", "temple", "mosque"],
    Mall: ["mall", "shopping", "macy's", "plaza"],
    "Public facilities": [
      "public facilities",
      "city hall",
      "army",
      "government",
      "township",
      "navy",
      "train",
      "airport",
    ],
  };

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
  const data = loadData(true, "S#", "Title", "Incident Area", "Summary", "NER");
  const locations = Object.keys(synonyms);
  for (let i in data) {
    let counted = false;
    const shooting = data[i];
    for (let j in locations) {
      const loc = locations[j];
      if (
        synonyms[loc]
          .map((item) => shooting["Title"].toLowerCase().includes(item))
          .includes(true) ||
        synonyms[loc]
          .map((item) =>
            shooting["Incident Area"]
              ? shooting["Incident Area"].toLowerCase().includes(item)
              : false
          )
          .includes(true) ||
        synonyms[loc]
          .map((item) => shooting["Summary"].toLowerCase().includes(item))
          .includes(true) ||
        synonyms[loc]
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

  console.log(filterByVenue["Others"].map((idx) => getShootingByID(idx)["Title"]));

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
        Word Cloud
      </h2>
      <div
        style={{
          minHeight: 280,
          marginTop: -120,
          marginLeft: -350,
        }}
      >
        <WordCloud
          data={words}
          width={550}
          height={180}
          fontSize={(word) => word.value * 0.26 + 5}
          rotate={0}
          random={(e) => 1}
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
      </div>
    </Card>
  );
}
