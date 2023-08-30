import { headlessCaseAssist } from "./engine";
import {
  // buildDocumentSuggestion,
  buildDocumentSuggestionList,
  buildCaseInput,
  buildCaseField,
  buildCaseAssistQuickview,
} from "@coveo/headless/case-assist";

// DOCUMENT SUGGESTIONS

// export const documentSuggestions = buildDocumentSuggestion(headlessCaseAssist);
export const documentSuggestions =
  buildDocumentSuggestionList(headlessCaseAssist);

// Refer types here:-

//  buildCaseInput/Field(engine: CaseAssistEngine, props: CaseInput/FieldProps): CaseInput/Field;

// interface CaseInput/FieldOptions {
//   field: string;
// }

// interface CaseInput/FieldProps {
//   options: CaseInput/FieldOptions;
// }

// CASE INPUT

export const caseInputForSubject = buildCaseInput(headlessCaseAssist, {
  options: { field: "case subject" },
});

export const caseInputForDescription = buildCaseInput(headlessCaseAssist, {
  options: { field: "case description" },
});

//CASE FIELD

export const caseFieldForSubject = buildCaseField(headlessCaseAssist, {
  options: { field: "case subject" },
});

export const caseFieldForDescription = buildCaseField(headlessCaseAssist, {
  options: { field: "case description" },
});

// QUICK VIEW

export const quickView = buildCaseAssistQuickview(headlessCaseAssist, {
  options: {
    result: {
      title: "",
      uri: "",
      printableUri: "",
      clickUri: "",
      uniqueId: "",
      excerpt: "",
      firstSentences: "",
      summary: null,
      flags: "",
      hasHtmlVersion: true,
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
        urihash: "",
      },
      isUserActionView: false,
    },
  },
});
