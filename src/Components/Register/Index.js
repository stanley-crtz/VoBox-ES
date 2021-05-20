import { makeStyles } from "@material-ui/core";
import React from "react";
import { Stepper } from "../Stepper";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
}));

const Index = () => {
  const classes = useStyles();


  const [activeStep, setActiveStep] = React.useState(0);
  const [informationRegister, setInformationRegister] = React.useState({
    information: {
      uid: "",
      TypeAcount: "",
      Email: "",
    },
    method: "",
  });

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Steps = [
    "Tipo de cuenta",
    "Cuentanos sobre ti",
    "Tipo de inicio de sesión",
    "Validación de Correo",
  ];

  const StepContent = [
    <Step1
      handleBack={handleBack}
      handleNext={handleNext}
      activeStep={activeStep}
      steps={Steps}
      classes={classes}
      setInformationRegister={setInformationRegister}
      value={informationRegister.information.TypeAcount}
    />,
    <Step2
      handleBack={handleBack}
      handleNext={handleNext}
      activeStep={activeStep}
      steps={Steps}
      classes={classes}
      setInformationRegister={setInformationRegister}
      // sendingInformation={pushNewUser}
    />,
    <Step3
      handleBack={handleBack}
      handleNext={handleNext}
      activeStep={activeStep}
      steps={Steps}
      classes={classes}
      setInformationRegister={setInformationRegister}
    />,
    <Step4 informationRegister={informationRegister} />,
  ];

  return (
    <>
      <Stepper
        steps={Steps}
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        StepContents={StepContent}
      />
    </>
  );
};

export default Index;
