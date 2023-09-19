import React, { useEffect, useState } from "react";
import { CaseInput } from "@coveo/headless/case-assist";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";

interface ISubjectField {
  controller: CaseInput;
  isFocused: boolean;
  subject: string;
  setSubject: (value: string) => void;
  setIsFocused: (value: boolean) => void;
}

export const SubjectField = (props: ISubjectField) => {
  const { controller, subject, setSubject, setIsFocused, isFocused } = props;
  const [state, setState] = useState<any>(controller.state);

  // console.log("case subject:", state);

  useEffect(() => {
    controller.subscribe(() => setState(controller.state));
    controller.update(subject, {
      caseClassifications: true,
      documentSuggestions: true,
    });
  }, [controller, subject]);

  const suggestions = [
    "cat",
    "kitty",
    "onions",
    "holiday",
    "master",
    "cat",
    "s",
  ];

  return (
    <>
      {isFocused && (
        <Box
          border={"1.75px solid whitesmoke"}
          bg="white"
          py={2}
          borderRadius={"lg"}
          h="7.5rem"
          overflowY="scroll"
          boxShadow="md"
          css={{
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "grey",
              borderRadius: "4px",
            },
          }}
        >
          {!state.loading ? (
            // state.suggestions.length === 0 ? (
            suggestions.length === 0 ? (
              <Flex justify="center" align="center" h="100%">
                No suggestions
              </Flex>
            ) : (
              // state.suggestions.map((e: any, index: any) => (
              suggestions.map((e: any, index: any) => (
                <Text
                  key={index}
                  _hover={{ bg: "#FAFAFA" }}
                  px={4}
                  cursor="pointer"
                  onClick={() => {
                    setSubject(e);
                    setIsFocused(false);
                  }}
                  fontWeight={600}
                  fontStyle={"italic"}
                >
                  {e}
                </Text>
              ))
            )
          ) : (
            <Flex justify="center" align="center" h="100%">
              <Spinner speed="0.25s" />
            </Flex>
          )}
        </Box>
      )}
    </>
  );
};
