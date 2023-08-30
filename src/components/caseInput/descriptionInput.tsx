import React, { useEffect, useState } from "react";
import { CaseInput } from "@coveo/headless/case-assist";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

interface IDescriptionInput {
  controller: CaseInput;
  description: string;
}

export const DescriptionInput = (props: IDescriptionInput) => {
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
