// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLensReviewInput, UpdateLensReviewOutput } from "../models/models_0";
import { de_UpdateLensReviewCommand, se_UpdateLensReviewCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLensReviewCommand}.
 */
export interface UpdateLensReviewCommandInput extends UpdateLensReviewInput {}
/**
 * @public
 *
 * The output of {@link UpdateLensReviewCommand}.
 */
export interface UpdateLensReviewCommandOutput extends UpdateLensReviewOutput, __MetadataBearer {}

/**
 * <p>Update lens review for a particular workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateLensReviewInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   LensNotes: "STRING_VALUE",
 *   PillarNotes: { // PillarNotes
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateLensReviewCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLensReviewOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   LensReview: { // LensReview
 * //     LensAlias: "STRING_VALUE",
 * //     LensArn: "STRING_VALUE",
 * //     LensVersion: "STRING_VALUE",
 * //     LensName: "STRING_VALUE",
 * //     LensStatus: "CURRENT" || "NOT_CURRENT" || "DEPRECATED" || "DELETED" || "UNSHARED",
 * //     PillarReviewSummaries: [ // PillarReviewSummaries
 * //       { // PillarReviewSummary
 * //         PillarId: "STRING_VALUE",
 * //         PillarName: "STRING_VALUE",
 * //         Notes: "STRING_VALUE",
 * //         RiskCounts: { // RiskCounts
 * //           "<keys>": Number("int"),
 * //         },
 * //         PrioritizedRiskCounts: {
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //     ],
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     Notes: "STRING_VALUE",
 * //     RiskCounts: {
 * //       "<keys>": Number("int"),
 * //     },
 * //     NextToken: "STRING_VALUE",
 * //     Profiles: [ // WorkloadProfiles
 * //       { // WorkloadProfile
 * //         ProfileArn: "STRING_VALUE",
 * //         ProfileVersion: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PrioritizedRiskCounts: {
 * //       "<keys>": Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLensReviewCommandInput - {@link UpdateLensReviewCommandInput}
 * @returns {@link UpdateLensReviewCommandOutput}
 * @see {@link UpdateLensReviewCommandInput} for command's `input` shape.
 * @see {@link UpdateLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 * @public
 */
export class UpdateLensReviewCommand extends $Command
  .classBuilder<
    UpdateLensReviewCommandInput,
    UpdateLensReviewCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "UpdateLensReview", {})
  .n("WellArchitectedClient", "UpdateLensReviewCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLensReviewCommand)
  .de(de_UpdateLensReviewCommand)
  .build() {}
