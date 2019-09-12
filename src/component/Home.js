import React, { Component } from 'react';
import background from '../asset/bg1.svg';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HomeInfo from './HomeInfo';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  background:{
  backgroundImage: `url(${background})`,
    height: '100vh',
    width: '100vw',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  right:{
      height: '100%',
      width: '100%',
      position: 'absolute'
    }
});
class Home extends Component {
  render() {
    const { classes,history } = this.props;
    return (
  <div className={classes.background}>
      <div className={classes.right}>
      <HomeInfo history={history}/>
      </div>
  </div>
    );
  }
}

export default withStyles(styles)(Home);
