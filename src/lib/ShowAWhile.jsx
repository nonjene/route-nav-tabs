import React from 'react';
import PropTypes from 'prop-types';

export default class ShowAWhile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
  }

  componentDidMount() {
    const { duration } = this.props;
    if(!duration){
      this.setState({
        showComponent: true
      });
    }
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
        showComponent: false
      });
    }, duration);
  }
  componentWillReceiveProps({ duration }) {
    if(duration === this.props.duration) return;
    
    if (duration) {
      if(!this.props.unmountWhenNotMatch) return;
      
      this.clearTimeout();
      this.setTimeoutDisappear(duration);
    } else {
      this.clearTimeout();
      this.setState({
        showComponent: true
      });
    }
  }
  componentWillUnmount() {
    this.timeoutID && clearTimeout(this.timeoutID);
  }
  render() {
    const { component } = this.props;
    if (!component) return null;
    return this.state.showComponent ? component : null;
  }
}
