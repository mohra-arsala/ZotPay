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
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Quater</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Quater"
          className={classes.textsize}
        >
          <MenuItem value={10} className={classes.textsize}>
            Fall 21
          </MenuItem>
          <MenuItem value={20} className={classes.textsize}>
            Winter 22
          </MenuItem>
          <MenuItem value={30} className={classes.textsize}>
            Spring 22
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}