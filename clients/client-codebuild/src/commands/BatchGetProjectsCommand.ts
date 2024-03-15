// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetProjectsInput, BatchGetProjectsOutput } from "../models/models_0";
import { de_BatchGetProjectsCommand, se_BatchGetProjectsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetProjectsCommand}.
 */
export interface BatchGetProjectsCommandInput extends BatchGetProjectsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetProjectsCommand}.
 */
export interface BatchGetProjectsCommandOutput extends BatchGetProjectsOutput, __MetadataBearer {}

/**
 * <p>Gets information about one or more build projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetProjectsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetProjectsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // BatchGetProjectsInput
 *   names: [ // ProjectNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetProjectsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetProjectsOutput
 * //   projects: [ // Projects
 * //     { // Project
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       source: { // ProjectSource
 * //         type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 * //         location: "STRING_VALUE",
 * //         gitCloneDepth: Number("int"),
 * //         gitSubmodulesConfig: { // GitSubmodulesConfig
 * //           fetchSubmodules: true || false, // required
 * //         },
 * //         buildspec: "STRING_VALUE",
 * //         auth: { // SourceAuth
 * //           type: "OAUTH", // required
 * //           resource: "STRING_VALUE",
 * //         },
 * //         reportBuildStatus: true || false,
 * //         buildStatusConfig: { // BuildStatusConfig
 * //           context: "STRING_VALUE",
 * //           targetUrl: "STRING_VALUE",
 * //         },
 * //         insecureSsl: true || false,
 * //         sourceIdentifier: "STRING_VALUE",
 * //       },
 * //       secondarySources: [ // ProjectSources
 * //         {
 * //           type: "CODECOMMIT" || "CODEPIPELINE" || "GITHUB" || "S3" || "BITBUCKET" || "GITHUB_ENTERPRISE" || "NO_SOURCE", // required
 * //           location: "STRING_VALUE",
 * //           gitCloneDepth: Number("int"),
 * //           gitSubmodulesConfig: {
 * //             fetchSubmodules: true || false, // required
 * //           },
 * //           buildspec: "STRING_VALUE",
 * //           auth: {
 * //             type: "OAUTH", // required
 * //             resource: "STRING_VALUE",
 * //           },
 * //           reportBuildStatus: true || false,
 * //           buildStatusConfig: {
 * //             context: "STRING_VALUE",
 * //             targetUrl: "STRING_VALUE",
 * //           },
 * //           insecureSsl: true || false,
 * //           sourceIdentifier: "STRING_VALUE",
 * //         },
 * //       ],
 * //       sourceVersion: "STRING_VALUE",
 * //       secondarySourceVersions: [ // ProjectSecondarySourceVersions
 * //         { // ProjectSourceVersion
 * //           sourceIdentifier: "STRING_VALUE", // required
 * //           sourceVersion: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       artifacts: { // ProjectArtifacts
 * //         type: "CODEPIPELINE" || "S3" || "NO_ARTIFACTS", // required
 * //         location: "STRING_VALUE",
 * //         path: "STRING_VALUE",
 * //         namespaceType: "NONE" || "BUILD_ID",
 * //         name: "STRING_VALUE",
 * //         packaging: "NONE" || "ZIP",
 * //         overrideArtifactName: true || false,
 * //         encryptionDisabled: true || false,
 * //         artifactIdentifier: "STRING_VALUE",
 * //         bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //       },
 * //       secondaryArtifacts: [ // ProjectArtifactsList
 * //         {
 * //           type: "CODEPIPELINE" || "S3" || "NO_ARTIFACTS", // required
 * //           location: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //           namespaceType: "NONE" || "BUILD_ID",
 * //           name: "STRING_VALUE",
 * //           packaging: "NONE" || "ZIP",
 * //           overrideArtifactName: true || false,
 * //           encryptionDisabled: true || false,
 * //           artifactIdentifier: "STRING_VALUE",
 * //           bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //         },
 * //       ],
 * //       cache: { // ProjectCache
 * //         type: "NO_CACHE" || "S3" || "LOCAL", // required
 * //         location: "STRING_VALUE",
 * //         modes: [ // ProjectCacheModes
 * //           "LOCAL_DOCKER_LAYER_CACHE" || "LOCAL_SOURCE_CACHE" || "LOCAL_CUSTOM_CACHE",
 * //         ],
 * //       },
 * //       environment: { // ProjectEnvironment
 * //         type: "WINDOWS_CONTAINER" || "LINUX_CONTAINER" || "LINUX_GPU_CONTAINER" || "ARM_CONTAINER" || "WINDOWS_SERVER_2019_CONTAINER" || "LINUX_LAMBDA_CONTAINER" || "ARM_LAMBDA_CONTAINER", // required
 * //         image: "STRING_VALUE", // required
 * //         computeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE" || "BUILD_GENERAL1_XLARGE" || "BUILD_GENERAL1_2XLARGE" || "BUILD_LAMBDA_1GB" || "BUILD_LAMBDA_2GB" || "BUILD_LAMBDA_4GB" || "BUILD_LAMBDA_8GB" || "BUILD_LAMBDA_10GB", // required
 * //         fleet: { // ProjectFleet
 * //           fleetArn: "STRING_VALUE",
 * //         },
 * //         environmentVariables: [ // EnvironmentVariables
 * //           { // EnvironmentVariable
 * //             name: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //             type: "PLAINTEXT" || "PARAMETER_STORE" || "SECRETS_MANAGER",
 * //           },
 * //         ],
 * //         privilegedMode: true || false,
 * //         certificate: "STRING_VALUE",
 * //         registryCredential: { // RegistryCredential
 * //           credential: "STRING_VALUE", // required
 * //           credentialProvider: "SECRETS_MANAGER", // required
 * //         },
 * //         imagePullCredentialsType: "CODEBUILD" || "SERVICE_ROLE",
 * //       },
 * //       serviceRole: "STRING_VALUE",
 * //       timeoutInMinutes: Number("int"),
 * //       queuedTimeoutInMinutes: Number("int"),
 * //       encryptionKey: "STRING_VALUE",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       created: new Date("TIMESTAMP"),
 * //       lastModified: new Date("TIMESTAMP"),
 * //       webhook: { // Webhook
 * //         url: "STRING_VALUE",
 * //         payloadUrl: "STRING_VALUE",
 * //         secret: "STRING_VALUE",
 * //         branchFilter: "STRING_VALUE",
 * //         filterGroups: [ // FilterGroups
 * //           [ // FilterGroup
 * //             { // WebhookFilter
 * //               type: "EVENT" || "BASE_REF" || "HEAD_REF" || "ACTOR_ACCOUNT_ID" || "FILE_PATH" || "COMMIT_MESSAGE", // required
 * //               pattern: "STRING_VALUE", // required
 * //               excludeMatchedPattern: true || false,
 * //             },
 * //           ],
 * //         ],
 * //         buildType: "BUILD" || "BUILD_BATCH",
 * //         lastModifiedSecret: new Date("TIMESTAMP"),
 * //       },
 * //       vpcConfig: { // VpcConfig
 * //         vpcId: "STRING_VALUE",
 * //         subnets: [ // Subnets
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroupIds: [ // SecurityGroupIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       badge: { // ProjectBadge
 * //         badgeEnabled: true || false,
 * //         badgeRequestUrl: "STRING_VALUE",
 * //       },
 * //       logsConfig: { // LogsConfig
 * //         cloudWatchLogs: { // CloudWatchLogsConfig
 * //           status: "ENABLED" || "DISABLED", // required
 * //           groupName: "STRING_VALUE",
 * //           streamName: "STRING_VALUE",
 * //         },
 * //         s3Logs: { // S3LogsConfig
 * //           status: "ENABLED" || "DISABLED", // required
 * //           location: "STRING_VALUE",
 * //           encryptionDisabled: true || false,
 * //           bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //         },
 * //       },
 * //       fileSystemLocations: [ // ProjectFileSystemLocations
 * //         { // ProjectFileSystemLocation
 * //           type: "EFS",
 * //           location: "STRING_VALUE",
 * //           mountPoint: "STRING_VALUE",
 * //           identifier: "STRING_VALUE",
 * //           mountOptions: "STRING_VALUE",
 * //         },
 * //       ],
 * //       buildBatchConfig: { // ProjectBuildBatchConfig
 * //         serviceRole: "STRING_VALUE",
 * //         combineArtifacts: true || false,
 * //         restrictions: { // BatchRestrictions
 * //           maximumBuildsAllowed: Number("int"),
 * //           computeTypesAllowed: [ // ComputeTypesAllowed
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         timeoutInMins: Number("int"),
 * //         batchReportMode: "REPORT_INDIVIDUAL_BUILDS" || "REPORT_AGGREGATED_BATCH",
 * //       },
 * //       concurrentBuildLimit: Number("int"),
 * //       projectVisibility: "PUBLIC_READ" || "PRIVATE",
 * //       publicProjectAlias: "STRING_VALUE",
 * //       resourceAccessRole: "STRING_VALUE",
 * //     },
 * //   ],
 * //   projectsNotFound: [ // ProjectNames
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetProjectsCommandInput - {@link BatchGetProjectsCommandInput}
 * @returns {@link BatchGetProjectsCommandOutput}
 * @see {@link BatchGetProjectsCommandInput} for command's `input` shape.
 * @see {@link BatchGetProjectsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 * @public
 */
export class BatchGetProjectsCommand extends $Command
  .classBuilder<
    BatchGetProjectsCommandInput,
    BatchGetProjectsCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "BatchGetProjects", {})
  .n("CodeBuildClient", "BatchGetProjectsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetProjectsCommand)
  .de(de_BatchGetProjectsCommand)
  .build() {}
