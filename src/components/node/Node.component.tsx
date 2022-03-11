import React from 'react';
import './Node.component.css';
import sourcingImage from '../../images/sourcing.png';
import manipulatorImage from '../../images/truck.png';
import predictorImage from '../../images/predicting.png';
import editorImage from '../../images/implementation.png';
import writerImage from '../../images/writer.png';
import {NodeModel} from "../../models/Node.model";
import {EDITOR, MANIPULATOR, PREDICTOR, SOURCE, WRITER} from "./const";

interface NodeComponentProps {
    node: NodeModel
}

function NodeComponent({node}: NodeComponentProps) {

    const getImage = (name: string) => {
        switch (name) {
            case SOURCE:
                return <img src={sourcingImage} className="node-image" alt="Source-Image"/>
            case MANIPULATOR:
                return <img src={manipulatorImage} className="node-image" alt="Manipulator-Image"/>
            case PREDICTOR:
                return <img src={predictorImage} className="node-image" alt="Predictor-Image"/>
            case EDITOR:
                return <img src={editorImage} className="node-image" alt="Editor-Image"/>
            case WRITER:
                return <img src={writerImage} className="node-image" alt="Writer-Image"/>
        }
    }

    return (
        <div className="node-container ">
            <h5>{node.description}</h5>
            {getImage(node.name)}
            <h6>{node.name}</h6>
        </div>
    )
}


export default NodeComponent;
