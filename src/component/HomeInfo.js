import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Next from '@material-ui/icons/NavigateNext';
import TextLoop from "react-text-loop";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width:'30vw',
    marginLeft:'60vw',
    marginTop:'30vh',
    height:'auto',
    background:'linear-gradient(90deg,#29cce2 0,#9C27B0 100%)',
    textAlign: 'center',
  },
  text:{
    color:'white'
  },
  button:{
    color:'white'
  }
});

class HomeInfo extends Component{
    render(){
  const { classes,history } = this.props;

  return (
    <div>
      <Paper className={classes.root} elevation={24}>
        <Typography variant="h3" className={classes.text} >
        Get Start
        </Typography>
        <Typography  variant="h5"  className={classes.text} >
    
        A NEW KIND OF BEAST
        </Typography>
        <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={()=>history.push('/products')}>
        <TextLoop>
          <Typography   variant="h5"  className={classes.text} >Get Click TO</Typography>
          <Typography   variant="h5"  className={classes.text} >Start Quiz</Typography>
        </TextLoop>
        <Next />
      </Button>
    </div>
      </Paper>
    </div>
  );
}}

HomeInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeInfo);