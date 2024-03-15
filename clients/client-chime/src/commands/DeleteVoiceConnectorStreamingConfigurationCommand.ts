// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVoiceConnectorStreamingConfigurationRequest } from "../models/models_0";
import {
  de_DeleteVoiceConnectorStreamingConfigurationCommand,
  se_DeleteVoiceConnectorStreamingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorStreamingConfigurationCommand}.
 */
export interface DeleteVoiceConnectorStreamingConfigurationCommandInput
  extends DeleteVoiceConnectorStreamingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorStreamingConfigurationCommand}.
 */
export interface DeleteVoiceConnectorStreamingConfigurationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * @deprecated Replaced by DeleteVoiceConnectorStreamingConfiguration in the Amazon Chime SDK Voice Namespace
 *
 * <p>Deletes the streaming configuration for the specified Amazon Chime Voice Connector.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnectorStreamingConfiguration.html">DeleteVoiceConnectorStreamingConfiguration</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorStreamingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorStreamingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DeleteVoiceConnectorStreamingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceConnectorStreamingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceConnectorStreamingConfigurationCommandInput - {@link DeleteVoiceConnectorStreamingConfigurationCommandInput}
 * @returns {@link DeleteVoiceConnectorStreamingConfigurationCommandOutput}
 * @see {@link DeleteVoiceConnectorStreamingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorStreamingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class DeleteVoiceConnectorStreamingConfigurationCommand extends $Command
  .classBuilder<
    DeleteVoiceConnectorStreamingConfigurationCommandInput,
    DeleteVoiceConnectorStreamingConfigurationCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "DeleteVoiceConnectorStreamingConfiguration", {})
  .n("ChimeClient", "DeleteVoiceConnectorStreamingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVoiceConnectorStreamingConfigurationCommand)
  .de(de_DeleteVoiceConnectorStreamingConfigurationCommand)
  .build() {}
