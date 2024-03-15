// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { StreamingBlobTypes } from "@smithy/types";

import { WorkMailMessageFlowServiceException as __BaseException } from "./WorkMailMessageFlowServiceException";

/**
 * @public
 */
export interface GetRawMessageContentRequest {
  /**
   * <p>The identifier of the email message to retrieve.</p>
   * @public
   */
  messageId: string | undefined;
}

/**
 * @public
 */
export interface GetRawMessageContentResponse {
  /**
   * <p>The raw content of the email message, in MIME format.</p>
   * @public
   */
  messageContent: StreamingBlobTypes | undefined;
}

/**
 * <p>The requested email message is not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>WorkMail could not access the updated email content. Possible reasons:</p>
 *          <ul>
 *             <li>
 *                <p>You made the request in a region other than your S3 bucket region.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-owner-condition.html">S3 bucket owner</a> is not the
 *         same as the calling AWS account.</p>
 *             </li>
 *             <li>
 *                <p>You have an incomplete or missing S3 bucket policy. For more information about policies, see
 *         <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html">
 *           Updating message content with AWS Lambda
 *         </a> in the <i>WorkMail Administrator
 *           Guide</i>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidContentLocation extends __BaseException {
  readonly name: "InvalidContentLocation" = "InvalidContentLocation";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidContentLocation, __BaseException>) {
    super({
      name: "InvalidContentLocation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidContentLocation.prototype);
  }
}

/**
 * <p>The requested email is not eligible for update. This is usually the case for a redirected email.</p>
 * @public
 */
export class MessageFrozen extends __BaseException {
  readonly name: "MessageFrozen" = "MessageFrozen";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MessageFrozen, __BaseException>) {
    super({
      name: "MessageFrozen",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MessageFrozen.prototype);
  }
}

/**
 * <p>The requested email could not be updated due to an error in the MIME content. Check the error message for more information about
 *       what caused the error.</p>
 * @public
 */
export class MessageRejected extends __BaseException {
  readonly name: "MessageRejected" = "MessageRejected";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MessageRejected, __BaseException>) {
    super({
      name: "MessageRejected",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MessageRejected.prototype);
  }
}

/**
 * <p>Amazon S3 object representing the updated message content, in MIME format.</p>
 *          <note>
 *             <p>The region for the S3 bucket containing the S3 object must match the region used for WorkMail operations. Also, for WorkMail to process
 *       an S3 object, it must have permission to access that object. For more information, see
 *       <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html">
 *         Updating message content with AWS Lambda</a>.</p>
 *          </note>
 * @public
 */
export interface S3Reference {
  /**
   * <p>The S3 bucket name.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The S3 key object name.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>If you enable versioning for the bucket, you can specify the object version.</p>
   * @public
   */
  objectVersion?: string;
}

/**
 * <p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p>
 *          <ul>
 *             <li>
 *                <p>Each part of a multipart MIME message must be formatted properly.</p>
 *             </li>
 *             <li>
 *                <p>Attachments must be of a content type that Amazon SES supports. For more information, see
 *         <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p>
 *             </li>
 *             <li>
 *                <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend
 *         encoding that content.</p>
 *             </li>
 *             <li>
 *                <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of
 *         text, including the <CRLF>, must not exceed 1,000 characters.</p>
 *             </li>
 *             <li>
 *                <p>The message must contain all the required header fields. Check the returned error message for more information.</p>
 *             </li>
 *             <li>
 *                <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p>
 *             </li>
 *             <li>
 *                <p>Certain unique headers can only appear once. Check the returned error message for more information.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RawMessageContent {
  /**
   * <p>The S3 reference of an email message.</p>
   * @public
   */
  s3Reference: S3Reference | undefined;
}

/**
 * @public
 */
export interface PutRawMessageContentRequest {
  /**
   * <p>The identifier of the email message being updated.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>Describes the raw message content of the updated email message.</p>
   * @public
   */
  content: RawMessageContent | undefined;
}

/**
 * @public
 */
export interface PutRawMessageContentResponse {}

/**
 * @internal
 */
export const GetRawMessageContentResponseFilterSensitiveLog = (obj: GetRawMessageContentResponse): any => ({
  ...obj,
});
