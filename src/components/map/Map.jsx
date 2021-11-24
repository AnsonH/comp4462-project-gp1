import { getShootingByID, loadData } from "../../utils/index";
import { Card } from "@mui/material";

export default function Map(props) {
  const data = loadData(false, "Mental Health Issues", "Race", "Gender");
  return (
    <Card style={props.style}>
      {/* {data.map((shooting) => (
        <p style={{ fontSize: shooting.Injured + 10 }}>
          {shooting["S#"] + ": " + shooting.Title}
        </p>
      ))} */}
      <div
        style={{
          backgroundColor: "green",
          width: "100%",
          height: 300,
          maxHeight: "100%",
          display: "flex",
        }}
      >
        Map
      </div>
    </Card>
  );
}
