import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

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
  return (
    <>
      <FormControl>
        <FormLabel>Enter subject</FormLabel>
        <Input
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Enter description</FormLabel>
        <Textarea
          placeholder="Description"
          minH={"15rem"}
          maxH={"20rem"}
          onChange={(e) => setDescription(e.target.value)}
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
