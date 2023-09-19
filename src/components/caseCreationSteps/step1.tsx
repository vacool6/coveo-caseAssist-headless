import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Box,
} from "@chakra-ui/react";
import { SubjectField } from "../caseField/subjectField";
import { caseFieldForSubject } from "../../controller";

interface IStep1 {
  subject: string;
  description: string;
  setSubject: (value: string) => void;
  setDescription: (value: string) => void;
  setCurrStep: (value: number) => void;
}

const Step1 = (props: IStep1) => {
  const { subject, description, setSubject, setDescription, setCurrStep } =
    props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <>
      <FormControl pos={"relative"}>
        <FormLabel>Enter subject</FormLabel>
        <Input
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          onFocus={handleFocus}
          value={subject}
          focusBorderColor="whitesmoke"
        />
        <Box pos={"absolute"} w={"100%"} zIndex={2} bottom={"-7.75rem"}>
          <SubjectField
            controller={caseFieldForSubject}
            subject={subject}
            setSubject={setSubject}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
        </Box>
      </FormControl>

      <br />
      <FormControl>
        <FormLabel>Enter description</FormLabel>
        <Textarea
          placeholder="Description"
          minH={"15rem"}
          maxH={"20rem"}
          onChange={(e) => setDescription(e.target.value)}
          onFocus={() => setIsFocused(false)}
          value={description}
        ></Textarea>
      </FormControl>
      <br />
      <Button
        bg="blue.900"
        color="white"
        isDisabled={!subject || !description}
        onClick={() => setCurrStep(2)}
      >
        Next
      </Button>
    </>
  );
};

export default Step1;
