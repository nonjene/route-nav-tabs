import React from 'react';

export default class Earnings extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillEnter(callback) {
        console.log('earning componentWillEnter.');
        setTimeout(callback, 1000);
    }

    componentWillLeave(callback) {
        console.log('earning componentWillLeave.');
        setTimeout(callback, 1000);
    }
    componentDidMount(){
        console.log('earning render.')
    }
    render() {
        return (
            <div>sss</div>
        );
    }
}