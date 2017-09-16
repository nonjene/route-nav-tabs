import React from 'react';

export default class Content1 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Content1 render.')
    }
    render() {
        return (
            <div>Content1</div>
        );
    }
}