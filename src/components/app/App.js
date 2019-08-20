import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    margin: "38px 0px"
  },
  input: {
    display: "none"
  },
  progress: {
    margin: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  // State pour savoir à quel index et dans quel état local est le random
  const [state, setstate] = useState({
    currentRand: 0,
    countRand: 0,
    loading: false
  });

  // State pour les réglages du random
  const [activeClasses, setClasses] = useState({
    Mage: true,
    Démoniste: true,
    Prêtre: true,
    Druide: true,
    Voleur: true,
    Chasseur: true,
    Chaman: true,
    Guerrier: true
  });

  // Liste de toutes les classes
  const classesList = [
    "Mage",
    "Démoniste",
    "Prêtre",
    "Druide",
    "Voleur",
    "Chasseur",
    "Chaman",
    "Guerrier"
  ];

  // Initialisation du compteur et de l'index courrant
  let compteur = "";
  let currentRand = "";

  // Fonction qui va férer les options
  const handleChange = name => event => {
    setClasses({ ...activeClasses, [name]: event.target.checked });
    console.log(activeClasses);
  };

  // Point d'entrée du random, appel la fonction Rand()
  const startRand = () => {
    compteur = 0;
    rand();
  };

  // Fonction récursive qui se lance 60 fois pour obtenir une classe au hasard
  const rand = () => {
    if (compteur < 40) {
      setTimeout(() => {
        currentRand = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
        console.log(activeClasses[classesList[currentRand]]);
        if (activeClasses[classesList[currentRand]]) {
          setstate({
            loading: true,
            countRand: compteur,
            currentRand: classesList[currentRand]
          });
          compteur++;
          rand();
        } else {
          rand();
        }
      }, 50);
    } else {
      setstate({
        loading: false,
        countRand: compteur,
        currentRand: classesList[currentRand]
      });
    }
  };

  // Switch qui gère la classe affichée
  let currentClass = classesList[currentRand];
  switch (state.currentRand) {
    case 0:
      currentClass = (
        <ClassRand description="Réfléchissez bien.." image={Default} />
      );
      break;
    case "Mage":
      currentClass = (
        <ClassRand
          description="C'est un mage ! t'as pas de l'eau stp ?"
          image={Mage}
        />
      );
      break;
    case "Démoniste":
      currentClass = (
        <ClassRand
          description="C'est un Démoniste ! tu peux me tp stp ?"
          image={Demo}
        />
      );
      break;
    case "Prêtre":
      currentClass = (
        <ClassRand
          description="C'est un Prêtre ! gros pédophile va !"
          image={Priest}
        />
      );
      break;
    case "Druide":
      currentClass = (
        <ClassRand
          description="C'est un Druide ! Aller va resper heal !"
          image={Druid}
        />
      );
      break;
    case "Voleur":
      currentClass = (
        <ClassRand
          description="C'est un Voleur ! Oui c'est bien DarkSasuke93 calme toi.."
          image={Rogue}
        />
      );
      break;
    case "Chasseur":
      currentClass = (
        <ClassRand
          description="C'est un Hunt ! Mais non t'es pas inutile..."
          image={Hunt}
        />
      );
      break;
    case "Chaman":
      currentClass = (
        <ClassRand
          description="C'est un Chaman ! Oui promis tu auras sulfuras..."
          image={Shaman}
        />
      );
      break;
    case "Guerrier":
      currentClass = (
        <ClassRand
          description="C'est un Guerrier ! Merci de te sacrifier pour la guilde.."
          image={War}
        />
      );
      break;
    default:
      currentClass = (
        <ClassRand description="Réfléchissez bien.." image={Default} />
      );
      break;
  }
  return (
    <div className="App">
      <Navbar />
      <Grid container spacing={3} justify="center">
        <Grid item xs={6} md={4} lg={2} xl={2}>
          <Paper className={classes.paper}>
            <h1>Réglages</h1>
            <h2>&#60;Irae&#62;</h2>
            <hr />
            <div>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={activeClasses.Prêtre}
                      onChange={handleChange("Prêtre")}
                      value="Prêtre"
                    />
                  }
                  label="Prêtre"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={activeClasses.Mage}
                      onChange={handleChange("Mage")}
                      value="Mage"
                    />
                  }
                  label="Mage"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={activeClasses.Démoniste}
                      onChange={handleChange("Démoniste")}
                      value="Démoniste"
                    />
                  }
                  label="Démoniste"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={activeClasses.Druide}
                      onChange={handleChange("Druide")}
                      value="Druide"
                    />
                  }
                  label="Druide"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={activeClasses.Voleur}
                      onChange={handleChange("Voleur")}
                      value="Voleur"
                    />
                  }
                  label="Voleur"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={activeClasses.Chaman}
                      onChange={handleChange("Chaman")}
                      value="Chaman"
                    />
                  }
                  label="Chaman"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={activeClasses.Chasseur}
                      onChange={handleChange("Chasseur")}
                      value="Chasseur"
                    />
                  }
                  label="Chasseur"
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={activeClasses.Guerrier}
                      onChange={handleChange("Guerrier")}
                      value="Guerrier"
                    />
                  }
                  label="Guerrier"
                />
              </FormGroup>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={6} xl={6}>
          <Paper className={classes.paper}>
            <h1>Random classes</h1>
            <h2>&#60;Irae&#62;</h2>
            <hr />
            {currentClass}
            <div>
              {state.loading ? (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  onClick={startRand}
                >
                  <CircularProgress
                    className={classes.progress}
                    color="secondary"
                  />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  onClick={startRand}
                >
                  I'm Ready !
                </Button>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
