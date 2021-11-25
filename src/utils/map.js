import massShootData from "../data/mass_shootings.json";
import usElectionData from "../data/us_election.json";
import { getShootingByID } from ".";

/**
 * Get the data for drawing a pie chart showing political stance.
 * @param {object[]} data Shooting data
 * @see {@link https://nivo.rocks/pie/}
 */
export function getPieChartData(data) {
  let democrat = 0,
    republican = 0,
    noData = 0;

  data.forEach((shooting) => {
    const S_id = shooting["S#"];
    const stance = getPoliticalStance(S_id);
    switch (stance) {
      case "DEMOCRAT":
        ++democrat;
        break;
      case "REPUBLICAN":
        ++republican;
        break;
      default:
        ++noData;
        break;
    }
  });

  return [
    {
      id: "Democrat",
      label: "Democrat",
      value: democrat,
      color: "#002387",
    },
    {
      id: "Republican",
      label: "Republican",
      value: republican,
      color: "#cc0000",
    },
    {
      id: "No Data",
      label: "No Data",
      value: noData,
      color: "#515151",
    },
  ];
}

/**
 * Get the winning party of the state in the election as closest to the shooting incident given its ID.
 * @param {number} S_id Shooting incident ID
 * @returns {"DEMOCRAT"|"REPUBLICAN"|null}
 */
export function getPoliticalStance(S_id) {
  const shooting = getShootingByID(S_id);
  const year = parseInt(shooting["Date"].slice(-4));
  const lastElectYear = year - (year % 4);

  // No election results before 1976
  if (lastElectYear < 1976) {
    return null;
  }

  const election = usElectionData.find((election) => election.year === lastElectYear);
  const state = election.details.find((state) => state.state === shooting["State"]);
  return state.winner;
}

/**
 * Gets the color of the winning party in a state.
 * @param {"DEMOCRAT"|"REPUBLICAN"|null} stance Winning party of election
 * @returns
 */
export function getStanceColor(stance) {
  switch (stance) {
    case "DEMOCRAT":
      return "#002387";
    case "REPUBLICAN":
      return "#cc0000";
    default:
      return "#515151";
  }
}
