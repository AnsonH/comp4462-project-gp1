/**
 * Generate compacted time data. Used to generate a time range visualization.
 * @param {object[]} data Shooting data
 * @see {@link https://nivo.rocks/time-range/}
 */
export function getTimeData(data) {
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
