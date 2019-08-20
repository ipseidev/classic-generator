import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "80px 0px"
  },
  chip: {
    margin: theme.spacing(1),
    height: "50px"
  }
}));

export default function Chips(props) {
  const classes = useStyles();
  function handleClick() {
    alert("You clicked the Chip.");
  }

  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar alt="Natacha" src={props.image} />}
        label={props.description}
        onClick={handleClick}
        className={classes.chip}
      />
    </div>
  );
}
