import React, { useEffect, useState } from "react";
import { CaseInput } from "@coveo/headless/case-assist";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface ISubjectField {
  controller: CaseInput;
  subject: string;
}

export const SubjectField = (props: ISubjectField) => {
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

  // console.log(state);

  return (
    <>
      <FormControl>
        <FormLabel>Subject</FormLabel>
        <Input value={subject} readOnly bg="gray.200" border="none" />
      </FormControl>
    </>
  );
};

// To use
// <SubjectField
//       subject={""}
//       controller={caseFieldController}
// />
