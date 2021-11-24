import { getShootingByID, loadData } from "../../utils";
import Card from "@mui/material/Card";

export default function Map({ yearRange }) {
  return (
    <Card style={{ minHeight: 300 }} variant="outlined">
      <div>
        Map: {yearRange[0]} ~ {yearRange[1]}
      </div>
    </Card>
  );
}
