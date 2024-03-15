// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetPositionConfigurationRequest, GetPositionConfigurationResponse } from "../models/models_0";
import { de_GetPositionConfigurationCommand, se_GetPositionConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPositionConfigurationCommand}.
 */
export interface GetPositionConfigurationCommandInput extends GetPositionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetPositionConfigurationCommand}.
 */
export interface GetPositionConfigurationCommandOutput extends GetPositionConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated This operation is no longer supported.
 *
 * <p>Get position configuration for a given resource.</p>
 *          <important>
 *             <p>This action is no longer supported. Calls to retrieve the position configuration
 *                 should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetPositionConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetPositionConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetPositionConfigurationRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "WirelessDevice" || "WirelessGateway", // required
 * };
 * const command = new GetPositionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetPositionConfigurationResponse
 * //   Solvers: { // PositionSolverDetails
 * //     SemtechGnss: { // SemtechGnssDetail
 * //       Provider: "Semtech",
 * //       Type: "GNSS",
 * //       Status: "Enabled" || "Disabled",
 * //       Fec: "ROSE" || "NONE",
 * //     },
 * //   },
 * //   Destination: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPositionConfigurationCommandInput - {@link GetPositionConfigurationCommandInput}
 * @returns {@link GetPositionConfigurationCommandOutput}
 * @see {@link GetPositionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetPositionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class GetPositionConfigurationCommand extends $Command
  .classBuilder<
    GetPositionConfigurationCommandInput,
    GetPositionConfigurationCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "GetPositionConfiguration", {})
  .n("IoTWirelessClient", "GetPositionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetPositionConfigurationCommand)
  .de(de_GetPositionConfigurationCommand)
  .build() {}
