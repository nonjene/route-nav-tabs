import React from 'react';
import PropTypes from 'prop-types';

export default class ShowAWhile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: false
    }
  }

  componentDidMount() {
    const { duration } = this.props;
  }
  componentWillReceiveProps({duration}){
    if(duration){
      this.timeout = setTimeout(() => {
        this.timeout = null;
        this.setState({
          timeout: true
        });
      }, duration);
    }else{
      this.setState({
        timeout: false
      });
    }
  }
  componentWillUnmount(){
    this.timeout && clearTimeout(this.timeout);
  }
  render() {
    const { component: Component } = this.props;
    if(!Component) return null;
    return !this.state.timeout ? Component:null;
  }
}
