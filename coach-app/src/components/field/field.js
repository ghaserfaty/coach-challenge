import React from 'react';
import './field.css'
export default class Field extends React.Component {
    render() {
      return <div className='field'>
          <h1>Hello, {this.props.name}</h1>
      </div>;
    }
  }