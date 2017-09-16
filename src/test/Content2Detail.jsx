import React from 'react';

export default class Content2Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Content2Detail render.')
    }
    handleClick(e) {
      e.preventDefault();
      this.props.history.goBack();
    }
    render() {
        return (
            <div className={this.props.className}>
              <h3>content2 detail</h3>
              <p>{this.props.match && this.props.match.params.type}</p>
              <a href="#" onClick={this.handleClick.bind(this)}>go back</a>
            </div>
        );
    }
}