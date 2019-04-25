import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TopNav from "../TopNav/TopNav";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"]
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  cardHeader: {
    textTransform: "uppercase"
  },
  cardContentBox: {
    marginBottom: 40,
    height: 65
  },
  cardButtonBox: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    width: 150
  }
});
class Home extends Component {
  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;
    return (
      <div>
        <CssBaseline />
        <TopNav currentPath={currentPath} />
        <div className={classes.root}>
          {/* Cards Container */}
          <Grid container justify="center">
            <Grid
              spacing={24}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              {/* Card 1*/}
              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <div className={classes.cardContentBox}>
                    <Typography
                      variant="h6"
                      color="primary"
                      gutterBottom
                      className={classes.cardHeader}
                    >
                      My Area
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      You need to do some stuff
                    </Typography>
                  </div>
                  <div className={classes.cardButtonBox}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.button}
                    >
                      Learn more
                    </Button>
                  </div>
                </Paper>
              </Grid>
              {/* Card 2*/}
              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <div className={classes.cardContentBox}>
                    <Typography
                      variant="h6"
                      color="primary"
                      gutterBottom
                      className={classes.cardHeader}
                    >
                      Course Recommendations
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Heres whats relevant for you
                    </Typography>
                  </div>
                  <div className={classes.cardButtonBox}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.button}
                    >
                      Learn more
                    </Button>
                  </div>
                </Paper>
              </Grid>
              {/* Card 3*/}
              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <div className={classes.cardContentBox}>
                    <Typography
                      variant="h6"
                      color="primary"
                      gutterBottom
                      className={classes.cardHeader}
                    >
                      Training Progress Tracker
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Your progress so far on active courses
                    </Typography>
                  </div>
                  <div className={classes.cardButtonBox}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.button}
                    >
                      Learn more
                    </Button>
                  </div>
                </Paper>
              </Grid>
              {/* Card 4*/}
              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <div className={classes.cardContentBox}>
                    <Typography
                      variant="h6"
                      color="primary"
                      gutterBottom
                      className={classes.cardHeader}
                    >
                      Latest Quiz Results
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      You did very well in your last quiz!
                    </Typography>
                  </div>
                  <div className={classes.cardButtonBox}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.button}
                    >
                      Learn more
                    </Button>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Home));
