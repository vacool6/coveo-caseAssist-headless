import React from "react";
import { DocumentSuggestion } from "../documentSuggestion";
import { documentSuggestions as documentSuggestionsController } from "../../controller";

interface IStep3 {
  setCurrStep: (value: number) => void;
}

const Step3 = (props: IStep3) => {
  const { setCurrStep } = props;
  return (
    <>
      <DocumentSuggestion
        controller={documentSuggestionsController}
        setCurrStep={setCurrStep}
      />
    </>
  );
};

export default Step3;
