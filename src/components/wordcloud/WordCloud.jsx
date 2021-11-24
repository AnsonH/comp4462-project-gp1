import { Card } from "@mui/material";

export default function WordCloud(props) {
  return (
    <Card style={props.style} variant="outlined">
      <div
        style={{
          backgroundColor: "orange",
          minHeight: 150,
        }}
      >
        Word Cloud
      </div>
    </Card>
  );
}
