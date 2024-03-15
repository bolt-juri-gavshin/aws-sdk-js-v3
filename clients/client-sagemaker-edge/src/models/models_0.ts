// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SagemakerEdgeServiceException as __BaseException } from "./SagemakerEdgeServiceException";

/**
 * @public
 */
export interface GetDeploymentsRequest {
  /**
   * <p>The unique name of the device you want to get the configuration of active deployments from.</p>
   * @public
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet that the device belongs to.</p>
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChecksumType = {
  Sha1: "SHA1",
} as const;

/**
 * @public
 */
export type ChecksumType = (typeof ChecksumType)[keyof typeof ChecksumType];

/**
 * <p>Information about the checksum of a model deployed on a device.</p>
 * @public
 */
export interface Checksum {
  /**
   * <p>The type of the checksum.</p>
   * @public
   */
  Type?: ChecksumType;

  /**
   * <p>The checksum of the model.</p>
   * @public
   */
  Sum?: string;
}

/**
 * @public
 * @enum
 */
export const ModelState = {
  Deploy: "DEPLOY",
  Undeploy: "UNDEPLOY",
} as const;

/**
 * @public
 */
export type ModelState = (typeof ModelState)[keyof typeof ModelState];

/**
 * <p></p>
 * @public
 */
export interface Definition {
  /**
   * <p>The unique model handle.</p>
   * @public
   */
  ModelHandle?: string;

  /**
   * <p>The absolute S3 location of the model.</p>
   * @public
   */
  S3Url?: string;

  /**
   * <p>The checksum information of the model.</p>
   * @public
   */
  Checksum?: Checksum;

  /**
   * <p>The desired state of the model.</p>
   * @public
   */
  State?: ModelState;
}

/**
 * @public
 * @enum
 */
export const FailureHandlingPolicy = {
  DoNothing: "DO_NOTHING",
  RollbackOnFailure: "ROLLBACK_ON_FAILURE",
} as const;

/**
 * @public
 */
export type FailureHandlingPolicy = (typeof FailureHandlingPolicy)[keyof typeof FailureHandlingPolicy];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  Model: "Model",
} as const;

/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * <p>Information about a deployment on an edge device that is registered with SageMaker Edge Manager.</p>
 * @public
 */
export interface EdgeDeployment {
  /**
   * <p>The name and unique ID of the deployment.</p>
   * @public
   */
  DeploymentName?: string;

  /**
   * <p>The type of the deployment.</p>
   * @public
   */
  Type?: DeploymentType;

  /**
   * <p>Determines whether to rollback to previous configuration if deployment fails.</p>
   * @public
   */
  FailureHandlingPolicy?: FailureHandlingPolicy;

  /**
   * <p>Returns a list of Definition objects.</p>
   * @public
   */
  Definitions?: Definition[];
}

/**
 * @public
 */
export interface GetDeploymentsResult {
  /**
   * <p>Returns a list of the configurations of the active deployments on the device.</p>
   * @public
   */
  Deployments?: EdgeDeployment[];
}

/**
 * <p>An internal failure occurred. Try your request again. If the problem
 *       persists, contact Amazon Web Services customer support.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetDeviceRegistrationRequest {
  /**
   * <p>The unique name of the device you want to get the registration status from.</p>
   * @public
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet that the device belongs to.</p>
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceRegistrationResult {
  /**
   * <p>Describes if the device is currently registered with SageMaker Edge Manager.</p>
   * @public
   */
  DeviceRegistration?: string;

  /**
   * <p>The amount of time, in seconds, that the registration status is stored on the device’s cache before it is refreshed.</p>
   * @public
   */
  CacheTTL?: string;
}

/**
 * <p>Information required for edge device metrics.</p>
 * @public
 */
export interface EdgeMetric {
  /**
   * <p>The dimension of metrics published.</p>
   * @public
   */
  Dimension?: string;

  /**
   * <p>Returns the name of the metric.</p>
   * @public
   */
  MetricName?: string;

  /**
   * <p>Returns the value of the metric.</p>
   * @public
   */
  Value?: number;

  /**
   * <p>Timestamp of when the metric was requested.</p>
   * @public
   */
  Timestamp?: Date;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  Fail: "FAIL",
  Success: "SUCCESS",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * <p></p>
 * @public
 */
export interface DeploymentModel {
  /**
   * <p>The unique handle of the model.</p>
   * @public
   */
  ModelHandle?: string;

  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   * @public
   */
  ModelVersion?: string;

  /**
   * <p>The desired state of the model.</p>
   * @public
   */
  DesiredState?: ModelState;

  /**
   * <p>Returns the current state of the model.</p>
   * @public
   */
  State?: ModelState;

  /**
   * <p>Returns the deployment status of the model.</p>
   * @public
   */
  Status?: DeploymentStatus;

  /**
   * <p>Returns the error message for the deployment status result.</p>
   * @public
   */
  StatusReason?: string;

  /**
   * <p>Returns the error message if there is a rollback.</p>
   * @public
   */
  RollbackFailureReason?: string;
}

/**
 * <p>Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager.</p>
 * @public
 */
export interface DeploymentResult {
  /**
   * <p>The name and unique ID of the deployment.</p>
   * @public
   */
  DeploymentName?: string;

  /**
   * <p>Returns the bucket error code.</p>
   * @public
   */
  DeploymentStatus?: string;

  /**
   * <p>Returns the detailed error message.</p>
   * @public
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The timestamp of when the deployment was started on the agent.</p>
   * @public
   */
  DeploymentStartTime?: Date;

  /**
   * <p>The timestamp of when the deployment was ended, and the agent got the deployment results.</p>
   * @public
   */
  DeploymentEndTime?: Date;

  /**
   * <p>Returns a list of models deployed on the agent.</p>
   * @public
   */
  DeploymentModels?: DeploymentModel[];
}

/**
 * <p>Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.</p>
 * @public
 */
export interface Model {
  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   * @public
   */
  ModelVersion?: string;

  /**
   * <p>The timestamp of the last data sample taken.</p>
   * @public
   */
  LatestSampleTime?: Date;

  /**
   * <p>The timestamp of the last inference that was made.</p>
   * @public
   */
  LatestInference?: Date;

  /**
   * <p>Information required for model metrics.</p>
   * @public
   */
  ModelMetrics?: EdgeMetric[];
}

/**
 * @public
 */
export interface SendHeartbeatRequest {
  /**
   * <p>For internal use. Returns a list of SageMaker Edge Manager agent operating metrics.</p>
   * @public
   */
  AgentMetrics?: EdgeMetric[];

  /**
   * <p>Returns a list of models deployed on the the device.</p>
   * @public
   */
  Models?: Model[];

  /**
   * <p>Returns the version of the agent.</p>
   * @public
   */
  AgentVersion: string | undefined;

  /**
   * <p>The unique name of the device.</p>
   * @public
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet that the device belongs to.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>Returns the result of a deployment on the device.</p>
   * @public
   */
  DeploymentResult?: DeploymentResult;
}
