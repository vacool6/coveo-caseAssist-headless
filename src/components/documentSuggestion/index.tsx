import React, { useEffect, useState } from "react";
import { DocumentSuggestionList } from "@coveo/headless/case-assist";
import {
  Box,
  Text,
  Button,
  Spinner,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { QuickView } from "../../components/caseAssistQuickView";

interface IDocSuggestion {
  controller: DocumentSuggestionList;
  setCurrStep: (value: number) => void;
}

export const DocumentSuggestion = (props: IDocSuggestion) => {
  const { controller, setCurrStep } = props;
  const [state, setState] = useState(controller.state);
  const [doneFetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    controller.subscribe(() => setState(controller.state));
    setTimeout(() => {
      controller.fetch();
      setFetching(true);
      setLoading(false);
    }, 2000);
  }, [controller]);

  // console.log(state.loading);

  if (doneFetching) {
    if (state.documents.length === 0) {
      return (
        <>
          <Box textAlign="center" minH={"50vh"}>
            <Text>No documents to suggest</Text>
          </Box>
          <br />
          <Flex>
            <Button
              bg="grey"
              color="white"
              onClick={() => setCurrStep(2)}
              _hover={{ bg: "grey", color: "white" }}
              _active={{ bg: "grey", color: "white" }}
            >
              Prev
            </Button>
            <Button bg="blue.900" color="white" mx={2}>
              Abort case
            </Button>
            <Button bg="red.500" color="white">
              Create case
            </Button>
          </Flex>
        </>
      );
    }
  }

  if (loading) {
    return (
      <Box textAlign="center">
        <Spinner size={"xl"} speed="0.2s" color="blue.700" />
      </Box>
    );
  }

  // console.log(state);

  return (
    <>
      <Text textAlign="center" my={2} fontSize="xl" fontWeight={700}>
        These resources might help 👇
      </Text>
      <Accordion index={[currIndex]} my={10} border="1px solid grey">
        {state.documents.map((e, index) => (
          <AccordionItem
            border={"none"}
            borderBottom="1px solid grey"
            key={e.uniqueId}
            onClick={() => setCurrIndex(index)}
            bg={index === currIndex ? "whitesmoke" : ""}
          >
            <AccordionButton>
              <Text as="span" flex="1" textAlign="left" fontWeight={700} my={4}>
                ➣ {e.title}
              </Text>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Text fontStyle="italic" my={4}>
                {e.excerpt}
              </Text>
              <QuickView
                title={e.title}
                result={{
                  title: e.title,
                  uri: e.fields.uri as string,
                  printableUri: e.fields.printableuri as string,
                  clickUri: e.clickUri,
                  uniqueId: e.uniqueId,
                  excerpt: e.excerpt,
                  firstSentences: "",
                  summary: null,
                  flags: "",
                  hasHtmlVersion: e.hasHtmlVersion,
                  score: 90,
                  percentScore: 90,
                  rankingInfo: null,
                  isRecommendation: true,
                  titleHighlights: [],
                  firstSentencesHighlights: [],
                  excerptHighlights: [],
                  printableUriHighlights: [],
                  summaryHighlights: [],
                  absentTerms: [],
                  isTopResult: false,
                  raw: {
                    urihash: e.fields.urihash as string,
                  },
                  isUserActionView: false,
                }}
              />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <br />
      <Flex>
        <Flex flexDir="column" align="start">
          <Text letterSpacing="-1px" my={2}>
            Solved your problem?
          </Text>
          <Button bg="blue.900" color="white">
            Abort case
          </Button>
        </Flex>
        <Flex flexDir="column" align="start" ml={6}>
          <Text letterSpacing="-1px" my={2}>
            Still need help?
          </Text>
          <Button bg="red.500" color="white">
            Create case
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
