import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  textsize: {
    fontSize: 15,
  },
}));

export default function QuarterDropDownMenu() {
  const classes = useStyles();
  const [quarter, setQuarter] = React.useState('');

  const handleChange = (event) => {
    setQuarter(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Quarter</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={quarter}
        onChange={handleChange}
        label="Quarter"
        className={classes.textsize}
      >
        <MenuItem value={10} className={classes.textsize}>
          Fall '21
        </MenuItem>
        <MenuItem value={20} className={classes.textsize}>
          Winter '22
        </MenuItem>
        <MenuItem value={30} className={classes.textsize}>
          Spring '22
        </MenuItem>
      </Select>
    </FormControl>
  );
}
