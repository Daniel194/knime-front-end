import {NodeModel} from "../models/Node.model";

const NODES: NodeModel[] = [
    {
        name: 'Source',
        description: 'Data Generator'
    },
    {
        name: 'Manipulator',
        description: 'CASE Switch Data (Start)'
    },
    {
        name: 'Predictor',
        description: 'Cluster Assigner'
    },
    {
        name: 'Editor',
        description: 'Data Editor'
    },
    {
        name: 'Writer',
        description: 'Cluster Writer'
    }
]

export const NodeService = {
    getNodesWithName: (nameWith: string): Promise<NodeModel[]> => {
        return new Promise<NodeModel[]>((resolve, reject) => {
            if (!nameWith || nameWith.length == 0) {
                resolve([]);
            }

            const result = NODES.filter(node => node.name.toLowerCase().includes(nameWith.toLowerCase()));

            resolve(result);
        })
    },
    getDefaultNodes: (): Promise<NodeModel[]> => {
        return new Promise<NodeModel[]>((resolve, reject) => {
            resolve([NODES[0], NODES[1], NODES[2]]);
        })
    }
}
