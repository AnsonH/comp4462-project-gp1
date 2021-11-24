import { Card } from "@mui/material";

export default function Demographics(props) {
  return (
    <Card style={props.style}>
      <div
        style={{
          backgroundColor: "blue",
          width: 360,
          height: 150,
          maxHeight: "100%",
          display: "flex",
        }}
      ></div>
    </Card>
  );
}
