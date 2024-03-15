// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveUserFromGroupRequest } from "../models/models_0";
import { de_RemoveUserFromGroupCommand, se_RemoveUserFromGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveUserFromGroupCommand}.
 */
export interface RemoveUserFromGroupCommandInput extends RemoveUserFromGroupRequest {}
/**
 * @public
 *
 * The output of {@link RemoveUserFromGroupCommand}.
 */
export interface RemoveUserFromGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified user from the specified group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveUserFromGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveUserFromGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // RemoveUserFromGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new RemoveUserFromGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveUserFromGroupCommandInput - {@link RemoveUserFromGroupCommandInput}
 * @returns {@link RemoveUserFromGroupCommandOutput}
 * @see {@link RemoveUserFromGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveUserFromGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To remove a user from an IAM group
 * ```javascript
 * // The following command removes the user named Bob from the IAM group named Admins.
 * const input = {
 *   "GroupName": "Admins",
 *   "UserName": "Bob"
 * };
 * const command = new RemoveUserFromGroupCommand(input);
 * await client.send(command);
 * // example id: fb54d5b4-0caf-41d8-af0e-10a84413f174
 * ```
 *
 */
export class RemoveUserFromGroupCommand extends $Command
  .classBuilder<
    RemoveUserFromGroupCommandInput,
    RemoveUserFromGroupCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "RemoveUserFromGroup", {})
  .n("IAMClient", "RemoveUserFromGroupCommand")
  .f(void 0, void 0)
  .ser(se_RemoveUserFromGroupCommand)
  .de(de_RemoveUserFromGroupCommand)
  .build() {}
