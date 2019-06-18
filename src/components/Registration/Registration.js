import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link, withRouter } from "react-router-dom";
import myStyles from "./styles";

const styles = myStyles;
class Registration extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
<<<<<<< Updated upstream
        Registration Form changeMe!!!!
=======
        <Grid container spacing={12} className={classes.grid} justify="center">
          <Typography color="secondary" variant="h2">
            Registration form
          </Typography>
        </Grid>
        <Grid container spacing={12} className={classes.grid} justify="center">
          <Paper className={classes.paper}>
            <Typography variant="subtitle1">First Name</Typography>
            <TextField
              id="firstname"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              className={classes.fieldContainer}
              placeholder="Please enter your first name"
              helperText={this.state.firstNameHelperText}
              error={this.state.errorFirstName}
            />

            <Typography variant="subtitle1">Last Name</Typography>
            <TextField
              id="lastname"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
              className={classes.fieldContainer}
              placeholder="Please enter your last name"
              helperText={this.state.lastNameHelperText}
              error={this.state.errorLastName}
            />

            <Typography variant="subtitle1">Username</Typography>
            <TextField
              id="username"
              value={this.state.userName}
              onChange={this.onChangeUserName}
              className={classes.fieldContainer}
              placeholder="Please enter your Username"
              helperText={this.state.userNameHelperText}
              error={this.state.errorUserName}
            />
            <Typography variant="subtitle1">E-Mail Address</Typography>
            <TextField
              id="email"
              value={this.state.emailAddress}
              onChange={this.onChangeEmailAddress}
              className={classes.fieldContainer}
              placeholder="Please enter your E-mail address"
              helperText={this.state.emailAddressHelperText}
              error={this.state.errorEmailAddress}
            />
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.onChangePassword}
              className={classes.fieldContainer}
              placeholder="Please enter your password"
              helperText={this.state.passwordHelperText}
              error={this.state.errorPassword}
            />
            <Typography variant="subtitle1">Re-enter Password</Typography>
            <TextField
              id="reenterpassword"
              value={this.state.confPassword}
              onChange={this.onChangeConfPassword}
              className={classes.fieldContainer}
              placeholder="Please re-enter your password"
              helperText={this.state.confPasswordHelperText}
              error={this.state.errorConfPassword}
            />
            <Grid container xs={12} className={classes.buttonContainer}>
              <Grid item xs={6}>
                <Link to={{ pathname: "/" }} className={classes.link}>
                  <Button color="secondary">Cancel</Button>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={{ pathname: "/registrationsuccess" }}
                >
                  Enter
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Registration));
