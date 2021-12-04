// import d3 from "d3";
import { bin } from "d3-array";

/**
 * Get data about age of shooters. Used to generate a histogram.
 * @param {object[]} data Shooting data
 * @see {@link https://nivo.rocks/bar/}
 */
export function getAgeData(data) {
  const ageList = data
    .map((item) => item.Age)
    .filter((item) => item !== null && item !== NaN && item !== "0");

  // Process values that has two age values (eg. "15,16")
  ageList.forEach((age, index) => {
    if (age.indexOf(",") !== -1) {
      const ages = age.split(",");
      ageList[index] = ages[0];
      for (let i = 1; i < ages.length; ++i) {
        ageList.push(ages[i]);
      }
    }
  });

  // Separate ages into bins
  const MAX_AGE = 75;
  const histGenerator = bin()
    .domain([0, MAX_AGE])
    .thresholds(MAX_AGE / 5 - 1);
  const bins = histGenerator(ageList);

  // Generate object
  const ageData = [];
  bins.forEach((bin, index) => {
    const age = 5 * (index + 1);
    const data = { age, freq: bin.length };
    ageData.push(data);
  });

  return ageData;
}

/**
 * Get data about race of shooters. Used to generate a radar graph.
 * @param {object[]} data Shooting data
 * @see {@link https://nivo.rocks/radar/}
 */
export function getRaceData(data) {
  const races = [
    { Race: "White", Frequency: 0 },
    { Race: "Black", Frequency: 0 },
    { Race: "Asian", Frequency: 0 },
    { Race: "Other", Frequency: 0 },
  ];

  const raceList = data
    .map((item) => item["Race_encoded"])
    .filter((item) => item !== null);

  raceList.forEach((race) => {
    const raceObj = races.find((r) => r.Race === race);
    ++raceObj.Frequency;
  });

  return races;
}
