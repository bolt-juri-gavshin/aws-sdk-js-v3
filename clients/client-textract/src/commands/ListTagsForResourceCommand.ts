// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { de_ListTagsForResourceCommand, se_ListTagsForResourceCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandInput extends ListTagsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandOutput extends ListTagsForResourceResponse, __MetadataBearer {}

/**
 * <p>Lists all tags for an Amazon Textract resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, ListTagsForResourceCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, ListTagsForResourceCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // ListTagsForResourceRequest
 *   ResourceARN: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourceResponse
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForResourceCommandInput - {@link ListTagsForResourceCommandInput}
 * @returns {@link ListTagsForResourceCommandOutput}
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Textract experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> Returned when an operation tried to access a nonexistent resource. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>  Indicates that a request was not valid. Check request for proper formatting. </p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 * @public
 */
export class ListTagsForResourceCommand extends $Command
  .classBuilder<
    ListTagsForResourceCommandInput,
    ListTagsForResourceCommandOutput,
    TextractClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TextractClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Textract", "ListTagsForResource", {})
  .n("TextractClient", "ListTagsForResourceCommand")
  .f(void 0, void 0)
  .ser(se_ListTagsForResourceCommand)
  .de(de_ListTagsForResourceCommand)
  .build() {}
