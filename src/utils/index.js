// This `utils` folder holds all utility and helper functions for your React app

const data = require("../data/mass_shootings.json");

/**
 * drop: boolean, whether or not the attributes are selected, default false
 * ...array: argument list of string, data attributes
 *
 * returns: array of JSON objects containing each shooting information
 */
function loadData(include = true, ...array) {
  const keys = Object.keys(data[0]);
  for (let i = 0; i < array.length; ++i) {
    if (!keys.includes(array[i])) {
      array.splice(i, 1);
      --i;
    }
  }
  if (array.length === 0) return data;
  return data.map((shooting) =>
    Object.fromEntries(
      Object.entries(shooting).filter(([key, value]) =>
        include ? array.includes(key) : !array.includes(key)
      )
    )
  );
}

/**
 * S_id: int, shooting incident ID
 *
 * returns: JSON object containing the corresponding shooting information
 */
function getShootingByID(S_id) {
  const s = data.find((shooting) => shooting["S#"] === S_id);
  return s;
}

export { loadData, getShootingByID };
