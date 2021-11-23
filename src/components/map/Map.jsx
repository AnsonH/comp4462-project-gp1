import { getShootingByID, loadData } from "../../utils/index";

export default function Map() {
  const data = loadData(false, "Mental Health Issues", "Race", "Gender");
  return (
    <>
      {data.map((shooting) => (
        <p style={{ fontSize: shooting.Injured + 10 }}>
          {shooting["S#"] + ": " + shooting.Title}
        </p>
      ))}
    </>
  );
}
