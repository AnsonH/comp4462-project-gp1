import {
  Box,
  AppBar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Toolbar,
  Typography,
  Slider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import states from "../../constants/states";

const YearRangeLegend = styled("p")({
  fontSize: 16,
  margin: "0 40px 0 0px",
});

export default function DropdownMenu(props) {
  const handleSliderChange = (event, newYearRange) => {
    props.setYearRange(newYearRange);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ height: 80, justifyContent: "center" }}>
        <Toolbar>
          <Typography variant="h5" noWrap component="div" flexGrow={0.8}>
            US Mass Shooting Overview
          </Typography>
          {/* Select Year Range */}
          <YearRangeLegend>Year Range:</YearRangeLegend>
          <Box sx={{ width: 300, flexGrow: 1, flexDirection: "row", paddingTop: 5 }}>
            <Slider
              min={1966}
              max={2017}
              value={props.yearRange}
              onChange={handleSliderChange}
              valueLabelDisplay="on"
              color="secondary"
            />
          </Box>
          {/* Select State */}
          <Box
            sx={{
              width: 200,
              flexGrow: 0,
              flexDirection: "row",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <FormControl variant="filled">
              <InputLabel style={{ color: "white" }}>State</InputLabel>
              <Select
                sx={{
                  width: 200,
                  color: "#fff",
                  border: "1px solid #fff",
                }}
                value={props.usState}
                onChange={(e) => {
                  props.setUsState(e.target.value);
                }}
              >
                <MenuItem value="">
                  <em style={{ fontWeight: "bold" }}>All States</em>
                </MenuItem>
                {states.map((state) => (
                  <MenuItem key={state} value={state.toUpperCase()}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          {/* Button to reset all */}
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              props.setYearRange([1966, 2017]);
              props.setUsState("");
              props.setVenues([]);
              props.setVenueName("");
            }}
          >
            Reset Filters
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
