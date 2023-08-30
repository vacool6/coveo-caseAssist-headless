import React from "react";
import { FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react";
import { SubjectInput } from "../caseInput/subjectInput";
import { DescriptionInput } from "../caseInput/descriptionInput";
//
import {
  caseInputForSubject as caseInputControllerForSubject,
  caseInputForDescription as caseInputControllerForDescription,
} from "../../controller";

interface IStep2 {
  subject: string;
  description: string;
  setCurrStep: (value: number) => void;
}

const Step2 = (props: IStep2) => {
  const { subject, description, setCurrStep } = props;
  return (
    <>
      <SubjectInput
        controller={caseInputControllerForSubject}
        subject={subject}
      />
      <br />
      <DescriptionInput
        controller={caseInputControllerForDescription}
        description={description}
      />
      <br />
      <FormControl>
        <FormLabel>WIP</FormLabel>
        <Input placeholder="WIP" />
      </FormControl>
      <br />
      <Flex>
        <Button
          bg="grey"
          color="white"
          onClick={() => setCurrStep(1)}
          mr={2}
          _hover={{ bg: "grey", color: "white" }}
          _active={{ bg: "grey", color: "white" }}
        >
          Prev
        </Button>
        <Button
          bg="blue.900"
          color="white"
          onClick={() => setCurrStep(3)}
          ml={2}
        >
          Next
        </Button>
      </Flex>
    </>
  );
};

export default Step2;
