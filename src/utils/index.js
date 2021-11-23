// This `utils` folder holds all utility and helper functions for your React app

const data = require("../data/mass_shootings.json");

function loadData(drop, ...array) {
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
        drop ? array.includes(key) : !array.includes(key)
      )
    )
  );
}

function getShootingByID(S_id) {
  const s = data.find((shooting) => shooting["S#"] === S_id);
  return s;
}

export { loadData, getShootingByID };
