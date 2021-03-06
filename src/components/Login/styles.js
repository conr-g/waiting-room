export default theme => ({
  paper: {
    padding: theme.spacing.unit * 4,
    alignItems: "center",
    marginTop: "20%"
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"]
  },
  grid: {
    padding: theme.spacing.unit * 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttonContainer: {
    padding: theme.spacing.unit * 4,
    alignItems: "center",
    marginTop: 10
  },
  icon: {
    fontSize: 32
  },
  link: {
    textDecoration: "none"
  },
  button: {
    width: 200,
    padding: theme.spacing.unit * 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10
  },
  header: {
    textAlign: "center"
  },
  output: {
    width: 800,
    alignItems: "center"
  },
  fieldContainer: {
    padding: theme.spacing.unit * 2,
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit * 1,
    marginRight: 90,
    width: 220
  },
  textLabel: {
    marginRight: -30
  },
  mainLogin: {
    textAlign: "center"
  }
});
