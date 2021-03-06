import { connect } from "react-redux";
import MyDetails from "./MyDetails";
import * as actionCreator from "../../store/actions/loginActions";

//Login route "/" will come here, then go to the MUI component

//Handles mapping Login Props to state Props. Only used for
//reading values.
const mapStateToProps = state => {
  return {
    userName: state.loginR.userName,
    password: state.loginR.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //dispatch actions defined in reducer
    // onEnterUserName: e => dispatch(actionCreator.enterUserName(e)),
    // onEnterPassword: e => dispatch(actionCreator.enterPassword(e)),
    // onMakeApiCall: () => dispatch(actionCreator.makeApiCall()),
    // onLogin: (username, password) =>
    //   dispatch(actionCreator.login(username, password))
    //NOTE: we will call loginAsync from loginActions.js
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDetails);
