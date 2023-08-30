import React, { useEffect, useState } from "react";
import { CaseInput } from "@coveo/headless/case-assist";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface ISubjectInput {
  controller: CaseInput;
  subject: string;
}

export const SubjectInput = (props: ISubjectInput) => {
  const { controller, subject } = props;
  const [state, setState] = useState(controller.state);

  // console.log("case subject:", state);

  useEffect(() => {
    controller.subscribe(() => setState(controller.state));
    controller.update(subject, {
      caseClassifications: true,
      documentSuggestions: true,
    });
  }, [controller, subject]);

  return (
    <>
      <FormControl>
        <FormLabel>Subject</FormLabel>
        <Input value={subject} readOnly bg="gray.200" border="none" />
      </FormControl>
    </>
  );
};
