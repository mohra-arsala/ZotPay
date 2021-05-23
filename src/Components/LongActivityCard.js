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
    width: '84%',
    margin: 'auto',
    marginTop: 26,
    minWidth: 376,
  },
  scroll:{
    overflowY: 'scroll'
  },
  margin:{
    color: '#27649f',
    marginRight: 0,
    left: '80%',
    top: -10
  },
  money:{
    color: '#27649f',
  },
  list:{
    width: '100%',
    marginBottom: 0
  },
  c:{
    minHeight: 300,
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
  ava:{
    backgroundColor: '#27649f'
  },
  box:{
      width: '40%',
      margin: 'auto',
  },
  date: {
      fontSize: 20,
      color: '#27649f',
      fontWeight: 'bold',
      fontFamily: 'roboto',
      width: '30%',
      marginTop: 10,
      marginBottom: 8
  },
  date2: {
    fontSize: 20,
    color: '#27649f',
    fontWeight: 'bold',
    fontFamily: 'roboto',
    width: '40%',
    marginTop: 10,
    marginBottom: 8
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
      <CardContent>
      <Typography  className={classes.date}>Today</Typography>
        <div className={classes.scroll}>
        <List className={classes.list} className={classes.scroll}>
      <ListItem>
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
      <ListItem>
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
      <ListItem>
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
      <Typography  className={classes.date2}>2021/4/10</Typography>
      <ListItem>
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
      <ListItem>
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
      <Typography  className={classes.date2}>2021/3/20</Typography>
      <ListItem>
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
      <ListItem>
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
    </List>
    </div>
      </CardContent>
      </div>
    </Card>
  );
}
