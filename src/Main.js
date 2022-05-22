import './main.css';
import React from 'react';
import {Link} from "react-router-dom";
import Box from "@mui/material/Box"
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function Main() {
  // const travelMethod = "Gå";
  let Distans = 0;
  let Emission = 0;

  const [position, setPosition] = React.useState('');
  const handleChange = (event) => {
    setPosition(event.target.value);
  }

  const [destination, setDestination] = React.useState('');
  const handleChange2 = (event) => {
    setDestination(event.target.value);
  }

  const [travel, setTravel] = React.useState('Walk');
  const setChange = (event) => {
    setTravel(event.target.value);
  }
  
    return (
      <div className="Main">
        <h1 style={{color: 'white'}}>Helsingborg reseguide</h1>
        <Box>
          <Paper elevation={5}>
            <Box sx={{width: '55vw', height: '30vh', minWidth: '396px'}}>
              <img src="https://google.com/maps/vt/data=FCtdEQ_ApJrhEbnejDnfRzQhgDrYO_LaBopNNDMZTSjuQ-PmUZKgSz7Rkx2YOgtDicBVzsGQ0b0HEt_aVK7Do0QBA738B4Y06Viyv7WehJUgTv4KW9vluR7SbIl00hClhZ2ctHbqmuf-AkZ8G4EhbCdENq8" width='100%' height='100%' title="Map of Helsingborg" alt="Map of Helsingborg"/>
              {/* Exempel bild */}
            </Box>
            <TextField fullWidth id="position" placeholder="Enter position..." value={position} onChange={handleChange} variant="filled"/>
            <TextField fullWidth id="destination" placeholder="Enter destination..." value={destination} onChange={handleChange2} variant="filled"/>
            {/* Byt till input kontroll */}
            <FormControl variant='standard'>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Resesätt
            </InputLabel>
            <NativeSelect defaultValue={travel} inputProps={{name: 'Resesätt',id: 'uncontrolled-native',}}>
              <option onChange={setChange} value={"Walk"}>Gå</option>
              <option onChange={setChange} value={"Car"}>Bil</option>
              <option onChange={setChange} value={"Bus"}>Buss</option>
              <option onChange={setChange} value={"Bike"}>Cykel</option>
              <option onChange={setChange} value={"Bolt"}>Bolt</option>
            </NativeSelect>
          </FormControl>
          <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Details</Typography>
            </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>Travel alternative: {travel}</p>
                  <Divider />
                  <p>Distans: {Distans}km</p>
                  <Divider />
                  <p>Emission: {Emission} CO<sub>2</sub></p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Button fullWidth sx={{backgroundColor: 'green', color: 'black'}} variant="contained"><Typography sx={{fontSize: '3vh'}}>Travel</Typography></Button>
            <Link fullWidth style={{textDecoration: 'none'}} to="/settings/"><Typography sx={{fontSize: '3vh', color: 'black'}}>Settings</Typography></Link>
          </Paper>
        </Box>
    </div>
    );
  }
  export default Main;