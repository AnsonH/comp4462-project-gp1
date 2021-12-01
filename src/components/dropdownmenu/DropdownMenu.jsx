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
import styled from "@emotion/styled";
// import {} from "";

// const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const YearRangeLegend = styled.p`
  font-size: 16px;
  margin: 0 40px 0 0px;
`;

export default function DropdownMenu(props) {
  const handleSliderChange = (event, newYearRange) => {
    props.setYearRange(newYearRange);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ height: 80, justifyContent: "center" }}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            flexGrow={0.8}
            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            US Mass Shooting Overview
          </Typography>
          {/* <h1>US Mass Shooting Overview</h1> */}
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
              style={{ alignContent: "baseline", alignSelf: "baseline" }}
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
                style={{ color: "white", width: 200 }}
                value={props.usState}
                label="State"
                onChange={(e) => {
                  props.setUsState(e.target.value);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {states.map((state) => (
                  <MenuItem value={state.toUpperCase()}>{state}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          {/* Button to reset all */}
          <Button
            variant="contained"
            onClick={() => {
              props.setYearRange([1966, 2017]);
              props.setUsState("");
            }}
          >
            Reset Filters
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
