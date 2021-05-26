import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    width: '84%',
    margin: 'auto',
    marginTop: 33
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  button:{
      backgroundColor: '#27649f',
      color: '#fff',
      marginRight: 56
  },
  button2:{
    backgroundColor: '#27649f',
    color: '#fff'
  },
  box:{
      // width: '40%',
      // margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
  },
  twobutton:{
      margin: 'auto',
      marginBottom: 17
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27649f',
    fontFamily: 'roboto',
    margin: 'auto',
    marginTop: 10,
    marginBottom: 15
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27649f',
    fontFamily: 'roboto',
    margin: 'auto',
    lineHeight: 2.5
  },
});

export default function Balance() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Your ZotPay Balance
        </Typography>
        <Box border={1} borderColor='#27649f' className={classes.box}>
            <Typography className={classes.title2} gutterBottom>
            $100.00 USD
            </Typography>
        </Box>
      </CardContent>
      <CardActions> 
          <div className={classes.twobutton}>
        <Button className={classes.button} variant="contained" size="small">ADD FUNDS</Button>
        <Button className={classes.button2} variant="contained" size="small">WITHDRAW</Button>
        </div>
      </CardActions>
    </Card>
  );
}
