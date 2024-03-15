// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSiteToSiteVpnAttachmentRequest, GetSiteToSiteVpnAttachmentResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetSiteToSiteVpnAttachmentCommand, se_GetSiteToSiteVpnAttachmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSiteToSiteVpnAttachmentCommand}.
 */
export interface GetSiteToSiteVpnAttachmentCommandInput extends GetSiteToSiteVpnAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link GetSiteToSiteVpnAttachmentCommand}.
 */
export interface GetSiteToSiteVpnAttachmentCommandOutput extends GetSiteToSiteVpnAttachmentResponse, __MetadataBearer {}

/**
 * <p>Returns information about a site-to-site VPN attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetSiteToSiteVpnAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetSiteToSiteVpnAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetSiteToSiteVpnAttachmentRequest
 *   AttachmentId: "STRING_VALUE", // required
 * };
 * const command = new GetSiteToSiteVpnAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // GetSiteToSiteVpnAttachmentResponse
 * //   SiteToSiteVpnAttachment: { // SiteToSiteVpnAttachment
 * //     Attachment: { // Attachment
 * //       CoreNetworkId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       AttachmentId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       AttachmentType: "CONNECT" || "SITE_TO_SITE_VPN" || "VPC" || "TRANSIT_GATEWAY_ROUTE_TABLE",
 * //       State: "REJECTED" || "PENDING_ATTACHMENT_ACCEPTANCE" || "CREATING" || "FAILED" || "AVAILABLE" || "UPDATING" || "PENDING_NETWORK_UPDATE" || "PENDING_TAG_ACCEPTANCE" || "DELETING",
 * //       EdgeLocation: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       AttachmentPolicyRuleNumber: Number("int"),
 * //       SegmentName: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ProposedSegmentChange: { // ProposedSegmentChange
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         AttachmentPolicyRuleNumber: Number("int"),
 * //         SegmentName: "STRING_VALUE",
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     VpnConnectionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSiteToSiteVpnAttachmentCommandInput - {@link GetSiteToSiteVpnAttachmentCommandInput}
 * @returns {@link GetSiteToSiteVpnAttachmentCommandOutput}
 * @see {@link GetSiteToSiteVpnAttachmentCommandInput} for command's `input` shape.
 * @see {@link GetSiteToSiteVpnAttachmentCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 * @public
 */
export class GetSiteToSiteVpnAttachmentCommand extends $Command
  .classBuilder<
    GetSiteToSiteVpnAttachmentCommandInput,
    GetSiteToSiteVpnAttachmentCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "GetSiteToSiteVpnAttachment", {})
  .n("NetworkManagerClient", "GetSiteToSiteVpnAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_GetSiteToSiteVpnAttachmentCommand)
  .de(de_GetSiteToSiteVpnAttachmentCommand)
  .build() {}
