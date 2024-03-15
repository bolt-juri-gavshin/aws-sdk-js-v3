// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartEngagementRequest, StartEngagementResult } from "../models/models_0";
import { de_StartEngagementCommand, se_StartEngagementCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartEngagementCommand}.
 */
export interface StartEngagementCommandInput extends StartEngagementRequest {}
/**
 * @public
 *
 * The output of {@link StartEngagementCommand}.
 */
export interface StartEngagementCommandOutput extends StartEngagementResult, __MetadataBearer {}

/**
 * <p>Starts an engagement to a contact or escalation plan. The engagement engages each
 *          contact specified in the incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, StartEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, StartEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // StartEngagementRequest
 *   ContactId: "STRING_VALUE", // required
 *   Sender: "STRING_VALUE", // required
 *   Subject: "STRING_VALUE", // required
 *   Content: "STRING_VALUE", // required
 *   PublicSubject: "STRING_VALUE",
 *   PublicContent: "STRING_VALUE",
 *   IncidentId: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new StartEngagementCommand(input);
 * const response = await client.send(command);
 * // { // StartEngagementResult
 * //   EngagementArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartEngagementCommandInput - {@link StartEngagementCommandInput}
 * @returns {@link StartEngagementCommandOutput}
 * @see {@link StartEngagementCommandInput} for command's `input` shape.
 * @see {@link StartEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 * @public
 */
export class StartEngagementCommand extends $Command
  .classBuilder<
    StartEngagementCommandInput,
    StartEngagementCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "StartEngagement", {})
  .n("SSMContactsClient", "StartEngagementCommand")
  .f(void 0, void 0)
  .ser(se_StartEngagementCommand)
  .de(de_StartEngagementCommand)
  .build() {}
