import { Card } from "@mui/material";

export default function WordCloud(props) {
  return (
    <Card style={props.style}>
      <div
        style={{
          backgroundColor: "orange",
          width: 360,
          height: 150,
          maxHeight: "100%",
          display: "flex",
        }}
      ></div>
    </Card>
  );
}
