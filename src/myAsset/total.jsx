import React from 'react';

export default class Total extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillEnter(callback) {
        console.log('total componentWillEnter.');
        setTimeout(callback, 1000);
    }

    componentWillLeave(callback) {
        console.log('total componentWillLeave.');
        setTimeout(callback, 1000);
    }
    componentDidMount() {
        console.log('total render.')
    }
    render() {
        return (
            <div>total</div>
        );
    }
}