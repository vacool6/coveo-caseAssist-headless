import React, { useState } from "react";
import { Heading, Container, Box } from "@chakra-ui/react";

//
import CurrentStepIndicator from "./components/caseCreationSteps/stepIndicator";
import Step1 from "./components/caseCreationSteps/step1";
import Step2 from "./components/caseCreationSteps/step2";
import Step3 from "./components/caseCreationSteps/step3";

function App() {
  const [currStep, setCurrStep] = useState(1);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Box>
      <Container maxW={"container.md"} my={10}>
        <Heading my={4}>Case Assist Demo</Heading>
        <CurrentStepIndicator currStep={currStep} />
        {currStep === 1 ? (
          <Step1
            subject={subject}
            description={description}
            setSubject={setSubject}
            setDescription={setDescription}
            setCurrStep={setCurrStep}
          />
        ) : currStep === 2 ? (
          <Step2
            subject={subject}
            description={description}
            setCurrStep={setCurrStep}
          />
        ) : (
          currStep === 3 && <Step3 setCurrStep={setCurrStep} />
        )}
      </Container>
    </Box>
  );
}

export default App;
