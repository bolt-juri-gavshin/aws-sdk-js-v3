import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { DeleteAnalyzerRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAnalyzerCommand,
  serializeAws_restJson1DeleteAnalyzerCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeleteAnalyzerCommandInput extends DeleteAnalyzerRequest {}
export interface DeleteAnalyzerCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified analyzer. When you delete an analyzer, IAM Access Analyzer is disabled
 *          for the account or organization in the current or specific Region. All findings that were
 *          generated by the analyzer are deleted. You cannot undo this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, DeleteAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, DeleteAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new DeleteAnalyzerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnalyzerCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalyzerCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteAnalyzerCommand extends $Command<
  DeleteAnalyzerCommandInput,
  DeleteAnalyzerCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAnalyzerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "DeleteAnalyzerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAnalyzerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAnalyzerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAnalyzerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAnalyzerCommandOutput> {
    return deserializeAws_restJson1DeleteAnalyzerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
