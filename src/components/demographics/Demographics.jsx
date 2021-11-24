import Card from "@mui/material/Card";

export default function Demographics(props) {
  return (
    <Card style={props.style} variant="outlined">
      <div
        style={{
          backgroundColor: "pink",
          minHeight: 150,
        }}
      >
        Demographics
      </div>
    </Card>
  );
}
