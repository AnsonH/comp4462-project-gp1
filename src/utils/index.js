const data = require("../data/mass_shootings.json");

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
  if (keys.length === 0) return data;
  return data.map((shooting) =>
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
  return data.find((shooting) => shooting["S#"] === S_id);
}
