// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { GameLiftServiceException as __BaseException } from "./GameLiftServiceException";

/**
 * @public
 * @enum
 */
export const AcceptanceType = {
  ACCEPT: "ACCEPT",
  REJECT: "REJECT",
} as const;

/**
 * @public
 */
export type AcceptanceType = (typeof AcceptanceType)[keyof typeof AcceptanceType];

/**
 * @public
 */
export interface AcceptMatchInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. The ticket must be in status <code>REQUIRES_ACCEPTANCE</code>; otherwise this
   *             request will fail.</p>
   * @public
   */
  TicketId: string | undefined;

  /**
   * <p>A unique identifier for a player delivering the response. This parameter can include one or multiple player
   *             IDs.</p>
   * @public
   */
  PlayerIds: string[] | undefined;

  /**
   * <p>Player response to the proposed match.</p>
   * @public
   */
  AcceptanceType: AcceptanceType | undefined;
}

/**
 * @public
 */
export interface AcceptMatchOutput {}

/**
 * <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation is not supported in the Region specified.</p>
 * @public
 */
export class UnsupportedRegionException extends __BaseException {
  readonly name: "UnsupportedRegionException" = "UnsupportedRegionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedRegionException, __BaseException>) {
    super({
      name: "UnsupportedRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedRegionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const RoutingStrategyType = {
  SIMPLE: "SIMPLE",
  TERMINAL: "TERMINAL",
} as const;

/**
 * @public
 */
export type RoutingStrategyType = (typeof RoutingStrategyType)[keyof typeof RoutingStrategyType];

/**
 * <p>The routing configuration for a fleet alias.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface RoutingStrategy {
  /**
   * <p>The type of routing strategy for the alias.</p>
   *          <p>Possible routing types include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>SIMPLE</b> - The alias resolves to one specific
   *                     fleet. Use this type when routing to active fleets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TERMINAL</b> - The alias does not resolve to a
   *                     fleet but instead can be used to display a message to the user. A terminal alias
   *                     throws a TerminalRoutingStrategyException with the message embedded.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: RoutingStrategyType;

  /**
   * <p>A unique identifier for the fleet that the alias points to. This value is the fleet ID, not the fleet ARN.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The message text to be used with a terminal routing strategy.</p>
   * @public
   */
  Message?: string;
}

/**
 * <p>Properties that describe an alias resource.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface Alias {
  /**
   * <p>A unique identifier for the alias. Alias IDs are unique within a Region.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift alias resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::alias/alias-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. In a GameLift alias ARN, the resource ID matches the alias ID value.</p>
   * @public
   */
  AliasArn?: string;

  /**
   * <p>A human-readable description of an alias.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The routing configuration, including routing type and fleet target, for the alias.
   *         </p>
   * @public
   */
  RoutingStrategy?: RoutingStrategy;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The time that this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  LastUpdatedTime?: Date;
}

/**
 * <p>Amazon GameLift Anywhere configuration options for your Anywhere fleets.</p>
 * @public
 */
export interface AnywhereConfiguration {
  /**
   * <p>The cost to run your fleet per hour. Amazon GameLift uses the provided cost of your fleet to
   *             balance usage in queues. For more information about queues, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html">Setting
   *                 up queues</a> in the <i>Amazon GameLift Developer Guide</i>.</p>
   * @public
   */
  Cost: string | undefined;
}

/**
 * <p>Values for use in player attribute key-value pairs. This object lets
 *             you specify an attribute value using any of the valid data types: string, number, string
 *             array, or data map. Each <code>AttributeValue</code> object can use only one of the
 *             available properties.</p>
 * @public
 */
export interface AttributeValue {
  /**
   * <p>For single string values. Maximum string length is 100 characters.</p>
   * @public
   */
  S?: string;

  /**
   * <p>For number values, expressed as double.</p>
   * @public
   */
  N?: number;

  /**
   * <p>For a list of up to 100 strings. Maximum length for each string is 100 characters.
   *             Duplicate values are not recognized; all occurrences of the repeated value after the
   *             first of a repeated value are ignored.</p>
   * @public
   */
  SL?: string[];

  /**
   * <p>For a map of up to 10 data type:value pairs. Maximum length for each string value is
   *             100 characters. </p>
   * @public
   */
  SDM?: Record<string, number>;
}

/**
 * <p>Amazon Web Services account security credentials that allow interactions with Amazon GameLift resources. The
 *             credentials are temporary and valid for a limited time span. You can request fresh
 *             credentials at any time. </p>
 *          <p> Amazon Web Services security credentials consist of three parts: an access key ID, a secret access
 *             key, and a session token. You must use all three parts together to authenticate your
 *             access requests.</p>
 *          <p>You need Amazon Web Services credentials for the following tasks: </p>
 *          <ul>
 *             <li>
 *                <p>To upload a game server build directly to Amazon GameLift S3 storage using <code>CreateBuild</code>. To get access for this
 *             task, call <a>RequestUploadCredentials</a>.</p>
 *             </li>
 *             <li>
 *                <p>To remotely connect to an active Amazon GameLift fleet instances.
 *                 To get remote access, call <a>GetComputeAccess</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AwsCredentials {
  /**
   * <p>The access key ID that identifies the temporary security credentials. </p>
   * @public
   */
  AccessKeyId?: string;

  /**
   * <p>The secret access key that can be used to sign requests.</p>
   * @public
   */
  SecretAccessKey?: string;

  /**
   * <p>The token that users must pass to the service API to use the temporary credentials. </p>
   * @public
   */
  SessionToken?: string;
}

/**
 * @public
 * @enum
 */
export const BackfillMode = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type BackfillMode = (typeof BackfillMode)[keyof typeof BackfillMode];

/**
 * @public
 * @enum
 */
export const BalancingStrategy = {
  ON_DEMAND_ONLY: "ON_DEMAND_ONLY",
  SPOT_ONLY: "SPOT_ONLY",
  SPOT_PREFERRED: "SPOT_PREFERRED",
} as const;

/**
 * @public
 */
export type BalancingStrategy = (typeof BalancingStrategy)[keyof typeof BalancingStrategy];

/**
 * @public
 * @enum
 */
export const OperatingSystem = {
  AMAZON_LINUX: "AMAZON_LINUX",
  AMAZON_LINUX_2: "AMAZON_LINUX_2",
  AMAZON_LINUX_2023: "AMAZON_LINUX_2023",
  WINDOWS_2012: "WINDOWS_2012",
  WINDOWS_2016: "WINDOWS_2016",
} as const;

/**
 * @public
 */
export type OperatingSystem = (typeof OperatingSystem)[keyof typeof OperatingSystem];

/**
 * @public
 * @enum
 */
export const BuildStatus = {
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  READY: "READY",
} as const;

/**
 * @public
 */
export type BuildStatus = (typeof BuildStatus)[keyof typeof BuildStatus];

/**
 * <p>Properties describing a custom game build.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface Build {
  /**
   * <p>A unique identifier for the build.</p>
   * @public
   */
  BuildId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) assigned to a Amazon GameLift build resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::build/build-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. In a GameLift build ARN, the resource ID matches the
   *                 <i>BuildId</i> value.</p>
   * @public
   */
  BuildArn?: string;

  /**
   * <p>A descriptive label associated with a build. Build names don't need to be unique. It can be set using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">CreateBuild</a> or
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/UpdateBuild">UpdateBuild</a>.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information associated with a build or script. Version strings don't need to be unique.</p>
   * @public
   */
  Version?: string;

  /**
   * <p>Current status of the build.</p>
   *          <p>Possible build statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>INITIALIZED</b> -- A new build has been defined,
   *                     but no files have been uploaded. You cannot create fleets for builds that are in
   *                     this status. When a build is successfully created, the build status is set to
   *                     this value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>READY</b> -- The game build has been successfully
   *                     uploaded. You can now create new fleets for this build.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b> -- The game build upload failed. You
   *                     cannot create new fleets for this build. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: BuildStatus;

  /**
   * <p>File size of the uploaded game build, expressed in bytes. When the build status is
   *                 <code>INITIALIZED</code> or when using a custom Amazon S3 storage location, this value is
   *             0.</p>
   * @public
   */
  SizeOnDisk?: number;

  /**
   * <p>Operating system that the game server binaries are built to run on. This value
   *             determines the type of fleet resources that you can use for this build.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon GameLift Server SDK version used to develop your game server.</p>
   * @public
   */
  ServerSdkVersion?: string;
}

/**
 * @public
 * @enum
 */
export const CertificateType = {
  Disabled: "DISABLED",
  Generated: "GENERATED",
} as const;

/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * <p>Determines whether a TLS/SSL certificate is generated for a fleet. This feature must
 *             be enabled when creating the fleet. All instances in a fleet share the same certificate.
 *             The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Amazon GameLift Server
 *                 SDK</a> operation <code>GetInstanceCertificate</code>. </p>
 * @public
 */
export interface CertificateConfiguration {
  /**
   * <p>Indicates whether a TLS/SSL certificate is generated for a fleet. </p>
   *          <p>Valid values include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>GENERATED</b> - Generate a TLS/SSL certificate
   *                     for this fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DISABLED</b> - (default) Do not generate a
   *                     TLS/SSL certificate for this fleet. </p>
   *             </li>
   *          </ul>
   * @public
   */
  CertificateType: CertificateType | undefined;
}

/**
 * @public
 * @enum
 */
export const FilterInstanceStatus = {
  ACTIVE: "ACTIVE",
  DRAINING: "DRAINING",
} as const;

/**
 * @public
 */
export type FilterInstanceStatus = (typeof FilterInstanceStatus)[keyof typeof FilterInstanceStatus];

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>
 *         Filters which game servers may be claimed when calling <code>ClaimGameServer</code>.
 *     </p>
 * @public
 */
export interface ClaimFilterOption {
  /**
   * <p>List of instance statuses that game servers may be claimed on. If provided, the list must contain the
   *             <code>ACTIVE</code> status.</p>
   * @public
   */
  InstanceStatuses?: FilterInstanceStatus[];
}

/**
 * @public
 */
export interface ClaimGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running. If you are not specifying a game server to claim, this value identifies
   *             where you want Amazon GameLift FleetIQ to look for an available game server to claim. </p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to claim. If this parameter is left empty, Amazon GameLift FleetIQ searches for an available
   *             game server in the specified game server group.</p>
   * @public
   */
  GameServerId?: string;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers. </p>
   * @public
   */
  GameServerData?: string;

  /**
   * <p>Object that restricts how a claimed game server is chosen.</p>
   * @public
   */
  FilterOption?: ClaimFilterOption;
}

/**
 * @public
 * @enum
 */
export const GameServerClaimStatus = {
  CLAIMED: "CLAIMED",
} as const;

/**
 * @public
 */
export type GameServerClaimStatus = (typeof GameServerClaimStatus)[keyof typeof GameServerClaimStatus];

/**
 * @public
 * @enum
 */
export const GameServerUtilizationStatus = {
  AVAILABLE: "AVAILABLE",
  UTILIZED: "UTILIZED",
} as const;

/**
 * @public
 */
export type GameServerUtilizationStatus =
  (typeof GameServerUtilizationStatus)[keyof typeof GameServerUtilizationStatus];

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>Properties describing a game server that
 *             is running on an instance in a game server group. </p>
 *          <p>A game server is created by a successful call to <code>RegisterGameServer</code> and
 *             deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a
 *             game session by calling <code>ClaimGameServer</code>. </p>
 * @public
 */
export interface GameServer {
  /**
   * <p>A unique identifier for the game server group where the game server is running.</p>
   * @public
   */
  GameServerGroupName?: string;

  /**
   * <p>The ARN identifier for the game server group where the game server is located.</p>
   * @public
   */
  GameServerGroupArn?: string;

  /**
   * <p>A custom string that uniquely identifies the game server. Game server IDs are developer-defined and are unique across all game
   *             server groups in an Amazon Web Services account.</p>
   * @public
   */
  GameServerId?: string;

  /**
   * <p>The unique identifier for the instance where the game server is running. This ID is
   *             available in the instance metadata. EC2 instance IDs
   *             use a 17-character format, for example: <code>i-1234567890abcdef0</code>.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The port and IP address that must be used to establish a client connection to the game
   *             server.</p>
   * @public
   */
  ConnectionInfo?: string;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers.</p>
   * @public
   */
  GameServerData?: string;

  /**
   * <p>Indicates when an available game server has been reserved for gameplay but has not yet
   *             started hosting a game. Once it is claimed, the game server remains in
   *                 <code>CLAIMED</code> status for a maximum of one minute. During this time, game
   *             clients connect to the game server to start the game and trigger the game server to
   *             update its utilization status. After one minute, the game server claim status reverts to
   *             null.</p>
   * @public
   */
  ClaimStatus?: GameServerClaimStatus;

  /**
   * <p>Indicates whether the game server is currently available for new games or is busy.
   *             Possible statuses include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The game server is available to be claimed. A game
   *                     server that has been claimed remains in this status until it reports game
   *                     hosting activity. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UTILIZED</code> - The game server is currently hosting a game session
   *                     with players. </p>
   *             </li>
   *          </ul>
   * @public
   */
  UtilizationStatus?: GameServerUtilizationStatus;

  /**
   * <p>Timestamp that indicates when the game server registered. The format is a number expressed in Unix
   *             time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  RegistrationTime?: Date;

  /**
   * <p>Timestamp that indicates the last time the game server was claimed. The format is a
   *             number expressed in Unix time as milliseconds (for example
   *             <code>"1469498468.057"</code>). This value is used to calculate when a claimed game
   *             server's status should revert to null.</p>
   * @public
   */
  LastClaimTime?: Date;

  /**
   * <p>Timestamp that indicates the last time the game server was updated with health status.
   *             The format is a number expressed in Unix time as milliseconds (for example
   *                 <code>"1469498468.057"</code>). After game server registration, this property is
   *             only changed when a game server update specifies a health check value.</p>
   * @public
   */
  LastHealthCheckTime?: Date;
}

/**
 * @public
 */
export interface ClaimGameServerOutput {
  /**
   * <p>Object that describes the newly claimed game server.</p>
   * @public
   */
  GameServer?: GameServer;
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified game server group has no available game servers to fulfill a
 *                 <code>ClaimGameServer</code> request. Clients can retry such requests immediately or
 *             after a waiting period.</p>
 * @public
 */
export class OutOfCapacityException extends __BaseException {
  readonly name: "OutOfCapacityException" = "OutOfCapacityException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutOfCapacityException, __BaseException>) {
    super({
      name: "OutOfCapacityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutOfCapacityException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The client failed authentication. Clients should not retry such requests.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ComparisonOperatorType = {
  GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold: "GreaterThanThreshold",
  LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
  LessThanThreshold: "LessThanThreshold",
} as const;

/**
 * @public
 */
export type ComparisonOperatorType = (typeof ComparisonOperatorType)[keyof typeof ComparisonOperatorType];

/**
 * @public
 * @enum
 */
export const ComputeStatus = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type ComputeStatus = (typeof ComputeStatus)[keyof typeof ComputeStatus];

/**
 * @public
 * @enum
 */
export const EC2InstanceType = {
  c3_2xlarge: "c3.2xlarge",
  c3_4xlarge: "c3.4xlarge",
  c3_8xlarge: "c3.8xlarge",
  c3_large: "c3.large",
  c3_xlarge: "c3.xlarge",
  c4_2xlarge: "c4.2xlarge",
  c4_4xlarge: "c4.4xlarge",
  c4_8xlarge: "c4.8xlarge",
  c4_large: "c4.large",
  c4_xlarge: "c4.xlarge",
  c5_12xlarge: "c5.12xlarge",
  c5_18xlarge: "c5.18xlarge",
  c5_24xlarge: "c5.24xlarge",
  c5_2xlarge: "c5.2xlarge",
  c5_4xlarge: "c5.4xlarge",
  c5_9xlarge: "c5.9xlarge",
  c5_large: "c5.large",
  c5_xlarge: "c5.xlarge",
  c5a_12xlarge: "c5a.12xlarge",
  c5a_16xlarge: "c5a.16xlarge",
  c5a_24xlarge: "c5a.24xlarge",
  c5a_2xlarge: "c5a.2xlarge",
  c5a_4xlarge: "c5a.4xlarge",
  c5a_8xlarge: "c5a.8xlarge",
  c5a_large: "c5a.large",
  c5a_xlarge: "c5a.xlarge",
  c5d_12xlarge: "c5d.12xlarge",
  c5d_18xlarge: "c5d.18xlarge",
  c5d_24xlarge: "c5d.24xlarge",
  c5d_2xlarge: "c5d.2xlarge",
  c5d_4xlarge: "c5d.4xlarge",
  c5d_9xlarge: "c5d.9xlarge",
  c5d_large: "c5d.large",
  c5d_xlarge: "c5d.xlarge",
  c6a_12xlarge: "c6a.12xlarge",
  c6a_16xlarge: "c6a.16xlarge",
  c6a_24xlarge: "c6a.24xlarge",
  c6a_2xlarge: "c6a.2xlarge",
  c6a_4xlarge: "c6a.4xlarge",
  c6a_8xlarge: "c6a.8xlarge",
  c6a_large: "c6a.large",
  c6a_xlarge: "c6a.xlarge",
  c6g_12xlarge: "c6g.12xlarge",
  c6g_16xlarge: "c6g.16xlarge",
  c6g_2xlarge: "c6g.2xlarge",
  c6g_4xlarge: "c6g.4xlarge",
  c6g_8xlarge: "c6g.8xlarge",
  c6g_large: "c6g.large",
  c6g_medium: "c6g.medium",
  c6g_xlarge: "c6g.xlarge",
  c6gn_12xlarge: "c6gn.12xlarge",
  c6gn_16xlarge: "c6gn.16xlarge",
  c6gn_2xlarge: "c6gn.2xlarge",
  c6gn_4xlarge: "c6gn.4xlarge",
  c6gn_8xlarge: "c6gn.8xlarge",
  c6gn_large: "c6gn.large",
  c6gn_medium: "c6gn.medium",
  c6gn_xlarge: "c6gn.xlarge",
  c6i_12xlarge: "c6i.12xlarge",
  c6i_16xlarge: "c6i.16xlarge",
  c6i_24xlarge: "c6i.24xlarge",
  c6i_2xlarge: "c6i.2xlarge",
  c6i_4xlarge: "c6i.4xlarge",
  c6i_8xlarge: "c6i.8xlarge",
  c6i_large: "c6i.large",
  c6i_xlarge: "c6i.xlarge",
  c7g_12xlarge: "c7g.12xlarge",
  c7g_16xlarge: "c7g.16xlarge",
  c7g_2xlarge: "c7g.2xlarge",
  c7g_4xlarge: "c7g.4xlarge",
  c7g_8xlarge: "c7g.8xlarge",
  c7g_large: "c7g.large",
  c7g_medium: "c7g.medium",
  c7g_xlarge: "c7g.xlarge",
  g5g_16xlarge: "g5g.16xlarge",
  g5g_2xlarge: "g5g.2xlarge",
  g5g_4xlarge: "g5g.4xlarge",
  g5g_8xlarge: "g5g.8xlarge",
  g5g_xlarge: "g5g.xlarge",
  m3_2xlarge: "m3.2xlarge",
  m3_large: "m3.large",
  m3_medium: "m3.medium",
  m3_xlarge: "m3.xlarge",
  m4_10xlarge: "m4.10xlarge",
  m4_2xlarge: "m4.2xlarge",
  m4_4xlarge: "m4.4xlarge",
  m4_large: "m4.large",
  m4_xlarge: "m4.xlarge",
  m5_12xlarge: "m5.12xlarge",
  m5_16xlarge: "m5.16xlarge",
  m5_24xlarge: "m5.24xlarge",
  m5_2xlarge: "m5.2xlarge",
  m5_4xlarge: "m5.4xlarge",
  m5_8xlarge: "m5.8xlarge",
  m5_large: "m5.large",
  m5_xlarge: "m5.xlarge",
  m5a_12xlarge: "m5a.12xlarge",
  m5a_16xlarge: "m5a.16xlarge",
  m5a_24xlarge: "m5a.24xlarge",
  m5a_2xlarge: "m5a.2xlarge",
  m5a_4xlarge: "m5a.4xlarge",
  m5a_8xlarge: "m5a.8xlarge",
  m5a_large: "m5a.large",
  m5a_xlarge: "m5a.xlarge",
  m6g_12xlarge: "m6g.12xlarge",
  m6g_16xlarge: "m6g.16xlarge",
  m6g_2xlarge: "m6g.2xlarge",
  m6g_4xlarge: "m6g.4xlarge",
  m6g_8xlarge: "m6g.8xlarge",
  m6g_large: "m6g.large",
  m6g_medium: "m6g.medium",
  m6g_xlarge: "m6g.xlarge",
  m7g_12xlarge: "m7g.12xlarge",
  m7g_16xlarge: "m7g.16xlarge",
  m7g_2xlarge: "m7g.2xlarge",
  m7g_4xlarge: "m7g.4xlarge",
  m7g_8xlarge: "m7g.8xlarge",
  m7g_large: "m7g.large",
  m7g_medium: "m7g.medium",
  m7g_xlarge: "m7g.xlarge",
  r3_2xlarge: "r3.2xlarge",
  r3_4xlarge: "r3.4xlarge",
  r3_8xlarge: "r3.8xlarge",
  r3_large: "r3.large",
  r3_xlarge: "r3.xlarge",
  r4_16xlarge: "r4.16xlarge",
  r4_2xlarge: "r4.2xlarge",
  r4_4xlarge: "r4.4xlarge",
  r4_8xlarge: "r4.8xlarge",
  r4_large: "r4.large",
  r4_xlarge: "r4.xlarge",
  r5_12xlarge: "r5.12xlarge",
  r5_16xlarge: "r5.16xlarge",
  r5_24xlarge: "r5.24xlarge",
  r5_2xlarge: "r5.2xlarge",
  r5_4xlarge: "r5.4xlarge",
  r5_8xlarge: "r5.8xlarge",
  r5_large: "r5.large",
  r5_xlarge: "r5.xlarge",
  r5a_12xlarge: "r5a.12xlarge",
  r5a_16xlarge: "r5a.16xlarge",
  r5a_24xlarge: "r5a.24xlarge",
  r5a_2xlarge: "r5a.2xlarge",
  r5a_4xlarge: "r5a.4xlarge",
  r5a_8xlarge: "r5a.8xlarge",
  r5a_large: "r5a.large",
  r5a_xlarge: "r5a.xlarge",
  r5d_12xlarge: "r5d.12xlarge",
  r5d_16xlarge: "r5d.16xlarge",
  r5d_24xlarge: "r5d.24xlarge",
  r5d_2xlarge: "r5d.2xlarge",
  r5d_4xlarge: "r5d.4xlarge",
  r5d_8xlarge: "r5d.8xlarge",
  r5d_large: "r5d.large",
  r5d_xlarge: "r5d.xlarge",
  r6g_12xlarge: "r6g.12xlarge",
  r6g_16xlarge: "r6g.16xlarge",
  r6g_2xlarge: "r6g.2xlarge",
  r6g_4xlarge: "r6g.4xlarge",
  r6g_8xlarge: "r6g.8xlarge",
  r6g_large: "r6g.large",
  r6g_medium: "r6g.medium",
  r6g_xlarge: "r6g.xlarge",
  r7g_12xlarge: "r7g.12xlarge",
  r7g_16xlarge: "r7g.16xlarge",
  r7g_2xlarge: "r7g.2xlarge",
  r7g_4xlarge: "r7g.4xlarge",
  r7g_8xlarge: "r7g.8xlarge",
  r7g_large: "r7g.large",
  r7g_medium: "r7g.medium",
  r7g_xlarge: "r7g.xlarge",
  t2_large: "t2.large",
  t2_medium: "t2.medium",
  t2_micro: "t2.micro",
  t2_small: "t2.small",
} as const;

/**
 * @public
 */
export type EC2InstanceType = (typeof EC2InstanceType)[keyof typeof EC2InstanceType];

/**
 * <p>An Amazon GameLift compute resource for hosting your game servers. A compute can be an
 *             EC2instance in a managed EC2 fleet or a registered compute in an Anywhere fleet. </p>
 * @public
 */
export interface Compute {
  /**
   * <p>A unique identifier for the fleet that the compute belongs to.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet that the compute belongs to.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>A descriptive label for the compute resource. For instances in a managed EC2 fleet, the compute name is an instance
   *             ID.</p>
   * @public
   */
  ComputeName?: string;

  /**
   * <p>The ARN that is assigned to a compute resource and uniquely identifies it. ARNs are
   *             unique across locations. Instances in managed EC2 fleets are not assigned a
   *             ComputeARN.</p>
   * @public
   */
  ComputeArn?: string;

  /**
   * <p>The IP address of a compute resource. Amazon GameLift requires a DNS name or IP address for a
   *             compute.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS name of a compute resource. Amazon GameLift requires a DNS name or IP address for a
   *             compute.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>Current status of the compute. A compute must have an <code>ACTIVE</code> status to
   *             host game sessions.</p>
   * @public
   */
  ComputeStatus?: ComputeStatus;

  /**
   * <p>The name of the custom location you added to the fleet that this compute resource
   *             resides in.</p>
   * @public
   */
  Location?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The type of operating system on the compute resource.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>The Amazon EC2 instance type that the fleet uses. For registered computes in an Amazon GameLift Anywhere fleet, this property is empty. </p>
   * @public
   */
  Type?: EC2InstanceType;

  /**
   * <p>The Amazon GameLift SDK endpoint connection for a registered compute resource in an Anywhere
   *             fleet. The game servers on the compute use this endpoint to connect to the Amazon GameLift
   *             service.</p>
   * @public
   */
  GameLiftServiceSdkEndpoint?: string;
}

/**
 * @public
 * @enum
 */
export const ComputeType = {
  ANYWHERE: "ANYWHERE",
  EC2: "EC2",
} as const;

/**
 * @public
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

/**
 * <p>A label that you can assign to a Amazon GameLift resource. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
 *                 Resources</a> in the <i>Amazon Web Services General Reference</i>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/">
 *                 Amazon Web Services Tagging Strategies</a>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key for a developer-defined key value pair for tagging an Amazon Web Services resource. </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for a developer-defined key value pair for tagging an Amazon Web Services resource. </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAliasInput {
  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A human-readable description of the alias.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The routing configuration, including routing type and fleet target, for the alias.
   *         </p>
   * @public
   */
  RoutingStrategy: RoutingStrategy | undefined;

  /**
   * <p>A list of labels to assign to the new alias resource. Tags are developer-defined
   *             key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access
   *             management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *                 <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAliasOutput {
  /**
   * <p>The newly created alias resource.</p>
   * @public
   */
  Alias?: Alias;
}

/**
 * <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 * @public
 */
export class TaggingFailedException extends __BaseException {
  readonly name: "TaggingFailedException" = "TaggingFailedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaggingFailedException, __BaseException>) {
    super({
      name: "TaggingFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaggingFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The location in Amazon S3 where build or script files are stored for access by
 *             Amazon GameLift.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>An Amazon S3 bucket identifier. Thename of the S3 bucket.</p>
   *          <note>
   *             <p>Amazon GameLift doesn't support uploading from Amazon S3 buckets with names that contain a dot
   *                 (.).</p>
   *          </note>
   * @public
   */
  Bucket?: string;

  /**
   * <p>The name of the zip file that contains the build files or script files. </p>
   * @public
   */
  Key?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access the S3 bucket.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses
   *             this information when retrieving files from an S3 bucket that you own. Use this
   *             parameter to specify a specific version of the file. If not set, the latest version of
   *             the file is retrieved. </p>
   * @public
   */
  ObjectVersion?: string;
}

/**
 * @public
 */
export interface CreateBuildInput {
  /**
   * <p>A descriptive label associated with a build. Build names don't need to be unique. You can change this value later. </p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information associated with a build or script. Version strings don't need to be unique. You can change this value later. </p>
   * @public
   */
  Version?: string;

  /**
   * <p>Information indicating where your game build files are stored. Use this parameter only
   *             when creating a build with files stored in an Amazon S3 bucket that you own. The storage
   *             location must specify an Amazon S3 bucket name and key. The location must also specify a role
   *             ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket and your
   *             new build must be in the same Region.</p>
   *          <p>If a <code>StorageLocation</code> is specified, the size of your file can be found in
   *             your Amazon S3 bucket. Amazon GameLift will report a <code>SizeOnDisk</code> of 0. </p>
   * @public
   */
  StorageLocation?: S3Location;

  /**
   * <p>The operating system that your game server binaries run on. This value determines the
   *             type of fleet resources that you use for this build. If your game build contains
   *             multiple executables, they all must run on the same operating system. You must specify a
   *             valid operating system in this request. There is no default value. You can't change a
   *             build's operating system later.</p>
   *          <note>
   *             <p>If you have active fleets using the Windows Server 2012 operating system, you can continue to
   *                 create new builds using this OS until October 10, 2023, when Microsoft ends its
   *                 support. All others must use Windows Server 2016 when creating new Windows-based
   *                 builds.</p>
   *          </note>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>A list of labels to assign to the new build resource. Tags are developer defined
   *             key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access
   *             management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *                 <i>Amazon Web Services General Reference</i>. Once the resource is created, you can
   *             use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html">TagResource</a>, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html">UntagResource</a>, and
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html">ListTagsForResource</a> to add, remove, and view tags. The maximum tag limit
   *             may be lower than stated. See the Amazon Web Services General Reference for actual tagging
   *             limits.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>A server SDK version you used when integrating your game server build with Amazon GameLift. For more information see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-custom-intro.html">Integrate games
   *                 with custom game servers</a>. By default Amazon GameLift sets this value to
   *                 <code>4.0.2</code>.</p>
   * @public
   */
  ServerSdkVersion?: string;
}

/**
 * @public
 */
export interface CreateBuildOutput {
  /**
   * <p>The newly created build resource, including a unique build IDs and status. </p>
   * @public
   */
  Build?: Build;

  /**
   * <p>This element is returned only when the operation is called without a storage location.
   *             It contains credentials to use when you are uploading a build file to an Amazon S3 bucket
   *             that is owned by Amazon GameLift. Credentials have a limited life span. To refresh these
   *             credentials, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html">RequestUploadCredentials</a>. </p>
   * @public
   */
  UploadCredentials?: AwsCredentials;

  /**
   * <p>Amazon S3 location for your game build file, including bucket name and key.</p>
   * @public
   */
  StorageLocation?: S3Location;
}

/**
 * @public
 * @enum
 */
export const IpProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type IpProtocol = (typeof IpProtocol)[keyof typeof IpProtocol];

/**
 * <p>A range of IP addresses and port settings that allow inbound traffic to connect to
 *             server processes on an instance in a fleet. New game sessions are assigned an IP
 *             address/port number combination, which must fall into the fleet's allowed ranges. Fleets
 *             with custom game builds must have permissions explicitly set. For Realtime Servers fleets, Amazon GameLift
 *             automatically opens two port ranges, one for TCP messaging and one for UDP.</p>
 * @public
 */
export interface IpPermission {
  /**
   * <p>A starting value for a range of allowed port numbers.</p>
   *          <p>For fleets using Linux builds, only ports <code>22</code> and <code>1026-60000</code> are valid.</p>
   *          <p>For fleets using Windows builds, only ports <code>1026-60000</code> are valid.</p>
   * @public
   */
  FromPort: number | undefined;

  /**
   * <p>An ending value for a range of allowed port numbers. Port numbers are end-inclusive.
   *             This value must be equal to or greater than <code>FromPort</code>.</p>
   *          <p>For fleets using Linux builds, only ports <code>22</code> and <code>1026-60000</code> are valid.</p>
   *          <p>For fleets using Windows builds, only ports <code>1026-60000</code> are valid.</p>
   * @public
   */
  ToPort: number | undefined;

  /**
   * <p>A range of allowed IP addresses. This value must be expressed in CIDR notation.
   *             Example: "<code>000.000.000.000/[subnet mask]</code>" or optionally the shortened
   *             version "<code>0.0.0.0/[subnet mask]</code>".</p>
   * @public
   */
  IpRange: string | undefined;

  /**
   * <p>The network communication protocol used by the fleet.</p>
   * @public
   */
  Protocol: IpProtocol | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetType = {
  OnDemand: "ON_DEMAND",
  Spot: "SPOT",
} as const;

/**
 * @public
 */
export type FleetType = (typeof FleetType)[keyof typeof FleetType];

/**
 * @public
 * @enum
 */
export const InstanceRoleCredentialsProvider = {
  SHARED_CREDENTIAL_FILE: "SHARED_CREDENTIAL_FILE",
} as const;

/**
 * @public
 */
export type InstanceRoleCredentialsProvider =
  (typeof InstanceRoleCredentialsProvider)[keyof typeof InstanceRoleCredentialsProvider];

/**
 * <p>A remote location where a multi-location fleet can deploy game servers for game
 *             hosting. </p>
 * @public
 */
export interface LocationConfiguration {
  /**
   * <p>An Amazon Web Services Region code, such as <code>us-west-2</code>. </p>
   * @public
   */
  Location: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProtectionPolicy = {
  FullProtection: "FullProtection",
  NoProtection: "NoProtection",
} as const;

/**
 * @public
 */
export type ProtectionPolicy = (typeof ProtectionPolicy)[keyof typeof ProtectionPolicy];

/**
 * <p>A policy that puts limits on the number of game sessions that a player can create
 *             within a specified span of time. With this policy, you can control players' ability to
 *             consume available resources.</p>
 *          <p>The policy is evaluated when a player tries to create a new game session. On receiving
 *             a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by
 *                 <code>CreatorId</code>) has created fewer than game session limit in the specified
 *             time period.</p>
 * @public
 */
export interface ResourceCreationLimitPolicy {
  /**
   * <p>A policy that puts limits on the number of game sessions that a player can create
   *             within a specified span of time. With this policy, you can control players' ability to
   *             consume available resources.</p>
   *          <p>The policy is evaluated when a player tries to create a new game session. On receiving
   *             a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by
   *                 <code>CreatorId</code>) has created fewer than game session limit in the specified
   *             time period.</p>
   * @public
   */
  NewGameSessionsPerCreator?: number;

  /**
   * <p>The time span used in evaluating the resource creation limit policy. </p>
   * @public
   */
  PolicyPeriodInMinutes?: number;
}

/**
 * <p>A set of instructions for launching server processes on each instance in a fleet.
 *             Server processes run either an executable in a custom game build or a Realtime Servers script.
 *             Server process configurations are part of a fleet's runtime configuration.</p>
 * @public
 */
export interface ServerProcess {
  /**
   * <p>The location of a game build executable or Realtime script. Game builds and Realtime
   *             scripts are installed on instances at the root: </p>
   *          <ul>
   *             <li>
   *                <p>Windows (custom game builds only): <code>C:\game</code>. Example:
   *                         "<code>C:\game\MyGame\server.exe</code>" </p>
   *             </li>
   *             <li>
   *                <p>Linux: <code>/local/game</code>. Examples:
   *                         "<code>/local/game/MyGame/server.exe</code>" or
   *                         "<code>/local/game/MyRealtimeScript.js</code>"</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Amazon GameLift doesn't support the use of setup scripts that launch the game executable.
   *                 For custom game builds, this parameter must indicate the executable that calls the
   *                 server SDK operations <code>initSDK()</code> and <code>ProcessReady()</code>.
   *             </p>
   *          </note>
   * @public
   */
  LaunchPath: string | undefined;

  /**
   * <p>An optional list of parameters to pass to the server executable or Realtime script on
   *             launch.</p>
   * @public
   */
  Parameters?: string;

  /**
   * <p>The number of server processes using this configuration that run concurrently on each
   *             instance.</p>
   * @public
   */
  ConcurrentExecutions: number | undefined;
}

/**
 * <p>A collection of server process configurations that describe the set of processes to
 *             run on each instance in a fleet. Server processes run either an executable in a custom
 *             game build or a Realtime Servers script. Amazon GameLift launches the configured processes, manages their
 *             life cycle, and replaces them as needed. Each instance checks regularly for an updated
 *             runtime configuration. </p>
 *          <p>A Amazon GameLift instance is limited to 50 processes running concurrently. To calculate the
 *             total number of processes in a runtime configuration, add the values of the
 *                 <code>ConcurrentExecutions</code> parameter for each server process. Learn more
 *             about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple
 *                 Processes on a Fleet</a>.</p>
 * @public
 */
export interface RuntimeConfiguration {
  /**
   * <p>A collection of server process configurations that identify what server processes to
   *             run on each instance in a fleet.</p>
   * @public
   */
  ServerProcesses?: ServerProcess[];

  /**
   * <p>The number of game sessions in status <code>ACTIVATING</code> to allow on an instance.
   *             This setting limits the instance resources that can be used for new game activations at
   *             any one time.</p>
   * @public
   */
  MaxConcurrentGameSessionActivations?: number;

  /**
   * <p>The maximum amount of time (in seconds) allowed to launch a new game session and have
   *             it report ready to host players. During this time, the game session is in status
   *                 <code>ACTIVATING</code>. If the game session does not become active before the
   *             timeout, it is ended and the game session status is changed to
   *             <code>TERMINATED</code>.</p>
   * @public
   */
  GameSessionActivationTimeoutSeconds?: number;
}

/**
 * @public
 */
export interface CreateFleetInput {
  /**
   * <p>A descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the fleet.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The unique identifier for a custom game server build to be deployed on fleet
   *             instances. You can use either the build ID or ARN. The build must be uploaded to Amazon GameLift
   *             and in <code>READY</code> status. This fleet property can't be changed after the fleet is created.</p>
   * @public
   */
  BuildId?: string;

  /**
   * <p>The unique identifier for a Realtime configuration script to be deployed on fleet
   *             instances. You can use either the script ID or ARN. Scripts must be uploaded to Amazon GameLift
   *             prior to creating the fleet. This fleet property can't be changed after the fleet is created.</p>
   * @public
   */
  ScriptId?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> Specify a server
   *             launch path using the <code>RuntimeConfiguration</code> parameter. Requests that use
   *             this parameter instead continue to be valid.</p>
   * @public
   */
  ServerLaunchPath?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> Specify server
   *             launch parameters using the <code>RuntimeConfiguration</code> parameter. Requests that
   *             use this parameter instead continue to be valid.</p>
   * @public
   */
  ServerLaunchParameters?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> To specify where
   *             Amazon GameLift should store log files once a server process shuts down, use the Amazon GameLift server
   *             API <code>ProcessReady()</code> and specify one or more directory paths in
   *                 <code>logParameters</code>. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-initialize">Initialize the server process</a> in the <i>Amazon GameLift Developer
   *                 Guide</i>. </p>
   * @public
   */
  LogPaths?: string[];

  /**
   * <p>The Amazon GameLift-supported Amazon EC2 instance type to use for all fleet instances. Instance
   *             type determines the computing resources that will be used to host your game servers,
   *             including CPU, memory, storage, and networking capacity. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud Instance Types</a> for detailed descriptions
   *             of Amazon EC2 instance types.</p>
   * @public
   */
  EC2InstanceType?: EC2InstanceType;

  /**
   * <p>The allowed IP address ranges and port settings that allow inbound traffic to access
   *             game sessions on this fleet. If the fleet is hosting a custom game build, this property
   *             must be set before players can connect to game sessions. For Realtime Servers fleets, Amazon GameLift
   *             automatically sets TCP and UDP ranges. </p>
   * @public
   */
  EC2InboundPermissions?: IpPermission[];

  /**
   * <p>The status of termination protection for active game sessions on the fleet. By
   *             default, this property is set to <code>NoProtection</code>. You can also set game
   *             session protection for an individual game session by calling <a href="gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> - Game sessions can be terminated
   *                     during active gameplay as a result of a scale-down event. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> - Game sessions in
   *                         <code>ACTIVE</code> status cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy;

  /**
   * <p>Instructions for how to launch and maintain server processes on instances in the
   *             fleet. The runtime configuration defines one or more server process configurations, each
   *             identifying a build executable or Realtime script file and the number of processes of
   *             that type to run concurrently. </p>
   *          <note>
   *             <p>The <code>RuntimeConfiguration</code> parameter is required unless the fleet is
   *                 being configured using the older parameters <code>ServerLaunchPath</code> and
   *                     <code>ServerLaunchParameters</code>, which are still supported for backward
   *                 compatibility.</p>
   *          </note>
   * @public
   */
  RuntimeConfiguration?: RuntimeConfiguration;

  /**
   * <p>A policy that limits the number of game sessions that an individual player can create
   *             on instances in this fleet within a specified span of time.</p>
   * @public
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * <p>The name of an Amazon Web Services CloudWatch metric group to add this fleet to. A metric group is
   *             used to aggregate the metrics for multiple fleets. You can specify an existing metric
   *             group name or set a new name to create a new metric group. A fleet can be included in
   *             only one metric group at a time. </p>
   * @public
   */
  MetricGroups?: string[];

  /**
   * <p>Used when peering your Amazon GameLift fleet with a VPC, the unique identifier for the Amazon Web Services
   *             account that owns the VPC. You can find your account ID in the Amazon Web Services Management Console under account
   *             settings. </p>
   * @public
   */
  PeerVpcAwsAccountId?: string;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId?: string;

  /**
   * <p>Indicates whether to use On-Demand or Spot instances for this fleet. By default, this
   *             property is set to <code>ON_DEMAND</code>. Learn more about when to use <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot"> On-Demand versus Spot Instances</a>. This fleet property can't be changed after the fleet is created.</p>
   * @public
   */
  FleetType?: FleetType;

  /**
   * <p>A unique identifier for an IAM role with access permissions to other Amazon Web Services services.
   *         Any application that runs on an instance in the fleet--including install scripts, server processes, and other
   *         processes--can use these permissions to interact with Amazon Web Services resources that you own or have access to.
   *         For more information about using the role with your game server builds, see
   *         <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html">
   *         Communicate with other Amazon Web Services resources from your fleets</a>. This fleet property can't be changed after the fleet is created.</p>
   * @public
   */
  InstanceRoleArn?: string;

  /**
   * <p>Prompts Amazon GameLift to generate a TLS/SSL certificate for the fleet. Amazon GameLift uses the
   *             certificates to encrypt traffic between game clients and the game servers running on
   *             Amazon GameLift. By default, the <code>CertificateConfiguration</code> is <code>DISABLED</code>.
   *             You can't change this property after you create the fleet. </p>
   *          <p>Certificate Manager (ACM) certificates expire after 13 months.
   *             Certificate expiration can cause fleets to fail, preventing players from connecting to
   *             instances in the fleet. We recommend you replace fleets before 13 months, consider using
   *             fleet aliases for a smooth transition.</p>
   *          <note>
   *             <p>ACM isn't available in all Amazon Web Services regions. A fleet creation request
   *                 with certificate generation enabled in an unsupported Region, fails with a 4xx
   *                 error. For more information about the supported Regions, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html">Supported
   *                     Regions</a> in the <i>Certificate Manager User
   *                 Guide</i>.</p>
   *          </note>
   * @public
   */
  CertificateConfiguration?: CertificateConfiguration;

  /**
   * <p>A set of remote locations to deploy additional instances to and manage as part of the
   *             fleet. This parameter can only be used when creating fleets in Amazon Web Services Regions that
   *             support multiple locations. You can add any Amazon GameLift-supported Amazon Web Services Region as a remote
   *             location, in the form of an Amazon Web Services Region code such as <code>us-west-2</code>. To create
   *             a fleet with instances in the home Region only, don't use this parameter. </p>
   *          <p>To use this parameter, Amazon GameLift requires you to use your home location in the
   *             request.</p>
   * @public
   */
  Locations?: LocationConfiguration[];

  /**
   * <p>A list of labels to assign to the new fleet resource. Tags are developer-defined
   *             key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access
   *             management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *                 <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The type of compute resource used to host your game servers. You can use your own
   *             compute resources with Amazon GameLift Anywhere or use Amazon EC2 instances with managed
   *             Amazon GameLift. By default, this property is set to <code>EC2</code>.</p>
   * @public
   */
  ComputeType?: ComputeType;

  /**
   * <p>Amazon GameLift Anywhere configuration options.</p>
   * @public
   */
  AnywhereConfiguration?: AnywhereConfiguration;

  /**
   * <p>Prompts Amazon GameLift to generate a shared credentials file for the IAM role
   *             defined in <code>InstanceRoleArn</code>. The shared credentials file is stored on each
   *             fleet instance and refreshed as needed. Use shared credentials for applications that are
   *             deployed along with the game server executable, if the game server is integrated with
   *             server SDK version 5.x. For more information about using shared
   *             credentials, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html"> Communicate
   *                 with other Amazon Web Services resources from your fleets</a>.</p>
   * @public
   */
  InstanceRoleCredentialsProvider?: InstanceRoleCredentialsProvider;
}

/**
 * @public
 * @enum
 */
export const FleetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  BUILDING: "BUILDING",
  DELETING: "DELETING",
  DOWNLOADING: "DOWNLOADING",
  ERROR: "ERROR",
  NEW: "NEW",
  NOT_FOUND: "NOT_FOUND",
  TERMINATED: "TERMINATED",
  VALIDATING: "VALIDATING",
} as const;

/**
 * @public
 */
export type FleetStatus = (typeof FleetStatus)[keyof typeof FleetStatus];

/**
 * @public
 * @enum
 */
export const FleetAction = {
  AutoScaling: "AUTO_SCALING",
} as const;

/**
 * @public
 */
export type FleetAction = (typeof FleetAction)[keyof typeof FleetAction];

/**
 * <p>Describes a Amazon GameLift fleet of game hosting resources.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 * @public
 */
export interface FleetAttributes {
  /**
   * <p>A unique identifier for the fleet.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. In a GameLift fleet ARN, the resource ID matches the <code>FleetId</code>
   *             value.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>Indicates whether to use On-Demand or Spot instances for this fleet. By default, this
   *             property is set to <code>ON_DEMAND</code>. Learn more about when to use <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot"> On-Demand versus Spot Instances</a>. This fleet property can't be changed after the fleet is created.</p>
   * @public
   */
  FleetType?: FleetType;

  /**
   * <p>The Amazon EC2 instance type that determines the computing resources of each instance in
   *             the fleet. Instance type defines the CPU, memory, storage, and networking capacity. See
   *                 <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud Instance Types</a>
   *             for detailed descriptions.</p>
   * @public
   */
  InstanceType?: EC2InstanceType;

  /**
   * <p>A human-readable description of the fleet.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  TerminationTime?: Date;

  /**
   * <p>Current status of the fleet. Possible fleet statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NEW</b> -- A new fleet has been defined and desired
   *                     instances is set to 1. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DOWNLOADING/VALIDATING/BUILDING/ACTIVATING</b> --
   *                     Amazon GameLift is setting up the new fleet, creating new instances with the game build
   *                     or Realtime script and starting server processes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- Hosts can now accept game
   *                     sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ERROR</b> -- An error occurred when downloading,
   *                     validating, building, or activating the fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b> -- Hosts are responding to a delete
   *                     fleet request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TERMINATED</b> -- The fleet no longer
   *                     exists.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: FleetStatus;

  /**
   * <p>A unique identifier for the build resource that is deployed on instances in this fleet.</p>
   * @public
   */
  BuildId?: string;

  /**
   * <p> The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the Amazon GameLift build resource that is deployed on instances in
   *             this fleet. In a GameLift build ARN, the resource ID matches the <code>BuildId</code>
   *             value.</p>
   * @public
   */
  BuildArn?: string;

  /**
   * <p>A unique identifier for the Realtime script resource that is deployed on instances in this fleet.</p>
   * @public
   */
  ScriptId?: string;

  /**
   * <p> The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift script resource that is deployed on instances
   *             in this fleet. In a GameLift script ARN, the resource ID matches the
   *                 <code>ScriptId</code> value.</p>
   * @public
   */
  ScriptArn?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> Server launch paths
   *             are now defined using the fleet's
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/RuntimeConfiguration.html">RuntimeConfiguration</a>
   *             . Requests that use this parameter instead continue to be valid.</p>
   * @public
   */
  ServerLaunchPath?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> Server launch
   *             parameters are now defined using the fleet's runtime configuration
   *             . Requests that use this parameter instead continue to be valid.</p>
   * @public
   */
  ServerLaunchParameters?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> Game session log
   *             paths are now defined using the Amazon GameLift server API <code>ProcessReady()</code>
   *             <code>logParameters</code>. See more information in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api-ref.html#gamelift-sdk-server-api-ref-dataypes-process">Server API Reference</a>. </p>
   * @public
   */
  LogPaths?: string[];

  /**
   * <p>The type of game session protection to set on all new instances that are started in
   *             the fleet.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy;

  /**
   * <p>The operating system of the fleet's computing resources. A fleet's operating system is
   *             determined by the OS of the build or script that is deployed on this fleet.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>A policy that puts limits on the number of game sessions that a player can create
   *             within a specified span of time. With this policy, you can control players' ability to
   *             consume available resources.</p>
   *          <p>The policy is evaluated when a player tries to create a new game session. On receiving
   *             a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by
   *                 <code>CreatorId</code>) has created fewer than game session limit in the specified
   *             time period.</p>
   * @public
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * <p>Name of a metric group that metrics for this fleet are added to. In Amazon CloudWatch,
   *             you can view aggregated metrics for fleets that are in a metric group. A fleet can be
   *             included in only one metric group at a time.</p>
   * @public
   */
  MetricGroups?: string[];

  /**
   * <p>A list of fleet activity that has been suspended using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a> . This includes fleet auto-scaling.</p>
   * @public
   */
  StoppedActions?: FleetAction[];

  /**
   * <p>A unique identifier for an IAM role with access permissions to other Amazon Web Services services.
   *         Any application that runs on an instance in the fleet--including install scripts, server processes, and other
   *         processes--can use these permissions to interact with Amazon Web Services resources that you own or have access to.
   *         For more information about using the role with your game server builds, see
   *         <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html">
   *         Communicate with other Amazon Web Services resources from your fleets</a>.</p>
   * @public
   */
  InstanceRoleArn?: string;

  /**
   * <p>Determines whether a TLS/SSL certificate is generated for a fleet. This feature must
   *             be enabled when creating the fleet. All instances in a fleet share the same certificate.
   *             The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Amazon GameLift Server
   *                 SDK</a> operation <code>GetInstanceCertificate</code>. </p>
   * @public
   */
  CertificateConfiguration?: CertificateConfiguration;

  /**
   * <p>The type of compute resource used to host your game servers. You can use your own
   *             compute resources with Amazon GameLift Anywhere or use Amazon EC2 instances with managed
   *             Amazon GameLift.</p>
   * @public
   */
  ComputeType?: ComputeType;

  /**
   * <p>Amazon GameLift Anywhere configuration options for your Anywhere fleets.</p>
   * @public
   */
  AnywhereConfiguration?: AnywhereConfiguration;

  /**
   * <p>Indicates that fleet instances maintain a shared credentials file for the IAM role
   *                 defined in <code>InstanceRoleArn</code>. Shared credentials allow applications that are
   *                 deployed with the game server executable to communicate with other Amazon Web Services resources. This property is used
   *                 only when the game server is integrated with the
   *                 server SDK version 5.x. For more information about using shared credentials, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html"> Communicate
   *                     with other Amazon Web Services resources from your fleets</a>.</p>
   * @public
   */
  InstanceRoleCredentialsProvider?: InstanceRoleCredentialsProvider;
}

/**
 * <p>A fleet location and its life-cycle state. A location state object might be used to
 *             describe a fleet's remote location or home Region. Life-cycle state tracks the progress
 *             of launching the first instance in a new location and preparing it for game hosting, and
 *             then removing all instances and deleting the location from the fleet.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>NEW</b> -- A new fleet location has been defined and desired
 *                     instances is set to 1. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>DOWNLOADING/VALIDATING/BUILDING/ACTIVATING</b> --
 *                     Amazon GameLift is setting up the new fleet location, creating new instances with the game build
 *                     or Realtime script and starting server processes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ACTIVE</b> -- Hosts can now accept game
 *                     sessions.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ERROR</b> -- An error occurred when downloading,
 *                     validating, building, or activating the fleet location.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>DELETING</b> -- Hosts are responding to a delete
 *                     fleet location request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>TERMINATED</b> -- The fleet location no longer
 *                     exists.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>NOT_FOUND</b> -- The fleet location was not found. This could be because the custom location was removed or not created.
 *                 </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface LocationState {
  /**
   * <p>The fleet location, expressed as an Amazon Web Services Region code such as <code>us-west-2</code>.
   *         </p>
   * @public
   */
  Location?: string;

  /**
   * <p>The life-cycle status of a fleet location. </p>
   * @public
   */
  Status?: FleetStatus;
}

/**
 * @public
 */
export interface CreateFleetOutput {
  /**
   * <p>The properties for the new fleet, including the current status. All fleets are placed
   *             in <code>NEW</code> status on creation. </p>
   * @public
   */
  FleetAttributes?: FleetAttributes;

  /**
   * <p>The fleet's locations and life-cycle status of each location. For new fleets, the
   *             status of all locations is set to <code>NEW</code>. During fleet creation, Amazon GameLift
   *             updates each location status as instances are deployed there and prepared for game
   *             hosting. This list includes an entry for the fleet's home Region. For fleets with no
   *             remote locations, only one entry, representing the home Region, is returned.</p>
   * @public
   */
  LocationStates?: LocationState[];
}

/**
 * @public
 */
export interface CreateFleetLocationsInput {
  /**
   * <p>A unique identifier for the fleet to add locations to. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A list of locations to deploy additional instances to and manage as part of the fleet.
   *             You can add any Amazon GameLift-supported Amazon Web Services Region as a remote location, in the form of an
   *             Amazon Web Services Region code such as <code>us-west-2</code>. </p>
   * @public
   */
  Locations: LocationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateFleetLocationsOutput {
  /**
   * <p>A unique identifier for the fleet that was updated with new locations.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. </p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The remote locations that are being added to the fleet, and the life-cycle status of
   *             each location. For new locations, the status is set to <code>NEW</code>. During location
   *             creation, Amazon GameLift updates each location's status as instances are deployed there and
   *             prepared for game hosting. This list does not include the fleet home Region or any
   *             remote locations that were already added to the fleet.</p>
   * @public
   */
  LocationStates?: LocationState[];
}

/**
 * <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the fleet. Resolve the conflict before
 *             retrying.</p>
 * @public
 */
export class InvalidFleetStatusException extends __BaseException {
  readonly name: "InvalidFleetStatusException" = "InvalidFleetStatusException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFleetStatusException, __BaseException>) {
    super({
      name: "InvalidFleetStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFleetStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>Settings for a
 *             target-based scaling policy as part of a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerGroupAutoScalingPolicy.html">GameServerGroupAutoScalingPolicy</a> . These settings are used to create a
 *             target-based policy that tracks the Amazon GameLift FleetIQ metric
 *                 <code>"PercentUtilizedGameServers"</code> and specifies a target value for the
 *             metric. As player usage changes, the policy triggers to adjust the game server group
 *             capacity so that the metric returns to the target value. </p>
 * @public
 */
export interface TargetTrackingConfiguration {
  /**
   * <p>Desired value to use with a game server group target-based scaling policy. </p>
   * @public
   */
  TargetValue: number | undefined;
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>Configuration
 *             settings for intelligent automatic scaling that uses target tracking. These settings are
 *             used to add an Auto Scaling policy when creating the corresponding Auto Scaling group.
 *             After the Auto Scaling group is created, all updates to Auto Scaling policies, including
 *             changing this policy and adding or removing other policies, is done directly on the Auto
 *             Scaling group. </p>
 * @public
 */
export interface GameServerGroupAutoScalingPolicy {
  /**
   * <p>Length of time, in seconds, it takes for a new instance to start new game server
   *             processes and register with Amazon GameLift FleetIQ. Specifying a warm-up time can be useful, particularly
   *             with game servers that take a long time to start up, because it avoids prematurely
   *             starting new instances. </p>
   * @public
   */
  EstimatedInstanceWarmup?: number;

  /**
   * <p>Settings for a target-based scaling policy applied to Auto Scaling group. These
   *             settings are used to create a target-based policy that tracks the Amazon GameLift FleetIQ metric
   *                 <code>"PercentUtilizedGameServers"</code> and specifies a target value for the
   *             metric. As player usage changes, the policy triggers to adjust the game server group
   *             capacity so that the metric returns to the target value. </p>
   * @public
   */
  TargetTrackingConfiguration: TargetTrackingConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const GameServerProtectionPolicy = {
  FULL_PROTECTION: "FULL_PROTECTION",
  NO_PROTECTION: "NO_PROTECTION",
} as const;

/**
 * @public
 */
export type GameServerProtectionPolicy = (typeof GameServerProtectionPolicy)[keyof typeof GameServerProtectionPolicy];

/**
 * @public
 * @enum
 */
export const GameServerGroupInstanceType = {
  c4_2xlarge: "c4.2xlarge",
  c4_4xlarge: "c4.4xlarge",
  c4_8xlarge: "c4.8xlarge",
  c4_large: "c4.large",
  c4_xlarge: "c4.xlarge",
  c5_12xlarge: "c5.12xlarge",
  c5_18xlarge: "c5.18xlarge",
  c5_24xlarge: "c5.24xlarge",
  c5_2xlarge: "c5.2xlarge",
  c5_4xlarge: "c5.4xlarge",
  c5_9xlarge: "c5.9xlarge",
  c5_large: "c5.large",
  c5_xlarge: "c5.xlarge",
  c5a_12xlarge: "c5a.12xlarge",
  c5a_16xlarge: "c5a.16xlarge",
  c5a_24xlarge: "c5a.24xlarge",
  c5a_2xlarge: "c5a.2xlarge",
  c5a_4xlarge: "c5a.4xlarge",
  c5a_8xlarge: "c5a.8xlarge",
  c5a_large: "c5a.large",
  c5a_xlarge: "c5a.xlarge",
  c6g_12xlarge: "c6g.12xlarge",
  c6g_16xlarge: "c6g.16xlarge",
  c6g_2xlarge: "c6g.2xlarge",
  c6g_4xlarge: "c6g.4xlarge",
  c6g_8xlarge: "c6g.8xlarge",
  c6g_large: "c6g.large",
  c6g_medium: "c6g.medium",
  c6g_xlarge: "c6g.xlarge",
  m4_10xlarge: "m4.10xlarge",
  m4_2xlarge: "m4.2xlarge",
  m4_4xlarge: "m4.4xlarge",
  m4_large: "m4.large",
  m4_xlarge: "m4.xlarge",
  m5_12xlarge: "m5.12xlarge",
  m5_16xlarge: "m5.16xlarge",
  m5_24xlarge: "m5.24xlarge",
  m5_2xlarge: "m5.2xlarge",
  m5_4xlarge: "m5.4xlarge",
  m5_8xlarge: "m5.8xlarge",
  m5_large: "m5.large",
  m5_xlarge: "m5.xlarge",
  m5a_12xlarge: "m5a.12xlarge",
  m5a_16xlarge: "m5a.16xlarge",
  m5a_24xlarge: "m5a.24xlarge",
  m5a_2xlarge: "m5a.2xlarge",
  m5a_4xlarge: "m5a.4xlarge",
  m5a_8xlarge: "m5a.8xlarge",
  m5a_large: "m5a.large",
  m5a_xlarge: "m5a.xlarge",
  m6g_12xlarge: "m6g.12xlarge",
  m6g_16xlarge: "m6g.16xlarge",
  m6g_2xlarge: "m6g.2xlarge",
  m6g_4xlarge: "m6g.4xlarge",
  m6g_8xlarge: "m6g.8xlarge",
  m6g_large: "m6g.large",
  m6g_medium: "m6g.medium",
  m6g_xlarge: "m6g.xlarge",
  r4_16xlarge: "r4.16xlarge",
  r4_2xlarge: "r4.2xlarge",
  r4_4xlarge: "r4.4xlarge",
  r4_8xlarge: "r4.8xlarge",
  r4_large: "r4.large",
  r4_xlarge: "r4.xlarge",
  r5_12xlarge: "r5.12xlarge",
  r5_16xlarge: "r5.16xlarge",
  r5_24xlarge: "r5.24xlarge",
  r5_2xlarge: "r5.2xlarge",
  r5_4xlarge: "r5.4xlarge",
  r5_8xlarge: "r5.8xlarge",
  r5_large: "r5.large",
  r5_xlarge: "r5.xlarge",
  r5a_12xlarge: "r5a.12xlarge",
  r5a_16xlarge: "r5a.16xlarge",
  r5a_24xlarge: "r5a.24xlarge",
  r5a_2xlarge: "r5a.2xlarge",
  r5a_4xlarge: "r5a.4xlarge",
  r5a_8xlarge: "r5a.8xlarge",
  r5a_large: "r5a.large",
  r5a_xlarge: "r5a.xlarge",
  r6g_12xlarge: "r6g.12xlarge",
  r6g_16xlarge: "r6g.16xlarge",
  r6g_2xlarge: "r6g.2xlarge",
  r6g_4xlarge: "r6g.4xlarge",
  r6g_8xlarge: "r6g.8xlarge",
  r6g_large: "r6g.large",
  r6g_medium: "r6g.medium",
  r6g_xlarge: "r6g.xlarge",
} as const;

/**
 * @public
 */
export type GameServerGroupInstanceType =
  (typeof GameServerGroupInstanceType)[keyof typeof GameServerGroupInstanceType];

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>An allowed instance type for a
 *             game server group. All game server groups must have at least two instance types defined
 *             for it. Amazon GameLift FleetIQ periodically evaluates each defined instance type for viability. It then
 *             updates the Auto Scaling group with the list of viable instance types.</p>
 * @public
 */
export interface InstanceDefinition {
  /**
   * <p>An Amazon EC2 instance type designation.</p>
   * @public
   */
  InstanceType: GameServerGroupInstanceType | undefined;

  /**
   * <p>Instance weighting that indicates how much this instance type contributes to the total
   *             capacity of a game server group. Instance weights are used by Amazon GameLift FleetIQ to calculate the
   *             instance type's cost per unit hour and better identify the most cost-effective options.
   *             For detailed information on weighting instance capacity, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html">Instance
   *                 Weighting</a> in the <i>Amazon Elastic Compute Cloud Auto Scaling User Guide</i>.
   *             Default value is "1".</p>
   * @public
   */
  WeightedCapacity?: string;
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>An Amazon Elastic Compute Cloud launch
 *             template that contains configuration settings and game server code to be deployed to all
 *             instances in a game server group. The launch template is specified when creating a new
 *             game server group. </p>
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>A unique identifier for an existing Amazon EC2 launch template.</p>
   * @public
   */
  LaunchTemplateId?: string;

  /**
   * <p>A readable identifier for an existing Amazon EC2 launch template. </p>
   * @public
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version of the Amazon EC2 launch template to use. If no version is specified, the
   *             default version will be used. With Amazon EC2, you can specify a default version for a launch
   *             template. If none is set, the default is the first version created.</p>
   * @public
   */
  Version?: string;
}

/**
 * @public
 */
export interface CreateGameServerGroupInput {
  /**
   * <p>An identifier for the new game server group. This value is used to generate unique ARN
   *             identifiers for the Amazon EC2 Auto Scaling group and the Amazon GameLift FleetIQ game server group. The name
   *             must be unique per Region per Amazon Web Services account.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The minimum number of instances allowed in the Amazon EC2 Auto Scaling group. During
   *             automatic scaling events, Amazon GameLift FleetIQ and Amazon EC2 do not scale down the group below this
   *             minimum. In production, this value should be set to at least 1. After the Auto Scaling
   *             group is created, update this value directly in the Auto Scaling group using the Amazon Web Services
   *             console or APIs.</p>
   * @public
   */
  MinSize: number | undefined;

  /**
   * <p>The maximum number of instances allowed in the Amazon EC2 Auto Scaling group. During
   *             automatic scaling events, Amazon GameLift FleetIQ and EC2 do not scale up the group above this maximum.
   *             After the Auto Scaling group is created, update this value directly in the Auto Scaling
   *             group using the Amazon Web Services console or APIs.</p>
   * @public
   */
  MaxSize: number | undefined;

  /**
   * <p>The Amazon EC2 launch template that contains configuration settings and game server code to
   *             be deployed to all instances in the game server group. You can specify the template
   *             using either the template name or ID. For help with creating a launch template, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch
   *                 Template for an Auto Scaling Group</a> in the <i>Amazon Elastic Compute Cloud Auto Scaling
   *                 User Guide</i>. After the Auto Scaling group is created, update this value
   *             directly in the Auto Scaling group using the Amazon Web Services console or APIs.</p>
   *          <note>
   *             <p>If you specify network interfaces in your launch template, you must explicitly set
   *                 the property <code>AssociatePublicIpAddress</code> to "true". If no network
   *                 interface is specified in the launch template, Amazon GameLift FleetIQ uses your account's default
   *                 VPC.</p>
   *          </note>
   * @public
   */
  LaunchTemplate: LaunchTemplateSpecification | undefined;

  /**
   * <p>The Amazon EC2 instance types and sizes to use in the Auto Scaling group. The instance
   *             definitions must specify at least two different instance types that are supported by
   *             Amazon GameLift FleetIQ. For more information on instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">EC2 Instance Types</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>. You can optionally specify capacity
   *             weighting for each instance type. If no weight value is specified for an instance type,
   *             it is set to the default value "1". For more information about capacity weighting, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html"> Instance Weighting for
   *                 Amazon EC2 Auto Scaling</a> in the Amazon EC2 Auto Scaling User Guide.</p>
   * @public
   */
  InstanceDefinitions: InstanceDefinition[] | undefined;

  /**
   * <p>Configuration settings to define a scaling policy for the Auto Scaling group that is
   *             optimized for game hosting. The scaling policy uses the metric
   *                 <code>"PercentUtilizedGameServers"</code> to maintain a buffer of idle game servers
   *             that can immediately accommodate new games and players. After the Auto Scaling group is
   *             created, update this value directly in the Auto Scaling group using the Amazon Web Services console or
   *             APIs.</p>
   * @public
   */
  AutoScalingPolicy?: GameServerGroupAutoScalingPolicy;

  /**
   * <p>Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the
   *             game server group. Method options include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot
   *                     Instances are unavailable or not viable for game hosting, the game server group
   *                     provides no hosting capacity until Spot Instances can again be used. Until then,
   *                     no new instances are started, and the existing nonviable Spot Instances are
   *                     terminated (after current gameplay ends) and are not replaced.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in
   *                     the game server group. If Spot Instances are unavailable, the game server group
   *                     continues to provide hosting capacity by falling back to On-Demand Instances.
   *                     Existing nonviable Spot Instances are terminated (after current gameplay ends)
   *                     and are replaced with new On-Demand Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game
   *                     server group. No Spot Instances are used, even when available, while this
   *                     balancing strategy is in force.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BalancingStrategy?: BalancingStrategy;

  /**
   * <p>A flag that indicates whether instances in the game server group are protected
   *             from early termination. Unprotected instances that have active game servers running might
   *             be terminated during a scale-down event, causing players to be dropped from the game.
   *             Protected instances cannot be terminated while there are active game servers running except
   *             in the event of a forced game server group deletion (see ). An exception to this is with Spot
   *             Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to <code>NO_PROTECTION</code> by default.</p>
   * @public
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy;

  /**
   * <p>A list of virtual private cloud (VPC) subnets to use with instances in the game server
   *             group. By default, all Amazon GameLift FleetIQ-supported Availability Zones are used. You can use this
   *             parameter to specify VPCs that you've set up. This property cannot be updated after the
   *             game server group is created, and the corresponding Auto Scaling group will always use
   *             the property value that is set with this request, even if the Auto Scaling group is
   *             updated directly.</p>
   * @public
   */
  VpcSubnets?: string[];

  /**
   * <p>A list of labels to assign to the new game server group resource. Tags are
   *             developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource
   *             management, access management, and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services
   *                 Resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const GameServerGroupStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETE_SCHEDULED: "DELETE_SCHEDULED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  NEW: "NEW",
} as const;

/**
 * @public
 */
export type GameServerGroupStatus = (typeof GameServerGroupStatus)[keyof typeof GameServerGroupStatus];

/**
 * @public
 * @enum
 */
export const GameServerGroupAction = {
  REPLACE_INSTANCE_TYPES: "REPLACE_INSTANCE_TYPES",
} as const;

/**
 * @public
 */
export type GameServerGroupAction = (typeof GameServerGroupAction)[keyof typeof GameServerGroupAction];

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>Properties that describe a game
 *             server group resource. A game server group manages certain properties related to a
 *             corresponding Amazon EC2 Auto Scaling group. </p>
 *          <p>A game server group is created by a successful call to
 *                 <code>CreateGameServerGroup</code> and deleted by calling
 *                 <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily
 *             suspended and resumed by calling <code>SuspendGameServerGroup</code> and
 *                 <code>ResumeGameServerGroup</code>, respectively. </p>
 * @public
 */
export interface GameServerGroup {
  /**
   * <p>A developer-defined identifier for the game server group. The name is unique for each
   *             Region in each Amazon Web Services account.</p>
   * @public
   */
  GameServerGroupName?: string;

  /**
   * <p>A generated unique ID for the game server group.</p>
   * @public
   */
  GameServerGroupArn?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The set of Amazon EC2 instance types that Amazon GameLift FleetIQ can use when balancing and automatically
   *             scaling instances in the corresponding Auto Scaling group. </p>
   * @public
   */
  InstanceDefinitions?: InstanceDefinition[];

  /**
   * <p>Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the
   *             game server group. Method options include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot
   *                     Instances are unavailable or not viable for game hosting, the game server group
   *                     provides no hosting capacity until Spot Instances can again be used. Until then,
   *                     no new instances are started, and the existing nonviable Spot Instances are
   *                     terminated (after current gameplay ends) and are not replaced.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in
   *                     the game server group. If Spot Instances are unavailable, the game server group
   *                     continues to provide hosting capacity by falling back to On-Demand Instances.
   *                     Existing nonviable Spot Instances are terminated (after current gameplay ends)
   *                     and are replaced with new On-Demand Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game
   *                     server group. No Spot Instances are used, even when available, while this
   *                     balancing strategy is in force.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BalancingStrategy?: BalancingStrategy;

  /**
   * <p>A flag that indicates whether instances in the game server group are protected
   *             from early termination. Unprotected instances that have active game servers running might
   *             be terminated during a scale-down event, causing players to be dropped from the game.
   *             Protected instances cannot be terminated while there are active game servers running except
   *             in the event of a forced game server group deletion (see ). An exception to this is with Spot
   *             Instances, which can be terminated by Amazon Web Services regardless of protection status. </p>
   * @public
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy;

  /**
   * <p>A generated unique ID for the Amazon EC2 Auto Scaling group that is associated with this
   *             game server group.</p>
   * @public
   */
  AutoScalingGroupArn?: string;

  /**
   * <p>The current status of the game server group. Possible statuses include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - Amazon GameLift FleetIQ has validated the <code>CreateGameServerGroup()</code>
   *                     request. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATING</code> - Amazon GameLift FleetIQ is setting up a game server group, which
   *                     includes creating an Auto Scaling group in your Amazon Web Services account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The game server group has been successfully created.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SCHEDULED</code> - A request to delete the game server group has
   *                     been received. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Amazon GameLift FleetIQ has received a valid
   *                         <code>DeleteGameServerGroup()</code> request and is processing it. Amazon GameLift FleetIQ
   *                     must first complete and release hosts before it deletes the Auto Scaling group
   *                     and the game server group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The game server group has been successfully deleted.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - The asynchronous processes of activating or deleting a
   *                     game server group has failed, resulting in an error state.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: GameServerGroupStatus;

  /**
   * <p>Additional information about the current game server group status. This information
   *             might provide additional insight on groups that are in <code>ERROR</code> status.</p>
   * @public
   */
  StatusReason?: string;

  /**
   * <p>A list of activities that are currently suspended for this game server group. If this
   *             property is empty, all activities are occurring.</p>
   * @public
   */
  SuspendedActions?: GameServerGroupAction[];

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that indicates when this game server group was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface CreateGameServerGroupOutput {
  /**
   * <p>The newly created game server group object, including the new ARN value for the Amazon GameLift FleetIQ
   *             game server group and the object's status. The Amazon EC2 Auto Scaling group ARN is initially
   *             null, since the group has not yet been created. This value is added once the game server
   *             group status reaches <code>ACTIVE</code>. </p>
   * @public
   */
  GameServerGroup?: GameServerGroup;
}

/**
 * <p>This key-value pair can store custom data about a game session.
 *         For example, you might use a <code>GameProperty</code> to track a game session's map, level of difficulty, or remaining time.
 *         The difficulty level could be specified like this: <code>\{"Key": "difficulty", "Value":"Novice"\}</code>.
 *       </p>
 *          <p>
 *           You can set game properties when creating a game session. You can also modify game properties of an active game session. When searching for game sessions, you can filter on game property keys and values. You can't delete game properties from a game session.
 *       </p>
 *          <p>For examples of working with game properties, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#game-properties">Create a game session with properties</a>.
 *       </p>
 * @public
 */
export interface GameProperty {
  /**
   * <p>The game property identifier.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The game property value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateGameSessionInput {
  /**
   * <p>A unique identifier for the fleet to create a game session in. You can use either the fleet ID or ARN value. Each
   *             request must reference either a fleet ID or alias ID, but not both.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the alias associated with the fleet to create a game session in. You can use either the
   *             alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but
   *             not both.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   * @public
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>.
   *           For an example, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#game-properties-create">Create a game session with custom properties</a>.
   *         </p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A unique identifier for a player or entity creating the game session. </p>
   *          <p>If you add a resource creation limit policy to a fleet, the
   *                 <code>CreateGameSession</code> operation requires a <code>CreatorId</code>. Amazon GameLift
   *             limits the number of game session creation requests with the same <code>CreatorId</code>
   *             in a specified time period.</p>
   *          <p>If you your fleet doesn't have a resource creation limit policy and you provide a
   *                 <code>CreatorId</code> in your <code>CreateGameSession</code> requests, Amazon GameLift
   *             limits requests to one request per <code>CreatorId</code> per second.</p>
   *          <p>To not limit <code>CreateGameSession</code> requests with the same
   *                 <code>CreatorId</code>, don't provide a <code>CreatorId</code> in your
   *                 <code>CreateGameSession</code> request.</p>
   * @public
   */
  CreatorId?: string;

  /**
   * <p>
   *             <i>This parameter is deprecated. Use <code>IdempotencyToken</code>
   *                 instead.</i>
   *          </p>
   *          <p>Custom string that uniquely identifies a request for a new game session. Maximum token
   *             length is 48 characters. If provided, this string is included in the new game session's
   *             ID.</p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>Custom string that uniquely identifies the new game session request. This is useful
   *             for ensuring that game session requests with the same idempotency token are processed
   *             only once. Subsequent requests with the same string return the original
   *                 <code>GameSession</code> object, with an updated status. Maximum token length is 48
   *             characters. If provided, this string is included in the new game session's ID.
   *             A game session ARN has the following format:
   *     <code>arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token></code>. Idempotency tokens remain in use for 30 days after a game session has ended;
   *             game session objects are retained for this time period and then deleted.</p>
   * @public
   */
  IdempotencyToken?: string;

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   * @public
   */
  GameSessionData?: string;

  /**
   * <p>A fleet's remote location to place the new game session in. If this parameter is not
   *             set, the new game session is placed in the fleet's home Region. Specify a remote
   *             location with an Amazon Web Services Region code such as <code>us-west-2</code>. When using an
   *             Anywhere fleet, this parameter is required and must be set to the Anywhere fleet's
   *             custom location.</p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 * @enum
 */
export const PlayerSessionCreationPolicy = {
  ACCEPT_ALL: "ACCEPT_ALL",
  DENY_ALL: "DENY_ALL",
} as const;

/**
 * @public
 */
export type PlayerSessionCreationPolicy =
  (typeof PlayerSessionCreationPolicy)[keyof typeof PlayerSessionCreationPolicy];

/**
 * @public
 * @enum
 */
export const GameSessionStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type GameSessionStatus = (typeof GameSessionStatus)[keyof typeof GameSessionStatus];

/**
 * @public
 * @enum
 */
export const GameSessionStatusReason = {
  INTERRUPTED: "INTERRUPTED",
} as const;

/**
 * @public
 */
export type GameSessionStatusReason = (typeof GameSessionStatusReason)[keyof typeof GameSessionStatusReason];

/**
 * <p>Properties describing a game session.</p>
 *          <p>A game session in ACTIVE status can host players. When a game session ends, its status
 *             is set to <code>TERMINATED</code>. </p>
 *          <p>Amazon GameLift retains a game session resource for 30 days after the game session ends. You
 *             can reuse idempotency token values after this time. Game session logs are retained for
 *             14 days.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface GameSession {
  /**
   * <p>A unique identifier for the game session. A game session ARN has the following format:
   *     <code>arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token></code>.</p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A unique identifier for the fleet that the game session is running on.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet that this game session is running on. </p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  TerminationTime?: Date;

  /**
   * <p>Number of players currently in the game session.</p>
   * @public
   */
  CurrentPlayerSessionCount?: number;

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   * @public
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>Current status of the game session. A game session must have an <code>ACTIVE</code>
   *             status to have player sessions.</p>
   * @public
   */
  Status?: GameSessionStatus;

  /**
   * <p>Provides additional information about game session status. <code>INTERRUPTED</code>
   *             indicates that the game session was hosted on a spot instance that was reclaimed,
   *             causing the active game session to be terminated.</p>
   * @public
   */
  StatusReason?: GameSessionStatusReason;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS identifier assigned to the instance that is running the game session. Values have
   *             the following format:</p>
   *          <ul>
   *             <li>
   *                <p>TLS-enabled fleets: <code><unique identifier>.<region identifier>.amazongamelift.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Non-TLS-enabled fleets: <code>ec2-<unique identifier>.compute.amazonaws.com</code>. (See
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p>
   *             </li>
   *          </ul>
   *          <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>The port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>Indicates whether or not the game session is accepting new players.</p>
   * @public
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;

  /**
   * <p>A unique identifier for a player. This ID is used to enforce a resource protection policy (if one exists),
   *             that limits the number of game sessions a player can create.</p>
   * @public
   */
  CreatorId?: string;

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   * @public
   */
  GameSessionData?: string;

  /**
   * <p>Information about the matchmaking process that resulted in the game session, if
   *             matchmaking was used. Data is in JSON syntax, formatted as a string. Information
   *             includes the matchmaker ID as well as player attributes and team assignments. For more
   *             details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">Match
   *                 Data</a>. Matchmaker data is updated whenever new players are added during a
   *             successful backfill (see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchBackfill.html">StartMatchBackfill</a>).  </p>
   * @public
   */
  MatchmakerData?: string;

  /**
   * <p>The fleet location where the game session is running. This value might specify the
   *             fleet's home Region or a remote location. Location is expressed as an Amazon Web Services Region code
   *             such as <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface CreateGameSessionOutput {
  /**
   * <p>Object that describes the newly created game session record.</p>
   * @public
   */
  GameSession?: GameSession;
}

/**
 * <p>The specified fleet has no available instances to fulfill a
 *                 <code>CreateGameSession</code> request. Clients can retry such requests immediately
 *             or after a waiting period.</p>
 * @public
 */
export class FleetCapacityExceededException extends __BaseException {
  readonly name: "FleetCapacityExceededException" = "FleetCapacityExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FleetCapacityExceededException, __BaseException>) {
    super({
      name: "FleetCapacityExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FleetCapacityExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A game session with this custom ID string already exists in this fleet. Resolve this
 *             conflict before retrying this request.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The service is unable to resolve the routing for a particular alias because it has a
 *             terminal <code>RoutingStrategy</code> associated with it. The message returned in this
 *             exception is the message defined in the routing strategy itself. Such requests should
 *             only be retried if the routing strategy for the specified alias is modified. </p>
 * @public
 */
export class TerminalRoutingStrategyException extends __BaseException {
  readonly name: "TerminalRoutingStrategyException" = "TerminalRoutingStrategyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TerminalRoutingStrategyException, __BaseException>) {
    super({
      name: "TerminalRoutingStrategyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TerminalRoutingStrategyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A fleet or alias designated in a game session queue. Queues fulfill requests for new
 *             game sessions by placing a new game session on any of the queue's destinations. </p>
 * @public
 */
export interface GameSessionQueueDestination {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to fleet or fleet alias. ARNs, which
   *             include a fleet ID or alias ID and a Region name, provide a unique identifier across all
   *             Regions.</p>
   * @public
   */
  DestinationArn?: string;
}

/**
 * <p>A list of fleet locations where a game session queue can place new game sessions. You
 *             can use a filter to temporarily turn off placements for specific locations. For queues
 *             that have multi-location fleets, you can use a filter configuration allow placement with
 *             some, but not all of these locations.</p>
 * @public
 */
export interface FilterConfiguration {
  /**
   * <p> A list of locations to allow game session placement in, in the form of Amazon Web Services Region
   *             codes such as <code>us-west-2</code>. </p>
   * @public
   */
  AllowedLocations?: string[];
}

/**
 * <p>Sets a latency cap for individual players when placing a game session. With a latency
 *             policy in force, a game session cannot be placed in a fleet location where a player
 *             reports latency higher than the cap. Latency policies are used only with placement
 *             request that provide player latency information. Player latency policies can be stacked
 *             to gradually relax latency requirements over time. </p>
 * @public
 */
export interface PlayerLatencyPolicy {
  /**
   * <p>The maximum latency value that is allowed for any player, in milliseconds. All
   *             policies must have a value set for this property.</p>
   * @public
   */
  MaximumIndividualPlayerLatencyMilliseconds?: number;

  /**
   * <p>The length of time, in seconds, that the policy is enforced while placing a new game
   *             session. A null value for this property means that the policy is enforced until the
   *             queue times out.</p>
   * @public
   */
  PolicyDurationSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const PriorityType = {
  COST: "COST",
  DESTINATION: "DESTINATION",
  LATENCY: "LATENCY",
  LOCATION: "LOCATION",
} as const;

/**
 * @public
 */
export type PriorityType = (typeof PriorityType)[keyof typeof PriorityType];

/**
 * <p>Custom prioritization settings for use by a game session queue when placing new game
 *             sessions with available game servers. When defined, this configuration replaces the
 *             default FleetIQ prioritization process, which is as follows:</p>
 *          <ul>
 *             <li>
 *                <p>If player latency data is included in a game session request, destinations and
 *                     locations are prioritized first based on lowest average latency (1), then on
 *                     lowest hosting cost (2), then on destination list order (3), and finally on
 *                     location (alphabetical) (4). This approach ensures that the queue's top priority
 *                     is to place game sessions where average player latency is lowest, and--if
 *                     latency is the same--where the hosting cost is less, etc.</p>
 *             </li>
 *             <li>
 *                <p>If player latency data is not included, destinations and locations are
 *                     prioritized first on destination list order (1), and then on location
 *                     (alphabetical) (2). This approach ensures that the queue's top priority is to
 *                     place game sessions on the first destination fleet listed. If that fleet has
 *                     multiple locations, the game session is placed on the first location (when
 *                     listed alphabetically).</p>
 *             </li>
 *          </ul>
 *          <p>Changing the priority order will affect how game sessions are placed.</p>
 * @public
 */
export interface PriorityConfiguration {
  /**
   * <p>The recommended sequence to use when prioritizing where to place new game sessions.
   *             Each type can only be listed once.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LATENCY</code> -- FleetIQ prioritizes locations where the average player
   *                     latency (provided in each game session request) is lowest. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COST</code> -- FleetIQ prioritizes destinations with the lowest current
   *                     hosting costs. Cost is evaluated based on the location, instance type, and fleet
   *                     type (Spot or On-Demand) for each destination in the queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESTINATION</code> -- FleetIQ prioritizes based on the order that
   *                     destinations are listed in the queue configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOCATION</code> -- FleetIQ prioritizes based on the provided order of
   *                     locations, as defined in <code>LocationOrder</code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  PriorityOrder?: PriorityType[];

  /**
   * <p>The prioritization order to use for fleet locations, when the
   *                 <code>PriorityOrder</code> property includes <code>LOCATION</code>. Locations are
   *             identified by Amazon Web Services Region codes such as <code>us-west-2</code>. Each location can only
   *             be listed once. </p>
   * @public
   */
  LocationOrder?: string[];
}

/**
 * @public
 */
export interface CreateGameSessionQueueInput {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status. By default, this property is set to <code>600</code>.</p>
   * @public
   */
  TimeoutInSeconds?: number;

  /**
   * <p>A set of policies that act as a sliding cap on player latency. FleetIQ works to
   *             deliver low latency for most players in a game session. These policies ensure that no
   *             individual player can be placed into a game with unreasonably high latency. Use multiple
   *             policies to gradually relax latency requirements a step at a time. Multiple policies are applied based on their
   *             maximum allowed latency, starting with the lowest value.</p>
   * @public
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * <p>A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
   *     Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.</p>
   * @public
   */
  Destinations?: GameSessionQueueDestination[];

  /**
   * <p>A list of locations where a queue is allowed to place new game sessions. Locations
   *             are specified in the form of Amazon Web Services Region codes, such as <code>us-west-2</code>. If this parameter is
   *             not set, game sessions can be placed in any queue location. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration;

  /**
   * <p>Custom settings to use when prioritizing destinations and locations for game session placements. This
   *             configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly
   *             named will be automatically applied at the end of the prioritization process. </p>
   * @public
   */
  PriorityConfiguration?: PriorityConfiguration;

  /**
   * <p>Information to be added to all events that are related to this game session
   *             queue.</p>
   * @public
   */
  CustomEventData?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive game session placement notifications. See
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html"> Setting up
   *                 notifications for game session placement</a>.</p>
   * @public
   */
  NotificationTarget?: string;

  /**
   * <p>A list of labels to assign to the new game session queue resource. Tags are
   *             developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource
   *             management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services
   *                 Resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Configuration for a game session placement mechanism that processes requests for new
 *             game sessions. A queue can be used on its own or as part of a matchmaking
 *             solution.</p>
 * @public
 */
export interface GameSessionQueue {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::gamesessionqueue/<queue name></code>. In a Amazon GameLift game session queue ARN, the resource ID matches the
   *                 <i>Name</i> value.</p>
   * @public
   */
  GameSessionQueueArn?: string;

  /**
   * <p>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status. By default, this property is set to <code>600</code>.</p>
   * @public
   */
  TimeoutInSeconds?: number;

  /**
   * <p>A set of policies that act as a sliding cap on player latency. FleetIQ works to
   *             deliver low latency for most players in a game session. These policies ensure that no
   *             individual player can be placed into a game with unreasonably high latency. Use multiple
   *             policies to gradually relax latency requirements a step at a time. Multiple policies are applied based on their
   *             maximum allowed latency, starting with the lowest value. </p>
   * @public
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * <p>A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
   *     Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.</p>
   * @public
   */
  Destinations?: GameSessionQueueDestination[];

  /**
   * <p>A list of locations where a queue is allowed to place new game sessions. Locations
   *             are specified in the form of Amazon Web Services Region codes, such as <code>us-west-2</code>. If this parameter is
   *             not set, game sessions can be placed in any queue location. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration;

  /**
   * <p>Custom settings to use when prioritizing destinations and locations for game session placements. This
   *             configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly
   *             named will be automatically applied at the end of the prioritization process. </p>
   * @public
   */
  PriorityConfiguration?: PriorityConfiguration;

  /**
   * <p> Information that is added to all events that are related to this game session
   *             queue.</p>
   * @public
   */
  CustomEventData?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive game session placement notifications. See
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html"> Setting up
   *                 notifications for game session placement</a>.</p>
   * @public
   */
  NotificationTarget?: string;
}

/**
 * @public
 */
export interface CreateGameSessionQueueOutput {
  /**
   * <p>An object that describes the newly created game session queue.</p>
   * @public
   */
  GameSessionQueue?: GameSessionQueue;
}

/**
 * @public
 */
export interface CreateLocationInput {
  /**
   * <p>A descriptive name for the custom location.</p>
   * @public
   */
  LocationName: string | undefined;

  /**
   * <p>A list of labels to assign to the new matchmaking configuration resource. Tags are
   *             developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource
   *             management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services
   *                 Resources</a> in the <i>Amazon Web Services General Rareference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Properties of a location</p>
 * @public
 */
export interface LocationModel {
  /**
   * <p>The location's name.</p>
   * @public
   */
  LocationName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift location resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::location/location-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * @public
 */
export interface CreateLocationOutput {
  /**
   * <p>The details of the custom location you created.</p>
   * @public
   */
  Location?: LocationModel;
}

/**
 * @public
 * @enum
 */
export const FlexMatchMode = {
  STANDALONE: "STANDALONE",
  WITH_QUEUE: "WITH_QUEUE",
} as const;

/**
 * @public
 */
export type FlexMatchMode = (typeof FlexMatchMode)[keyof typeof FlexMatchMode];

/**
 * @public
 */
export interface CreateMatchmakingConfigurationInput {
  /**
   * <p>A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking
   *             request or ticket.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A human-readable description of the matchmaking configuration. </p>
   * @public
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::gamesessionqueue/<queue name></code>. Queues can be located in any Region. Queues are used to start new
   *             Amazon GameLift-hosted game sessions for matches that are created with this matchmaking
   *             configuration. If <code>FlexMatchMode</code> is set to <code>STANDALONE</code>, do not
   *             set this parameter. </p>
   * @public
   */
  GameSessionQueueArns?: string[];

  /**
   * <p>The maximum duration, in seconds, that a matchmaking ticket can remain in process
   *             before timing out. Requests that fail due to timing out can be resubmitted as
   *             needed.</p>
   * @public
   */
  RequestTimeoutSeconds: number | undefined;

  /**
   * <p>The length of time (in seconds) to wait for players to accept a proposed match, if
   *             acceptance is required. </p>
   * @public
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   * <p>A flag that determines whether a match that was created with this configuration must
   *             be accepted by the matched players. To require acceptance, set to <code>TRUE</code>.
   *             With this option enabled, matchmaking tickets use the status
   *                 <code>REQUIRES_ACCEPTANCE</code> to indicate when a completed potential match is
   *             waiting for player acceptance. </p>
   * @public
   */
  AcceptanceRequired: boolean | undefined;

  /**
   * <p>A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN
   *             value. A matchmaking configuration can only use rule sets that are defined in the same
   *             Region.</p>
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * <p>An SNS topic ARN that is set up to receive matchmaking notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
   *                 Setting up notifications for matchmaking</a> for more information.</p>
   * @public
   */
  NotificationTarget?: string;

  /**
   * <p>The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies
   *             a match for a single 10-person team, and the additional player count is set to 2, 10 players will be selected for the match and 2 more player slots will be open for future players. This parameter is not used if <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   * @public
   */
  AdditionalPlayerCount?: number;

  /**
   * <p>Information to be added to all events related to this matchmaking configuration.
   *         </p>
   * @public
   */
  CustomEventData?: string;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>. This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used if <code>FlexMatchMode</code>
   *             is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used if <code>FlexMatchMode</code>
   *             is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameSessionData?: string;

  /**
   * <p>The method used to backfill game sessions that are created with this matchmaking
   *             configuration. Specify <code>MANUAL</code> when your game manages backfill requests
   *             manually or does not use the match backfill feature. Specify <code>AUTOMATIC</code> to
   *             have Amazon GameLift create a backfill request whenever a game session has one or more open
   *             slots. Learn more about manual and automatic backfill in <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill Existing Games
   *                 with FlexMatch</a>. Automatic backfill is not available when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  BackfillMode?: BackfillMode;

  /**
   * <p>Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or
   *             as a standalone matchmaking solution. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>STANDALONE</b> - FlexMatch forms matches and
   *                     returns match information, including players and team assignments, in a <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded"> MatchmakingSucceeded</a> event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WITH_QUEUE</b> - FlexMatch forms matches and uses
   *                     the specified Amazon GameLift queue to start a game session for the match. </p>
   *             </li>
   *          </ul>
   * @public
   */
  FlexMatchMode?: FlexMatchMode;

  /**
   * <p>A list of labels to assign to the new matchmaking configuration resource. Tags are
   *             developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource
   *             management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services
   *                 Resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Guidelines for use with FlexMatch to match players into games. All matchmaking requests
 *             must specify a matchmaking configuration.</p>
 * @public
 */
export interface MatchmakingConfiguration {
  /**
   * <p>A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking
   *             request or ticket.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift matchmaking configuration resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::matchmakingconfiguration/<matchmaking configuration name></code>. In a Amazon GameLift configuration ARN, the resource ID matches the
   *                 <i>Name</i> value.</p>
   * @public
   */
  ConfigurationArn?: string;

  /**
   * <p>A descriptive label that is associated with matchmaking configuration.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::gamesessionqueue/<queue name></code>. Queues can be located in any Region. Queues are used to start new
   *             Amazon GameLift-hosted game sessions for matches that are created with this matchmaking
   *             configuration. This property is not set when <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   * @public
   */
  GameSessionQueueArns?: string[];

  /**
   * <p>The maximum duration, in seconds, that a matchmaking ticket can remain in process
   *             before timing out. Requests that fail due to timing out can be resubmitted as
   *             needed.</p>
   * @public
   */
  RequestTimeoutSeconds?: number;

  /**
   * <p>The length of time (in seconds) to wait for players to accept a proposed match, if
   *             acceptance is required. If any player rejects the match or fails to accept before the
   *             timeout, the ticket continues to look for an acceptable match.</p>
   * @public
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   * <p>A flag that indicates whether a match that was created with this configuration must be
   *             accepted by the matched players. To require acceptance, set to TRUE. When this option is
   *             enabled, matchmaking tickets use the status <code>REQUIRES_ACCEPTANCE</code> to indicate
   *             when a completed potential match is waiting for player acceptance.</p>
   * @public
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>A unique identifier for the matchmaking rule set to use with this configuration. A matchmaking configuration can only use rule
   *             sets that are defined in the same Region.</p>
   * @public
   */
  RuleSetName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift matchmaking rule set resource that this
   *             configuration uses.</p>
   * @public
   */
  RuleSetArn?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive matchmaking notifications.</p>
   * @public
   */
  NotificationTarget?: string;

  /**
   * <p>The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies
   *             a match for a single 10-person team, and the additional player count is set to 2, 10 players will be selected for the match and 2 more player slots will be open for future players. This parameter is not used when <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   * @public
   */
  AdditionalPlayerCount?: number;

  /**
   * <p>Information to attach to all events related to the matchmaking configuration. </p>
   * @public
   */
  CustomEventData?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>. This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameSessionData?: string;

  /**
   * <p>The method used to backfill game sessions created with this matchmaking configuration.
   *             MANUAL indicates that the game makes backfill requests or does not use the match
   *             backfill feature. AUTOMATIC indicates that GameLift creates backfill requests whenever a
   *             game session has one or more open slots. Learn more about manual and automatic backfill
   *             in <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">Backfill existing games with FlexMatch</a>. Automatic backfill is not available
   *             when <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  BackfillMode?: BackfillMode;

  /**
   * <p>Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or
   *             as a standalone matchmaking solution. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>STANDALONE</b> - FlexMatch forms matches and
   *                     returns match information, including players and team assignments, in a <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded"> MatchmakingSucceeded</a> event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WITH_QUEUE</b> - FlexMatch forms matches and uses
   *                     the specified Amazon GameLift queue to start a game session for the match. </p>
   *             </li>
   *          </ul>
   * @public
   */
  FlexMatchMode?: FlexMatchMode;
}

/**
 * @public
 */
export interface CreateMatchmakingConfigurationOutput {
  /**
   * <p>Object that describes the newly created matchmaking configuration.</p>
   * @public
   */
  Configuration?: MatchmakingConfiguration;
}

/**
 * @public
 */
export interface CreateMatchmakingRuleSetInput {
  /**
   * <p>A unique identifier for the matchmaking rule set. A matchmaking configuration identifies the rule set it uses by this name
   *             value. Note that the rule set name is different from the optional <code>name</code>
   *             field in the rule set body.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A collection of matchmaking rules, formatted as a JSON string. Comments are not
   *             allowed in JSON, but most elements support a description field.</p>
   * @public
   */
  RuleSetBody: string | undefined;

  /**
   * <p>A list of labels to assign to the new matchmaking rule set resource. Tags are
   *             developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource
   *             management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services
   *                 Resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Set of rule statements, used with FlexMatch, that determine how to build your player
 *             matches. Each rule set describes a type of group to be created and defines the
 *             parameters for acceptable player matches.</p>
 *          <p>A rule set may define the following elements for a match. For detailed information and
 *             examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a FlexMatch rule
 *                 set</a>. </p>
 *          <ul>
 *             <li>
 *                <p>Teams -- Required. A rule set must define one or multiple teams for the match
 *                     and set minimum and maximum team sizes. For example, a rule set might describe a
 *                     4x4 match that requires all eight slots to be filled. </p>
 *             </li>
 *             <li>
 *                <p>Player attributes -- Optional. These attributes specify a set of player
 *                     characteristics to evaluate when looking for a match. Matchmaking requests that
 *                     use a rule set with player attributes must provide the corresponding attribute
 *                     values. For example, an attribute might specify a player's skill or
 *                     level.</p>
 *             </li>
 *             <li>
 *                <p>Rules -- Optional. Rules define how to evaluate potential players for a match
 *                     based on player attributes. A rule might specify minimum requirements for
 *                     individual players, teams, or entire matches. For example, a rule might require
 *                     each player to meet a certain skill level, each team to have at least one player
 *                     in a certain role, or the match to have a minimum average skill level. or may
 *                     describe an entire group--such as all teams must be evenly matched or have at
 *                     least one player in a certain role. </p>
 *             </li>
 *             <li>
 *                <p>Expansions -- Optional. Expansions allow you to relax the rules after a period
 *                     of time when no acceptable matches are found. This feature lets you balance
 *                     getting players into games in a reasonable amount of time instead of making them
 *                     wait indefinitely for the best possible match. For example, you might use an
 *                     expansion to increase the maximum skill variance between players after 30
 *                     seconds.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface MatchmakingRuleSet {
  /**
   * <p>A unique identifier for the matchmaking rule set</p>
   * @public
   */
  RuleSetName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift matchmaking rule set resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::matchmakingruleset/<ruleset name></code>. In a GameLift rule set ARN, the resource ID matches the
   *                 <i>RuleSetName</i> value.</p>
   * @public
   */
  RuleSetArn?: string;

  /**
   * <p>A collection of matchmaking rules, formatted as a JSON string. Comments are not
   *             allowed in JSON, but most elements support a description field.</p>
   * @public
   */
  RuleSetBody: string | undefined;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface CreateMatchmakingRuleSetOutput {
  /**
   * <p>The newly created matchmaking rule set.</p>
   * @public
   */
  RuleSet: MatchmakingRuleSet | undefined;
}

/**
 * @public
 */
export interface CreatePlayerSessionInput {
  /**
   * <p>A unique identifier for the game session to add a player to.</p>
   * @public
   */
  GameSessionId: string | undefined;

  /**
   * <p>A unique identifier for a player. Player IDs are developer-defined.</p>
   * @public
   */
  PlayerId: string | undefined;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>
   * @public
   */
  PlayerData?: string;
}

/**
 * @public
 * @enum
 */
export const PlayerSessionStatus = {
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  RESERVED: "RESERVED",
  TIMEDOUT: "TIMEDOUT",
} as const;

/**
 * @public
 */
export type PlayerSessionStatus = (typeof PlayerSessionStatus)[keyof typeof PlayerSessionStatus];

/**
 * <p>Represents a player session. Player sessions are created either for a specific game
 *             session, or as part of a game session placement or matchmaking request. A player session
 *             can represents a reserved player slot in a game session (when status is
 *                 <code>RESERVED</code>) or actual player activity in a game session (when status is
 *                 <code>ACTIVE</code>). A player session object, including player data, is
 *             automatically passed to a game session when the player connects to the game session and
 *             is validated. After the game session ends, player sessions information is retained for
 *             30 days and then removed.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface PlayerSession {
  /**
   * <p>A unique identifier for a player session.</p>
   * @public
   */
  PlayerSessionId?: string;

  /**
   * <p>A unique identifier for a player that is associated with this player session.</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for the game session that the player session is connected to.</p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for the fleet that the player's game session is running on.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p> The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet that the player's game session is
   *             running on. </p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  TerminationTime?: Date;

  /**
   * <p>Current status of the player session.</p>
   *          <p>Possible player session statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RESERVED</b> -- The player session request has been
   *                     received, but the player has not yet connected to the server process and/or been
   *                     validated. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The player has been validated by the
   *                     server process and is currently connected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPLETED</b> -- The player connection has been
   *                     dropped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMEDOUT</b> -- A player session request was
   *                     received, but the player did not connect and/or was not validated within the
   *                     timeout limit (60 seconds).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: PlayerSessionStatus;

  /**
   * <p>The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS identifier assigned to the instance that is running the game session. Values have
   *             the following format:</p>
   *          <ul>
   *             <li>
   *                <p>TLS-enabled fleets: <code><unique identifier>.<region identifier>.amazongamelift.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Non-TLS-enabled fleets: <code>ec2-<unique identifier>.compute.amazonaws.com</code>. (See
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p>
   *             </li>
   *          </ul>
   *          <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>Port number for the game session. To connect to a Amazon GameLift server process, an app needs
   *             both the IP address and port number.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. </p>
   * @public
   */
  PlayerData?: string;
}

/**
 * @public
 */
export interface CreatePlayerSessionOutput {
  /**
   * <p>Object that describes the newly created player session record.</p>
   * @public
   */
  PlayerSession?: PlayerSession;
}

/**
 * <p>The game instance is currently full and cannot allow the requested player(s) to join.
 *             Clients can retry such requests immediately or after a waiting period.</p>
 * @public
 */
export class GameSessionFullException extends __BaseException {
  readonly name: "GameSessionFullException" = "GameSessionFullException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GameSessionFullException, __BaseException>) {
    super({
      name: "GameSessionFullException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GameSessionFullException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the game instance. Resolve the conflict before
 *             retrying.</p>
 * @public
 */
export class InvalidGameSessionStatusException extends __BaseException {
  readonly name: "InvalidGameSessionStatusException" = "InvalidGameSessionStatusException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGameSessionStatusException, __BaseException>) {
    super({
      name: "InvalidGameSessionStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGameSessionStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreatePlayerSessionsInput {
  /**
   * <p>A unique identifier for the game session to add players to.</p>
   * @public
   */
  GameSessionId: string | undefined;

  /**
   * <p>List of unique identifiers for the players to be added.</p>
   * @public
   */
  PlayerIds: string[] | undefined;

  /**
   * <p>Map of string pairs, each specifying a player ID and a set of developer-defined
   *             information related to the player. Amazon GameLift does not use this data, so it can be formatted
   *             as needed for use in the game. Any player data strings for player IDs that are not
   *             included in the <code>PlayerIds</code> parameter are ignored. </p>
   * @public
   */
  PlayerDataMap?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePlayerSessionsOutput {
  /**
   * <p>A collection of player session objects created for the added players.</p>
   * @public
   */
  PlayerSessions?: PlayerSession[];
}

/**
 * @public
 */
export interface CreateScriptInput {
  /**
   * <p>A descriptive label that is associated with a script. Script names don't need to be unique. You can use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html">UpdateScript</a> to
   *             change this value later. </p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information associated with a build or script. Version strings don't need to be unique. You can use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html">UpdateScript</a> to
   *             change this value later. </p>
   * @public
   */
  Version?: string;

  /**
   * <p>The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is
   *             stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the
   *             "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3
   *             bucket must be in the same Region where you want to create a new script. By default,
   *             Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning
   *             turned on, you can use the <code>ObjectVersion</code> parameter to specify an earlier
   *             version. </p>
   * @public
   */
  StorageLocation?: S3Location;

  /**
   * <p>A data object containing your Realtime scripts and dependencies as a zip file. The zip
   *             file can have one or multiple files. Maximum size of a zip file is 5 MB.</p>
   *          <p>When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip
   *             file name. It must be prepended with the string "fileb://" to indicate that the file
   *             data is a binary object. For example: <code>--zip-file
   *                 fileb://myRealtimeScript.zip</code>.</p>
   * @public
   */
  ZipFile?: Uint8Array;

  /**
   * <p>A list of labels to assign to the new script resource. Tags are developer-defined
   *             key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access
   *             management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *                 <i>Amazon Web Services General Reference</i>. Once the resource is created, you can
   *             use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html">TagResource</a>, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html">UntagResource</a>, and
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html">ListTagsForResource</a> to add, remove, and view tags. The maximum tag limit
   *             may be lower than stated. See the Amazon Web Services General Reference for actual tagging
   *             limits.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Properties describing a Realtime script.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface Script {
  /**
   * <p>A unique identifier for the Realtime script</p>
   * @public
   */
  ScriptId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift script resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift script ARN, the resource ID matches the
   *                 <i>ScriptId</i> value.</p>
   * @public
   */
  ScriptArn?: string;

  /**
   * <p>A descriptive label that is associated with a script. Script names don't need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information associated with a build or script. Version strings don't need to be unique.</p>
   * @public
   */
  Version?: string;

  /**
   * <p>The file size of the uploaded Realtime script, expressed in bytes. When files are
   *             uploaded from an S3 location, this value remains at "0".</p>
   * @public
   */
  SizeOnDisk?: number;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is
   *             stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the
   *             "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3
   *             bucket must be in the same Region where you want to create a new script. By default,
   *             Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning
   *             turned on, you can use the <code>ObjectVersion</code> parameter to specify an earlier
   *             version. </p>
   * @public
   */
  StorageLocation?: S3Location;
}

/**
 * @public
 */
export interface CreateScriptOutput {
  /**
   * <p>The newly created script record with a unique script ID and ARN. The new script's
   *             storage location reflects an Amazon S3 location: (1) If the script was uploaded from an S3
   *             bucket under your account, the storage location reflects the information that was
   *             provided in the <i>CreateScript</i> request; (2) If the script file was
   *             uploaded from a local zip file, the storage location reflects an S3 location controls by
   *             the Amazon GameLift service.</p>
   * @public
   */
  Script?: Script;
}

/**
 * @public
 */
export interface CreateVpcPeeringAuthorizationInput {
  /**
   * <p>A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the Amazon Web Services Management Console under account settings.</p>
   * @public
   */
  GameLiftAwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId: string | undefined;
}

/**
 * <p>Represents an authorization for a VPC peering connection between the VPC for an
 *             Amazon GameLift fleet and another VPC on an account you have access to. This authorization
 *             must exist and be valid for the peering connection to be established. Authorizations are
 *             valid for 24 hours after they are issued.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface VpcPeeringAuthorization {
  /**
   * <p>A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the Amazon Web Services Management Console under account settings.</p>
   * @public
   */
  GameLiftAwsAccountId?: string;

  /**
   * <p>The authorization's peer VPC Amazon Web Services account ID.</p>
   * @public
   */
  PeerVpcAwsAccountId?: string;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId?: string;

  /**
   * <p>Time stamp indicating when this authorization was issued. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Time stamp indicating when this authorization expires (24 hours after issuance).
   *             Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  ExpirationTime?: Date;
}

/**
 * @public
 */
export interface CreateVpcPeeringAuthorizationOutput {
  /**
   * <p>Details on the requested VPC peering authorization, including expiration.</p>
   * @public
   */
  VpcPeeringAuthorization?: VpcPeeringAuthorization;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionInput {
  /**
   * <p>A unique identifier for the fleet. You can use either the fleet ID or ARN value. This tells Amazon GameLift which GameLift
   *             VPC to peer with. </p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for the Amazon Web Services account with the VPC that you want to peer your
   *             Amazon GameLift fleet with. You can find your Account ID in the Amazon Web Services Management Console under account
   *             settings.</p>
   * @public
   */
  PeerVpcAwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionOutput {}

/**
 * @public
 */
export interface DeleteAliasInput {
  /**
   * <p>A unique identifier of the alias that you want to delete. You can use either the alias
   *             ID or ARN value.</p>
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBuildInput {
  /**
   * <p>A unique identifier for the build to delete. You can use either the build ID or ARN value. </p>
   * @public
   */
  BuildId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetInput {
  /**
   * <p>A unique identifier for the fleet to be deleted. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetLocationsInput {
  /**
   * <p>A unique identifier for the fleet to delete locations for. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The list of fleet locations to delete. Specify locations in the form of an Amazon Web Services
   *             Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Locations: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteFleetLocationsOutput {
  /**
   * <p>A unique identifier for the fleet that location attributes are being deleted for.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The remote locations that are being deleted, with each location status set to
   *                 <code>DELETING</code>.</p>
   * @public
   */
  LocationStates?: LocationState[];
}

/**
 * @public
 * @enum
 */
export const GameServerGroupDeleteOption = {
  FORCE_DELETE: "FORCE_DELETE",
  RETAIN: "RETAIN",
  SAFE_DELETE: "SAFE_DELETE",
} as const;

/**
 * @public
 */
export type GameServerGroupDeleteOption =
  (typeof GameServerGroupDeleteOption)[keyof typeof GameServerGroupDeleteOption];

/**
 * @public
 */
export interface DeleteGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The type of delete to perform. Options include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SAFE_DELETE</code> – (default) Terminates the game server group and
   *                     Amazon EC2 Auto Scaling group only when it has no game servers that are in
   *                         <code>UTILIZED</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORCE_DELETE</code> – Terminates the game server group, including all
   *                     active game servers regardless of their utilization status, and the Amazon EC2 Auto
   *                     Scaling group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RETAIN</code> – Does a safe delete of the game server group but retains
   *                     the Amazon EC2 Auto Scaling group as is.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeleteOption?: GameServerGroupDeleteOption;
}

/**
 * @public
 */
export interface DeleteGameServerGroupOutput {
  /**
   * <p>An object that describes the deleted game server group resource, with status updated
   *             to <code>DELETE_SCHEDULED</code>. </p>
   * @public
   */
  GameServerGroup?: GameServerGroup;
}

/**
 * @public
 */
export interface DeleteGameSessionQueueInput {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value. </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteGameSessionQueueOutput {}

/**
 * @public
 */
export interface DeleteLocationInput {
  /**
   * <p>The location name of the custom location to be deleted.</p>
   * @public
   */
  LocationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLocationOutput {}

/**
 * @public
 */
export interface DeleteMatchmakingConfigurationInput {
  /**
   * <p>A unique identifier for the matchmaking configuration. You can use either the configuration name or ARN value.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchmakingConfigurationOutput {}

/**
 * @public
 */
export interface DeleteMatchmakingRuleSetInput {
  /**
   * <p>A unique identifier for the matchmaking rule set to be deleted. (Note: The rule set name is different from the optional "name"
   *             field in the rule set body.) You can use either the rule set name or ARN value.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchmakingRuleSetOutput {}

/**
 * @public
 */
export interface DeleteScalingPolicyInput {
  /**
   * <p>A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the fleet to be deleted. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteScriptInput {
  /**
   * <p>A unique identifier for the Realtime script to delete. You can use either the script ID or ARN value.</p>
   * @public
   */
  ScriptId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringAuthorizationInput {
  /**
   * <p>A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the Amazon Web Services Management Console under account settings.</p>
   * @public
   */
  GameLiftAwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringAuthorizationOutput {}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionInput {
  /**
   * <p>A unique identifier for the fleet. This fleet specified must match the fleet referenced in the VPC peering
   *             connection record. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for a VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionOutput {}

/**
 * @public
 */
export interface DeregisterComputeInput {
  /**
   * <p>A unique identifier for the fleet the compute resource is currently registered to.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The name of the compute resource to remove from the specified Anywhere fleet.</p>
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface DeregisterComputeOutput {}

/**
 * @public
 */
export interface DeregisterGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to deregister.</p>
   * @public
   */
  GameServerId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAliasInput {
  /**
   * <p>The unique identifier for the fleet alias that you want to retrieve. You can use
   *             either the alias ID or ARN value. </p>
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAliasOutput {
  /**
   * <p>The requested alias resource.</p>
   * @public
   */
  Alias?: Alias;
}

/**
 * @public
 */
export interface DescribeBuildInput {
  /**
   * <p>A unique identifier for the build to retrieve properties for. You can use either the build ID or ARN value.
   *         </p>
   * @public
   */
  BuildId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBuildOutput {
  /**
   * <p>Set of properties describing the requested build.</p>
   * @public
   */
  Build?: Build;
}

/**
 * @public
 */
export interface DescribeComputeInput {
  /**
   * <p>A unique identifier for the fleet that the compute is registered to. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The unique identifier of the compute resource to retrieve properties for. For an
   *             Anywhere fleet compute, use the registered compute name. For a managed EC2 fleet
   *             instance, use the instance ID.</p>
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface DescribeComputeOutput {
  /**
   * <p>The set of properties for the requested compute resource.</p>
   * @public
   */
  Compute?: Compute;
}

/**
 * @public
 */
export interface DescribeEC2InstanceLimitsInput {
  /**
   * <p>Name of an Amazon EC2 instance type that is supported in Amazon GameLift. A fleet instance type
   *             determines the computing resources of each instance in the fleet, including CPU, memory,
   *             storage, and networking capacity. Do not specify a value for this parameter to retrieve
   *             limits for all instance types.</p>
   * @public
   */
  EC2InstanceType?: EC2InstanceType;

  /**
   * <p>The name of a remote location to request instance limits for, in the form of an Amazon Web Services
   *             Region code such as <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string;
}

/**
 * <p>The Amazon GameLift service limits for an Amazon EC2 instance type and current utilization. Amazon GameLift
 *             allows Amazon Web Services accounts a maximum number of instances, per instance type, per Amazon Web Services Region
 *             or location, for use with Amazon GameLift. You can request an limit increase for your account by
 *             using the <b>Service limits</b> page in the Amazon GameLift
 *             console.</p>
 * @public
 */
export interface EC2InstanceLimit {
  /**
   * <p>The name of an Amazon EC2 instance type. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud Instance Types</a> for detailed
   *             descriptions. </p>
   * @public
   */
  EC2InstanceType?: EC2InstanceType;

  /**
   * <p>The number of instances for the specified type and location that are currently being
   *             used by the Amazon Web Services account. </p>
   * @public
   */
  CurrentInstances?: number;

  /**
   * <p>The number of instances that is allowed for the specified instance type and
   *             location.</p>
   * @public
   */
  InstanceLimit?: number;

  /**
   * <p>An Amazon Web Services Region code, such as <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeEC2InstanceLimitsOutput {
  /**
   * <p>The maximum number of instances for the specified instance type.</p>
   * @public
   */
  EC2InstanceLimits?: EC2InstanceLimit[];
}

/**
 * @public
 */
export interface DescribeFleetAttributesInput {
  /**
   * <p>A list of unique fleet identifiers to retrieve attributes for. You can use either the
   *             fleet ID or ARN value. To retrieve attributes for all current fleets, do not include
   *             this parameter. </p>
   * @public
   */
  FleetIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetAttributesOutput {
  /**
   * <p>A collection of objects containing attribute metadata for each requested fleet ID.
   *             Attribute objects are returned only for fleets that currently exist.</p>
   * @public
   */
  FleetAttributes?: FleetAttributes[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetCapacityInput {
  /**
   * <p>A unique identifier for the fleet to retrieve capacity information for. You can use either the fleet ID or ARN
   *             value. Leave this parameter empty to retrieve capacity information for all
   *             fleets.</p>
   * @public
   */
  FleetIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and
 *             terminating counts are non-zero when the fleet capacity is adjusting to a scaling event
 *             or if access to resources is temporarily affected.</p>
 * @public
 */
export interface EC2InstanceCounts {
  /**
   * <p>Requested number of active instances. Amazon GameLift takes action as needed to maintain the
   *             desired number of instances. Capacity is scaled up or down by changing the desired
   *             instances. A change in the desired instances value can take up to 1 minute to be
   *             reflected when viewing a fleet's capacity settings. </p>
   * @public
   */
  DESIRED?: number;

  /**
   * <p>The minimum instance count value allowed.</p>
   * @public
   */
  MINIMUM?: number;

  /**
   * <p>The maximum instance count value allowed.</p>
   * @public
   */
  MAXIMUM?: number;

  /**
   * <p>Number of instances that are starting but not yet active.</p>
   * @public
   */
  PENDING?: number;

  /**
   * <p>Actual number of instances that are ready to host game sessions.</p>
   * @public
   */
  ACTIVE?: number;

  /**
   * <p>Number of active instances that are not currently hosting a game session.</p>
   * @public
   */
  IDLE?: number;

  /**
   * <p>Number of instances that are no longer active but haven't yet been terminated.</p>
   * @public
   */
  TERMINATING?: number;
}

/**
 * <p>Current resource capacity settings in a specified fleet or location. The location
 *             value might refer to a fleet's remote location or its home Region. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>
 *          </p>
 * @public
 */
export interface FleetCapacity {
  /**
   * <p>A unique identifier for the fleet associated with the location.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The Amazon EC2 instance type that is used for all instances in a fleet. The instance type
   *             determines the computing resources in use, including CPU, memory, storage, and
   *             networking capacity. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud
   *                 Instance Types</a> for detailed descriptions.</p>
   * @public
   */
  InstanceType?: EC2InstanceType;

  /**
   * <p>Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and
   *             terminating counts are non-zero when the fleet capacity is adjusting to a scaling event
   *             or if access to resources is temporarily affected.</p>
   * @public
   */
  InstanceCounts?: EC2InstanceCounts;

  /**
   * <p>The fleet location for the instance count information, expressed as an Amazon Web Services Region
   *             code, such as <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeFleetCapacityOutput {
  /**
   * <p>A collection of objects that contains capacity information for each requested fleet
   *             ID. Capacity objects are returned only for fleets that currently exist. Changes in
   *             desired instance value can take up to 1 minute to be reflected.</p>
   * @public
   */
  FleetCapacity?: FleetCapacity[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetEventsInput {
  /**
   * <p>A unique identifier for the fleet to get event logs for. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The earliest date to retrieve event logs for. If no start time is specified, this call
   *             returns entries starting from when the fleet was created to the specified end time.
   *             Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057").</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The most recent date to retrieve event logs for. If no end time is specified, this
   *             call returns entries from the specified start time up to the present. Format is a number
   *             expressed in Unix time as milliseconds (ex: "1469498468.057").</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const EventCode = {
  FLEET_ACTIVATION_FAILED: "FLEET_ACTIVATION_FAILED",
  FLEET_ACTIVATION_FAILED_NO_INSTANCES: "FLEET_ACTIVATION_FAILED_NO_INSTANCES",
  FLEET_BINARY_DOWNLOAD_FAILED: "FLEET_BINARY_DOWNLOAD_FAILED",
  FLEET_CREATED: "FLEET_CREATED",
  FLEET_CREATION_EXTRACTING_BUILD: "FLEET_CREATION_EXTRACTING_BUILD",
  FLEET_CREATION_RUNNING_INSTALLER: "FLEET_CREATION_RUNNING_INSTALLER",
  FLEET_CREATION_VALIDATING_RUNTIME_CONFIG: "FLEET_CREATION_VALIDATING_RUNTIME_CONFIG",
  FLEET_DELETED: "FLEET_DELETED",
  FLEET_INITIALIZATION_FAILED: "FLEET_INITIALIZATION_FAILED",
  FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED: "FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED",
  FLEET_SCALING_EVENT: "FLEET_SCALING_EVENT",
  FLEET_STATE_ACTIVATING: "FLEET_STATE_ACTIVATING",
  FLEET_STATE_ACTIVE: "FLEET_STATE_ACTIVE",
  FLEET_STATE_BUILDING: "FLEET_STATE_BUILDING",
  FLEET_STATE_DOWNLOADING: "FLEET_STATE_DOWNLOADING",
  FLEET_STATE_ERROR: "FLEET_STATE_ERROR",
  FLEET_STATE_VALIDATING: "FLEET_STATE_VALIDATING",
  FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE: "FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE",
  FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND: "FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND",
  FLEET_VALIDATION_TIMED_OUT: "FLEET_VALIDATION_TIMED_OUT",
  FLEET_VPC_PEERING_DELETED: "FLEET_VPC_PEERING_DELETED",
  FLEET_VPC_PEERING_FAILED: "FLEET_VPC_PEERING_FAILED",
  FLEET_VPC_PEERING_SUCCEEDED: "FLEET_VPC_PEERING_SUCCEEDED",
  GAME_SESSION_ACTIVATION_TIMEOUT: "GAME_SESSION_ACTIVATION_TIMEOUT",
  GENERIC_EVENT: "GENERIC_EVENT",
  INSTANCE_INTERRUPTED: "INSTANCE_INTERRUPTED",
  INSTANCE_RECYCLED: "INSTANCE_RECYCLED",
  SERVER_PROCESS_CRASHED: "SERVER_PROCESS_CRASHED",
  SERVER_PROCESS_FORCE_TERMINATED: "SERVER_PROCESS_FORCE_TERMINATED",
  SERVER_PROCESS_INVALID_PATH: "SERVER_PROCESS_INVALID_PATH",
  SERVER_PROCESS_PROCESS_EXIT_TIMEOUT: "SERVER_PROCESS_PROCESS_EXIT_TIMEOUT",
  SERVER_PROCESS_PROCESS_READY_TIMEOUT: "SERVER_PROCESS_PROCESS_READY_TIMEOUT",
  SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT: "SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT",
  SERVER_PROCESS_TERMINATED_UNHEALTHY: "SERVER_PROCESS_TERMINATED_UNHEALTHY",
} as const;

/**
 * @public
 */
export type EventCode = (typeof EventCode)[keyof typeof EventCode];

/**
 * <p>Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In
 *             addition to tracking activity, event codes and messages can provide additional
 *             information for troubleshooting and debugging problems.</p>
 * @public
 */
export interface Event {
  /**
   * <p>A unique identifier for a fleet event.</p>
   * @public
   */
  EventId?: string;

  /**
   * <p>A unique identifier for an event resource, such as a fleet ID.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The type of event being logged. </p>
   *          <p>
   *             <b>Fleet state transition events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>FLEET_CREATED -- A fleet resource was successfully created with a status of
   *                         <code>NEW</code>. Event messaging includes the fleet ID.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_DOWNLOADING -- Fleet status changed from <code>NEW</code> to
   *                         <code>DOWNLOADING</code>. The compressed build has started downloading to a
   *                     fleet instance for installation.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_VALIDATING -- Fleet status changed from <code>DOWNLOADING</code>
   *                     to <code>VALIDATING</code>. Amazon GameLift has successfully downloaded the build and is
   *                     now validating the build files.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_BUILDING -- Fleet status changed from <code>VALIDATING</code> to
   *                         <code>BUILDING</code>. Amazon GameLift has successfully verified the build files and
   *                     is now running the installation scripts.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_ACTIVATING -- Fleet status changed from <code>BUILDING</code> to
   *                         <code>ACTIVATING</code>. Amazon GameLift is trying to launch an instance and test
   *                     the connectivity between the build and the Amazon GameLift Service via the Server
   *                     SDK.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_ACTIVE -- The fleet's status changed from <code>ACTIVATING</code>
   *                     to <code>ACTIVE</code>. The fleet is now ready to host game sessions.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_ERROR -- The Fleet's status changed to <code>ERROR</code>.
   *                     Describe the fleet event message for more details.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Fleet creation events (ordered by fleet creation
   *                 activity):</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>FLEET_BINARY_DOWNLOAD_FAILED -- The build failed to download to the fleet
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_CREATION_EXTRACTING_BUILD -- The game server build was successfully
   *                     downloaded to an instance, and the build files are now being extracted from the
   *                     uploaded build and saved to an instance. Failure at this stage prevents a fleet
   *                     from moving to ACTIVE status. Logs for this stage display a list of the files
   *                     that are extracted and saved on the instance. Access the logs by using the URL
   *                     in <i>PreSignedLogUrl</i>.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_CREATION_RUNNING_INSTALLER -- The game server build files were
   *                     successfully extracted, and the GameLift is now running the build's install
   *                     script (if one is included). Failure in this stage prevents a fleet from moving
   *                     to ACTIVE status. Logs for this stage list the installation steps and whether or
   *                     not the install completed successfully. Access the logs by using the URL in
   *                         <i>PreSignedLogUrl</i>.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_CREATION_VALIDATING_RUNTIME_CONFIG -- The build process was successful,
   *                     and the GameLift is now verifying that the game server launch paths, which are
   *                     specified in the fleet's runtime configuration, exist. If any listed launch path
   *                     exists, Amazon GameLift tries to launch a game server process and waits for the process
   *                     to report ready. Failures in this stage prevent a fleet from moving to
   *                         <code>ACTIVE</code> status. Logs for this stage list the launch paths in the
   *                     runtime configuration and indicate whether each is found. Access the logs by
   *                     using the URL in <i>PreSignedLogUrl</i>.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND -- Validation of the runtime
   *                     configuration failed because the executable specified in a launch path does not
   *                     exist on the instance.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE -- Validation of the runtime
   *                     configuration failed because the executable specified in a launch path failed to
   *                     run on the fleet instance.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_VALIDATION_TIMED_OUT -- Validation of the fleet at the end of creation
   *                     timed out. Try fleet creation again.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_ACTIVATION_FAILED -- The fleet failed to successfully complete one of
   *                     the steps in the fleet activation process. This event code indicates that the
   *                     game build was successfully downloaded to a fleet instance, built, and
   *                     validated, but was not able to start a server process. For more information, see
   *                         <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug Fleet Creation Issues</a>.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_ACTIVATION_FAILED_NO_INSTANCES -- Fleet creation was not able to obtain
   *                     any instances based on the input fleet attributes. Try again at a different time
   *                     or choose a different combination of fleet attributes such as fleet type,
   *                     instance type, etc.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_INITIALIZATION_FAILED -- A generic exception occurred during fleet
   *                     creation. Describe the fleet event message for more details.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>VPC peering events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>FLEET_VPC_PEERING_SUCCEEDED -- A VPC peering connection has been established
   *                     between the VPC for an Amazon GameLift fleet and a VPC in your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_VPC_PEERING_FAILED -- A requested VPC peering connection has failed.
   *                     Event details and status information provide additional detail. A common reason
   *                     for peering failure is that the two VPCs have overlapping CIDR blocks of IPv4
   *                     addresses. To resolve this, change the CIDR block for the VPC in your Amazon Web Services
   *                     account. For more information on VPC peering failures, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html">https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>FLEET_VPC_PEERING_DELETED -- A VPC peering connection has been successfully
   *                     deleted.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Spot instance events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p> INSTANCE_INTERRUPTED -- A spot instance was interrupted by EC2 with a
   *                     two-minute notification.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_RECYCLED -- A spot instance was determined to have a high risk
   *                     of interruption and is scheduled to be recycled once it has no active
   *                     game sessions.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Server process events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>SERVER_PROCESS_INVALID_PATH -- The game server executable or script could not
   *                     be found based on the Fleet runtime configuration. Check that the launch path is
   *                     correct based on the operating system of the Fleet.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT -- The server process did not call
   *                         <code>InitSDK()</code> within the time expected (5 minutes). Check your game
   *                     session log to see why <code>InitSDK()</code> was not called in time.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_PROCESS_READY_TIMEOUT -- The server process did not call
   *                         <code>ProcessReady()</code> within the time expected  (5 minutes) after
   *                     calling <code>InitSDK()</code>. Check your game session log to see why
   *                         <code>ProcessReady()</code> was not called in time.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_CRASHED -- The server process exited without calling
   *                         <code>ProcessEnding()</code>. Check your game session log to see why
   *                         <code>ProcessEnding()</code> was not called.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_TERMINATED_UNHEALTHY -- The server process did not report a
   *                     valid health check for too long and was therefore terminated by GameLift. Check
   *                     your game session log to see if the thread became stuck processing a synchronous
   *                     task for too long.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_FORCE_TERMINATED -- The server process did not exit cleanly
   *                     within the time expected after <code>OnProcessTerminate()</code> was sent. Check
   *                     your game session log to see why termination took longer than expected.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_PROCESS_EXIT_TIMEOUT -- The server process did not exit cleanly
   *                     within the time expected (30 seconds) after calling
   *                     <code>ProcessEnding()</code>. Check your game session log to see why termination
   *                     took longer than expected.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Game session events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>GAME_SESSION_ACTIVATION_TIMEOUT -- GameSession failed to activate within the
   *                     expected time. Check your game session log to see why
   *                         <code>ActivateGameSession()</code> took longer to complete than
   *                     expected.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Other fleet events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>FLEET_SCALING_EVENT -- A change was made to the fleet's capacity settings
   *                     (desired instances, minimum/maximum scaling limits). Event messaging includes
   *                     the new capacity settings.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED -- A change was made to the
   *                     fleet's game session protection policy setting. Event messaging includes both
   *                     the old and new policy setting. </p>
   *             </li>
   *             <li>
   *                <p>FLEET_DELETED -- A request to delete a fleet was initiated.</p>
   *             </li>
   *             <li>
   *                <p> GENERIC_EVENT -- An unspecified event has occurred.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EventCode?: EventCode;

  /**
   * <p>Additional information related to the event.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  EventTime?: Date;

  /**
   * <p>Location of stored logs with additional detail that is related to the event. This is
   *             useful for debugging issues. The URL is valid for 15 minutes. You can also access fleet
   *             creation logs through the Amazon GameLift console.</p>
   * @public
   */
  PreSignedLogUrl?: string;
}

/**
 * @public
 */
export interface DescribeFleetEventsOutput {
  /**
   * <p>A collection of objects containing event log entries for the specified fleet.</p>
   * @public
   */
  Events?: Event[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetLocationAttributesInput {
  /**
   * <p>A unique identifier for the fleet to retrieve remote locations for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A list of fleet locations to retrieve information for. Specify locations in the form
   *             of an Amazon Web Services Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Locations?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This limit is not currently enforced.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const LocationUpdateStatus = {
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;

/**
 * @public
 */
export type LocationUpdateStatus = (typeof LocationUpdateStatus)[keyof typeof LocationUpdateStatus];

/**
 * <p>Details about a location in a multi-location fleet.</p>
 * @public
 */
export interface LocationAttributes {
  /**
   * <p>A fleet location and its current life-cycle state.</p>
   * @public
   */
  LocationState?: LocationState;

  /**
   * <p>A list of fleet actions that have been suspended in the fleet location.</p>
   * @public
   */
  StoppedActions?: FleetAction[];

  /**
   * <p>The status of fleet activity updates to the location. The status
   *                 <code>PENDING_UPDATE</code> indicates that <code>StopFleetActions</code> or
   *                 <code>StartFleetActions</code> has been requested but the update has not yet been
   *             completed for the location.</p>
   * @public
   */
  UpdateStatus?: LocationUpdateStatus;
}

/**
 * @public
 */
export interface DescribeFleetLocationAttributesOutput {
  /**
   * <p>A unique identifier for the fleet that location attributes were requested for.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p> Location-specific information on the requested fleet's remote locations.</p>
   * @public
   */
  LocationAttributes?: LocationAttributes[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetLocationCapacityInput {
  /**
   * <p>A unique identifier for the fleet to request location capacity for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The fleet location to retrieve capacity information for. Specify a location in the
   *             form of an Amazon Web Services Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Location: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetLocationCapacityOutput {
  /**
   * <p>Resource capacity information for the requested fleet location. Capacity objects are
   *             returned only for fleets and locations that currently exist. Changes in desired instance
   *             value can take up to 1 minute to be reflected.</p>
   * @public
   */
  FleetCapacity?: FleetCapacity;
}

/**
 * @public
 */
export interface DescribeFleetLocationUtilizationInput {
  /**
   * <p>A unique identifier for the fleet to request location utilization for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The fleet location to retrieve utilization information for. Specify a location in the
   *             form of an Amazon Web Services Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Location: string | undefined;
}

/**
 * <p>Current resource utilization statistics in a specified fleet or location. The location
 *             value might refer to a fleet's remote location or its home Region.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 * @public
 */
export interface FleetUtilization {
  /**
   * <p>A unique identifier for the fleet associated with the location.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The number of server processes in <code>ACTIVE</code> status that are currently
   *             running across all instances in the fleet location. </p>
   * @public
   */
  ActiveServerProcessCount?: number;

  /**
   * <p>The number of active game sessions that are currently being hosted across all
   *             instances in the fleet location.</p>
   * @public
   */
  ActiveGameSessionCount?: number;

  /**
   * <p>The number of active player sessions that are currently being hosted across all
   *             instances in the fleet location.</p>
   * @public
   */
  CurrentPlayerSessionCount?: number;

  /**
   * <p>The maximum number of players allowed across all game sessions that are currently
   *             being hosted across all instances in the fleet location.</p>
   * @public
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>The fleet location for the fleet utilization information, expressed as an Amazon Web Services Region
   *             code, such as <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeFleetLocationUtilizationOutput {
  /**
   * <p>Utilization information for the requested fleet location. Utilization objects are
   *             returned only for fleets and locations that currently exist.</p>
   * @public
   */
  FleetUtilization?: FleetUtilization;
}

/**
 * @public
 */
export interface DescribeFleetPortSettingsInput {
  /**
   * <p>A unique identifier for the fleet to retrieve port settings for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A remote location to check for status of port setting updates. Use the Amazon Web Services Region
   *             code format, such as <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeFleetPortSettingsOutput {
  /**
   * <p>A unique identifier for the fleet that was requested. </p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The port settings for the requested fleet ID.</p>
   * @public
   */
  InboundPermissions?: IpPermission[];

  /**
   * <p>The current status of updates to the fleet's port settings in the requested fleet
   *             location. A status of <code>PENDING_UPDATE</code> indicates that an update was requested
   *             for the fleet but has not yet been completed for the location.</p>
   * @public
   */
  UpdateStatus?: LocationUpdateStatus;

  /**
   * <p>The requested fleet location, expressed as an Amazon Web Services Region code, such as
   *                 <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeFleetUtilizationInput {
  /**
   * <p>A unique identifier for the fleet to retrieve utilization data for. You can use either the fleet ID or ARN value.
   *             To retrieve attributes for all current fleets, do not include this parameter. </p>
   * @public
   */
  FleetIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetUtilizationOutput {
  /**
   * <p>A collection of objects containing utilization information for each requested fleet
   *             ID. Utilization objects are returned only for fleets that currently exist.</p>
   * @public
   */
  FleetUtilization?: FleetUtilization[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server information to be retrieved.</p>
   * @public
   */
  GameServerId: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameServerOutput {
  /**
   * <p>Object that describes the requested game server.</p>
   * @public
   */
  GameServer?: GameServer;
}

/**
 * @public
 */
export interface DescribeGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameServerGroupOutput {
  /**
   * <p>An object with the property settings for the requested game server group resource.
   *         </p>
   * @public
   */
  GameServerGroup?: GameServerGroup;
}

/**
 * @public
 */
export interface DescribeGameServerInstancesInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The Amazon EC2 instance IDs that you want to retrieve status on. Amazon EC2 instance IDs use a
   *             17-character format, for example: <code>i-1234567890abcdef0</code>. To retrieve all
   *             instances in the game server group, leave this parameter empty. </p>
   * @public
   */
  InstanceIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const GameServerInstanceStatus = {
  ACTIVE: "ACTIVE",
  DRAINING: "DRAINING",
  SPOT_TERMINATING: "SPOT_TERMINATING",
} as const;

/**
 * @public
 */
export type GameServerInstanceStatus = (typeof GameServerInstanceStatus)[keyof typeof GameServerInstanceStatus];

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p> Additional properties,
 *             including status, that describe an EC2 instance in a game server group. Instance
 *             configurations are set with game server group properties (see
 *                 <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used
 *             when creating the game server group. </p>
 *          <p>Retrieve game server instances for a game server group by calling
 *                 <code>DescribeGameServerInstances</code>. </p>
 * @public
 */
export interface GameServerInstance {
  /**
   * <p>A developer-defined identifier for the game server group that includes the game server
   *             instance. The name is unique for each Region in each Amazon Web Services account.</p>
   * @public
   */
  GameServerGroupName?: string;

  /**
   * <p>A generated unique identifier for the game server group that includes the game server
   *             instance. </p>
   * @public
   */
  GameServerGroupArn?: string;

  /**
   * <p>The unique identifier for the instance where the game server is running. This ID is
   *             available in the instance metadata. EC2 instance IDs
   *             use a 17-character format, for example: <code>i-1234567890abcdef0</code>.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>Current status of the game server instance</p>
   * @public
   */
  InstanceStatus?: GameServerInstanceStatus;
}

/**
 * @public
 */
export interface DescribeGameServerInstancesOutput {
  /**
   * <p>The collection of requested game server instances.</p>
   * @public
   */
  GameServerInstances?: GameServerInstance[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionDetailsInput {
  /**
   * <p>A unique identifier for the fleet to retrieve all game sessions active on the fleet. You can use either the fleet
   *             ID or ARN value.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the game session to retrieve. </p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for the alias associated with the fleet to retrieve all game sessions for. You can use either
   *             the alias ID or ARN value.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>A fleet location to get game session details for. You can specify a fleet's home
   *             Region or a remote location. Use the Amazon Web Services Region code format, such as
   *                 <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;

  /**
   * <p>Game session status to filter results on. Possible game session statuses include
   *                 <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code> and
   *                 <code>TERMINATING</code> (the last two are transitory). </p>
   * @public
   */
  StatusFilter?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A game session's properties plus the protection policy currently in force.</p>
 * @public
 */
export interface GameSessionDetail {
  /**
   * <p>Object that describes a game session.</p>
   * @public
   */
  GameSession?: GameSession;

  /**
   * <p>Current status of protection for the game session.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ProtectionPolicy?: ProtectionPolicy;
}

/**
 * @public
 */
export interface DescribeGameSessionDetailsOutput {
  /**
   * <p>A collection of properties for each game session that matches the request.</p>
   * @public
   */
  GameSessionDetails?: GameSessionDetail[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionPlacementInput {
  /**
   * <p>A unique identifier for a game session placement to retrieve.</p>
   * @public
   */
  PlacementId: string | undefined;
}

/**
 * <p>Information about a player session. This object contains only the player ID and player
 *             session ID. To retrieve full details on a player session, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html">DescribePlayerSessions</a> with the player session ID.</p>
 * @public
 */
export interface PlacedPlayerSession {
  /**
   * <p>A unique identifier for a player that is associated with this player session.</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for a player session.</p>
   * @public
   */
  PlayerSessionId?: string;
}

/**
 * <p>Regional latency information for a player, used when requesting a new game session.
 *             This value indicates the amount of time lag that exists when the player is connected to
 *             a fleet in the specified Region. The relative difference between a player's latency
 *             values for multiple Regions are used to determine which fleets are best suited to place
 *             a new game session for the player. </p>
 * @public
 */
export interface PlayerLatency {
  /**
   * <p>A unique identifier for a player associated with the latency data.</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>Name of the Region that is associated with the latency value.</p>
   * @public
   */
  RegionIdentifier?: string;

  /**
   * <p>Amount of time that represents the time lag experienced by the player when connected
   *             to the specified Region.</p>
   * @public
   */
  LatencyInMilliseconds?: number;
}

/**
 * @public
 * @enum
 */
export const GameSessionPlacementState = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FULFILLED: "FULFILLED",
  PENDING: "PENDING",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type GameSessionPlacementState = (typeof GameSessionPlacementState)[keyof typeof GameSessionPlacementState];

/**
 * <p>Represents a potential game session placement, including the full details of the
 *             original placement request and the current status. </p>
 *          <note>
 *             <p>If the game session placement status is <code>PENDING</code>, the properties for game
 *                 session ID/ARN, region, IP address/DNS, and port aren't final. A game session is not
 *                 active and ready to accept players until placement status reaches
 *                     <code>FULFILLED</code>. When the placement is in <code>PENDING</code> status,
 *                 Amazon GameLift may attempt to place a game session multiple times before succeeding. With
 *                 each attempt it creates a <a>GameSession</a> object and updates this
 *                 placement object with the new game session properties..</p>
 *          </note>
 * @public
 */
export interface GameSessionPlacement {
  /**
   * <p>A unique identifier for a game session placement.</p>
   * @public
   */
  PlacementId?: string;

  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region.</p>
   * @public
   */
  GameSessionQueueName?: string;

  /**
   * <p>Current status of the game session placement request.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PENDING</b> -- The placement request is
   *                     in the queue waiting to be processed. Game session properties are not
   *                     yet final. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FULFILLED</b> -- A new game session has been
   *                     successfully placed. Game session properties are now final.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELLED</b> -- The placement request was
   *                     canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMED_OUT</b> -- A new game session was not
   *                     successfully created before the time limit expired. You can resubmit the
   *                     placement request as needed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b> -- Amazon GameLift is not able to complete the
   *                     process of placing the game session. Common reasons are the game session
   *                     terminated before the placement process was completed, or an unexpected internal
   *                     error.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: GameSessionPlacementState;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   * @public
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  GameSessionName?: string;

  /**
   * <p>A unique identifier for the game session. This value isn't final until placement status is
   *             <code>FULFILLED</code>.</p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>Identifier for the game session created by this placement request. This identifier is
   *             unique across all Regions. This value isn't final until placement status is
   *                 <code>FULFILLED</code>.</p>
   * @public
   */
  GameSessionArn?: string;

  /**
   * <p>Name of the Region where the game session created by this placement request is
   *             running. This value isn't final until placement status is <code>FULFILLED</code>.</p>
   * @public
   */
  GameSessionRegion?: string;

  /**
   * <p>A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to Amazon Web Services Regions.</p>
   * @public
   */
  PlayerLatencies?: PlayerLatency[];

  /**
   * <p>Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>Time stamp indicating when this request was completed, canceled, or timed out.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value isn't final until placement status is <code>FULFILLED</code>. </p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS identifier assigned to the instance that is running the game session. Values have
   *             the following format:</p>
   *          <ul>
   *             <li>
   *                <p>TLS-enabled fleets: <code><unique identifier>.<region identifier>.amazongamelift.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Non-TLS-enabled fleets: <code>ec2-<unique identifier>.compute.amazonaws.com</code>. (See
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p>
   *             </li>
   *          </ul>
   *          <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>The port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value isn't final until placement status is
   *             <code>FULFILLED</code>.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>A collection of information on player sessions created in response to the game session
   *             placement request. These player sessions are created only after a new game session is
   *             successfully placed (placement status is <code>FULFILLED</code>). This information
   *             includes the player ID, provided in the placement request, and a corresponding player
   *             session ID.</p>
   * @public
   */
  PlacedPlayerSessions?: PlacedPlayerSession[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <code>GameSession</code> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   * @public
   */
  GameSessionData?: string;

  /**
   * <p>Information on the matchmaking process for this game. Data is in JSON syntax,
   *             formatted as a string. It identifies the matchmaking configuration used to create the
   *             match, and contains data on all players assigned to the match, including player
   *             attributes and team assignments. For more details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">Match
   *                 Data</a>.</p>
   * @public
   */
  MatchmakerData?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionPlacementOutput {
  /**
   * <p>Object that describes the requested game session placement.</p>
   * @public
   */
  GameSessionPlacement?: GameSessionPlacement;
}

/**
 * @public
 */
export interface DescribeGameSessionQueuesInput {
  /**
   * <p>A list of queue names to retrieve information for. You can use either the queue ID or
   *             ARN value. To request settings for all queues, leave this parameter empty. </p>
   * @public
   */
  Names?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. You can request up to 50 results.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionQueuesOutput {
  /**
   * <p>A collection of objects that describe the requested game session queues.</p>
   * @public
   */
  GameSessionQueues?: GameSessionQueue[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionsInput {
  /**
   * <p>A unique identifier for the fleet to retrieve game sessions for. You can use either the fleet ID or ARN value.
   *         </p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the game session to retrieve. </p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for the alias associated with the fleet to retrieve game sessions for. You can use either the
   *             alias ID or ARN value.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>A fleet location to get game sessions for. You can specify a fleet's home Region or a
   *             remote location. Use the Amazon Web Services Region code format, such as <code>us-west-2</code>.
   *         </p>
   * @public
   */
  Location?: string;

  /**
   * <p>Game session status to filter results on. You can filter on the following states:
   *                 <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code>, and
   *                 <code>TERMINATING</code>. The last two are transitory and used for only very brief
   *             periods of time. </p>
   * @public
   */
  StatusFilter?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionsOutput {
  /**
   * <p>A collection of properties for each game session that matches the request.</p>
   * @public
   */
  GameSessions?: GameSession[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInstancesInput {
  /**
   * <p>A unique identifier for the fleet to retrieve instance information for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for an instance to retrieve. Specify an instance ID or leave blank
   *             to retrieve all instances in the fleet.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The name of a location to retrieve instance information for, in the form of an Amazon Web Services
   *             Region code such as <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * <p>Represents a virtual computing instance that runs game server processes and hosts game
 *             sessions. In Amazon GameLift, one or more instances make up a managed EC2 fleet.</p>
 * @public
 */
export interface Instance {
  /**
   * <p>A unique identifier for the fleet that the instance belongs to.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>A unique identifier for the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>IP address that is assigned to the instance.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS identifier assigned to the instance that is running the game session. Values have
   *             the following format:</p>
   *          <ul>
   *             <li>
   *                <p>TLS-enabled fleets: <code><unique identifier>.<region identifier>.amazongamelift.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Non-TLS-enabled fleets: <code>ec2-<unique identifier>.compute.amazonaws.com</code>. (See
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon Elastic Compute Cloud Instance IP Addressing</a>.)</p>
   *             </li>
   *          </ul>
   *          <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>Operating system that is running on this EC2 instance. </p>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>EC2 instance type that defines the computing resources of this instance. </p>
   * @public
   */
  Type?: EC2InstanceType;

  /**
   * <p>Current status of the instance. Possible statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PENDING</b> -- The instance is in the process of
   *                     being created and launching server processes as defined in the fleet's run-time
   *                     configuration. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The instance has been successfully
   *                     created and at least one server process has successfully launched and reported
   *                     back to Amazon GameLift that it is ready to host a game session. The instance is now
   *                     considered ready to host game sessions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TERMINATING</b> -- The instance is in the process
   *                     of shutting down. This may happen to reduce capacity during a scaling down event
   *                     or to recycle resources in the event of a problem.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: InstanceStatus;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The fleet location of the instance, expressed as an Amazon Web Services Region code, such as
   *                 <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeInstancesOutput {
  /**
   * <p>A collection of objects containing properties for each instance returned.</p>
   * @public
   */
  Instances?: Instance[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeMatchmakingInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. You can include up to 10 ID values. </p>
   * @public
   */
  TicketIds: string[] | undefined;
}

/**
 * <p>Represents a new player session that is created as a result of a successful FlexMatch
 *             match. A successful match automatically creates new player sessions for every player ID
 *             in the original matchmaking request. </p>
 *          <p>When players connect to the match's game session, they must include both player ID and
 *             player session ID in order to claim their assigned player slot.</p>
 * @public
 */
export interface MatchedPlayerSession {
  /**
   * <p>A unique identifier for a player </p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for a player session</p>
   * @public
   */
  PlayerSessionId?: string;
}

/**
 * <p>Connection information for a new game session that is created in response to a start
 *             matchmaking request. Once a match is made, the FlexMatch engine creates a new game session
 *             for it. This information, including the game session endpoint and player sessions for
 *             each player in the original matchmaking request, is added to the matchmaking
 *             ticket.</p>
 * @public
 */
export interface GameSessionConnectionInfo {
  /**
   * <p>A unique identifier for the game session. Use the game session ID.</p>
   * @public
   */
  GameSessionArn?: string;

  /**
   * <p>The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS identifier assigned to the instance that is running the game session. Values have
   *             the following format:</p>
   *          <ul>
   *             <li>
   *                <p>TLS-enabled fleets: <code><unique identifier>.<region identifier>.amazongamelift.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Non-TLS-enabled fleets: <code>ec2-<unique identifier>.compute.amazonaws.com</code>. (See
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p>
   *             </li>
   *          </ul>
   *          <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>The port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>A collection of player session IDs, one for each player ID that was included in the
   *             original matchmaking request. </p>
   * @public
   */
  MatchedPlayerSessions?: MatchedPlayerSession[];
}

/**
 * <p>Represents a player in matchmaking. When starting a matchmaking request, a player has
 *             a player ID, attributes, and may have latency data. Team information is added after a
 *             match has been successfully completed.</p>
 * @public
 */
export interface Player {
  /**
   * <p>A unique identifier for a player</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>A collection of key:value pairs containing player information for use in matchmaking.
   *             Player attribute keys must match the <i>playerAttributes</i> used in a
   *             matchmaking rule set. Example: <code>"PlayerAttributes": \{"skill": \{"N": "23"\},
   *                 "gameMode": \{"S": "deathmatch"\}\}</code>.</p>
   *          <p>You can provide up to 10 <code>PlayerAttributes</code>.</p>
   * @public
   */
  PlayerAttributes?: Record<string, AttributeValue>;

  /**
   * <p>Name of the team that the player is assigned to in a match. Team names are defined in
   *             a matchmaking rule set.</p>
   * @public
   */
  Team?: string;

  /**
   * <p>A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to @aws; Regions. If this property is present, FlexMatch considers placing the match only in
   *             Regions for which latency is reported. </p>
   *          <p>If a matchmaker has a rule that evaluates player latency, players must report latency
   *             in order to be matched. If no latency is reported in this scenario, FlexMatch assumes that
   *             no Regions are available to the player and the ticket is not matchable. </p>
   * @public
   */
  LatencyInMs?: Record<string, number>;
}

/**
 * @public
 * @enum
 */
export const MatchmakingConfigurationStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PLACING: "PLACING",
  QUEUED: "QUEUED",
  REQUIRES_ACCEPTANCE: "REQUIRES_ACCEPTANCE",
  SEARCHING: "SEARCHING",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type MatchmakingConfigurationStatus =
  (typeof MatchmakingConfigurationStatus)[keyof typeof MatchmakingConfigurationStatus];

/**
 * <p>Ticket generated to track the progress of a matchmaking request. Each ticket is
 *             uniquely identified by a ticket ID, supplied by the requester, when creating a
 *             matchmaking request.</p>
 * @public
 */
export interface MatchmakingTicket {
  /**
   * <p>A unique identifier for a matchmaking ticket.</p>
   * @public
   */
  TicketId?: string;

  /**
   * <p>Name of the matchmaking configuration that is used with this ticket. Matchmaking
   *             configurations determine how players are grouped into a match and how a new game session
   *             is created for the match.</p>
   * @public
   */
  ConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift matchmaking configuration resource that is used
   *             with this ticket.</p>
   * @public
   */
  ConfigurationArn?: string;

  /**
   * <p>Current status of the matchmaking request.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>QUEUED</b> -- The matchmaking request has been
   *                     received and is currently waiting to be processed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SEARCHING</b> -- The matchmaking request is
   *                     currently being processed. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REQUIRES_ACCEPTANCE</b> -- A match has been
   *                     proposed and the players must accept the match. This status is used only with
   *                     requests that use a matchmaking configuration with a player acceptance
   *                     requirement.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PLACING</b> -- The FlexMatch engine has matched
   *                     players and is in the process of placing a new game session for the
   *                     match.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPLETED</b> -- Players have been matched and a
   *                     game session is ready to host the players. A ticket in this state contains the
   *                     necessary connection information for players.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b> -- The matchmaking request was not
   *                     completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELLED</b> -- The matchmaking request was
   *                     canceled. This may be the result of a <code>StopMatchmaking</code> operation or
   *                     a proposed match that one or more players failed to accept.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMED_OUT</b> -- The matchmaking request was not
   *                     successful within the duration specified in the matchmaking configuration.
   *                 </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Matchmaking requests that fail to successfully complete (statuses FAILED,
   *                 CANCELLED, TIMED_OUT) can be resubmitted as new requests with new ticket IDs.</p>
   *          </note>
   * @public
   */
  Status?: MatchmakingConfigurationStatus;

  /**
   * <p>Code to explain the current status. For example, a status reason may indicate when a
   *             ticket has returned to <code>SEARCHING</code> status after a proposed match fails to
   *             receive player acceptances.</p>
   * @public
   */
  StatusReason?: string;

  /**
   * <p>Additional information about the current status.</p>
   * @public
   */
  StatusMessage?: string;

  /**
   * <p>Time stamp indicating when this matchmaking request was received. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>Time stamp indicating when the matchmaking request stopped being processed due to
   *             successful completion, timeout, or cancellation. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>A set of <code>Player</code> objects, each representing a player to find matches for.
   *             Players are identified by a unique player ID and may include latency data for use during
   *             matchmaking. If the ticket is in status <code>COMPLETED</code>, the <code>Player</code>
   *             objects include the team the players were assigned to in the resulting match.</p>
   * @public
   */
  Players?: Player[];

  /**
   * <p>Connection information for a new game session. Once a match is made, the FlexMatch
   *             engine creates a new game session for it. This information is added to the matchmaking
   *             ticket, which you can be retrieve by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmaking.html">DescribeMatchmaking</a> .</p>
   * @public
   */
  GameSessionConnectionInfo?: GameSessionConnectionInfo;

  /**
   * <p>Average amount of time (in seconds) that players are currently waiting for a match. If
   *             there is not enough recent data, this property may be empty.</p>
   * @public
   */
  EstimatedWaitTime?: number;
}

/**
 * @public
 */
export interface DescribeMatchmakingOutput {
  /**
   * <p>A collection of existing matchmaking ticket objects matching the request.</p>
   * @public
   */
  TicketList?: MatchmakingTicket[];
}

/**
 * @public
 */
export interface DescribeMatchmakingConfigurationsInput {
  /**
   * <p>A unique identifier for the matchmaking configuration(s) to retrieve. You can use either the configuration name or ARN value. To
   *             request all existing configurations, leave this parameter empty.</p>
   * @public
   */
  Names?: string[];

  /**
   * <p>A unique identifier for the matchmaking rule set. You can use either the rule set name or ARN value. Use this parameter to
   *             retrieve all matchmaking configurations that use this rule set.</p>
   * @public
   */
  RuleSetName?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is limited to 10.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeMatchmakingConfigurationsOutput {
  /**
   * <p>A collection of requested matchmaking configurations.</p>
   * @public
   */
  Configurations?: MatchmakingConfiguration[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeMatchmakingRuleSetsInput {
  /**
   * <p>A list of one or more matchmaking rule set names to retrieve details for. (Note: The
   *             rule set name is different from the optional "name" field in the rule set body.) You can
   *             use either the rule set name or ARN value. </p>
   * @public
   */
  Names?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeMatchmakingRuleSetsOutput {
  /**
   * <p>A collection of requested matchmaking rule set objects. </p>
   * @public
   */
  RuleSets: MatchmakingRuleSet[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribePlayerSessionsInput {
  /**
   * <p>A unique identifier for the game session to retrieve player sessions for.</p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for a player to retrieve player sessions for.</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for a player session to retrieve.</p>
   * @public
   */
  PlayerSessionId?: string;

  /**
   * <p>Player session status to filter results on. Note that when a PlayerSessionId or
   *             PlayerId is provided in a DescribePlayerSessions request, then the
   *             PlayerSessionStatusFilter has no effect on the response.</p>
   *          <p>Possible player session statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RESERVED</b> -- The player session request has been
   *                     received, but the player has not yet connected to the server process and/or been
   *                     validated. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The player has been validated by the
   *                     server process and is currently connected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPLETED</b> -- The player connection has been
   *                     dropped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMEDOUT</b> -- A player session request was
   *                     received, but the player did not connect and/or was not validated within the
   *                     timeout limit (60 seconds).</p>
   *             </li>
   *          </ul>
   * @public
   */
  PlayerSessionStatusFilter?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribePlayerSessionsOutput {
  /**
   * <p>A collection of objects containing properties for each player session that matches the
   *             request.</p>
   * @public
   */
  PlayerSessions?: PlayerSession[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRuntimeConfigurationInput {
  /**
   * <p>A unique identifier for the fleet to get the runtime configuration for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuntimeConfigurationOutput {
  /**
   * <p>Instructions that describe how server processes should be launched and maintained on
   *             each instance in the fleet.</p>
   * @public
   */
  RuntimeConfiguration?: RuntimeConfiguration;
}

/**
 * @public
 * @enum
 */
export const ScalingStatusType = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETE_REQUESTED: "DELETE_REQUESTED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  UPDATE_REQUESTED: "UPDATE_REQUESTED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ScalingStatusType = (typeof ScalingStatusType)[keyof typeof ScalingStatusType];

/**
 * @public
 */
export interface DescribeScalingPoliciesInput {
  /**
   * <p>A unique identifier for the fleet for which to retrieve scaling policies. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>Scaling policy status to filter results on. A scaling policy is only in force when in
   *             an <code>ACTIVE</code> status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The scaling policy is currently in
   *                     force.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATEREQUESTED</b> -- A request to update the
   *                     scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATING</b> -- A change is being made to the
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETEREQUESTED</b> -- A request to delete the
   *                     scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b> -- The scaling policy is being
   *                     deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETED</b> -- The scaling policy has been
   *                     deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ERROR</b> -- An error occurred in creating the
   *                     policy. It should be removed and recreated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusFilter?: ScalingStatusType;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p> The fleet location. If you don't specify this value, the response contains the
   *             scaling policies of every location in the fleet. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 * @enum
 */
export const MetricName = {
  ActivatingGameSessions: "ActivatingGameSessions",
  ActiveGameSessions: "ActiveGameSessions",
  ActiveInstances: "ActiveInstances",
  AvailableGameSessions: "AvailableGameSessions",
  AvailablePlayerSessions: "AvailablePlayerSessions",
  ConcurrentActivatableGameSessions: "ConcurrentActivatableGameSessions",
  CurrentPlayerSessions: "CurrentPlayerSessions",
  IdleInstances: "IdleInstances",
  PercentAvailableGameSessions: "PercentAvailableGameSessions",
  PercentIdleInstances: "PercentIdleInstances",
  QueueDepth: "QueueDepth",
  WaitTime: "WaitTime",
} as const;

/**
 * @public
 */
export type MetricName = (typeof MetricName)[keyof typeof MetricName];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  RuleBased: "RuleBased",
  TargetBased: "TargetBased",
} as const;

/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const ScalingAdjustmentType = {
  ChangeInCapacity: "ChangeInCapacity",
  ExactCapacity: "ExactCapacity",
  PercentChangeInCapacity: "PercentChangeInCapacity",
} as const;

/**
 * @public
 */
export type ScalingAdjustmentType = (typeof ScalingAdjustmentType)[keyof typeof ScalingAdjustmentType];

/**
 * <p>Settings for a target-based scaling policy. A target-based policy tracks a particular
 *             fleet metric specifies a target value for the metric. As player usage changes, the
 *             policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target
 *             value. The target configuration specifies settings as needed for the target based
 *             policy, including the target value. </p>
 * @public
 */
export interface TargetConfiguration {
  /**
   * <p>Desired value to use with a target-based scaling policy. The value must be relevant
   *             for whatever metric the scaling policy is using. For example, in a policy using the
   *             metric PercentAvailableGameSessions, the target value should be the preferred size of
   *             the fleet's buffer (the percent of capacity that should be idle and ready for new game
   *             sessions).</p>
   * @public
   */
  TargetValue: number | undefined;
}

/**
 * <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by
 *             the combination of name and fleet ID.</p>
 * @public
 */
export interface ScalingPolicy {
  /**
   * <p>A unique identifier for the fleet that is associated with this scaling policy.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Current status of the scaling policy. The scaling policy can be in force only when in
   *             an <code>ACTIVE</code> status. Scaling policies can be suspended for individual fleets.
   *             If the policy is suspended for a fleet, the policy status does not change.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The scaling policy can be used for
   *                     auto-scaling a fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATE_REQUESTED</b> -- A request to update the
   *                     scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATING</b> -- A change is being made to the
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETE_REQUESTED</b> -- A request to delete the
   *                     scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b> -- The scaling policy is being
   *                     deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETED</b> -- The scaling policy has been
   *                     deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ERROR</b> -- An error occurred in creating the
   *                     policy. It should be removed and recreated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ScalingStatusType;

  /**
   * <p>Amount of adjustment to make, based on the scaling adjustment type.</p>
   * @public
   */
  ScalingAdjustment?: number;

  /**
   * <p>The type of adjustment to make to a fleet's instance count.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ChangeInCapacity</b> -- add (or subtract) the
   *                     scaling adjustment value from the current instance count. Positive values scale
   *                     up while negative values scale down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ExactCapacity</b> -- set the instance count to the
   *                     scaling adjustment value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentChangeInCapacity</b> -- increase or reduce
   *                     the current instance count by the scaling adjustment, read as a percentage.
   *                     Positive values scale up while negative values scale down.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalingAdjustmentType?: ScalingAdjustmentType;

  /**
   * <p>Comparison operator to use when measuring a metric against the threshold value.</p>
   * @public
   */
  ComparisonOperator?: ComparisonOperatorType;

  /**
   * <p>Metric value used to trigger a scaling event.</p>
   * @public
   */
  Threshold?: number;

  /**
   * <p>Length of time (in minutes) the metric must be at or beyond the threshold before a
   *             scaling event is triggered.</p>
   * @public
   */
  EvaluationPeriods?: number;

  /**
   * <p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For
   *             detailed descriptions of fleet metrics, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html">Monitor Amazon GameLift
   *                 with Amazon CloudWatch</a>. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ActivatingGameSessions</b> -- Game sessions in
   *                     the process of being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ActiveGameSessions</b> -- Game sessions that
   *                     are currently running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ActiveInstances</b> -- Fleet instances that
   *                     are currently running at least one game session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AvailableGameSessions</b> -- Additional game
   *                     sessions that fleet could host simultaneously, given current capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AvailablePlayerSessions</b> -- Empty player
   *                     slots in currently active game sessions. This includes game sessions that are
   *                     not currently accepting players. Reserved player slots are not
   *                     included.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CurrentPlayerSessions</b> -- Player slots in
   *                     active game sessions that are being used by a player or are reserved for a
   *                     player. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IdleInstances</b> -- Active instances that are
   *                     currently hosting zero game sessions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentAvailableGameSessions</b> -- Unused
   *                     percentage of the total number of game sessions that a fleet could host
   *                     simultaneously, given current capacity. Use this metric for a target-based
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentIdleInstances</b> -- Percentage of the
   *                     total number of active instances that are hosting zero game sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>QueueDepth</b> -- Pending game session
   *                     placement requests, in any queue, where the current fleet is the top-priority
   *                     destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WaitTime</b> -- Current wait time for pending
   *                     game session placement requests, in any queue, where the current fleet is the
   *                     top-priority destination. </p>
   *             </li>
   *          </ul>
   * @public
   */
  MetricName?: MetricName;

  /**
   * <p>The type of scaling policy to create. For a target-based policy, set the parameter
   *                 <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a
   *                 <i>TargetConfiguration</i>. For a rule-based policy set the following
   *             parameters: <i>MetricName</i>, <i>ComparisonOperator</i>,
   *                 <i>Threshold</i>, <i>EvaluationPeriods</i>,
   *                 <i>ScalingAdjustmentType</i>, and
   *                 <i>ScalingAdjustment</i>.</p>
   * @public
   */
  PolicyType?: PolicyType;

  /**
   * <p>An object that contains settings for a target-based scaling policy.</p>
   * @public
   */
  TargetConfiguration?: TargetConfiguration;

  /**
   * <p>The current status of the fleet's scaling policies in a requested fleet location. The
   *             status <code>PENDING_UPDATE</code> indicates that an update was requested for the fleet
   *             but has not yet been completed for the location.</p>
   * @public
   */
  UpdateStatus?: LocationUpdateStatus;

  /**
   * <p> The fleet location. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeScalingPoliciesOutput {
  /**
   * <p>A collection of objects containing the scaling policies matching the request.</p>
   * @public
   */
  ScalingPolicies?: ScalingPolicy[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeScriptInput {
  /**
   * <p>A unique identifier for the Realtime script to retrieve properties for. You can use either the script ID or ARN
   *             value.</p>
   * @public
   */
  ScriptId: string | undefined;
}

/**
 * @public
 */
export interface DescribeScriptOutput {
  /**
   * <p>A set of properties describing the requested script.</p>
   * @public
   */
  Script?: Script;
}

/**
 * @public
 */
export interface DescribeVpcPeeringAuthorizationsInput {}

/**
 * @public
 */
export interface DescribeVpcPeeringAuthorizationsOutput {
  /**
   * <p>A collection of objects that describe all valid VPC peering operations for the current
   *             Amazon Web Services account.</p>
   * @public
   */
  VpcPeeringAuthorizations?: VpcPeeringAuthorization[];
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsInput {
  /**
   * <p>A unique identifier for the fleet. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId?: string;
}

/**
 * <p>Represents status information for a VPC peering connection. Status codes and messages
 *             are provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also
 *             communicated as a fleet event.</p>
 * @public
 */
export interface VpcPeeringConnectionStatus {
  /**
   * <p>Code indicating the status of a VPC peering connection.</p>
   * @public
   */
  Code?: string;

  /**
   * <p>Additional messaging associated with the connection status. </p>
   * @public
   */
  Message?: string;
}

/**
 * <p>Represents a peering connection between a VPC on one of your Amazon Web Services accounts and the
 *             VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a
 *             pending connection that has not yet been established.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface VpcPeeringConnection {
  /**
   * <p>A unique identifier for the fleet. This ID determines the ID of the Amazon GameLift VPC for your fleet.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet resource for this connection. </p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>CIDR block of IPv4 addresses assigned to the VPC peering connection for the GameLift
   *             VPC. The peered VPC also has an IPv4 CIDR block associated with it; these blocks cannot
   *             overlap or the peering connection cannot be created. </p>
   * @public
   */
  IpV4CidrBlock?: string;

  /**
   * <p>A unique identifier that is automatically assigned to the connection record. This ID
   *             is referenced in VPC peering connection events, and is used when deleting a
   *             connection.</p>
   * @public
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The status information about the connection. Status indicates if a connection is
   *             pending, successful, or failed.</p>
   * @public
   */
  Status?: VpcPeeringConnectionStatus;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId?: string;

  /**
   * <p>A unique identifier for the VPC that contains the Amazon GameLift fleet for this connection.
   *             This VPC is managed by Amazon GameLift and does not appear in your Amazon Web Services account. </p>
   * @public
   */
  GameLiftVpcId?: string;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsOutput {
  /**
   * <p>A collection of VPC peering connection records that match the request.</p>
   * @public
   */
  VpcPeeringConnections?: VpcPeeringConnection[];
}

/**
 * <p>Player information for use when creating player sessions using a game session
 *             placement request.</p>
 * @public
 */
export interface DesiredPlayerSession {
  /**
   * <p>A unique identifier for a player to associate with the player session.</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>
   * @public
   */
  PlayerData?: string;
}

/**
 * @public
 */
export interface GetComputeAccessInput {
  /**
   * <p>A unique identifier for the fleet that contains the compute resource you want to connect to. You can use either
   *             the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for the compute resource that you want to connect to. You can use
   *             either a registered compute name or an instance ID.</p>
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface GetComputeAccessOutput {
  /**
   * <p>The ID of the fleet that contains the compute resource to be accessed.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The identifier of the compute resource to be accessed.  This value might be either a
   *             compute name or an instance ID.</p>
   * @public
   */
  ComputeName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to an Amazon GameLift compute resource and uniquely identifies it.
   *             ARNs are unique across all Regions. Format is
   *                 <code>arn:aws:gamelift:<region>::compute/compute-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  ComputeArn?: string;

  /**
   * <p>A set of temporary Amazon Web Services credentials for use when connecting to the
   *             compute resource with Amazon EC2 Systems Manager (SSM).</p>
   * @public
   */
  Credentials?: AwsCredentials;
}

/**
 * @public
 */
export interface GetComputeAuthTokenInput {
  /**
   * <p>A unique identifier for the fleet that the compute is registered to.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The name of the compute resource you are requesting the authentication token
   *             for.</p>
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface GetComputeAuthTokenOutput {
  /**
   * <p>A unique identifier for the fleet that the compute is registered to.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The name of the compute resource that the authentication token is issued to.</p>
   * @public
   */
  ComputeName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to an Amazon GameLift compute resource and uniquely identifies it.
   *             ARNs are unique across all Regions. Format is
   *                 <code>arn:aws:gamelift:<region>::compute/compute-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  ComputeArn?: string;

  /**
   * <p>A valid temporary authentication token.</p>
   * @public
   */
  AuthToken?: string;

  /**
   * <p>The amount of time until the authentication token is no longer valid.</p>
   * @public
   */
  ExpirationTimestamp?: Date;
}

/**
 * @public
 */
export interface GetGameSessionLogUrlInput {
  /**
   * <p>A unique identifier for the game session to get logs for. </p>
   * @public
   */
  GameSessionId: string | undefined;
}

/**
 * @public
 */
export interface GetGameSessionLogUrlOutput {
  /**
   * <p>Location of the requested game session logs, available for download. This URL is valid
   *             for 15 minutes, after which S3 will reject any download request using this URL. You can
   *             request a new URL any time within the 14-day period that the logs are retained.</p>
   * @public
   */
  PreSignedUrl?: string;
}

/**
 * @public
 */
export interface GetInstanceAccessInput {
  /**
   * <p>A unique identifier for the fleet that contains the instance you want to access. You can request access to
   *             instances in EC2 fleets with the following statuses: <code>ACTIVATING</code>,
   *                 <code>ACTIVE</code>, or <code>ERROR</code>. Use either a fleet ID or an ARN value. </p>
   *          <note>
   *             <p>You can access fleets in <code>ERROR</code> status for a short period of time before Amazon GameLift deletes them.</p>
   *          </note>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for the instance you want to access. You can access an instance in any status.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>A set of credentials that allow remote access to an instance in an EC2 managed fleet.
 *             These credentials are returned in response to a call to <a>GetInstanceAccess</a>, which requests access for instances that are running
 *             game servers with the Amazon GameLift server SDK version 4.x or earlier.</p>
 * @public
 */
export interface InstanceCredentials {
  /**
   * <p>A user name for logging in.</p>
   * @public
   */
  UserName?: string;

  /**
   * <p>Secret string. For Windows instances, the secret is a password for use with Windows
   *             Remote Desktop. For Linux instances, it's a private key for use with SSH.</p>
   * @public
   */
  Secret?: string;
}

/**
 * <p>Information and credentials that you can use to remotely connect to an instance in an
 *             EC2 managed fleet. This data type is returned in response to a call to <a>GetInstanceAccess</a>. </p>
 * @public
 */
export interface InstanceAccess {
  /**
   * <p>A unique identifier for the fleet containing the instance to be accessed.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the instance to be accessed.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>IP address assigned to the instance.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>Operating system that is running on the instance.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>Security credentials that are required to access the instance.</p>
   * @public
   */
  Credentials?: InstanceCredentials;
}

/**
 * @public
 */
export interface GetInstanceAccessOutput {
  /**
   * <p>The connection information for a fleet instance, including IP address and access
   *             credentials.</p>
   * @public
   */
  InstanceAccess?: InstanceAccess;
}

/**
 * @public
 */
export interface ListAliasesInput {
  /**
   * <p>The routing type to filter results on. Use this parameter to retrieve only aliases
   *             with a certain routing type. To retrieve all aliases, leave this parameter empty.</p>
   *          <p>Possible routing types include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>SIMPLE</b> -- The alias resolves to one specific
   *                     fleet. Use this type when routing to active fleets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TERMINAL</b> -- The alias does not resolve to a
   *                     fleet but instead can be used to display a message to the user. A terminal alias
   *                     throws a TerminalRoutingStrategyException with the <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_RoutingStrategy.html">RoutingStrategy</a> message embedded.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RoutingStrategyType?: RoutingStrategyType;

  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAliasesOutput {
  /**
   * <p>A collection of alias resources that match the request parameters.</p>
   * @public
   */
  Aliases?: Alias[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBuildsInput {
  /**
   * <p>Build status to filter results by. To retrieve all builds, leave this parameter
   *             empty.</p>
   *          <p>Possible build statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>INITIALIZED</b> -- A new build has been defined,
   *                     but no files have been uploaded. You cannot create fleets for builds that are in
   *                     this status. When a build is successfully created, the build status is set to
   *                     this value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>READY</b> -- The game build has been successfully
   *                     uploaded. You can now create new fleets for this build.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b> -- The game build upload failed. You
   *                     cannot create new fleets for this build. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: BuildStatus;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, don't specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBuildsOutput {
  /**
   * <p>A collection of build resources that match the request.</p>
   * @public
   */
  Builds?: Build[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListComputeInput {
  /**
   * <p>A unique identifier for the fleet to retrieve compute resources for.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The name of a location to retrieve compute resources for.</p>
   * @public
   */
  Location?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListComputeOutput {
  /**
   * <p>A list of compute resources in the specified fleet.</p>
   * @public
   */
  ComputeList?: Compute[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFleetsInput {
  /**
   * <p>A unique identifier for the build to request fleets for. Use this parameter to return only fleets using a
   *             specified build. Use either the build ID or ARN value.</p>
   * @public
   */
  BuildId?: string;

  /**
   * <p>A unique identifier for the Realtime script to request fleets for. Use this parameter to return only fleets using a
   *             specified script. Use either the script ID or ARN value.</p>
   * @public
   */
  ScriptId?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFleetsOutput {
  /**
   * <p>A set of fleet IDs that match the list request.</p>
   * @public
   */
  FleetIds?: string[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGameServerGroupsInput {
  /**
   * <p>The game server groups' limit.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of
   *             results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGameServerGroupsOutput {
  /**
   * <p>The game server groups' game server groups.</p>
   * @public
   */
  GameServerGroups?: GameServerGroup[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of
   *             results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListGameServersInput {
  /**
   * <p>An identifier for the game server group to retrieve a list of game servers from. Use
   *             either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>Indicates how to sort the returned data based on game server registration timestamp.
   *             Use <code>ASCENDING</code> to retrieve oldest game servers first, or use
   *                 <code>DESCENDING</code> to retrieve newest game servers first. If this parameter is
   *             left empty, game servers are returned in no particular order.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGameServersOutput {
  /**
   * <p>A collection of game server objects that match the request.</p>
   * @public
   */
  GameServers?: GameServer[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const LocationFilter = {
  AWS: "AWS",
  CUSTOM: "CUSTOM",
} as const;

/**
 * @public
 */
export type LocationFilter = (typeof LocationFilter)[keyof typeof LocationFilter];

/**
 * @public
 */
export interface ListLocationsInput {
  /**
   * <p>Filters the list for <code>AWS</code> or <code>CUSTOM</code> locations.</p>
   * @public
   */
  Filters?: LocationFilter[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLocationsOutput {
  /**
   * <p>A collection of locations.</p>
   * @public
   */
  Locations?: LocationModel[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListScriptsInput {
  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, don't specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListScriptsOutput {
  /**
   * <p>A set of properties describing the requested script.</p>
   * @public
   */
  Scripts?: Script[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that uniquely identifies
   *             the Amazon GameLift resource that you want to retrieve tags for. Amazon GameLift includes resource ARNs in
   *             the data object for the resource. You can retrieve the ARN by calling a
   *                 <code>List</code> or <code>Describe</code> operation for the resource type. </p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The collection of tags assigned to the resource. </p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutScalingPolicyInput {
  /**
   * <p>A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the fleet to apply this policy to. You can use either the fleet ID or ARN value. The fleet
   *             cannot be in any of the following statuses: ERROR or DELETING.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>Amount of adjustment to make, based on the scaling adjustment type.</p>
   * @public
   */
  ScalingAdjustment?: number;

  /**
   * <p>The type of adjustment to make to a fleet's instance count:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ChangeInCapacity</b> -- add (or subtract) the
   *                     scaling adjustment value from the current instance count. Positive values scale
   *                     up while negative values scale down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ExactCapacity</b> -- set the instance count to the
   *                     scaling adjustment value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentChangeInCapacity</b> -- increase or reduce
   *                     the current instance count by the scaling adjustment, read as a percentage.
   *                     Positive values scale up while negative values scale down; for example, a value
   *                     of "-10" scales the fleet down by 10%.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalingAdjustmentType?: ScalingAdjustmentType;

  /**
   * <p>Metric value used to trigger a scaling event.</p>
   * @public
   */
  Threshold?: number;

  /**
   * <p>Comparison operator to use when measuring the metric against the threshold
   *             value.</p>
   * @public
   */
  ComparisonOperator?: ComparisonOperatorType;

  /**
   * <p>Length of time (in minutes) the metric must be at or beyond the threshold before a
   *             scaling event is triggered.</p>
   * @public
   */
  EvaluationPeriods?: number;

  /**
   * <p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For
   *             detailed descriptions of fleet metrics, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html">Monitor Amazon GameLift
   *                 with Amazon CloudWatch</a>. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ActivatingGameSessions</b> -- Game sessions in
   *                     the process of being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ActiveGameSessions</b> -- Game sessions that
   *                     are currently running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ActiveInstances</b> -- Fleet instances that
   *                     are currently running at least one game session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AvailableGameSessions</b> -- Additional game
   *                     sessions that fleet could host simultaneously, given current capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AvailablePlayerSessions</b> -- Empty player
   *                     slots in currently active game sessions. This includes game sessions that are
   *                     not currently accepting players. Reserved player slots are not
   *                     included.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CurrentPlayerSessions</b> -- Player slots in
   *                     active game sessions that are being used by a player or are reserved for a
   *                     player. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IdleInstances</b> -- Active instances that are
   *                     currently hosting zero game sessions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentAvailableGameSessions</b> -- Unused
   *                     percentage of the total number of game sessions that a fleet could host
   *                     simultaneously, given current capacity. Use this metric for a target-based
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentIdleInstances</b> -- Percentage of the
   *                     total number of active instances that are hosting zero game sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>QueueDepth</b> -- Pending game session
   *                     placement requests, in any queue, where the current fleet is the top-priority
   *                     destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WaitTime</b> -- Current wait time for pending
   *                     game session placement requests, in any queue, where the current fleet is the
   *                     top-priority destination. </p>
   *             </li>
   *          </ul>
   * @public
   */
  MetricName: MetricName | undefined;

  /**
   * <p>The type of scaling policy to create. For a target-based policy, set the parameter
   *                 <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a
   *                 <i>TargetConfiguration</i>. For a rule-based policy set the following
   *             parameters: <i>MetricName</i>, <i>ComparisonOperator</i>,
   *                 <i>Threshold</i>, <i>EvaluationPeriods</i>,
   *                 <i>ScalingAdjustmentType</i>, and
   *                 <i>ScalingAdjustment</i>.</p>
   * @public
   */
  PolicyType?: PolicyType;

  /**
   * <p>An object that contains settings for a target-based scaling policy.</p>
   * @public
   */
  TargetConfiguration?: TargetConfiguration;
}

/**
 * @public
 */
export interface PutScalingPolicyOutput {
  /**
   * <p>A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface RegisterComputeInput {
  /**
   * <p>A unique identifier for the fleet to register the compute to. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A descriptive label for the compute resource.</p>
   * @public
   */
  ComputeName: string | undefined;

  /**
   * <p>The path to a TLS certificate on your compute resource. Amazon GameLift doesn't validate the
   *             path and certificate.</p>
   * @public
   */
  CertificatePath?: string;

  /**
   * <p>The DNS name of the compute resource. Amazon GameLift requires either a DNS name or IP
   *             address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>The IP address of the compute resource. Amazon GameLift requires either a DNS name or IP
   *             address.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The name of a custom location to associate with the compute resource being registered. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface RegisterComputeOutput {
  /**
   * <p>The details of the compute resource you registered.</p>
   * @public
   */
  Compute?: Compute;
}

/**
 * @public
 */
export interface RegisterGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to register. Game server IDs are developer-defined and must be unique
   *             across all game server groups in your Amazon Web Services account.</p>
   * @public
   */
  GameServerId: string | undefined;

  /**
   * <p>The unique identifier for the instance where the game server is running. This ID is
   *             available in the instance metadata. EC2 instance IDs
   *             use a 17-character format, for example: <code>i-1234567890abcdef0</code>.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Information that is needed to make inbound client connections to the game server. This
   *             might include the IP address and port, DNS name, and other information.</p>
   * @public
   */
  ConnectionInfo?: string;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers. </p>
   * @public
   */
  GameServerData?: string;
}

/**
 * @public
 */
export interface RegisterGameServerOutput {
  /**
   * <p>Object that describes the newly registered game server.</p>
   * @public
   */
  GameServer?: GameServer;
}

/**
 * @public
 */
export interface RequestUploadCredentialsInput {
  /**
   * <p>A unique identifier for the build to get credentials for. You can use either the build ID or ARN value. </p>
   * @public
   */
  BuildId: string | undefined;
}

/**
 * @public
 */
export interface RequestUploadCredentialsOutput {
  /**
   * <p>Amazon Web Services credentials required when uploading a game build to the storage location. These
   *             credentials have a limited lifespan and are valid only for the build they were issued
   *             for.</p>
   * @public
   */
  UploadCredentials?: AwsCredentials;

  /**
   * <p>Amazon S3 path and key, identifying where the game build files are
   *             stored.</p>
   * @public
   */
  StorageLocation?: S3Location;
}

/**
 * @public
 */
export interface ResolveAliasInput {
  /**
   * <p>The unique identifier of the alias that you want to retrieve a fleet ID for. You can
   *             use either the alias ID or ARN value.</p>
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface ResolveAliasOutput {
  /**
   * <p>The fleet identifier that the alias is pointing to.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p> The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet resource that this alias points to.
   *         </p>
   * @public
   */
  FleetArn?: string;
}

/**
 * @public
 */
export interface ResumeGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The activity to resume for this game server group.</p>
   * @public
   */
  ResumeActions: GameServerGroupAction[] | undefined;
}

/**
 * @public
 */
export interface ResumeGameServerGroupOutput {
  /**
   * <p>An object that describes the game server group resource, with the
   *                 <code>SuspendedActions</code> property updated to reflect the resumed
   *             activity.</p>
   * @public
   */
  GameServerGroup?: GameServerGroup;
}

/**
 * @public
 */
export interface SearchGameSessionsInput {
  /**
   * <p>A unique identifier for the fleet to search for active game sessions. You can use either the fleet ID or ARN
   *             value. Each request must reference either a fleet ID or alias ID, but not both.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the alias associated with the fleet to search for active game sessions. You can use either
   *             the alias ID or ARN value. Each request must reference either a fleet ID or alias ID,
   *             but not both.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>A fleet location to search for game sessions. You can specify a fleet's home Region or
   *             a remote location. Use the Amazon Web Services Region code format, such as <code>us-west-2</code>.
   *         </p>
   * @public
   */
  Location?: string;

  /**
   * <p>String containing the search criteria for the session search. If no filter expression
   *             is included, the request returns results for all game sessions in the fleet that are in
   *                 <code>ACTIVE</code> status.</p>
   *          <p>A filter expression can contain one or multiple conditions. Each condition consists of
   *             the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Operand</b> -- Name of a game session attribute.
   *                     Valid values are <code>gameSessionName</code>, <code>gameSessionId</code>,
   *                         <code>gameSessionProperties</code>, <code>maximumSessions</code>,
   *                         <code>creationTimeMillis</code>, <code>playerSessionCount</code>,
   *                         <code>hasAvailablePlayerSessions</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Comparator</b> -- Valid comparators are:
   *                         <code>=</code>, <code><></code>, <code><</code>, <code>></code>,
   *                         <code><=</code>, <code>>=</code>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Value</b> -- Value to be searched for. Values may
   *                     be numbers, boolean values (true/false) or strings depending on the operand.
   *                     String values are case sensitive and must be enclosed in single quotes. Special
   *                     characters must be escaped. Boolean and string values can only be used with the
   *                     comparators <code>=</code> and <code><></code>. For example, the following
   *                     filter expression searches on <code>gameSessionName</code>:
   *                         "<code>FilterExpression": "gameSessionName = 'Matt\\'s Awesome Game
   *                         1'"</code>. </p>
   *             </li>
   *          </ul>
   *          <p>To chain multiple conditions in a single expression, use the logical keywords
   *                 <code>AND</code>, <code>OR</code>, and <code>NOT</code> and parentheses as needed.
   *             For example: <code>x AND y AND NOT z</code>, <code>NOT (x OR y)</code>.</p>
   *          <p>Session search evaluates conditions from left to right using the following precedence
   *             rules:</p>
   *          <ol>
   *             <li>
   *                <p>
   *                   <code>=</code>, <code><></code>, <code><</code>, <code>></code>,
   *                         <code><=</code>, <code>>=</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Parentheses</p>
   *             </li>
   *             <li>
   *                <p>NOT</p>
   *             </li>
   *             <li>
   *                <p>AND</p>
   *             </li>
   *             <li>
   *                <p>OR</p>
   *             </li>
   *          </ol>
   *          <p>For example, this filter expression retrieves game sessions hosting at least ten
   *             players that have an open player slot: <code>"maximumSessions>=10 AND
   *                 hasAvailablePlayerSessions=true"</code>. </p>
   * @public
   */
  FilterExpression?: string;

  /**
   * <p>Instructions on how to sort the search results. If no sort expression is included, the
   *             request returns results in random order. A sort expression consists of the following
   *             elements:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Operand</b> -- Name of a game session attribute.
   *                     Valid values are <code>gameSessionName</code>, <code>gameSessionId</code>,
   *                         <code>gameSessionProperties</code>, <code>maximumSessions</code>,
   *                         <code>creationTimeMillis</code>, <code>playerSessionCount</code>,
   *                         <code>hasAvailablePlayerSessions</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Order</b> -- Valid sort orders are <code>ASC</code>
   *                     (ascending) and <code>DESC</code> (descending).</p>
   *             </li>
   *          </ul>
   *          <p>For example, this sort expression returns the oldest active sessions first:
   *                 <code>"SortExpression": "creationTimeMillis ASC"</code>. Results with a null value
   *             for the sort operand are returned at the end of the list.</p>
   * @public
   */
  SortExpression?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set or
   *             is set higher than 20. </p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SearchGameSessionsOutput {
  /**
   * <p>A collection of objects containing game session properties for each session that
   *             matches the request.</p>
   * @public
   */
  GameSessions?: GameSession[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface StartFleetActionsInput {
  /**
   * <p>A unique identifier for the fleet to restart actions on. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>List of actions to restart on the fleet.</p>
   * @public
   */
  Actions: FleetAction[] | undefined;

  /**
   * <p>The fleet location to restart fleet actions for. Specify a location in the form of an
   *             Amazon Web Services Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface StartFleetActionsOutput {
  /**
   * <p>A unique identifier for the fleet to restart actions on.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;
}

/**
 * @public
 */
export interface StartGameSessionPlacementInput {
  /**
   * <p>A unique identifier to assign to the new game session placement. This value is
   *             developer-defined. The value must be unique across all Regions and cannot be
   *             reused.</p>
   * @public
   */
  PlacementId: string | undefined;

  /**
   * <p>Name of the queue to use to place the new game session. You can use either the queue
   *             name or ARN value. </p>
   * @public
   */
  GameSessionQueueName: string | undefined;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   * @public
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  GameSessionName?: string;

  /**
   * <p>A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to Amazon Web Services Regions. This information is used to try to place the new game session where it
   *             can offer the best possible gameplay experience for the players. </p>
   * @public
   */
  PlayerLatencies?: PlayerLatency[];

  /**
   * <p>Set of information on each player to create a player session for.</p>
   * @public
   */
  DesiredPlayerSessions?: DesiredPlayerSession[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <code>GameSession</code> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   * @public
   */
  GameSessionData?: string;
}

/**
 * @public
 */
export interface StartGameSessionPlacementOutput {
  /**
   * <p>Object that describes the newly created game session placement. This object includes
   *             all the information provided in the request, as well as start/end time stamps and
   *             placement status. </p>
   * @public
   */
  GameSessionPlacement?: GameSessionPlacement;
}

/**
 * @public
 */
export interface StartMatchBackfillInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a
   *             UUID. Use this identifier to track the match backfill ticket status and retrieve match
   *             results.</p>
   * @public
   */
  TicketId?: string;

  /**
   * <p>Name of the matchmaker to use for this request. You can use either the configuration
   *             name or ARN value. The ARN of the matchmaker that was used with the original game
   *             session is listed in the <code>GameSession</code> object, <code>MatchmakerData</code>
   *             property.</p>
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * <p>A unique identifier for the game session. Use the game session ID. When using FlexMatch as a standalone matchmaking
   *             solution, this parameter is not needed. </p>
   * @public
   */
  GameSessionArn?: string;

  /**
   * <p>Match information on all players that are currently assigned to the game session. This
   *             information is used by the matchmaker to find new players and add them to the existing
   *             game.</p>
   *          <p>You can include up to 199 <code>Players</code> in a <code>StartMatchBackfill</code>
   *             request.</p>
   *          <ul>
   *             <li>
   *                <p>PlayerID, PlayerAttributes, Team -- This information is maintained in the
   *                         <code>GameSession</code> object, <code>MatchmakerData</code> property, for
   *                     all players who are currently assigned to the game session. The matchmaker data
   *                     is in JSON syntax, formatted as a string. For more details, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">
   *                         Match Data</a>. </p>
   *                <p>The backfill request must specify the team membership for every player. Do not
   *                     specify team if you are not using backfill.</p>
   *             </li>
   *             <li>
   *                <p>LatencyInMs -- If the matchmaker uses player latency, include a latency value,
   *                     in milliseconds, for the Region that the game session is currently in. Do not
   *                     include latency values for any other Region.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Players: Player[] | undefined;
}

/**
 * @public
 */
export interface StartMatchBackfillOutput {
  /**
   * <p>Ticket representing the backfill matchmaking request. This object includes the
   *             information in the request, ticket status, and match results as generated during the
   *             matchmaking process.</p>
   * @public
   */
  MatchmakingTicket?: MatchmakingTicket;
}

/**
 * @public
 */
export interface StartMatchmakingInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a
   *             UUID. Use this identifier to track the matchmaking ticket status and retrieve match
   *             results.</p>
   * @public
   */
  TicketId?: string;

  /**
   * <p>Name of the matchmaking configuration to use for this request. Matchmaking
   *             configurations must exist in the same Region as this request. You can use either the
   *             configuration name or ARN value.</p>
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Information on each player to be matched. This information must include a player ID,
   *             and may contain player attributes and latency data to be used in the matchmaking
   *             process. After a successful match, <code>Player</code> objects contain the name of the
   *             team the player is assigned to.</p>
   *          <p>You can include up to 10 <code>Players</code> in a <code>StartMatchmaking</code>
   *             request.</p>
   * @public
   */
  Players: Player[] | undefined;
}

/**
 * @public
 */
export interface StartMatchmakingOutput {
  /**
   * <p>Ticket representing the matchmaking request. This object include the information
   *             included in the request, ticket status, and match results as generated during the
   *             matchmaking process.</p>
   * @public
   */
  MatchmakingTicket?: MatchmakingTicket;
}

/**
 * @public
 */
export interface StopFleetActionsInput {
  /**
   * <p>A unique identifier for the fleet to stop actions on. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>List of actions to suspend on the fleet. </p>
   * @public
   */
  Actions: FleetAction[] | undefined;

  /**
   * <p>The fleet location to stop fleet actions for. Specify a location in the form of an
   *             Amazon Web Services Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface StopFleetActionsOutput {
  /**
   * <p>A unique identifier for the fleet to stop actions on.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;
}

/**
 * @public
 */
export interface StopGameSessionPlacementInput {
  /**
   * <p>A unique identifier for a game session placement to stop.</p>
   * @public
   */
  PlacementId: string | undefined;
}

/**
 * @public
 */
export interface StopGameSessionPlacementOutput {
  /**
   * <p>Object that describes the canceled game session placement, with <code>CANCELLED</code>
   *             status and an end time stamp. </p>
   * @public
   */
  GameSessionPlacement?: GameSessionPlacement;
}

/**
 * @public
 */
export interface StopMatchmakingInput {
  /**
   * <p>A unique identifier for a matchmaking ticket.</p>
   * @public
   */
  TicketId: string | undefined;
}

/**
 * @public
 */
export interface StopMatchmakingOutput {}

/**
 * @public
 */
export interface SuspendGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The activity to suspend for this game server group.</p>
   * @public
   */
  SuspendActions: GameServerGroupAction[] | undefined;
}

/**
 * @public
 */
export interface SuspendGameServerGroupOutput {
  /**
   * <p>An object that describes the game server group resource, with the
   *                 <code>SuspendedActions</code> property updated to reflect the suspended
   *             activity.</p>
   * @public
   */
  GameServerGroup?: GameServerGroup;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that uniquely identifies
   *             the Amazon GameLift resource that you want to assign tags to. Amazon GameLift includes resource ARNs in
   *             the data object for the resource. You can retrieve the ARN by calling a
   *                 <code>List</code> or <code>Describe</code> operation for the resource type. </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of one or more tags to assign to the specified Amazon GameLift resource. Tags are
   *             developer-defined and structured as key-value pairs. The maximum tag limit may be lower
   *             than stated. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">
   *                 Tagging Amazon Web Services Resources</a> for tagging limits.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that uniquely identifies
   *             the Amazon GameLift resource that you want to remove tags from. Amazon GameLift includes resource ARNs in
   *             the data object for the resource. You can retrieve the ARN by calling a
   *                 <code>List</code> or <code>Describe</code> operation for the resource type. </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of one or more tag keys to remove from the specified Amazon GameLift resource. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAliasInput {
  /**
   * <p>A unique identifier for the alias that you want to update. You can use either the
   *             alias ID or ARN value.</p>
   * @public
   */
  AliasId: string | undefined;

  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A human-readable description of the alias.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The routing configuration, including routing type and fleet target, for the
   *             alias.</p>
   * @public
   */
  RoutingStrategy?: RoutingStrategy;
}

/**
 * @public
 */
export interface UpdateAliasOutput {
  /**
   * <p>The updated alias resource.</p>
   * @public
   */
  Alias?: Alias;
}

/**
 * @public
 */
export interface UpdateBuildInput {
  /**
   * <p>A unique identifier for the build to update. You can use either the build ID or ARN value. </p>
   * @public
   */
  BuildId: string | undefined;

  /**
   * <p>A descriptive label associated with a build. Build names don't need to be unique. </p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information associated with a build or script. Version strings don't need to be unique.</p>
   * @public
   */
  Version?: string;
}

/**
 * @public
 */
export interface UpdateBuildOutput {
  /**
   * <p>The updated build resource.</p>
   * @public
   */
  Build?: Build;
}

/**
 * @public
 */
export interface UpdateFleetAttributesInput {
  /**
   * <p>A unique identifier for the fleet to update attribute metadata for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A human-readable description of a fleet.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The game session protection policy to apply to all new game sessions created in this
   *             fleet. Game sessions that already exist are not affected. You can set protection for
   *             individual game sessions using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> .</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy;

  /**
   * <p>Policy settings that limit the number of game sessions an individual player can create
   *             over a span of time. </p>
   * @public
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * <p>The name of a metric group to add this fleet to. Use a metric group in Amazon
   *             CloudWatch to aggregate the metrics from multiple fleets. Provide an existing metric
   *             group name, or create a new metric group by providing a new name. A fleet can only be in
   *             one metric group at a time.</p>
   * @public
   */
  MetricGroups?: string[];

  /**
   * <p>Amazon GameLift Anywhere configuration options.</p>
   * @public
   */
  AnywhereConfiguration?: AnywhereConfiguration;
}

/**
 * @public
 */
export interface UpdateFleetAttributesOutput {
  /**
   * <p>A unique identifier for the fleet that was updated.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;
}

/**
 * @internal
 */
export const AcceptMatchInputFilterSensitiveLog = (obj: AcceptMatchInput): any => ({
  ...obj,
  ...(obj.PlayerIds && { PlayerIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AwsCredentialsFilterSensitiveLog = (obj: AwsCredentials): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputeFilterSensitiveLog = (obj: Compute): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBuildOutputFilterSensitiveLog = (obj: CreateBuildOutput): any => ({
  ...obj,
  ...(obj.UploadCredentials && { UploadCredentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IpPermissionFilterSensitiveLog = (obj: IpPermission): any => ({
  ...obj,
  ...(obj.FromPort && { FromPort: SENSITIVE_STRING }),
  ...(obj.ToPort && { ToPort: SENSITIVE_STRING }),
  ...(obj.IpRange && { IpRange: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateFleetInputFilterSensitiveLog = (obj: CreateFleetInput): any => ({
  ...obj,
  ...(obj.EC2InboundPermissions && {
    EC2InboundPermissions: obj.EC2InboundPermissions.map((item) => IpPermissionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GameSessionFilterSensitiveLog = (obj: GameSession): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
  ...(obj.Port && { Port: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGameSessionOutputFilterSensitiveLog = (obj: CreateGameSessionOutput): any => ({
  ...obj,
  ...(obj.GameSession && { GameSession: GameSessionFilterSensitiveLog(obj.GameSession) }),
});

/**
 * @internal
 */
export const CreatePlayerSessionInputFilterSensitiveLog = (obj: CreatePlayerSessionInput): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PlayerSessionFilterSensitiveLog = (obj: PlayerSession): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
  ...(obj.Port && { Port: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePlayerSessionOutputFilterSensitiveLog = (obj: CreatePlayerSessionOutput): any => ({
  ...obj,
  ...(obj.PlayerSession && { PlayerSession: PlayerSessionFilterSensitiveLog(obj.PlayerSession) }),
});

/**
 * @internal
 */
export const CreatePlayerSessionsInputFilterSensitiveLog = (obj: CreatePlayerSessionsInput): any => ({
  ...obj,
  ...(obj.PlayerIds && { PlayerIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePlayerSessionsOutputFilterSensitiveLog = (obj: CreatePlayerSessionsOutput): any => ({
  ...obj,
  ...(obj.PlayerSessions && {
    PlayerSessions: obj.PlayerSessions.map((item) => PlayerSessionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeComputeOutputFilterSensitiveLog = (obj: DescribeComputeOutput): any => ({
  ...obj,
  ...(obj.Compute && { Compute: ComputeFilterSensitiveLog(obj.Compute) }),
});

/**
 * @internal
 */
export const DescribeFleetPortSettingsOutputFilterSensitiveLog = (obj: DescribeFleetPortSettingsOutput): any => ({
  ...obj,
  ...(obj.InboundPermissions && {
    InboundPermissions: obj.InboundPermissions.map((item) => IpPermissionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GameSessionDetailFilterSensitiveLog = (obj: GameSessionDetail): any => ({
  ...obj,
  ...(obj.GameSession && { GameSession: GameSessionFilterSensitiveLog(obj.GameSession) }),
});

/**
 * @internal
 */
export const DescribeGameSessionDetailsOutputFilterSensitiveLog = (obj: DescribeGameSessionDetailsOutput): any => ({
  ...obj,
  ...(obj.GameSessionDetails && {
    GameSessionDetails: obj.GameSessionDetails.map((item) => GameSessionDetailFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PlacedPlayerSessionFilterSensitiveLog = (obj: PlacedPlayerSession): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PlayerLatencyFilterSensitiveLog = (obj: PlayerLatency): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GameSessionPlacementFilterSensitiveLog = (obj: GameSessionPlacement): any => ({
  ...obj,
  ...(obj.PlayerLatencies && {
    PlayerLatencies: obj.PlayerLatencies.map((item) => PlayerLatencyFilterSensitiveLog(item)),
  }),
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
  ...(obj.Port && { Port: SENSITIVE_STRING }),
  ...(obj.PlacedPlayerSessions && {
    PlacedPlayerSessions: obj.PlacedPlayerSessions.map((item) => PlacedPlayerSessionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeGameSessionPlacementOutputFilterSensitiveLog = (obj: DescribeGameSessionPlacementOutput): any => ({
  ...obj,
  ...(obj.GameSessionPlacement && {
    GameSessionPlacement: GameSessionPlacementFilterSensitiveLog(obj.GameSessionPlacement),
  }),
});

/**
 * @internal
 */
export const DescribeGameSessionsOutputFilterSensitiveLog = (obj: DescribeGameSessionsOutput): any => ({
  ...obj,
  ...(obj.GameSessions && { GameSessions: obj.GameSessions.map((item) => GameSessionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeInstancesOutputFilterSensitiveLog = (obj: DescribeInstancesOutput): any => ({
  ...obj,
  ...(obj.Instances && { Instances: obj.Instances.map((item) => InstanceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const MatchedPlayerSessionFilterSensitiveLog = (obj: MatchedPlayerSession): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GameSessionConnectionInfoFilterSensitiveLog = (obj: GameSessionConnectionInfo): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
  ...(obj.MatchedPlayerSessions && {
    MatchedPlayerSessions: obj.MatchedPlayerSessions.map((item) => MatchedPlayerSessionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PlayerFilterSensitiveLog = (obj: Player): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MatchmakingTicketFilterSensitiveLog = (obj: MatchmakingTicket): any => ({
  ...obj,
  ...(obj.Players && { Players: obj.Players.map((item) => PlayerFilterSensitiveLog(item)) }),
  ...(obj.GameSessionConnectionInfo && {
    GameSessionConnectionInfo: GameSessionConnectionInfoFilterSensitiveLog(obj.GameSessionConnectionInfo),
  }),
});

/**
 * @internal
 */
export const DescribeMatchmakingOutputFilterSensitiveLog = (obj: DescribeMatchmakingOutput): any => ({
  ...obj,
  ...(obj.TicketList && { TicketList: obj.TicketList.map((item) => MatchmakingTicketFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribePlayerSessionsInputFilterSensitiveLog = (obj: DescribePlayerSessionsInput): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribePlayerSessionsOutputFilterSensitiveLog = (obj: DescribePlayerSessionsOutput): any => ({
  ...obj,
  ...(obj.PlayerSessions && {
    PlayerSessions: obj.PlayerSessions.map((item) => PlayerSessionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DesiredPlayerSessionFilterSensitiveLog = (obj: DesiredPlayerSession): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetComputeAccessOutputFilterSensitiveLog = (obj: GetComputeAccessOutput): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InstanceCredentialsFilterSensitiveLog = (obj: InstanceCredentials): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceAccessFilterSensitiveLog = (obj: InstanceAccess): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetInstanceAccessOutputFilterSensitiveLog = (obj: GetInstanceAccessOutput): any => ({
  ...obj,
  ...(obj.InstanceAccess && { InstanceAccess: InstanceAccessFilterSensitiveLog(obj.InstanceAccess) }),
});

/**
 * @internal
 */
export const ListComputeOutputFilterSensitiveLog = (obj: ListComputeOutput): any => ({
  ...obj,
  ...(obj.ComputeList && { ComputeList: obj.ComputeList.map((item) => ComputeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RegisterComputeInputFilterSensitiveLog = (obj: RegisterComputeInput): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RegisterComputeOutputFilterSensitiveLog = (obj: RegisterComputeOutput): any => ({
  ...obj,
  ...(obj.Compute && { Compute: ComputeFilterSensitiveLog(obj.Compute) }),
});

/**
 * @internal
 */
export const RequestUploadCredentialsOutputFilterSensitiveLog = (obj: RequestUploadCredentialsOutput): any => ({
  ...obj,
  ...(obj.UploadCredentials && { UploadCredentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchGameSessionsOutputFilterSensitiveLog = (obj: SearchGameSessionsOutput): any => ({
  ...obj,
  ...(obj.GameSessions && { GameSessions: obj.GameSessions.map((item) => GameSessionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartGameSessionPlacementInputFilterSensitiveLog = (obj: StartGameSessionPlacementInput): any => ({
  ...obj,
  ...(obj.PlayerLatencies && {
    PlayerLatencies: obj.PlayerLatencies.map((item) => PlayerLatencyFilterSensitiveLog(item)),
  }),
  ...(obj.DesiredPlayerSessions && {
    DesiredPlayerSessions: obj.DesiredPlayerSessions.map((item) => DesiredPlayerSessionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const StartGameSessionPlacementOutputFilterSensitiveLog = (obj: StartGameSessionPlacementOutput): any => ({
  ...obj,
  ...(obj.GameSessionPlacement && {
    GameSessionPlacement: GameSessionPlacementFilterSensitiveLog(obj.GameSessionPlacement),
  }),
});

/**
 * @internal
 */
export const StartMatchBackfillInputFilterSensitiveLog = (obj: StartMatchBackfillInput): any => ({
  ...obj,
  ...(obj.Players && { Players: obj.Players.map((item) => PlayerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartMatchBackfillOutputFilterSensitiveLog = (obj: StartMatchBackfillOutput): any => ({
  ...obj,
  ...(obj.MatchmakingTicket && { MatchmakingTicket: MatchmakingTicketFilterSensitiveLog(obj.MatchmakingTicket) }),
});

/**
 * @internal
 */
export const StartMatchmakingInputFilterSensitiveLog = (obj: StartMatchmakingInput): any => ({
  ...obj,
  ...(obj.Players && { Players: obj.Players.map((item) => PlayerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartMatchmakingOutputFilterSensitiveLog = (obj: StartMatchmakingOutput): any => ({
  ...obj,
  ...(obj.MatchmakingTicket && { MatchmakingTicket: MatchmakingTicketFilterSensitiveLog(obj.MatchmakingTicket) }),
});

/**
 * @internal
 */
export const StopGameSessionPlacementOutputFilterSensitiveLog = (obj: StopGameSessionPlacementOutput): any => ({
  ...obj,
  ...(obj.GameSessionPlacement && {
    GameSessionPlacement: GameSessionPlacementFilterSensitiveLog(obj.GameSessionPlacement),
  }),
});
