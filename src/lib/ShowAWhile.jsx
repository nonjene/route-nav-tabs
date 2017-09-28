import React from 'react';
import PropTypes from 'prop-types';

export default class ShowAWhile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: false
    };
  }

  componentDidMount() {
    const { duration } = this.props;
  }
  clearTimeout(){
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
      this.timeoutID = null;
    }
  }
  setTimeoutDisappear(duration){
    this.timeoutID = setTimeout(() => {
      this.timeoutID = null;
      this.setState({
        timeout: true
      });
    }, duration);
  }
  componentWillReceiveProps({ duration }) {
    if(duration === this.props.duration) return;
    
    if (duration) {
      this.clearTimeout();
      this.setTimeoutDisappear(duration);
    } else {
      this.clearTimeout();
      this.setState({
        timeout: false
      });
    }
  }
  componentWillUnmount() {
    this.timeoutID && clearTimeout(this.timeoutID);
  }
  render() {
    const { component } = this.props;
    if (!component) return null;
    return !this.state.timeout ? component : null;
  }
}
