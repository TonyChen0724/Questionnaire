import React, { Component } from 'react';
import background from '../asset/bg1.svg';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { FormGroup } from '@material-ui/core';
import { database } from '../config';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import Next from '@material-ui/icons/NavigateNext';
import DoneIcon from '@material-ui/icons/Done';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    // minWidth:'30vw',
    // marginLeft:'35vw',
    marginRight: '20vw',
    marginLeft: '20vw',
    marginTop: '30vh',
    height: 'auto',
    background: 'linear-gradient(90deg,#29cce2 0,#9C27B0 100%)',
    // textAlign: 'center',
  },
  userChoice: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 'auto',
    background: 'linear-gradient(90deg,#29cce2 0,#9C27B0 100%)',
    position: "fixed"
  },
  progress: {
    margin: theme.spacing.unit * 2,
    marginLeft: '40%'
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  button: {
    color: 'white'
  },
  background: {
    backgroundImage: `url(${background})`,
    height: '100vh',
    width: '100vw',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  right: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    color: '#972fb2'
  },
});
var userChoice = {}
class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      findUProduct: {},
      recommended: false,
      Question: 'What do you use the fittings for?',
      selectedPro: []
    };
  }
  componentDidMount = () => {
    var leadsRef = database.ref('test');
    leadsRef.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var childData = childSnapshot.val();
        this.setState({ findUProduct: childData });
      });
    });
  }
  handleChange = event => {
    const { findUProduct } = this.state
    userChoice = findUProduct[`${event.target.value}`]
    this.setState({ value: event.target.value });
  };
  submitAnswer = () => {
    const { selectedPro, value } = this.state
    selectedPro.push(this.state.value)
    this.setState({ findUProduct: userChoice, Question: `What do you need for in this ${value}?`, value: '' })
  }
  render() {
    const { classes } = this.props;
    const { findUProduct, value, Question, recommended, selectedPro } = this.state;
    var isShow = findUProduct && Object.keys(findUProduct).length !== 0;
    return (
      <div className={classes.background}>

        <div className={classes.right}>
          {selectedPro.length !== 0 && <Paper className={classes.userChoice} elevation={24}>
            <Typography variant="h6" className={classes.text} >User Selection</Typography>
            {selectedPro.map((pro) =>
              <Chip
                label={pro}
                className={classes.chip}
                deleteIcon={<Next />}
              />
            )}
          </Paper>}
          <Paper className={classes.root} elevation={24}>
            {!recommended && <Typography variant="h3" className={classes.text} >
              {Question}
            </Typography>}
            <FormGroup>
              {isShow ? Object.keys(findUProduct).map((choices, i) =>
                choices !== 'recommended' ? <FormControlLabel
                  key={i}
                  control={
                    <Radio
                      checked={value === choices}
                      onChange={this.handleChange}
                      value={choices}
                      name={choices}
                      color='secondary'
                    />
                  }
                  label={choices}
                /> :
                  <Typography variant="h3" className={classes.text} >
                    {!recommended && this.setState({ recommended: true })}
                    Please Do Sigin for Recommended Product...!
              </Typography>
              ) : <CircularProgress size={60} className={classes.progress} color="secondary" />}
            </FormGroup>
            <div>
              {!recommended && <Button variant="contained" color="primary" onClick={() => this.submitAnswer()} disabled={!value} className={classes.button}>
                NEXT
                <Next />
              </Button>}
            </div>
          </Paper>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Quiz);
