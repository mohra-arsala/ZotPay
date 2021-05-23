import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(3),
  },
  withoutLabel: {
    marginTop: theme.spacing(7),
  },
  textField: {
    width: '50ch',
  },
  labelStyle: {
    fontSize: 30,
    marginBottom: theme.spacing(7),
  },
}));

export default function AmountInput() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl
          fullWidth
          className={classes.margin}
          style={{ marginBottom: '90px' }}
        >
          <InputLabel
            htmlFor="standard-adornment-amount"
            className={classes.labelStyle}
          >
            Amount
          </InputLabel>
          <p> </p>
          <p> </p>
          <Input
            id="standard-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            style={{ width: '450px' }}
          />
        </FormControl>
      </div>
    </div>
  );
}
