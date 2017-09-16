import React from 'react';

export default class EarningDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('earning detail render.')
    }
    render() {
        return (
            <div>{this.props.match && this.props.match.params.type}</div>
        );
    }
}