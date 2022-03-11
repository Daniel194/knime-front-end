import React from 'react';
import {render, screen} from '@testing-library/react';
import NodeComponent from './Node.component';
import {SOURCE} from "./const";

test('render node', () => {
    const result = render(<NodeComponent node={
        {
            name: SOURCE,
            description: 'New Source'
        }
    }/>);
    const nodeContainer = result.container.querySelector('.node-container');
    const image = result.container.querySelector('.node-image');
    const nodeDescription = screen.getByText(/New Source/i);

    expect(nodeContainer).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(nodeDescription).toBeInTheDocument()
});
