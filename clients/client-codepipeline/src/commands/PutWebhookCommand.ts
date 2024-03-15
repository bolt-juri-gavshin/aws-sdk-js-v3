// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutWebhookInput, PutWebhookOutput } from "../models/models_0";
import { de_PutWebhookCommand, se_PutWebhookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutWebhookCommand}.
 */
export interface PutWebhookCommandInput extends PutWebhookInput {}
/**
 * @public
 *
 * The output of {@link PutWebhookCommand}.
 */
export interface PutWebhookCommandOutput extends PutWebhookOutput, __MetadataBearer {}

/**
 * <p>Defines a webhook and returns a unique webhook URL generated by CodePipeline.
 *             This URL can be supplied to third party source hosting providers to call every time
 *             there's a code change. When CodePipeline receives a POST request on this URL, the
 *             pipeline defined in the webhook is started as long as the POST request satisfied the
 *             authentication and filtering requirements supplied when defining the webhook.
 *             RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to
 *             automatically configure supported third parties to call the generated webhook
 *             URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutWebhookCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutWebhookCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // PutWebhookInput
 *   webhook: { // WebhookDefinition
 *     name: "STRING_VALUE", // required
 *     targetPipeline: "STRING_VALUE", // required
 *     targetAction: "STRING_VALUE", // required
 *     filters: [ // WebhookFilters // required
 *       { // WebhookFilterRule
 *         jsonPath: "STRING_VALUE", // required
 *         matchEquals: "STRING_VALUE",
 *       },
 *     ],
 *     authentication: "GITHUB_HMAC" || "IP" || "UNAUTHENTICATED", // required
 *     authenticationConfiguration: { // WebhookAuthConfiguration
 *       AllowedIPRange: "STRING_VALUE",
 *       SecretToken: "STRING_VALUE",
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutWebhookCommand(input);
 * const response = await client.send(command);
 * // { // PutWebhookOutput
 * //   webhook: { // ListWebhookItem
 * //     definition: { // WebhookDefinition
 * //       name: "STRING_VALUE", // required
 * //       targetPipeline: "STRING_VALUE", // required
 * //       targetAction: "STRING_VALUE", // required
 * //       filters: [ // WebhookFilters // required
 * //         { // WebhookFilterRule
 * //           jsonPath: "STRING_VALUE", // required
 * //           matchEquals: "STRING_VALUE",
 * //         },
 * //       ],
 * //       authentication: "GITHUB_HMAC" || "IP" || "UNAUTHENTICATED", // required
 * //       authenticationConfiguration: { // WebhookAuthConfiguration
 * //         AllowedIPRange: "STRING_VALUE",
 * //         SecretToken: "STRING_VALUE",
 * //       },
 * //     },
 * //     url: "STRING_VALUE", // required
 * //     errorMessage: "STRING_VALUE",
 * //     errorCode: "STRING_VALUE",
 * //     lastTriggered: new Date("TIMESTAMP"),
 * //     arn: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutWebhookCommandInput - {@link PutWebhookCommandInput}
 * @returns {@link PutWebhookCommandOutput}
 * @see {@link PutWebhookCommandInput} for command's `input` shape.
 * @see {@link PutWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Unable to modify the tag due to a simultaneous update request.</p>
 *
 * @throws {@link InvalidTagsException} (client fault)
 *  <p>The specified resource tags are invalid.</p>
 *
 * @throws {@link InvalidWebhookAuthenticationParametersException} (client fault)
 *  <p>The specified authentication type is in an invalid format.</p>
 *
 * @throws {@link InvalidWebhookFilterPatternException} (client fault)
 *  <p>The specified event filter rule is in an invalid format.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The number of pipelines associated with the Amazon Web Services account has exceeded
 *             the limit allowed for the account.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The tags limit for a resource has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 * @public
 */
export class PutWebhookCommand extends $Command
  .classBuilder<
    PutWebhookCommandInput,
    PutWebhookCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "PutWebhook", {})
  .n("CodePipelineClient", "PutWebhookCommand")
  .f(void 0, void 0)
  .ser(se_PutWebhookCommand)
  .de(de_PutWebhookCommand)
  .build() {}
