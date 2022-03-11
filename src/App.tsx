import React, {useEffect, useState} from 'react';
import './App.css';
import {NodeModel} from "./models/Node.model";
import {NodeService} from "./services/Node.service";
import NodeComponent from "./components/node/Node.component";
import {Autocomplete, TextField} from "@mui/material";

function App() {
    const [nodes, setNodes] = useState<NodeModel[]>([])
    const [allNodes, setAllNodes] = useState<NodeModel[]>([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setNodes(await NodeService.getDefaultNodes())
    }

    const handelInputChange = async (value: string) => {
        setAllNodes(await NodeService.getNodesWithName(value))
    }

    return (
        <div className="app">
            <div className="app-search">
                <Autocomplete
                    disablePortal
                    id="node-search"
                    options={allNodes}
                    getOptionLabel={(node) => node.name}
                    sx={{width: 300}}
                    onChange={(e, node) => {
                        const newNodes = [...nodes];
                        newNodes.push(node as NodeModel);
                        setNodes(newNodes);
                    }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            onChange={(e) => handelInputChange(e.target.value)}
                            label="Add new node..."/>}
                />
            </div>
            <div className="app-container">
                {
                    nodes?.map((node, index) => (<NodeComponent key={`node-${index}`} node={node}/>))
                }
            </div>
        </div>
    );
}

export default App;
