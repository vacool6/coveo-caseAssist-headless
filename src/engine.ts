import { buildCaseAssistEngine } from "@coveo/headless/case-assist";
import { getOrganizationEndpoints } from "@coveo/headless";

export const headlessCaseAssist = buildCaseAssistEngine({
  configuration: {
    organizationId: "italentg2v8fsu6",
    accessToken: "xxb8d04207-6d7e-40ff-bd3f-df0aa08e4043",
    organizationEndpoints: getOrganizationEndpoints("italentg2v8fsu6"),
    caseAssistId: "7e96c0d1-6b17-47fa-872c-0575194c850d",
  },
});
