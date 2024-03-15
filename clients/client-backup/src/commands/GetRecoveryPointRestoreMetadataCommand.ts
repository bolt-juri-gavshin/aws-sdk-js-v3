// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetRecoveryPointRestoreMetadataInput,
  GetRecoveryPointRestoreMetadataOutput,
  GetRecoveryPointRestoreMetadataOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetRecoveryPointRestoreMetadataCommand,
  se_GetRecoveryPointRestoreMetadataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRecoveryPointRestoreMetadataCommand}.
 */
export interface GetRecoveryPointRestoreMetadataCommandInput extends GetRecoveryPointRestoreMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetRecoveryPointRestoreMetadataCommand}.
 */
export interface GetRecoveryPointRestoreMetadataCommandOutput
  extends GetRecoveryPointRestoreMetadataOutput,
    __MetadataBearer {}

/**
 * <p>Returns a set of metadata key-value pairs that were used to create the backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRecoveryPointRestoreMetadataCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRecoveryPointRestoreMetadataCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetRecoveryPointRestoreMetadataInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 *   BackupVaultAccountId: "STRING_VALUE",
 * };
 * const command = new GetRecoveryPointRestoreMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetRecoveryPointRestoreMetadataOutput
 * //   BackupVaultArn: "STRING_VALUE",
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   RestoreMetadata: { // Metadata
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ResourceType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRecoveryPointRestoreMetadataCommandInput - {@link GetRecoveryPointRestoreMetadataCommandInput}
 * @returns {@link GetRecoveryPointRestoreMetadataCommandOutput}
 * @see {@link GetRecoveryPointRestoreMetadataCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryPointRestoreMetadataCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 * @public
 */
export class GetRecoveryPointRestoreMetadataCommand extends $Command
  .classBuilder<
    GetRecoveryPointRestoreMetadataCommandInput,
    GetRecoveryPointRestoreMetadataCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "GetRecoveryPointRestoreMetadata", {})
  .n("BackupClient", "GetRecoveryPointRestoreMetadataCommand")
  .f(void 0, GetRecoveryPointRestoreMetadataOutputFilterSensitiveLog)
  .ser(se_GetRecoveryPointRestoreMetadataCommand)
  .de(de_GetRecoveryPointRestoreMetadataCommand)
  .build() {}
