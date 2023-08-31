import { buildCaseAssistEngine } from "@coveo/headless/case-assist";
import { getOrganizationEndpoints } from "@coveo/headless";

export const headlessCaseAssist = buildCaseAssistEngine({
  configuration: {
    organizationId: `${process.env.REACT_APP_ORG_ID}`,
    accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`,
    organizationEndpoints: getOrganizationEndpoints(
      `${process.env.REACT_APP_ORG_ID}`
    ),
    caseAssistId: `${process.env.REACT_APP_CASE_ASSIST_ID}`,
  },
});
