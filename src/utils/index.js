import massShootData from "../data/mass_shootings.json";
import usElectionData from "../data/us_election.json";

/**
 * Filter mass shooting data by time range.
 * @param {object[]} shootingData Mass shooting data
 * @param {[number, number]} range Year range
 */
export function filterYearsState(
  shootingData,
  range = [1966, 2017],
  usState = "",
  venues = []
) {
  const filteredData = [];
  shootingData.forEach((shooting) => {
    const year = parseInt(shooting["Date"].slice(-4));
    if (
      range[0] <= year &&
      year <= range[1] &&
      shooting.State.includes(usState) &&
      (venues.length === 0 || venues.includes(shooting["S#"]))
    ) {
      filteredData.push(shooting);
    }
  });

  return filteredData;
}

/**
 * Load a copy of the mass shooting JSON data with specified keys being kept/discarded.
 * @param {boolean} include If `true`, returned objects only has keys specified in `keys` parameter.
 * If `false`, returned objects has all original keys except the ones specified in `keys` parameter.
 * @param  {...string} keys List of object keys to be kept/removed from mass shooting JSON
 */
export function loadData(include = true, ...keys) {
  for (let i = 0; i < keys.length; ++i) {
    if (!keys.includes(keys[i])) {
      keys.splice(i, 1);
      --i;
    }
  }
  if (keys.length === 0) return massShootData;
  return massShootData.map((shooting) =>
    Object.fromEntries(
      Object.entries(shooting).filter(([key, value]) =>
        include ? keys.includes(key) : !keys.includes(key)
      )
    )
  );
}

/**
 * Get an object of a single shooting incident given its ID.
 * @param {number} S_id Shooting incident ID. Corresponds to `S#` key in mass shooting JSON.
 */
export function getShootingByID(S_id) {
  return massShootData.find((shooting) => shooting["S#"] === S_id);
}
