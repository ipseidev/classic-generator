import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./App.css";

import Druid from "../../assets/druid.png";
import Hunt from "../../assets/hunt.png";
import Priest from "../../assets/priest.png";
import Mage from "../../assets/mage.png";
import Demo from "../../assets/demo.png";
import Shaman from "../../assets/shaman.png";
import Rogue from "../../assets/rogue.png";
import War from "../../assets/war.png";
import Default from "../../assets/default.png";

import Navbar from "../Navigation/Navbar";
import ClassRand from "../classeRand/classeRand";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "rgb(41, 40, 40)",
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function App() {
  const classes = useStyles();
  const [state, setstate] = useState({
    currentRand: 0,
    countRand: 0,
    loading: false
  });

  let compteur = "";
  let currentRand = "";
  const startRand = () => {
    compteur = 0;
    rand();
  };

  const rand = () => {
    if (compteur < 60) {
      setTimeout(() => {
        currentRand = Math.floor(Math.random() * (7 - 1 + 1)) + 1;

        console.log(compteur);
        setstate({
          loading: true,
          countRand: compteur,
          currentRand: currentRand
        });
        compteur++;
        rand();
      }, 50);
    } else {
      setstate({
        loading: false,
        countRand: compteur,
        currentRand: currentRand
      });
    }
  };

  let currentClass = state.currentRand;
  switch (currentClass) {
    case 0:
      currentClass = (
        <ClassRand description="Réfléchissez bien.." image={Default} />
      );
      break;
    case 1:
      currentClass = (
        <ClassRand
          description="C'est un démoniste ! t'as pas de l'eau stp ?"
          image={Mage}
        />
      );
      break;
    case 2:
      currentClass = (
        <ClassRand
          description="C'est un Démoniste ! tu peux me tp stp ?"
          image={Demo}
        />
      );
      break;
    case 3:
      currentClass = (
        <ClassRand
          description="C'est un Prêtre ! gros pédophile va !"
          image={Priest}
        />
      );
      break;
    case 4:
      currentClass = (
        <ClassRand
          description="C'est un Druide ! Aller va resper heal !"
          image={Druid}
        />
      );
      break;
    case 5:
      currentClass = (
        <ClassRand
          description="C'est un Voleur ! Oui c'est bien DarkSasuke93 calme toi.."
          image={Rogue}
        />
      );
      break;
    case 6:
      currentClass = (
        <ClassRand
          description="C'est un Hunt ! Mais non t'es pas inutile..."
          image={Hunt}
        />
      );
      break;
    case 7:
      currentClass = (
        <ClassRand
          description="C'est un Chaman ! Oui promis tu auras sulfuras..."
          image={Shaman}
        />
      );
      break;
    case 8:
      currentClass = (
        <ClassRand
          description="C'est un Guerrier ! Merci de te sacrifier pour la guilde.."
          image={Priest}
        />
      );
      break;
    default:
      currentClass = (
        <ClassRand description="Réfléchissez bien.." image={Default} />
      );
      break;
  }
  console.log(state);
  return (
    <div className="App">
      <Navbar />
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={8} lg={6} xl={6}>
          <Paper className={classes.paper}>
            <h1>Random classes</h1>
            <h2>&#60;Irae&#62;</h2>
            <hr />
            {currentClass}
            <div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                onClick={startRand}
              >
                GO !
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
