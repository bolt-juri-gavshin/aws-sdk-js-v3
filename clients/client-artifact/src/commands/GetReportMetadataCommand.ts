// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ArtifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ArtifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetReportMetadataRequest, GetReportMetadataResponse } from "../models/models_0";
import { de_GetReportMetadataCommand, se_GetReportMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReportMetadataCommand}.
 */
export interface GetReportMetadataCommandInput extends GetReportMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetReportMetadataCommand}.
 */
export interface GetReportMetadataCommandOutput extends GetReportMetadataResponse, __MetadataBearer {}

/**
 * <p>Get the metadata for a single report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, GetReportMetadataCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, GetReportMetadataCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * const client = new ArtifactClient(config);
 * const input = { // GetReportMetadataRequest
 *   reportId: "STRING_VALUE", // required
 *   reportVersion: Number("long"),
 * };
 * const command = new GetReportMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetReportMetadataResponse
 * //   reportDetails: { // ReportDetail
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     periodStart: new Date("TIMESTAMP"),
 * //     periodEnd: new Date("TIMESTAMP"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastModifiedAt: new Date("TIMESTAMP"),
 * //     deletedAt: new Date("TIMESTAMP"),
 * //     state: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     series: "STRING_VALUE",
 * //     category: "STRING_VALUE",
 * //     companyName: "STRING_VALUE",
 * //     productName: "STRING_VALUE",
 * //     termArn: "STRING_VALUE",
 * //     version: Number("long"),
 * //     acceptanceType: "STRING_VALUE",
 * //     sequenceNumber: Number("long"),
 * //     uploadState: "STRING_VALUE",
 * //     statusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetReportMetadataCommandInput - {@link GetReportMetadataCommandInput}
 * @returns {@link GetReportMetadataCommandOutput}
 * @see {@link GetReportMetadataCommandInput} for command's `input` shape.
 * @see {@link GetReportMetadataCommandOutput} for command's `response` shape.
 * @see {@link ArtifactClientResolvedConfig | config} for ArtifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown server exception has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Request fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ArtifactServiceException}
 * <p>Base exception class for all service exceptions from Artifact service.</p>
 *
 * @public
 */
export class GetReportMetadataCommand extends $Command
  .classBuilder<
    GetReportMetadataCommandInput,
    GetReportMetadataCommandOutput,
    ArtifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ArtifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Artifact", "GetReportMetadata", {})
  .n("ArtifactClient", "GetReportMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetReportMetadataCommand)
  .de(de_GetReportMetadataCommand)
  .build() {}
