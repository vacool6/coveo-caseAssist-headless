import {
  useSteps,
  Box,
  Step,
  Progress,
  Stepper,
  StepIndicator,
  StepStatus,
  StepIcon,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

const steps = [
  { title: "Subject & Description" },
  { title: "WIP" },
  { title: "Document suggestions" },
];

interface ICurrentStepIndicator {
  currStep: number;
}

const CurrentStepIndicator = (props: ICurrentStepIndicator) => {
  const { currStep } = props;
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  useEffect(() => {
    setActiveStep(currStep - 1);
  }, [currStep, setActiveStep]);

  const activeStepText = steps[activeStep].title;

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Box position="relative" my={10}>
      <Stepper size="sm" index={activeStep} gap="0">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator bg="white">
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
          </Step>
        ))}
      </Stepper>
      <Progress
        value={progressPercent}
        position="absolute"
        height="3px"
        width="full"
        top="10px"
        zIndex={-1}
      />
      <Text fontWeight={700} color={"blue.900"} fontSize={"md"}>
        Step {currStep} {activeStepText}
      </Text>
    </Box>
  );
};

export default CurrentStepIndicator;
