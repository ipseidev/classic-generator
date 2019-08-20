import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: "150px"
  },
  navbar: {
    backgroundColor: "rgba(41, 40, 40)"
  }
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Classic randomisateur
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
