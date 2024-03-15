// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetRoutingControlStateCommand,
  GetRoutingControlStateCommandInput,
  GetRoutingControlStateCommandOutput,
} from "./commands/GetRoutingControlStateCommand";
import {
  ListRoutingControlsCommand,
  ListRoutingControlsCommandInput,
  ListRoutingControlsCommandOutput,
} from "./commands/ListRoutingControlsCommand";
import {
  UpdateRoutingControlStateCommand,
  UpdateRoutingControlStateCommandInput,
  UpdateRoutingControlStateCommandOutput,
} from "./commands/UpdateRoutingControlStateCommand";
import {
  UpdateRoutingControlStatesCommand,
  UpdateRoutingControlStatesCommandInput,
  UpdateRoutingControlStatesCommandOutput,
} from "./commands/UpdateRoutingControlStatesCommand";
import { Route53RecoveryClusterClient, Route53RecoveryClusterClientConfig } from "./Route53RecoveryClusterClient";

const commands = {
  GetRoutingControlStateCommand,
  ListRoutingControlsCommand,
  UpdateRoutingControlStateCommand,
  UpdateRoutingControlStatesCommand,
};

export interface Route53RecoveryCluster {
  /**
   * @see {@link GetRoutingControlStateCommand}
   */
  getRoutingControlState(
    args: GetRoutingControlStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRoutingControlStateCommandOutput>;
  getRoutingControlState(
    args: GetRoutingControlStateCommandInput,
    cb: (err: any, data?: GetRoutingControlStateCommandOutput) => void
  ): void;
  getRoutingControlState(
    args: GetRoutingControlStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoutingControlStateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoutingControlsCommand}
   */
  listRoutingControls(): Promise<ListRoutingControlsCommandOutput>;
  listRoutingControls(
    args: ListRoutingControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoutingControlsCommandOutput>;
  listRoutingControls(
    args: ListRoutingControlsCommandInput,
    cb: (err: any, data?: ListRoutingControlsCommandOutput) => void
  ): void;
  listRoutingControls(
    args: ListRoutingControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutingControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoutingControlStateCommand}
   */
  updateRoutingControlState(
    args: UpdateRoutingControlStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingControlStateCommandOutput>;
  updateRoutingControlState(
    args: UpdateRoutingControlStateCommandInput,
    cb: (err: any, data?: UpdateRoutingControlStateCommandOutput) => void
  ): void;
  updateRoutingControlState(
    args: UpdateRoutingControlStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingControlStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoutingControlStatesCommand}
   */
  updateRoutingControlStates(
    args: UpdateRoutingControlStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingControlStatesCommandOutput>;
  updateRoutingControlStates(
    args: UpdateRoutingControlStatesCommandInput,
    cb: (err: any, data?: UpdateRoutingControlStatesCommandOutput) => void
  ): void;
  updateRoutingControlStates(
    args: UpdateRoutingControlStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingControlStatesCommandOutput) => void
  ): void;
}

/**
 * <p>Welcome to the Routing Control (Recovery Cluster) API Reference Guide for Amazon Route 53 Application Recovery Controller.</p>
 *          <p>With Route 53 ARC, you can use routing control with extreme reliability to
 * 			recover applications by rerouting traffic across
 * 			Availability Zones or Amazon Web Services Regions. Routing controls are simple on/off switches hosted
 * 			on a highly available cluster in Route 53 ARC. A cluster provides a set of five redundant Regional endpoints against which you
 * 			can run API calls to get or update the state of routing controls. To implement failover, you set
 * 			one routing control to ON and another one to OFF, to reroute traffic from one Availability Zone or Amazon Web Services Region
 * 			to another. </p>
 *          <p>
 *             <i>Be aware that you must specify a Regional endpoint for a cluster when you work with API cluster operations
 * 				to get or update routing control states in Route 53 ARC.</i> In addition, you must specify the US West (Oregon) Region
 * 				for Route 53 ARC API calls. For example, use the parameter <code>--region us-west-2</code> with AWS CLI commands.
 * 				For more information, see
 * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.api.html">
 * 					Get and update routing control states using the API</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 *          <p>This API guide includes information about the API operations for how to get and update routing control states
 * 			in Route 53 ARC. To work with routing control in Route 53 ARC, you must first create the required components (clusters, control
 * 			panels, and routing controls) using the recovery cluster configuration API.</p>
 *          <p>For more information about working with routing control in Route 53 ARC, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create clusters, control panels, and routing controls by using API operations. For more information,
 * 					see the <a href="https://docs.aws.amazon.com/recovery-cluster/latest/api/">Recovery Control Configuration API Reference Guide for Amazon Route 53 Application Recovery Controller</a>.</p>
 *             </li>
 *             <li>
 *                <p>Learn about the components in recovery control, including clusters,
 * 				routing controls, and control panels, and how to work with Route 53 ARC in the Amazon Web Services console. For more
 * 				information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/introduction-components.html#introduction-components-routing">
 * 					Recovery control components</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 *             </li>
 *             <li>
 *                <p>Route 53 ARC also provides readiness checks that continually audit resources to help make sure that your
 * 					applications are scaled and ready to handle failover traffic. For more information about
 * 					the related API operations, see the <a href="https://docs.aws.amazon.com/recovery-readiness/latest/api/">Recovery Readiness API Reference Guide for Amazon Route 53 Application Recovery Controller</a>.</p>
 *             </li>
 *             <li>
 *                <p>For more information about creating resilient applications and preparing for
 * 					recovery readiness with Route 53 ARC, see the <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/">Amazon Route 53 Application Recovery Controller Developer Guide</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class Route53RecoveryCluster extends Route53RecoveryClusterClient implements Route53RecoveryCluster {}
createAggregatedClient(commands, Route53RecoveryCluster);
