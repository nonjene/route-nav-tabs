import React from 'react';
import { Link } from 'react-router-dom';
export default class Content2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Content2 render.');
  }
  render() {
    return (
      <div>
        <p>Content2</p>
        <Link to="/content2/detail">check detail</Link>
      </div>
    );
  }
}
