import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles({
  root: {
    width: '95%',
    margin: 'auto',
    marginTop: '10%',
    minWidth: 330,
    marginBottom: '20%',
    minWidth: 290
  },

  margin:{
    color: '#27649f',
    left: '75%',
    paddingTop: 0,
    marginTop: 0,
    top: 0,
    position: 'relative'
  },
  money:{
    color: '#27649f',
  },
  list:{
    width: '100%',
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  ava:{
    backgroundColor: '#27649f'
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

  ll:{
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0
  },
  con:{
    paddingBottom: 0,
    marginBottom: 0,
    bottom: 0
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

export default function Activity() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
        <div className={classes.c}>
      <CardContent className={classes.con}>
        <Typography className={classes.title} gutterBottom>
          Recent Activity
        </Typography>
        <List className={classes.list} className={classes.scroll}>
      <ListItem className={classes.ll}>
        <ListItemAvatar>
          <Avatar className={classes.ava}>
            <LocalParkingIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Parking" secondary="Jan 9, 2014" />
        <Typography className={classes.money} gutterBottom>
          - $20.00
        </Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.ll}>
        <ListItemAvatar>
          <Avatar className={classes.ava}>
            <StorefrontIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Merchant" secondary="Jan 7, 2014" />
        <Typography className={classes.money} gutterBottom>
          - $10.00
        </Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.ll}>
        <ListItemAvatar>
          <Avatar className={classes.ava}>
            <AttachMoneyIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bill" secondary="July 20, 2014" />
        <Typography className={classes.money} gutterBottom>
          - $30.00
        </Typography>
      </ListItem>
    </List>
      </CardContent>
      <CardActions> 
      <Button size="small" className={classes.margin} onClick={() => {}}>VIEW ALL</Button>      
        </CardActions>
      </div>
    </Card>
  );
}
