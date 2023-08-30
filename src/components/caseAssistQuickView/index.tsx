/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Result, buildCaseAssistQuickview } from "@coveo/headless/case-assist";
import { headlessCaseAssist } from "../../engine";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  AspectRatio,
} from "@chakra-ui/react";

interface IQuickView {
  result: Result;
  title: string;
}

interface HtmlRendererProps {
  htmlContent: string;
}

const HtmlRenderBox: React.FC<HtmlRendererProps> = ({ htmlContent }) => {
  return <Box dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export const QuickView = (props: IQuickView) => {
  const { result, title } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const controller = buildCaseAssistQuickview(headlessCaseAssist, {
    options: { result },
  });

  const [state, setState] = useState(controller.state);

  useEffect(() => controller.subscribe(() => setState(controller.state)), []);

  const openModal = () => {
    controller.fetchResultContent();
    onOpen();
  };

  if (!state.resultHasPreview) {
    return null;
  }

  return (
    <>
      <Button onClick={openModal} color="white" bg="blue.500">
        Read more
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", sm: "md", md: "xl" }}
        isCentered
      >
        <ModalOverlay
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent p={4}>
          <ModalHeader my={2}>{title}</ModalHeader>
          <ModalCloseButton color="white" bg="red.500" />

          {/* Use this if contentURL is not present */}
          {/* <ModalBody overflow={"scroll"} maxH={"75vh"} minH={"50vh"}>
            <HtmlRenderBox htmlContent={content.content} />
          </ModalBody> */}

          <ModalBody>
            <AspectRatio>
              <iframe src={state.contentURL} />
            </AspectRatio>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
