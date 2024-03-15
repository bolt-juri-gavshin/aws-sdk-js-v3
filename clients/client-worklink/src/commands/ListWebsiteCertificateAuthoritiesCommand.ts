// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListWebsiteCertificateAuthoritiesRequest,
  ListWebsiteCertificateAuthoritiesResponse,
} from "../models/models_0";
import {
  de_ListWebsiteCertificateAuthoritiesCommand,
  se_ListWebsiteCertificateAuthoritiesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWebsiteCertificateAuthoritiesCommand}.
 */
export interface ListWebsiteCertificateAuthoritiesCommandInput extends ListWebsiteCertificateAuthoritiesRequest {}
/**
 * @public
 *
 * The output of {@link ListWebsiteCertificateAuthoritiesCommand}.
 */
export interface ListWebsiteCertificateAuthoritiesCommandOutput
  extends ListWebsiteCertificateAuthoritiesResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 *
 * <p>Retrieves a list of certificate authorities added for the current account and
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListWebsiteCertificateAuthoritiesCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListWebsiteCertificateAuthoritiesCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // ListWebsiteCertificateAuthoritiesRequest
 *   FleetArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListWebsiteCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * // { // ListWebsiteCertificateAuthoritiesResponse
 * //   WebsiteCertificateAuthorities: [ // WebsiteCaSummaryList
 * //     { // WebsiteCaSummary
 * //       WebsiteCaId: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       DisplayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWebsiteCertificateAuthoritiesCommandInput - {@link ListWebsiteCertificateAuthoritiesCommandInput}
 * @returns {@link ListWebsiteCertificateAuthoritiesCommandOutput}
 * @see {@link ListWebsiteCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListWebsiteCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link WorkLinkServiceException}
 * <p>Base exception class for all service exceptions from WorkLink service.</p>
 *
 */
export class ListWebsiteCertificateAuthoritiesCommand extends $Command
  .classBuilder<
    ListWebsiteCertificateAuthoritiesCommandInput,
    ListWebsiteCertificateAuthoritiesCommandOutput,
    WorkLinkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkLinkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkLink", "ListWebsiteCertificateAuthorities", {})
  .n("WorkLinkClient", "ListWebsiteCertificateAuthoritiesCommand")
  .f(void 0, void 0)
  .ser(se_ListWebsiteCertificateAuthoritiesCommand)
  .de(de_ListWebsiteCertificateAuthoritiesCommand)
  .build() {}
