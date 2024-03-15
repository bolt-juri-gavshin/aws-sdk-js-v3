// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CodeStarServiceException as __BaseException } from "./CodeStarServiceException";

/**
 * @public
 */
export interface AssociateTeamMemberRequest {
  /**
   * <p>The ID of the project to which you will add the IAM user.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested the team
   *       member association to the project. This token can be used to repeat the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM user you want to add to the AWS CodeStar
   *       project.</p>
   * @public
   */
  userArn: string | undefined;

  /**
   * <p>The AWS CodeStar project role that will apply to this user. This role determines what actions
   *       a user can take in an AWS CodeStar project.</p>
   * @public
   */
  projectRole: string | undefined;

  /**
   * <p>Whether the team member is allowed to use an SSH public/private key pair to remotely
   *       access project resources, for example Amazon EC2 instances.</p>
   * @public
   */
  remoteAccessAllowed?: boolean;
}

/**
 * @public
 */
export interface AssociateTeamMemberResult {
  /**
   * <p>The user- or system-generated token from the initial request that can be used to repeat
   *       the request.</p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>The service role is not valid.</p>
 * @public
 */
export class InvalidServiceRoleException extends __BaseException {
  readonly name: "InvalidServiceRoleException" = "InvalidServiceRoleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidServiceRoleException, __BaseException>) {
    super({
      name: "InvalidServiceRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidServiceRoleException.prototype);
  }
}

/**
 * <p>A resource limit has been exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>Project configuration information is required but not specified.</p>
 * @public
 */
export class ProjectConfigurationException extends __BaseException {
  readonly name: "ProjectConfigurationException" = "ProjectConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProjectConfigurationException, __BaseException>) {
    super({
      name: "ProjectConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProjectConfigurationException.prototype);
  }
}

/**
 * <p>The specified AWS CodeStar project was not found.</p>
 * @public
 */
export class ProjectNotFoundException extends __BaseException {
  readonly name: "ProjectNotFoundException" = "ProjectNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProjectNotFoundException, __BaseException>) {
    super({
      name: "ProjectNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProjectNotFoundException.prototype);
  }
}

/**
 * <p>The team member is already associated with a role in this project.</p>
 * @public
 */
export class TeamMemberAlreadyAssociatedException extends __BaseException {
  readonly name: "TeamMemberAlreadyAssociatedException" = "TeamMemberAlreadyAssociatedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TeamMemberAlreadyAssociatedException, __BaseException>) {
    super({
      name: "TeamMemberAlreadyAssociatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TeamMemberAlreadyAssociatedException.prototype);
  }
}

/**
 * <p>The specified input is either not valid, or it could not be validated.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided
 *       with the project request will be uploaded after project creation.</p>
 * @public
 */
export interface CodeCommitCodeDestination {
  /**
   * <p>The name of the AWS CodeCommit repository to be created in AWS CodeStar.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the
 *       project request will be uploaded after project creation.</p>
 * @public
 */
export interface GitHubCodeDestination {
  /**
   * <p>Name of the GitHub repository to be created in AWS CodeStar.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Description for the GitHub repository to be created in AWS CodeStar. This description displays in
   *       GitHub after the repository is created.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The type of GitHub repository to be created in AWS CodeStar. Valid values are User or Organization.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The GitHub username for the owner of the GitHub repository to be created in AWS CodeStar. If this repository should
   *       be owned by a GitHub organization, provide its name.</p>
   * @public
   */
  owner: string | undefined;

  /**
   * <p>Whether the GitHub repository is to be a private repository.</p>
   * @public
   */
  privateRepository: boolean | undefined;

  /**
   * <p>Whether to enable issues for the GitHub repository.</p>
   * @public
   */
  issuesEnabled: boolean | undefined;

  /**
   * <p>The GitHub user's personal access token for the GitHub repository.</p>
   * @public
   */
  token: string | undefined;
}

/**
 * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the
 *       source code files provided with the project request are placed in the repository.</p>
 * @public
 */
export interface CodeDestination {
  /**
   * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided
   *       with the project request will be uploaded after project creation.</p>
   * @public
   */
  codeCommit?: CodeCommitCodeDestination;

  /**
   * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the
   *       project request will be uploaded after project creation.</p>
   * @public
   */
  gitHub?: GitHubCodeDestination;
}

/**
 * <p>The Amazon S3 location where the source code files provided with the project
 *       request are stored.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The Amazon S3 bucket name where the source code files provided with the project
   *       request are stored.</p>
   * @public
   */
  bucketName?: string;

  /**
   * <p>The Amazon S3 object key where the source code files provided with the project
   *       request are stored.</p>
   * @public
   */
  bucketKey?: string;
}

/**
 * <p>The location where the source code files provided with the project request are
 *       stored. AWS CodeStar retrieves the files during project creation.</p>
 * @public
 */
export interface CodeSource {
  /**
   * <p>Information about the Amazon S3 location where the source code files provided with the
   *       project request are stored. </p>
   * @public
   */
  s3: S3Location | undefined;
}

/**
 * <p>Location and destination information about the source code files provided with the
 *       project request. The source code is uploaded to the new project source repository after
 *       project creation.</p>
 * @public
 */
export interface Code {
  /**
   * <p>The location where the source code files provided with the project request are
   *       stored. AWS CodeStar retrieves the files during project creation.</p>
   * @public
   */
  source: CodeSource | undefined;

  /**
   * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the
   *       source code files provided with the project request are placed in the repository.</p>
   * @public
   */
  destination: CodeDestination | undefined;
}

/**
 * <p>The Amazon S3 location where the toolchain template file provided with the
 *       project request is stored. AWS CodeStar retrieves the file during project creation.</p>
 * @public
 */
export interface ToolchainSource {
  /**
   * <p>The Amazon S3 bucket where the toolchain template file provided with the project
   *       request is stored.</p>
   * @public
   */
  s3: S3Location | undefined;
}

/**
 * <p>The toolchain template file provided with the project request. AWS CodeStar uses
 *       the template to provision the toolchain stack in AWS CloudFormation.</p>
 * @public
 */
export interface Toolchain {
  /**
   * <p>The Amazon S3 location where the toolchain template file provided with the
   *       project request is stored. AWS CodeStar retrieves the file during project creation.</p>
   * @public
   */
  source: ToolchainSource | undefined;

  /**
   * <p>The service role ARN for AWS CodeStar to use for the toolchain template during stack
   *       provisioning.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The list of parameter overrides to be passed into the toolchain template during stack
   *       provisioning, if any.</p>
   * @public
   */
  stackParameters?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * <p>The display name for the project to be created in AWS CodeStar.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the project to be created in AWS CodeStar.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The description of the project, if any.</p>
   * @public
   */
  description?: string;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       creation. This token can be used to repeat the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>A list of the Code objects submitted with the project request. If this
   *       parameter is specified, the request must also include the toolchain parameter.</p>
   * @public
   */
  sourceCode?: Code[];

  /**
   * <p>The name of the toolchain template file submitted with the project request. If
   *       this parameter is specified, the request must also include the sourceCode parameter.</p>
   * @public
   */
  toolchain?: Toolchain;

  /**
   * <p>The tags created for the project.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateProjectResult {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created project.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       creation.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  projectTemplateId?: string;
}

/**
 * <p>An AWS CodeStar project with the same ID already exists in this region for the AWS account.
 *       AWS CodeStar project IDs must be unique within a region for the AWS account.</p>
 * @public
 */
export class ProjectAlreadyExistsException extends __BaseException {
  readonly name: "ProjectAlreadyExistsException" = "ProjectAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProjectAlreadyExistsException, __BaseException>) {
    super({
      name: "ProjectAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProjectAlreadyExistsException.prototype);
  }
}

/**
 * <p>The project creation request was valid, but a nonspecific exception or error occurred
 *       during project creation. The project could not be created in AWS CodeStar.</p>
 * @public
 */
export class ProjectCreationFailedException extends __BaseException {
  readonly name: "ProjectCreationFailedException" = "ProjectCreationFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProjectCreationFailedException, __BaseException>) {
    super({
      name: "ProjectCreationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProjectCreationFailedException.prototype);
  }
}

/**
 * @public
 */
export interface CreateUserProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   * @public
   */
  userArn: string | undefined;

  /**
   * <p>The name that will be displayed as the friendly name for the user in AWS CodeStar. </p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The email address that will be displayed as part of the user's profile in
   *       AWS CodeStar.</p>
   * @public
   */
  emailAddress: string | undefined;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
   *       user remote access to project resources, this public key will be used along with the user's
   *       private key for SSH access.</p>
   * @public
   */
  sshPublicKey?: string;
}

/**
 * @public
 */
export interface CreateUserProfileResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   * @public
   */
  userArn: string | undefined;

  /**
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>The email address that is displayed as part of the user's profile in AWS CodeStar.</p>
   * @public
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the
   *       public/private keypair the user can use to access project resources if a project owner allows
   *       the user remote access to those resources.</p>
   * @public
   */
  sshPublicKey?: string;

  /**
   * <p>The date the user profile was created, in timestamp format.</p>
   * @public
   */
  createdTimestamp?: Date;

  /**
   * <p>The date the user profile was last modified, in timestamp format.</p>
   * @public
   */
  lastModifiedTimestamp?: Date;
}

/**
 * <p>A user profile with that name already exists in this region for the AWS account. AWS
 *       CodeStar user profile names must be unique within a region for the AWS account. </p>
 * @public
 */
export class UserProfileAlreadyExistsException extends __BaseException {
  readonly name: "UserProfileAlreadyExistsException" = "UserProfileAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserProfileAlreadyExistsException, __BaseException>) {
    super({
      name: "UserProfileAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserProfileAlreadyExistsException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * <p>The ID of the project to be deleted in AWS CodeStar.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       deletion. This token can be used to repeat the request. </p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>Whether to send a delete request for the primary stack in AWS CloudFormation originally
   *       used to generate the project and its resources. This option will delete all AWS resources for
   *       the project (except for any buckets in Amazon S3) as well as deleting the project itself.
   *       Recommended for most use cases.</p>
   * @public
   */
  deleteStack?: boolean;
}

/**
 * @public
 */
export interface DeleteProjectResult {
  /**
   * <p>The ID of the primary stack in AWS CloudFormation that will be deleted as part of
   *       deleting the project and its resources.</p>
   * @public
   */
  stackId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted project.</p>
   * @public
   */
  projectArn?: string;
}

/**
 * @public
 */
export interface DeleteUserProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user to delete from AWS CodeStar.</p>
   * @public
   */
  userArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserProfileResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the user deleted from AWS CodeStar.</p>
   * @public
   */
  userArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectRequest {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>An indication of whether a project creation or deletion is failed or
 *       successful.</p>
 * @public
 */
export interface ProjectStatus {
  /**
   * <p>The phase of completion for a project creation or deletion.</p>
   * @public
   */
  state: string | undefined;

  /**
   * <p>In the case of a project creation or deletion failure, a reason for the
   *       failure.</p>
   * @public
   */
  reason?: string;
}

/**
 * @public
 */
export interface DescribeProjectResult {
  /**
   * <p>The display name for the project.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ID of the project.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the project.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The description of the project, if any.</p>
   * @public
   */
  description?: string;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       creation. </p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>The date and time the project was created, in timestamp format.</p>
   * @public
   */
  createdTimeStamp?: Date;

  /**
   * <p>The ID of the primary stack in AWS CloudFormation used to generate resources for the
   *       project.</p>
   * @public
   */
  stackId?: string;

  /**
   * <p>The ID for the AWS CodeStar project template used to create the project.</p>
   * @public
   */
  projectTemplateId?: string;

  /**
   * <p>The project creation or deletion status.</p>
   * @public
   */
  status?: ProjectStatus;
}

/**
 * @public
 */
export interface DescribeUserProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   * @public
   */
  userArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserProfileResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   * @public
   */
  userArn: string | undefined;

  /**
   * <p>The display name shown for the user in AWS CodeStar projects. For example, this could be set
   *       to both first and last name ("Mary Major") or a single name ("Mary"). The display name is also
   *       used to generate the initial icon associated with the user in AWS CodeStar projects. If spaces are
   *       included in the display name, the first character that appears after the space will be used as
   *       the second character in the user initial icon. The initial icon displays a maximum of two
   *       characters, so a display name with more than one space (for example "Mary Jane Major") would
   *       generate an initial icon using the first character and the first character after the space
   *       ("MJ", not "MM").</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>The email address for the user. Optional.</p>
   * @public
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user. This SSH public key is associated with the
   *       user profile, and can be used in conjunction with the associated private key for access to
   *       project resources, such as Amazon EC2 instances, if a project owner grants remote access to
   *       those resources.</p>
   * @public
   */
  sshPublicKey?: string;

  /**
   * <p>The date and time when the user profile was created in AWS CodeStar, in timestamp
   *       format.</p>
   * @public
   */
  createdTimestamp: Date | undefined;

  /**
   * <p>The date and time when the user profile was last modified, in timestamp
   *       format.</p>
   * @public
   */
  lastModifiedTimestamp: Date | undefined;
}

/**
 * <p>The user profile was not found.</p>
 * @public
 */
export class UserProfileNotFoundException extends __BaseException {
  readonly name: "UserProfileNotFoundException" = "UserProfileNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserProfileNotFoundException, __BaseException>) {
    super({
      name: "UserProfileNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserProfileNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DisassociateTeamMemberRequest {
  /**
   * <p>The ID of the AWS CodeStar project from which you want to remove a team member.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM user or group whom you want to remove from
   *       the project.</p>
   * @public
   */
  userArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTeamMemberResult {}

/**
 * <p>The next token is not valid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * <p>The continuation token to be used to return the next set of results, if the results
   *       cannot be returned in one response.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum amount of data that can be contained in a single set of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Information about the metadata for a project.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  projectArn?: string;
}

/**
 * @public
 */
export interface ListProjectsResult {
  /**
   * <p>A list of projects.</p>
   * @public
   */
  projects: ProjectSummary[] | undefined;

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListResourcesRequest {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum amount of data that can be contained in a single set of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Information about a resource for a project.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesResult {
  /**
   * <p>An array of resources associated with the project. </p>
   * @public
   */
  resources?: Resource[];

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForProjectRequest {
  /**
   * <p>The ID of the project to get tags for.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTagsForProjectResult {
  /**
   * <p>The tags for the project.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTeamMembersRequest {
  /**
   * <p>The ID of the project for which you want to list team members.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of team members you want returned in a response.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Information about a team member in a project.</p>
 * @public
 */
export interface TeamMember {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   * @public
   */
  userArn: string | undefined;

  /**
   * <p>The role assigned to the user in the project. Project roles have different levels of
   *       access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with
   *         Teams</a> in the <i>AWS CodeStar User Guide</i>. </p>
   * @public
   */
  projectRole: string | undefined;

  /**
   * <p>Whether the user is allowed to remotely access project resources using an SSH
   *       public/private key pair.</p>
   * @public
   */
  remoteAccessAllowed?: boolean;
}

/**
 * @public
 */
export interface ListTeamMembersResult {
  /**
   * <p>A list of team member objects for the project.</p>
   * @public
   */
  teamMembers: TeamMember[] | undefined;

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListUserProfilesRequest {
  /**
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in a response.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Information about a user's profile in AWS CodeStar.</p>
 * @public
 */
export interface UserProfileSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   * @public
   */
  userArn?: string;

  /**
   * <p>The display name of a user in AWS CodeStar. For example, this could be set to both first and
   *       last name ("Mary Major") or a single name ("Mary"). The display name is also used to generate
   *       the initial icon associated with the user in AWS CodeStar projects. If spaces are included in the
   *       display name, the first character that appears after the space will be used as the second
   *       character in the user initial icon. The initial icon displays a maximum of two characters, so
   *       a display name with more than one space (for example "Mary Jane Major") would generate an
   *       initial icon using the first character and the first character after the space ("MJ", not
   *       "MM").</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>The email address associated with the user.</p>
   * @public
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
   *       user remote access to project resources, this public key will be used along with the user's
   *       private key for SSH access.</p>
   * @public
   */
  sshPublicKey?: string;
}

/**
 * @public
 */
export interface ListUserProfilesResult {
  /**
   * <p>All the user profiles configured in AWS CodeStar for an AWS account.</p>
   * @public
   */
  userProfiles: UserProfileSummary[] | undefined;

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagProjectRequest {
  /**
   * <p>The ID of the project you want to add a tag to.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The tags you want to add to the project.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagProjectResult {
  /**
   * <p>The tags for the project.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UntagProjectRequest {
  /**
   * <p>The ID of the project to remove tags from.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The tags to remove from the project.</p>
   * @public
   */
  tags: string[] | undefined;
}

/**
 * @public
 */
export interface UntagProjectResult {}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * <p>The ID of the project you want to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project you want to update.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the project, if any.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateProjectResult {}

/**
 * <p>The specified team member was not found.</p>
 * @public
 */
export class TeamMemberNotFoundException extends __BaseException {
  readonly name: "TeamMemberNotFoundException" = "TeamMemberNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TeamMemberNotFoundException, __BaseException>) {
    super({
      name: "TeamMemberNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TeamMemberNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateTeamMemberRequest {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user for whom you want to change team membership
   *       attributes.</p>
   * @public
   */
  userArn: string | undefined;

  /**
   * <p>The role assigned to the user in the project. Project roles have different levels of
   *       access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with
   *         Teams</a> in the <i>AWS CodeStar User Guide</i>.</p>
   * @public
   */
  projectRole?: string;

  /**
   * <p>Whether a team member is allowed to remotely access project resources using the SSH
   *       public key associated with the user's profile. Even if this is set to True, the user must
   *       associate a public key with their profile before the user can access resources.</p>
   * @public
   */
  remoteAccessAllowed?: boolean;
}

/**
 * @public
 */
export interface UpdateTeamMemberResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the user whose team membership attributes were
   *       updated.</p>
   * @public
   */
  userArn?: string;

  /**
   * <p>The project role granted to the user.</p>
   * @public
   */
  projectRole?: string;

  /**
   * <p>Whether a team member is allowed to remotely access project resources using the SSH
   *       public key associated with the user's profile.</p>
   * @public
   */
  remoteAccessAllowed?: boolean;
}

/**
 * @public
 */
export interface UpdateUserProfileRequest {
  /**
   * <p>The name that will be displayed as the friendly name for the user in AWS
   *       CodeStar.</p>
   * @public
   */
  userArn: string | undefined;

  /**
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>The email address that is displayed as part of the user's profile in AWS
   *       CodeStar.</p>
   * @public
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
   *       user remote access to project resources, this public key will be used along with the user's
   *       private key for SSH access.</p>
   * @public
   */
  sshPublicKey?: string;
}

/**
 * @public
 */
export interface UpdateUserProfileResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   * @public
   */
  userArn: string | undefined;

  /**
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>The email address that is displayed as part of the user's profile in AWS
   *       CodeStar.</p>
   * @public
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the
   *       public/private keypair the user can use to access project resources if a project owner allows
   *       the user remote access to those resources.</p>
   * @public
   */
  sshPublicKey?: string;

  /**
   * <p>The date the user profile was created, in timestamp format.</p>
   * @public
   */
  createdTimestamp?: Date;

  /**
   * <p>The date the user profile was last modified, in timestamp format.</p>
   * @public
   */
  lastModifiedTimestamp?: Date;
}

/**
 * @internal
 */
export const GitHubCodeDestinationFilterSensitiveLog = (obj: GitHubCodeDestination): any => ({
  ...obj,
  ...(obj.token && { token: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CodeDestinationFilterSensitiveLog = (obj: CodeDestination): any => ({
  ...obj,
  ...(obj.gitHub && { gitHub: GitHubCodeDestinationFilterSensitiveLog(obj.gitHub) }),
});

/**
 * @internal
 */
export const CodeFilterSensitiveLog = (obj: Code): any => ({
  ...obj,
  ...(obj.destination && { destination: CodeDestinationFilterSensitiveLog(obj.destination) }),
});

/**
 * @internal
 */
export const ToolchainFilterSensitiveLog = (obj: Toolchain): any => ({
  ...obj,
  ...(obj.stackParameters && { stackParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProjectRequestFilterSensitiveLog = (obj: CreateProjectRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.sourceCode && { sourceCode: obj.sourceCode.map((item) => CodeFilterSensitiveLog(item)) }),
  ...(obj.toolchain && { toolchain: ToolchainFilterSensitiveLog(obj.toolchain) }),
});

/**
 * @internal
 */
export const CreateUserProfileRequestFilterSensitiveLog = (obj: CreateUserProfileRequest): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUserProfileResultFilterSensitiveLog = (obj: CreateUserProfileResult): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeProjectResultFilterSensitiveLog = (obj: DescribeProjectResult): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeUserProfileResultFilterSensitiveLog = (obj: DescribeUserProfileResult): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserProfileSummaryFilterSensitiveLog = (obj: UserProfileSummary): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListUserProfilesResultFilterSensitiveLog = (obj: ListUserProfilesResult): any => ({
  ...obj,
  ...(obj.userProfiles && { userProfiles: obj.userProfiles.map((item) => UserProfileSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateProjectRequestFilterSensitiveLog = (obj: UpdateProjectRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserProfileRequestFilterSensitiveLog = (obj: UpdateUserProfileRequest): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserProfileResultFilterSensitiveLog = (obj: UpdateUserProfileResult): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});
