import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Text from 'react'

const useStyles = makeStyles({
  root: {
    display: 'strech',
    marginTop: '25%',
    margin: 'auto',
    width: '97%',
    minWidth: 290

  },

  button:{
      backgroundColor: '#27649f',
      color: '#fff',
      marginRight: '6%',
  },
  button2:{
    backgroundColor: '#27649f',
    color: '#fff',
  },
  
  box:{
      textAlign: 'center',
      margin: 'auto',
      width: '60%'
  },
  twobutton:{
      flexDirection: 'row',
      width: '100%',
      textAlign: 'center',
      marginBottom: '8%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27649f',
    fontFamily: 'roboto',
    textAlign: 'center',
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

  return (<div className={classes.root} >
    <Card  className={classes.root} variant="outlined">
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
        <Button className={classes.button} variant="contained" size="small"><Typography className={classes.text} >ADD FUNDS</Typography></Button>
        <Button className={classes.button2} variant="contained" size="small"><Typography className={classes.text}>WITHDRAW</Typography></Button>
        </div>
      </CardActions>
    </Card>
    </div>
  );
}
