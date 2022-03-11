import React, {useEffect, useState} from 'react';
import './App.css';
import {NodeModel} from "./models/Node.model";
import {NodeService} from "./services/Node.service";
import NodeComponent from "./components/node/Node.component";

function App() {
    const [nodes, setNodes] = useState<NodeModel[]>()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setNodes(await NodeService.getDefaultNodes())
    }

    return (
        <div className="App">
            {
                nodes?.map(node => (<NodeComponent node={node}/>))
            }
        </div>
    );
}

export default App;
