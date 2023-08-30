import React, { useEffect, useState } from "react";
import { CaseInput } from "@coveo/headless/case-assist";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

interface IDescriptionField {
  controller: CaseInput;
  description: string;
}

export const DescriptionField = (props: IDescriptionField) => {
  const { controller, description } = props;
  const [state, setState] = useState(controller.state);

  // console.log("case description:", state);

  useEffect(() => {
    controller.subscribe(() => setState(controller.state));
    controller.update(description, {
      caseClassifications: true,
      documentSuggestions: true,
    });
  }, [controller, description]);

  // console.log(controller);

  return (
    <>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          minH={"10rem"}
          maxH={"10rem"}
          value={description}
          readOnly
          bg="gray.200"
          border="none"
        ></Textarea>
      </FormControl>
    </>
  );
};

// To use
// <DescriptionField
//       description={""}
//       controller={caseFieldController}
// />
